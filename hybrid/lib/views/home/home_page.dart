import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hybrid/api/agent.dart';
import 'package:hybrid/extensions/extensions.dart';
import '../../components/components.dart';
import '../../config/config.dart';
import '../../models/models.dart';
import 'menu_list.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  // final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(context.localization.translate('app_title')),
      ),
      body: SafeArea(
          child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Flexible(
            flex: 2,
            child: Container(
              color: Colors.red,
              width: double.infinity,
              // height: SizeConfig.screenHeight,
              child: Wrap(children: [
                for (AppMenuItem item in menuList)
                  InkWell(
                    onTap: () => context.go(item.route!),
                    child: Container(
                        width: 100,
                        // height: 50,
                        margin: const EdgeInsets.all(10.0),
                        padding: const EdgeInsets.all(8.0),
                        decoration: BoxDecoration(
                            color: Colors.red.shade900,
                            borderRadius: BorderRadius.circular(5.0)),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              item.icon,
                              size: 20.0,
                            ),
                            // const SizedBox(width: 8.0),
                            Text(
                              item.text!,
                              style: const TextStyle(fontSize: 12.0),
                            )
                          ],
                        )),
                  ),
              ]),
            ),
          ),
          Expanded(
            flex: 10,
            child: Container(
              color: Colors.green,
              width: double.infinity,
              height: SizeConfig.screenHeight,
            ),
          ),
        ],
      )),
    );
  }
}
