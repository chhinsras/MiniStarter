import 'package:flutter/material.dart';
import '../config/colors.dart';

class AppDataColumn {
  String label;
  String key;
  bool? isShowable = true;

  AppDataColumn({required this.label, required this.key, this.isShowable});
}

class AppDataTable extends StatefulWidget {
  const AppDataTable(
      {Key? key,
      required this.data,
      required this.columns,
      required this.header})
      : super(key: key);
  final List<Map<String, dynamic>> data;
  final List<AppDataColumn> columns;
  final Widget header;

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
      child: SizedBox(
        width: double.infinity,
        child: PaginatedDataTable(
          source: _source,
          header: widget.header,
          rowsPerPage: _rowsPerPage,
          onRowsPerPageChanged: (value) {
            setState(() {
              _rowsPerPage = value!;
            });
          },
          actions: [
            SingleChildScrollView(
              child: Row(children: [
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
                    onPressed: () {},
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.print)),
                IconButton(
                    onPressed: () {},
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.calculate)),
                IconButton(
                    onPressed: () {},
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.picture_as_pdf)),
                IconButton(
                    onPressed: () {},
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.code)),
                IconButton(
                    onPressed: () {},
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(Icons.copy)),
              ]),
            )
          ],
          columns: [
            for (var column in widget.columns)
              DataColumn(label: Text(column.label)),
            const DataColumn(label: Text('Action'))
          ],
          columnSpacing: 100,
          horizontalMargin: 10,
          showCheckboxColumn: true,
          showFirstLastButtons: true,
        ),
      ),
    );
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
