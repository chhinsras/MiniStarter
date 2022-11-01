import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { Province } from 'src/app/shared/models/gazetteer';
import { MetaData } from 'src/app/shared/models/pagination';

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

  constructor(private gazetteerService: GazetteerService, public dialog: MatDialog,
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

  onAdd() {}
  onView($event) {

  }
  onEdit($event) {}
  onDelete($event) {}
  onReload() {}
  onFilter() {

  }
  onSearch() {}
  onSort($event) {}

}
