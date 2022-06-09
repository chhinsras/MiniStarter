import 'dart:math';
import 'package:flutter/material.dart';
import 'package:hybrid/components/components.dart';
import 'package:hybrid/models/models.dart';

class UserPage extends StatefulWidget {
  const UserPage({Key? key}) : super(key: key);
  @override
  State<UserPage> createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  final _data = List.generate(
      100,
      (index) => {
            "id": index,
            "name": "Item $index",
            "price": Random().nextInt(10000),
          });
  final _columns = [
    AppDataColumn(key: 'id', label: 'ID'),
    AppDataColumn(key: 'name', label: 'Name'),
    AppDataColumn(key: 'price', label: 'Price')
  ];

  // final _pagination =
  //     Pagination(currentPage: 1, totalPages: 10, pageSize: 50, totalCount: 100);

  @override
  Widget build(BuildContext context) {
    return AppDataTable(
      data: _data,
      columns: _columns,
      title: 'Users',
    );
  }
}
