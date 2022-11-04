import { ToastrService } from 'ngx-toastr';
import { DeleteDialogComponent } from './../../../../shared/components/delete-dialog/delete-dialog.component';
import { District } from './../../../../shared/models/gazetteer';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MetaData } from 'src/app/shared/models/pagination';
import { MatTableDataSource } from '@angular/material/table';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DistrictFormComponent } from '../district-form/district-form.component';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  provinceCode: number;

  items = new MatTableDataSource<District>();
  metaData: MetaData;
  columns: string[] = ['type', 'code', 'nameKH', 'nameEN', 'action'];

  searchString: string;

  ngAfterViewInit() {
    this.items.paginator = this.paginator;
    this.items.sort = this.sort;
  }

  constructor(private gazetteerService: GazetteerService, public dialog: MatDialog, private toastr: ToastrService,
    private route:ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.provinceCode = Number(this.route.snapshot.paramMap.get('provinceCode'));
    if (this.provinceCode) this.getItems();
    // this.gazetteerService.getStats().subscribe(response => this.gazetteerStats = response);

  }

  getItems() {
    this.gazetteerService.getDistrictsByProvince(this.provinceCode).subscribe((result) => {
      this.items = new MatTableDataSource<District>(result);
      this.items.paginator = this.paginator;
      this.items.sort = this.sort;
    });
  }

  openForm(district?: District): void {
    if (district == undefined) district = { type: null, nameKH: null, nameEN: null, code: null,  provinceCode: this.provinceCode}
    const dialogRef = this.dialog.open(DistrictFormComponent, {
      data: district,
      width: '50vw',
      panelClass: 'mat-dialog-container-no-padding'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getItems();
      }
    });
  }

  onDelete(code: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: 'Do you confirm the removal of this district?',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gazetteerService.deleteDistrict(code).subscribe(response => {
          this.getItems();
          this.toastr.success("Sucessfully")
        }, error => console.log(error));
      }
    });
  }
  onReload = () => this.getItems();
  onSearch() {}
  onSort($event) {}

}
