import 'dart:math';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';

import '../../components/components.dart';

class UserPage extends StatefulWidget {
  UserPage({Key? key}) : super(key: key);
  @override
  State<UserPage> createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  final _data = List.generate(
      2000,
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

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: AppDataTable(
        data: _data,
        columns: _columns,
        header: const AutoSizeText('Users', maxLines: 1),
      ),
    );
  }
}
