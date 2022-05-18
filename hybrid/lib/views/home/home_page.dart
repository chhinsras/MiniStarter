import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:hybrid/api/agent.dart';
import 'package:hybrid/extensions/extensions.dart';
import 'package:hybrid/providers/providers.dart';
import 'package:hybrid/views/audit/audit_page.dart';
import 'package:hybrid/views/dashboard/dashboard_page.dart';
import 'package:hybrid/views/views.dart';
import '../../components/components.dart';
import '../../config/config.dart';
import '../../models/models.dart';
import 'menu_list.dart';

class HomePage extends ConsumerStatefulWidget {
  HomePage({Key? key, required this.currentTab}) : super(key: key);

  final int currentTab;
  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage>
    with TickerProviderStateMixin {
  static List<Widget> pages = <Widget>[
    DashboardPage(),
    const GazetteerPage(),
    const UserPage(),
    const RolePage(),
    const AuditPage()
  ];

  late final TabController _controller;

  @override
  void initState() {
    super.initState();
    ref.read(appProvider);

    _controller = TabController(
        length: pages.length, vsync: this, initialIndex: widget.currentTab);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _tap(BuildContext context, int index, String route) =>
      context.go('/$route');

  @override
  Widget build(BuildContext context) {
    final appState = ref.watch(appProvider);
    return Scaffold(
      appBar: AppBar(
        title: Text(context.localization.translate('app_title')),
        bottom: TabBar(
          controller: _controller,
          tabs: [for (final page in menuList) Tab(text: page.text)],
          onTap: (index) => _tap(context, index, menuList[index].route!),
        ),
      ),
      // body: SafeArea(
      //     child: Column(
      //   crossAxisAlignment: CrossAxisAlignment.start,
      //   children: [
      //     Flexible(
      //       flex: 2,
      //       child: Container(
      //         color: Colors.red,
      //         width: double.infinity,
      //         // height: SizeConfig.screenHeight,
      //         child: Wrap(children: [
      //           for (AppMenuItem item in menuList)
      //             InkWell(
      //               onTap: () => context.go(item.route!),
      //               child: Container(
      //                   width: 100,
      //                   // height: 50,
      //                   margin: const EdgeInsets.all(10.0),
      //                   padding: const EdgeInsets.all(8.0),
      //                   decoration: BoxDecoration(
      //                       color: Colors.red.shade900,
      //                       borderRadius: BorderRadius.circular(5.0)),
      //                   child: Row(
      //                     crossAxisAlignment: CrossAxisAlignment.center,
      //                     mainAxisAlignment: MainAxisAlignment.center,
      //                     children: [
      //                       Icon(
      //                         item.icon,
      //                         size: 20.0,
      //                       ),
      //                       // const SizedBox(width: 8.0),
      //                       Text(
      //                         item.text!,
      //                         style: const TextStyle(fontSize: 12.0),
      //                       )
      //                     ],
      //                   )),
      //             ),
      //         ]),
      //       ),
      //     ),
      //     Expanded(
      //       flex: 10,
      //       child: IndexedStack(
      //         index: appState.getSelectedTab,
      //         children: pages,
      //       ),
      //     ),
      //   ],
      // )),
      body: TabBarView(controller: _controller, children: pages),
      // bottomNavigationBar: BottomNavigationBar(
      //     currentIndex: appState.getSelectedTab,
      //     onTap: (index) {
      //       appState.goToTab(index);
      //     },
      //     items: const <BottomNavigationBarItem>[
      //       BottomNavigationBarItem(
      //           icon: Icon(Icons.dashboard), label: 'Dashboard'),
      //       BottomNavigationBarItem(
      //           icon: Icon(Icons.table_bar), label: 'Gazetteer'),
      //       BottomNavigationBarItem(icon: Icon(Icons.people), label: 'Users'),
      //       BottomNavigationBarItem(
      //           icon: Icon(Icons.supervised_user_circle), label: 'Roles'),
      //       BottomNavigationBarItem(
      //           icon: Icon(Icons.code), label: 'Changelogs'),
      //     ]),
    );
  }
}
