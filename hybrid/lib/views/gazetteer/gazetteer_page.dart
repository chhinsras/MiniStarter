import 'package:flutter/material.dart';
import 'package:hybrid/extensions/extensions.dart';

class GazetteerPage extends StatelessWidget {
  const GazetteerPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          context.localization.translate('gazetteer'),
        ),
      ),
      body: const Center(
        child: Text("Gazetter Screen"),
      ),
    );
  }
}
