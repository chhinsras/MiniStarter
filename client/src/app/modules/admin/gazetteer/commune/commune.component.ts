import { DeleteDialogComponent } from './../../../../shared/components/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { District, Commune } from './../../../../shared/models/gazetteer';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MetaData } from 'src/app/shared/models/pagination';
import { MatTableDataSource } from '@angular/material/table';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommuneFormComponent } from '../commune-form/commune-form.component';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss']
})
export class CommuneComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  districtCode: number;

  items = new MatTableDataSource<Commune>();
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
    this.districtCode = Number(this.route.snapshot.paramMap.get('districtCode'));
    if (this.districtCode) this.getItems();
    // this.gazetteerService.getStats().subscribe(response => this.gazetteerStats = response);

  }

  getItems() {
    this.gazetteerService.getCommunesByDistrict(this.districtCode).subscribe((result) => {
      this.items = new MatTableDataSource<Commune>(result);
      this.items.paginator = this.paginator;
      this.items.sort = this.sort;
    });
  }

  openForm(commune?: Commune): void {
    if (commune == undefined) commune = { type: null, nameKH: null, nameEN: null, code: null,  districtCode: this.districtCode}
    const dialogRef = this.dialog.open(CommuneFormComponent, {
      data: commune,
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
      data: 'Do you confirm the removal of this commune?',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gazetteerService.deleteCommune(code).subscribe(response => {
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
