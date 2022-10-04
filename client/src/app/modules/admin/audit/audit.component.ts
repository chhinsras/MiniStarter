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
  audits: Audit[];
  metaData: MetaData;
  auditColumns: TableColumn[];
  auditParams = new AuditParams();
  dataSource = new MatTableDataSource<Audit>([]);
  searchString: string;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private auditService: AuditService, private datePipe: DatePipe, public dialog: MatDialog) {
    this.auditParams = this.auditService.getAuditParams();
  }

  ngOnInit(): void {
    this.getAudits();
    this.initColumns();
  }

  initColumns(): void {
    this.auditColumns = [
      { name: 'Id', dataKey: 'id', isSortable: true, isShowable: true },
      { name: 'User Id', dataKey: 'userId', isSortable: true, isShowable: true },
      { name: 'Table', dataKey: 'tableName', isSortable: true, isShowable: true },
      { name: 'Timestamp', dataKey: 'timestamp', isSortable: true, isShowable: true },
      { name: 'Primary Key', dataKey: 'primaryKey', isSortable: true, isShowable: true },
      { name: 'Action', dataKey: 'action', position: 'right' },
    ];
  }

  public reload(): void {
      this.getAudits();
  }

  getAudits(): void {
    this.auditService.getAudits().subscribe((result) => {
      this.audits = result.items;
      this.metaData = result.metaData;
      this.dataSource.data = this.audits.filter(data => (data.timestamp = this.datePipe.transform(data.timestamp, 'MM/dd/yyyy hh:mm:ss a')));
    });
  }

  pageChanged(event: PaginatedFilter): void {
    this.auditParams.pageNumber = event.pageNumber;
    this.auditParams.pageSize = event.pageSize;
    this.auditService.setAuditParams(this.auditParams);
    this.getAudits();
  }

  doSort(sort: Sort): void {
    this.auditParams.orderBy = sort.active + ' ' + sort.direction;
    this.getAudits();
  }

  public filter($event: string): void {

    this.auditParams.searchString = $event.trim().toLocaleLowerCase();
    this.auditParams.pageNumber = 0;
    this.auditParams.pageSize = 0;
    this.getAudits();
  }

  viewDetails(log?: Audit): void {
    const dialogRef = this.dialog.open(AuditLogDetailsComponent, {
      data: log
    });
  }

}
