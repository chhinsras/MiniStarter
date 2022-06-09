import 'dart:io';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:csv/csv.dart';
import 'package:data_table_2/data_table_2.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hybrid/config/config.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:path_provider/path_provider.dart';
import 'package:printing/printing.dart';
import 'package:universal_platform/universal_platform.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

class AppDataColumn {
  String label;
  String key;
  bool? isShowable = true;

  AppDataColumn({required this.label, required this.key, this.isShowable});
}

class AppDataTable extends StatefulWidget {
  const AppDataTable(
      {Key? key,
      required this.title,
      required this.data,
      required this.columns})
      : super(key: key);

  final String title;
  final List<Map<String, dynamic>> data;
  final List<AppDataColumn> columns;

  @override
  State<AppDataTable> createState() => _AppDataTableState();
}

class _AppDataTableState extends State<AppDataTable> {
  int _rowsPerPage = PaginatedDataTable.defaultRowsPerPage;

  late DataTableSource _source;
  @override
  Widget build(BuildContext context) {
    _source = AppDataTableSource(data: widget.data, columns: widget.columns);
    return Padding(
      padding: const EdgeInsets.all(12.0),
      child: PaginatedDataTable(
        source: _source,
        header: AutoSizeText(widget.title, maxLines: 1),
        columnSpacing: 100,
        horizontalMargin: 10,
        showCheckboxColumn: true,
        showFirstLastButtons: true,
        rowsPerPage: _rowsPerPage,
        onRowsPerPageChanged: (value) {
          setState(() {
            _rowsPerPage = value!;
          });
        },
        actions: [
          SizedBox(
            width: Responsive.isSmallMobile(context) ? 200 : null,
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(mainAxisAlignment: MainAxisAlignment.start, children: [
                IconButton(
                    onPressed: () {},
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.add)),
                IconButton(
                    onPressed: () {},
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.refresh)),
                const VerticalDivider(
                  indent: 10,
                  endIndent: 10,
                ),
                IconButton(
                    onPressed: () => printPDF(),
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.print)),
                IconButton(
                    onPressed: () => exportExcel(),
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.calculate)),
                IconButton(
                    onPressed: () => exportPDF(),
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.picture_as_pdf)),
                IconButton(
                    onPressed: () => exportCSV(),
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.code)),
                IconButton(
                    onPressed: () => copyToClipboard(),
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.copy)),
              ]),
            ),
          )
        ],
        columns: [
          for (var column in widget.columns)
            DataColumn(label: Text(column.label)),
          const DataColumn(label: Text('Action'))
        ],
      ),
    );
  }

  printPDF() {
    Printing.layoutPdf(onLayout: ((format) {
      final pdf = _generateDataTablePDF(format);
      return pdf.save();
    }));
  }

  exportExcel() {
    Toastr.showWarning(text: 'This Feature Is Not Supported.');
  }

  exportPDF() async {
    final pdf = _generateDataTablePDF(PdfPageFormat.a4);
    if (UniversalPlatform.isWeb) {
      await Printing.sharePdf(
          bytes: await pdf.save(),
          filename: '${widget.title}-${DateTime.now()}.pdf');
    } else if (UniversalPlatform.isDesktop) {
      final output = await getDownloadsDirectory();
      final file =
          File("${output?.path}/${widget.title}-${DateTime.now()}.pdf");
      await file.writeAsBytes(await pdf.save());
    } else if (UniversalPlatform.isIOS || UniversalPlatform.isAndroid) {
      final output = await getDownloadsDirectory();
      final file =
          File("${output?.path}/${widget.title}-${DateTime.now()}.pdf");
      await file.writeAsBytes(await pdf.save());
    }
    Toastr.showSuccess(text: 'PDF Exported.');
  }

  exportCSV() async {
    final csv = _generateCSVString();
    if (UniversalPlatform.isWeb) {
      Toastr.showWarning(text: 'CSV Export Not Supported on Web.');
    } else if (UniversalPlatform.isDesktop) {
      final output = await getDownloadsDirectory();
      final file =
          File("${output?.path}/${widget.title}-${DateTime.now()}.csv");
      await file.writeAsString(csv);
      Toastr.showSuccess(text: 'CSV Exported.');
    } else if (UniversalPlatform.isIOS || UniversalPlatform.isAndroid) {
      final output = await getApplicationDocumentsDirectory();
      final file = File("${output.path}/${widget.title}-${DateTime.now()}.csv");
      await file.writeAsString(csv);
      Toastr.showSuccess(text: 'CSV Exported.');
    }
  }

  copyToClipboard() {
    final csv = _generateCSVString();
    Clipboard.setData(ClipboardData(text: csv));
    Toastr.showSuccess(text: 'Clipboard Copied.');
  }

  pw.Document _generateDataTablePDF(PdfPageFormat format) {
    // final font =
    //     await rootBundle.load("/assets/fonts/KhmerOSBattambang-Regular.ttf");
    // final gFont = await PdfGoogleFonts.nunitoExtraLight();
    // final ttf = pw.Font.ttf(font);
    final pdf = pw.Document();
    pdf.addPage(
      pw.MultiPage(
        pageFormat: PdfPageFormat.a4,
        maxPages: 100,
        build: (pw.Context context) => [
          pw.Center(
              heightFactor: 2.0,
              child: pw.Text(widget.title,
                  style: const pw.TextStyle(fontSize: 16))),
          pw.Table(
            defaultColumnWidth: const pw.FixedColumnWidth(120.0),
            border: pw.TableBorder.all(
                color: PdfColor.fromHex('#8E8E8E'), width: 0.5),
            children: [
              pw.TableRow(
                  decoration: const pw.BoxDecoration(
                    color: PdfColors.grey,
                  ),
                  children: [
                    for (var column in widget.columns)
                      pw.Container(
                          margin: const pw.EdgeInsets.all(2.0),
                          padding: const pw.EdgeInsets.all(2.0),
                          child: pw.Text(column.label,
                              style:
                                  pw.TextStyle(fontWeight: pw.FontWeight.bold)))
                  ]),
              for (int index = 0; index < widget.data.length; index++)
                pw.TableRow(
                  verticalAlignment: pw.TableCellVerticalAlignment.middle,
                  decoration: pw.BoxDecoration(
                      color:
                          index % 2 == 1 ? PdfColors.grey200 : PdfColors.white),
                  children: [
                    for (var column in widget.columns)
                      pw.Container(
                          margin: const pw.EdgeInsets.all(2.0),
                          padding: const pw.EdgeInsets.all(2.0),
                          child: pw.Text(
                              widget.data[index][column.key].toString())),
                  ],
                )
            ],
          ),
        ],
      ),
    );
    return pdf;
  }

  String _generateCSVString() {
    List<List<dynamic>> rows = [];
    List<dynamic> row = [];
    row.addAll(widget.columns.map((e) => e.key).toList());
    for (var item in widget.data) {
      row.addAll(item.values.toList());
    }
    rows.add(row);

    String csv = const ListToCsvConverter().convert(rows);
    return csv;
  }
}

class AppDataTableSource extends DataTableSource {
  AppDataTableSource({required this.data, required this.columns});

  List<Map<String, dynamic>> data;
  List<AppDataColumn> columns;

  @override
  bool get isRowCountApproximate => false;
  @override
  int get rowCount => data.length;
  @override
  int get selectedRowCount => 0;
  @override
  DataRow getRow(int index) {
    return DataRow(
        // color: MaterialStateColor.resolveWith((states) =>
        //     index % 2 == 1 ? Colors.grey[200]! : Colors.transparent),
        cells: [
          for (var i in columns) DataCell(Text(data[index][i.key].toString())),
          DataCell(Row(
            children: [
              IconButton(
                icon: const Icon(Icons.remove_red_eye),
                color: colorPrimary,
                onPressed: () {},
              ),
              IconButton(
                icon: const Icon(Icons.edit),
                color: Colors.amber,
                onPressed: () {},
              ),
              IconButton(
                icon: const Icon(Icons.delete),
                color: Colors.red,
                onPressed: () {},
              )
            ],
          )),
        ]);
  }
}
