import { PermissionNode, PermissionFlatNode } from './../../../../shared/models/permission';
import { TranslateService } from '@ngx-translate/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/core/services/role.service';
import { Role } from 'src/app/shared/models/role';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-role-permission-form',
  templateUrl: './role-permission-form.component.html',
  styleUrls: ['./role-permission-form.component.scss']
})
export class RolePermissionFormComponent implements OnInit {
  isLoading = false;
  allPermissions: any[] = [];

  title = 'Permission'
  subtitle = 'Update role permission here.'


  private _transformer = (node: PermissionNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      defaultChecked: node.defaultChecked
    };
  };

  treeControl = new FlatTreeControl<PermissionFlatNode>
  (
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  checklistSelection = new SelectionModel<PermissionFlatNode>(true);

  getLevel = (node: PermissionFlatNode) => node.level;
  isExpandable = (node: PermissionFlatNode) => node.expandable;
  getChildren = (node: PermissionNode): PermissionNode[] => node.children;
  hasChild = (_: number, _nodeData: PermissionFlatNode) => _nodeData.expandable;
  hasNoContent = (_: number, _nodeData: PermissionFlatNode) => _nodeData.name === '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Role,
    private dialogRef: MatDialog,
    private translate: TranslateService,
    public roleService: RoleService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPermissions();
  }

  getPermissions(): void {
    this.isLoading = true;
    this.roleService.getRolePermissionsByRoleId(this.data.id).subscribe((response: any) => {
      const rolePermissions = response.permissions;
      this.roleService.getAllPermissions().subscribe((permissions: string[]) => {
        permissions.forEach(permission => {
          this.allPermissions.push({name: permission, defaultChecked: rolePermissions.includes(permission) ? true : false });
        });
        var nodePermissionData: PermissionNode[] = [];
        nodePermissionData.push({name: 'All Permission', children: this.allPermissions, defaultChecked: this.allPermissions.every(permission => permission.defaultChecked === true)});
        this.dataSource.data = nodePermissionData;

        const nodes = this.treeControl.dataNodes;
        nodes.forEach(node => {
          if(node.defaultChecked) this.checklistSelection.toggle(node);
        });
        this.isLoading = false;
      })
    });
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: PermissionFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }
  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: PermissionFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }
  /** Toggle the permission item selection. Select/deselect all the descendants node */
  permissionSelectionToggle(node: PermissionFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }
  /** Toggle a leaf permission item selection. Check all the parents to see if they changed */
  permissionLeafSelectionToggle(node: PermissionFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }
  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: PermissionFlatNode): void {
    let parent: PermissionFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }
  /** Check root node defaultChecked state and change it accordingly */
  checkRootNodeSelection(node: PermissionFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }
  /* Get the parent node of a node */
  getParentNode(node: PermissionFlatNode): PermissionFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  getBadgeValue = () => this.checklistSelection.selected.filter(x => x.name !== 'All Permission').length + "/" + this.allPermissions.length;


  submitRolePermission(): void{
    // console.log(this.checklistSelection.selected.filter(x => x.name !== 'All Permission').map(x => x.name));
    this.roleService.updateRolePermissions({roleId: this.data.id, permissions: this.checklistSelection.selected.filter(x => x.name !== 'All Permission').map(x => x.name)}).subscribe((permission) => {
      // this.toastr.success(permission.messages[0]);
      this.toastr.success(this.translate.instant('common.entityUpdated', {entity: 'Role'}));
      this.dialogRef.closeAll();
    });
  }
}
