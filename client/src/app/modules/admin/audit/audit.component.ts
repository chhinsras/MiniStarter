import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuditService } from 'src/app/core/services/audit.service';
import { TableColumn } from 'src/app/shared/components/table/table-column';
import { Audit, AuditParams } from 'src/app/shared/models/audit';
import { MetaData, PaginatedFilter } from 'src/app/shared/models/pagination';
import { AuditLogDetailsComponent } from './audit-log-details/audit-log-details.component';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  items: Audit[];
  metaData: MetaData;
  columns: TableColumn[];
  params = new AuditParams();
  dataSource = new MatTableDataSource<Audit>([]);
  searchString: string;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private auditService: AuditService, private datePipe: DatePipe, public dialog: MatDialog) {
    this.params = this.auditService.getParams();
  }

  ngOnInit(): void {
    this.getAudits();
    this.initColumns();
  }

  initColumns(): void {
    this.columns = [
      { name: 'Id', dataKey: 'id', isSortable: true, isShowable: true },
      { name: 'User Id', dataKey: 'userId', isSortable: true, isShowable: true },
      { name: 'Table', dataKey: 'tableName', isSortable: true, isShowable: true },
      { name: 'Timestamp', dataKey: 'timeStamp', isSortable: true, isShowable: true },
      { name: 'Primary Key', dataKey: 'primaryKey', isSortable: true, isShowable: true },
      { name: 'Action', dataKey: 'action', position: 'right' },
    ];
  }

  getAudits(): void {
    this.auditService.setParams(this.params);
    this.auditService.getPaged().subscribe((result) => {
      this.items = result.items;
      this.metaData = result.metaData;
      this.dataSource.data = this.items.filter(data => (data.timeStamp = this.datePipe.transform(data.timeStamp, 'MM/dd/yyyy hh:mm:ss a')));
    });
  }

  pageChanged(event: PaginatedFilter): void {
    this.params.pageNumber = event.pageNumber;
    this.params.pageSize = event.pageSize;
    this.getAudits();
  }


  reload = (): void => this.getAudits();

  doSort(sort: Sort): void {
    this.params.orderBy = sort.active + ' ' + sort.direction;
    this.getAudits();
  }

  public filter($event: string): void {
    this.params.searchString = $event.trim().toLocaleLowerCase();
    this.params.pageNumber = 0;
    this.params.pageSize = 0;
    this.getAudits();
  }

  viewDetails(log?: Audit): void {
    const dialogRef = this.dialog.open(AuditLogDetailsComponent, {
      data: log
    });
  }

}
