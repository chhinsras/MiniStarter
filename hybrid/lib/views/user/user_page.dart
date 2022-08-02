import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/components/components.dart';
import 'package:hybrid/config/config.dart';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/views/user/user_form.dart';

class UserPage extends ConsumerStatefulWidget {
  const UserPage({Key? key}) : super(key: key);

  @override
  UserPageState createState() => UserPageState();
}

class UserPageState extends ConsumerState<UserPage> {
  @override
  void initState() {
    super.initState();
    ref.read(userModel);
  }

  late List<Map<String, dynamic>> data;

  final List<AppDataColumn> _columns = [
    AppDataColumn(key: 'id', label: 'ID'),
    AppDataColumn(key: 'userName', label: 'User Name'),
    AppDataColumn(key: 'email', label: 'Email'),
    AppDataColumn(key: 'firstName', label: 'First Name'),
    AppDataColumn(key: 'lastName', label: 'Last Name'),
    AppDataColumn(key: 'isActive', label: 'Is Active')
  ];
  int _rowsPerPage = PaginatedDataTable.defaultRowsPerPage;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: ref.read(userModel).loadUsers(),
      builder: (context, AsyncSnapshot<List<User>> snapshot) {
        switch (snapshot.connectionState) {
          case ConnectionState.waiting:
            return const Center(
              child: CircularProgressIndicator(),
            );
          case ConnectionState.done:
            if (snapshot.hasError) {
              return Center(
                child: Text(
                  snapshot.error.toString(),
                ),
              );
            } else {
              return SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: PaginatedDataTable(
                    source: UserDataTableSource(
                      context: context,
                      ref: ref,
                      data: snapshot.data!.map((e) => e.toJson()).toList(),
                      columns: _columns,
                    ),
                    header: const AutoSizeText('Users', maxLines: 1),
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
                    // actions: [
                    //   SizedBox(
                    //     width: Responsive.isSmallMobile(context) ? 200 : null,
                    //     child: SingleChildScrollView(
                    //       scrollDirection: Axis.horizontal,
                    //       child:
                    //           Row(mainAxisAlignment: MainAxisAlignment.start, children: [
                    //         IconButton(
                    //             onPressed: () {},
                    //             color: Theme.of(context).primaryColor,
                    //             icon: const Icon(Icons.add)),
                    //         IconButton(
                    //             onPressed: () {},
                    //             color: Theme.of(context).primaryColor,
                    //             icon: const Icon(Icons.refresh)),
                    //         const VerticalDivider(
                    //           indent: 10,
                    //           endIndent: 10,
                    //         ),
                    //         IconButton(
                    //             onPressed: () => {},
                    //             color: Theme.of(context).primaryColor,
                    //             icon: const Icon(Icons.print)),
                    //         IconButton(
                    //             onPressed: () => {},
                    //             color: Theme.of(context).primaryColor,
                    //             icon: const Icon(Icons.calculate)),
                    //         IconButton(
                    //             onPressed: () => {},
                    //             color: Theme.of(context).primaryColor,
                    //             icon: const Icon(Icons.picture_as_pdf)),
                    //         IconButton(
                    //             onPressed: () => {},
                    //             color: Theme.of(context).primaryColor,
                    //             icon: const Icon(Icons.code)),
                    //         IconButton(
                    //             onPressed: () => {},
                    //             color: Theme.of(context).primaryColor,
                    //             icon: const Icon(Icons.copy)),
                    //       ]),
                    //     ),
                    //   )
                    // ],
                    columns: [
                      for (var column in _columns)
                        DataColumn(label: Text(column.label)),
                      const DataColumn(label: Text('Action'))
                    ],
                  ),
                ),
              );
            }
          case ConnectionState.none:
            break;
          case ConnectionState.active:
            break;
          default:
            return const Text('Unhandle states.');
        }
        return const Center();
      },
    );
  }
}

class UserDataTableSource extends DataTableSource {
  UserDataTableSource({
    required this.context,
    required this.ref,
    required this.data,
    required this.columns,
  });

  BuildContext context;
  WidgetRef ref;
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
          // for (var i in columns) DataCell(Text(data[index][i.key].toString())),
          DataCell(Text(data[index]['id'].toString())),
          DataCell(Text(data[index]['userName'].toString())),
          DataCell(Text(data[index]['email'].toString())),
          DataCell(Text(data[index]['firstName'].toString())),
          DataCell(Text(data[index]['lastName'].toString())),
          DataCell(Text(data[index]['isActive'] ? '✅' : '❌')),
          DataCell(Row(
            children: [
              IconButton(
                  icon: const Icon(Icons.remove_red_eye),
                  color: colorPrimary,
                  onPressed: () {
                    showDialog(
                        barrierDismissible: false,
                        context: context,
                        builder: (BuildContext context) => UserForm(
                            user: ref
                                .read(userModel)
                                .getUserById(data[index]['id'])));
                  }),
              IconButton(
                icon: const Icon(Icons.edit),
                color: Colors.amber,
                onPressed: () {
                  // onEdit!(data[index]['id']);
                },
              ),
              IconButton(
                icon: const Icon(Icons.delete),
                color: Colors.red,
                onPressed: () {
                  // onDelete!(data[index]['id']);
                },
              )
            ],
          )),
        ]);
  }
}
