import { ToastrService } from 'ngx-toastr';
import { DeleteDialogComponent } from './../../../shared/components/delete-dialog/delete-dialog.component';
import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { Province } from 'src/app/shared/models/gazetteer';
import { MetaData } from 'src/app/shared/models/pagination';
import { ProvinceFormComponent } from './province-form/province-form.component';

@Component({
  selector: 'app-gazetteer',
  templateUrl: './gazetteer.component.html',
  styleUrls: ['./gazetteer.component.scss']
})

export class GazetteerComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  items = new MatTableDataSource<Province>();
  metaData: MetaData;
  columns: string[] = ['type', 'code', 'nameKH', 'nameEN', 'action'];

  searchString: string;
  isOpen = false;

  gazetteerStats: any;

  ngAfterViewInit() {
    this.items.paginator = this.paginator;
    this.items.sort = this.sort;
  }

  constructor(private gazetteerService: GazetteerService, public dialog: MatDialog, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getItems();
    this.gazetteerService.getStats().subscribe(response => this.gazetteerStats = response);

  }

  getItems() {
    this.gazetteerService.getAllProvinces().subscribe((result) => {
      this.items = new MatTableDataSource<Province>(result);
      this.items.paginator = this.paginator;
      this.items.sort = this.sort;
    });
  }

  openForm(province?: Province): void {
    const dialogRef = this.dialog.open(ProvinceFormComponent, {
      data: province,
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
      data: 'Do you confirm the removal of this province?',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gazetteerService.deleteProvince(code).subscribe(response => {
          this.getItems();
          this.toastr.success("Sucessfully")
        }, error => console.log(error));
      }
    });
  }
  onReload = () => this.getItems();
  onFilter() {

  }
  onSearch() {}
  onSort($event) {}

}
