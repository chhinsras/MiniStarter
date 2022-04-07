import { ToastrService } from 'ngx-toastr';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TableColumn } from './table-column';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CustomAction } from './custom-action';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { PaginatedFilter } from '../../models/pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild('TABLE') table: ElementRef;
  @ViewChild('htmlData') htmlData: ElementRef;
  copyToClipboard: string;

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @Input() customActionOneData: CustomAction;
  @Input() customActionData: CustomAction;
  searchString: string;
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Output() onPageChanged = new EventEmitter<PaginatedFilter>();

  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';

  @Input() isSortable = false;
  @Input() columns: TableColumn[];

  @Input() set data(data: any[]) {
    this.setTableDataSource(data);
  }

  @Input() enablePrint: boolean = false;
  @Input() enableExportPDF: boolean = false;
  @Input() enableExportExcel: boolean = false;
  @Input() enableExportCSV: boolean = false;
  @Input() enableCopyToClipboard: boolean = false;
  @Input() enableShowColumns: boolean = false;

  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onReload: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSort: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Output() onCustomActionOne: EventEmitter<any> = new EventEmitter();
  @Output() onCustomAction: EventEmitter<any> = new EventEmitter();
  @Output() onCreateForm: EventEmitter<any> = new EventEmitter();
  @Output() onEditForm: EventEmitter<any> = new EventEmitter();
  @Output() onView: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private toastrService: ToastrService) { }
  gold: EventEmitter<{ data: CustomAction }>[];
  ngOnInit(): void {
    const columnNames = this.columns.map(
      (tableColumn: TableColumn) => tableColumn.name
    );
    this.displayedColumns = columnNames;
  }

  ngAfterViewInit(): void {
    this.tableDataSource.sort = this.matSort;
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
  }
  openCustomActionOne($event: any) {
    this.onCustomActionOne.emit($event);
  }

  handleCustomAction() {
    this.onCustomAction.emit(this.tableDataSource.data);
  }

  openCreateForm() {
    this.onCreateForm.emit();
  }

  openEditForm($event?) {
    this.onEditForm.emit($event);
  }
  openViewForm($event?) {
    this.onView.emit($event);
  }

  handleReload() {
    this.searchString = '';
    this.onReload.emit();
  }

  handleFilter() {
    this.onFilter.emit(this.searchString);
  }

  handleSort(sortParams: Sort) {
    sortParams.active = this.columns.find(
      (column) => column.name === sortParams.active
    ).dataKey;
    if (sortParams.direction == "")
    {
      sortParams.direction = "asc";
      }
    this.onSort.emit(sortParams);
  }

  openDeleteConfirmationDialog($event: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: 'Do you confirm the removal of this brand?',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDelete.emit($event);
      }
    });
  }
  onPageChange(pageEvent: PageEvent) {
    const event: PaginatedFilter = {
      pageNumber: pageEvent.pageIndex + 1 ?? 1,
      pageSize: pageEvent.pageSize ?? 10,
    };
    this.onPageChanged.emit(event);
  }

  isAllSelected() {
    var result = true;
    this.tableDataSource.data.forEach(element => {
      if (element.selected === false) result = false;
    });
    return result;
  }

  toggleTableDataSourceChecking(condition: boolean) {
    this.tableDataSource.data.forEach(element => {
      element.selected = condition;
    });
  }

  masterToggle() {
    console.log(this.isAllSelected());
    this.isAllSelected() ? this.toggleTableDataSourceChecking(false) : this.toggleTableDataSourceChecking(true);
  }

  openPDF():void {
    let DATA = document.getElementById('htmlData');
    html2canvas(DATA).then(canvas => {

        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

        PDF.save(`${this.title}.pdf`);

    });
  }

  exportAs(type: string)
  {
    // if (type == 'xlsx') {
    //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    //   /* save to file */
    //   XLSX.writeFile(wb, `${this.title}.xlsx`);
    // } else if (type == 'csv') {
    //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    //   const csv: string = XLSX.utils.sheet_to_csv(ws);
    //   FileSaver.saveAs(new Blob([csv]), `${this.title}_${new Date().getTime()}.csv`);
    // }

  }

  copyData() {
    var dataArray = "";
    this.tableDataSource.data.forEach(row => {
      dataArray += this.ObjectToArray(row)
    })
    this.toastrService.info('Copied to clipboard.')
    this.copyToClipboard = dataArray;
  }

  ObjectToArray(obj: object): string {
    var result = Object.keys(obj).map((key: keyof typeof obj) => {
      let value = obj[key];
      return value;
    });
    return result.toString() + "\n";
  }

}
