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
  }

  final List<AppDataColumn> _columns = [
    AppDataColumn(key: 'id', label: 'ID'),
    AppDataColumn(key: 'userName', label: 'User Name'),
    AppDataColumn(key: 'email', label: 'Email'),
    AppDataColumn(key: 'firstName', label: 'First Name'),
    AppDataColumn(key: 'lastName', label: 'Last Name'),
    AppDataColumn(key: 'isActive', label: 'Is Active')
  ];

  List<DataColumn> getColumns() {
    List<DataColumn> columns = [];
    for (var column in _columns) {
      columns.add(DataColumn(label: Text(column.label)));
    }
    columns.add(const DataColumn(label: Text('Action')));
    return columns;
  }

  List<DataRow> getRows(PaginatedResponse<User> data) {
    List<DataRow> rows = [];
    for (var item in data.items) {
      rows.add(
        DataRow(
          // color: MaterialStateColor.resolveWith((states) =>
          //     index % 2 == 1 ? Colors.grey[200]! : Colors.transparent),
          cells: [
            DataCell(Text(item.id.toString())),
            DataCell(Text(item.userName.toString())),
            DataCell(Text(item.email.toString())),
            DataCell(Text(item.firstName.toString())),
            DataCell(Text(item.lastName.toString())),
            DataCell(Text(item.isActive ? '✅' : '❌')),
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
                              user: ref.read(userModel).getUserById(item.id!)));
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
          ],
        ),
      );
    }
    return rows;
  }

  @override
  Widget build(BuildContext context) {
    var model = ref.read(userModel);
    return FutureBuilder(
      future: ref.read(userModel).loadUsers(),
      builder: (context, AsyncSnapshot<PaginatedResponse<User>> snapshot) {
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
              return Card(
                semanticContainer: false,
                margin: const EdgeInsets.all(16.0),
                child: SingleChildScrollView(
                  scrollDirection: Axis.vertical,
                  child: LayoutBuilder(
                    builder:
                        (BuildContext context, BoxConstraints constraints) {
                      return Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          SingleChildScrollView(
                            scrollDirection: Axis.horizontal,
                            child: Column(
                              children: [
                                ConstrainedBox(
                                  constraints: BoxConstraints(
                                      minWidth: constraints.minWidth),
                                  child: DataTable(
                                    rows: getRows(snapshot.data!),
                                    columnSpacing: 100,
                                    horizontalMargin: 10,
                                    showCheckboxColumn: true,
                                    columns: getColumns(),
                                    showBottomBorder: true,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          AppPagination(
                            currentPage: snapshot.data!.pagination.currentPage,
                            totalPages: snapshot.data!.pagination.totalPages,
                            totalCount: snapshot.data!.pagination.totalCount,
                            pageSize: snapshot.data!.pagination.pageSize,
                            showFirstLastButtons: true,
                            onPageChanged: (page) {
                              setState(() {
                                model.params.pageNumber = page;
                                model.loadUsers;
                              });
                            },
                            onRowsPerPageChanged: (pageSize) {
                              setState(
                                () {
                                  model.params.pageSize = pageSize!;
                                  model.loadUsers;
                                },
                              );
                            },
                          )
                        ],
                      );
                    },
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
