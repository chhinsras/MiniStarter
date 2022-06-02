import 'dart:math';

import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';

import '../../config/colors.dart';

class UserPage extends StatefulWidget {
  UserPage({Key? key}) : super(key: key);

  @override
  State<UserPage> createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  final DataTableSource _data = MyData();

  int _rowsPerPage = PaginatedDataTable.defaultRowsPerPage;

  final _columns = const [
    DataColumn(label: Text('ID')),
    DataColumn(label: Text('Name')),
    DataColumn(label: Text('Price')),
    DataColumn(label: Text('ID')),
    DataColumn(label: Text('Name')),
    DataColumn(label: Text('Price')),
    DataColumn(label: Text('ID')),
    DataColumn(label: Text('Name')),
    DataColumn(label: Text('Action'))
  ];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: SizedBox(
          width: double.infinity,
          child: PaginatedDataTable(
            source: _data,
            header: const AutoSizeText('My Datatable', maxLines: 1),
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
            columns: _columns,
            columnSpacing: 100,
            horizontalMargin: 10,
            showCheckboxColumn: true,
            showFirstLastButtons: true,
          ),
        ),
      ),
    );
  }
}

// The "soruce" of the table
class MyData extends DataTableSource {
  // Generate some made-up data
  final List<Map<String, dynamic>> _data = List.generate(
      1000,
      (index) => {
            "id": index,
            "title": "Item $index",
            "price": Random().nextInt(10000),
            "id2": index,
            "title2": "Item $index",
            "price2": Random().nextInt(10000),
            "id3": index,
            "title3": "Item $index",
            "price3": Random().nextInt(10000),
          });

  @override
  bool get isRowCountApproximate => false;
  @override
  int get rowCount => _data.length;
  @override
  int get selectedRowCount => 0;
  @override
  DataRow getRow(int index) {
    return DataRow(
        // color: MaterialStateColor.resolveWith((states) =>
        //     index % 2 == 1 ? Colors.grey[200]! : Colors.transparent),
        cells: [
          DataCell(Text(_data[index]['id'].toString())),
          DataCell(Text(_data[index]["title"])),
          DataCell(Text(_data[index]["price"].toString())),
          DataCell(Text(_data[index]['id2'].toString())),
          DataCell(Text(_data[index]["title2"])),
          DataCell(Text(_data[index]["price2"].toString())),
          DataCell(Text(_data[index]['id3'].toString())),
          DataCell(Text(_data[index]["title3"])),
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
