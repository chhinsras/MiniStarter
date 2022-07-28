import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/components/components.dart';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/views/user/user_form.dart';

class UserPage extends ConsumerWidget {
  UserPage({Key? key}) : super(key: key);

  final _columns = [
    AppDataColumn(key: 'id', label: 'ID'),
    AppDataColumn(key: 'userName', label: 'User Name'),
    AppDataColumn(key: 'email', label: 'Email'),
    AppDataColumn(key: 'firstName', label: 'First Name'),
    AppDataColumn(key: 'lastName', label: 'Last Name'),
    AppDataColumn(key: 'isActive', label: 'Is Active')
  ];
  @override
  Widget build(BuildContext context, WidgetRef ref) {
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
              return AppDataTable(
                data: snapshot.data!.map((e) => e.toJson()).toList(),
                columns: _columns,
                title: 'Users',
                onView: (data) => showDialog(
                    barrierDismissible: false,
                    context: context,
                    builder: (BuildContext context) =>
                        UserForm(user: ref.read(userModel).getUserById(data))),
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
