import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/components/components.dart';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/models/models.dart';

class UserPage extends ConsumerWidget {
  UserPage({Key? key}) : super(key: key);

  final _columns = [
    AppDataColumn(key: 'id', label: 'ID'),
    AppDataColumn(key: 'userName', label: 'User Name'),
    AppDataColumn(key: 'email', label: 'Email'),
    AppDataColumn(key: 'firstName', label: 'First Name'),
    AppDataColumn(key: 'lastName', label: 'Last Name'),
    AppDataColumn(key: 'isActive', label: 'Is Active'),
    AppDataColumn(key: 'newValues', label: 'New Values')
  ];
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userModel = ref.read(userProvider);
    return FutureBuilder(
      future: userModel.loadAllUsers(),
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
              return AppDataTable(
                data: snapshot.data!.map((e) => e.toJson()).toList(),
                columns: _columns,
                title: 'Users',
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
