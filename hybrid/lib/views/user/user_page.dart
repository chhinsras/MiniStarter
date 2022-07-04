import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/components/components.dart';
import 'package:hybrid/config/config.dart';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/views/user/user_form.dart';
import 'package:responsive_table/responsive_table.dart';

class UserPage extends ConsumerStatefulWidget {
  UserPage({Key? key}) : super(key: key);

  @override
  UserPageState createState() => UserPageState();
}

class UserPageState extends ConsumerState<UserPage> {
  late List<DatatableHeader> _headers;
  List<int> _perPages = [10, 20, 50, 100];
  int _total = 100;
  int? _currentPerPage = 10;
  List<bool>? _expanded;
  String? _searchKey = "id";
  int _currentPage = 1;
  bool _isSearch = false;
  List<Map<String, dynamic>> _sourceOriginal = [];
  List<Map<String, dynamic>> _sourceFiltered = [];
  List<Map<String, dynamic>> _source = [];
  List<Map<String, dynamic>> _selecteds = [];
  String _selectableKey = "id";
  String? _sortColumn;
  bool _sortAscending = true;
  bool _isLoading = true;
  bool _showSelect = true;
  var random = new Random();

  _loadHeader() {
    _headers = [
      DatatableHeader(
          text: "ID",
          value: "id",
          show: true,
          sortable: true,
          textAlign: TextAlign.center),
      DatatableHeader(
          text: "User Name",
          value: "userName",
          show: true,
          // flex: 2,
          sortable: true,
          editable: true,
          textAlign: TextAlign.left),
      DatatableHeader(
          text: "Email",
          value: "email",
          show: true,
          sortable: true,
          editable: true,
          textAlign: TextAlign.left),
      DatatableHeader(
          text: "First Name",
          value: "firstName",
          show: true,
          sortable: true,
          editable: true,
          textAlign: TextAlign.left),
      DatatableHeader(
          text: "Last Name",
          value: "lastName",
          show: true,
          sortable: true,
          editable: true,
          textAlign: TextAlign.left),
      DatatableHeader(
          text: "Is Active",
          value: "isActive",
          show: true,
          sortable: true,
          editable: true,
          textAlign: TextAlign.left),
      DatatableHeader(
          text: "New Values",
          value: "newValues",
          show: true,
          sortable: true,
          editable: true,
          textAlign: TextAlign.left)
    ];
  }

  _loadData() async {
    setState(() => _isLoading = true);

    _sourceOriginal.clear();
    var paginatedResponse = await ref.read(userModel).loadAllUsers();
    List<Map<String, dynamic>> temp = [];
    for (User element in paginatedResponse.items) {
      temp.add(element.toJson());
    }
    // _sourceOriginal = paginatedResponse.items.map;
    // _sourceFiltered = _sourceOriginal;
    _source = temp;
    _total = paginatedResponse.pagination.totalCount;

    setState(() => _isLoading = false);

    _expanded = List.generate(_currentPerPage!, (index) => false);
  }

  _initializeData() {
    _loadHeader();
    _loadData();
  }

  @override
  void initState() {
    super.initState();
    _initializeData();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        children: [
          Container(
            margin: const EdgeInsets.all(10),
            padding: const EdgeInsets.all(0),
            constraints: const BoxConstraints(
              maxHeight: 700,
            ),
            child: Card(
              elevation: 1,
              shadowColor: Colors.black,
              clipBehavior: Clip.none,
              child: ResponsiveDatatable(
                title: TextButton.icon(
                  onPressed: () => {},
                  icon: const Icon(Icons.add),
                  label: const Text("new item"),
                ),
                reponseScreenSizes: const [ScreenSize.xs],
                actions: [
                  if (_isSearch)
                    const Expanded(
                      child: Text('Searching Enabled'),
                    ),
                ],
                headers: _headers,
                source: _source,
                selecteds: _selecteds,
                expanded: _expanded,
                isLoading: _isLoading,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
