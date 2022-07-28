import 'package:flutter/material.dart';

class AppLabel extends StatelessWidget {
  const AppLabel({Key? key, required this.label}) : super(key: key);
  final String label;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: Text(
        label,
        style: TextStyle(color: Theme.of(context).textTheme.labelMedium?.color),
      ),
    );
  }
}

TableRow appTableRow(String label, Widget body) {
  return TableRow(children: [
    Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text(label),
    ),
    Padding(padding: const EdgeInsets.all(8.0), child: body),
  ]);
}
