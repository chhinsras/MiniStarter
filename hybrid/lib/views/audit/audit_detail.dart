import 'package:flutter/material.dart';
import 'package:hybrid/config/size_config.dart';

class AuditDetail extends StatelessWidget {
  const AuditDetail({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Dialog(
      insetPadding: const EdgeInsets.all(100),
      child: Column(children: [
        Container(
          padding: const EdgeInsets.only(left: 16, right: 16),
          width: SizeConfig.screenWidth,
          height: 50,
          color: Theme.of(context).primaryColor,
          child:
              Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            const Text('Audit Detail'),
            IconButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                icon: const Icon(Icons.close))
          ]),
        ),
        SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Wrap(
            children: [
              for (int i = 0; i < 10; i++)
                Container(
                  decoration: BoxDecoration(
                      color: Colors.red,
                      border: Border.all(color: Colors.black, width: 2)),
                  width: 100,
                  height: 100,
                ),
            ],
          ),
        )
      ]),
    );
  }
}
