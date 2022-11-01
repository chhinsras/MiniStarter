import { Village } from './../../../../shared/models/gazetteer';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MetaData } from 'src/app/shared/models/pagination';
import { MatTableDataSource } from '@angular/material/table';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.scss']
})
export class VillageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  communeCode: number;

  items = new MatTableDataSource<Village>();
  metaData: MetaData;
  columns: string[] = ['type', 'code', 'nameKH', 'nameEN', 'action'];

  searchString: string;

  ngAfterViewInit() {
    this.items.paginator = this.paginator;
    this.items.sort = this.sort;
  }

  constructor(private gazetteerService: GazetteerService, public dialog: MatDialog,
    private route:ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.communeCode = Number(this.route.snapshot.paramMap.get('communeCode'));
    if (this.communeCode) this.getItems();
    // this.gazetteerService.getStats().subscribe(response => this.gazetteerStats = response);

  }

  getItems() {
    this.gazetteerService.getVillagesByDistrict(this.communeCode).subscribe((result) => {
      this.items = new MatTableDataSource<Village>(result);
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
  onSearch() {}
  onSort($event) {}
}
