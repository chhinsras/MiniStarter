import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:hybrid/api/agent.dart';
import 'package:hybrid/extensions/extensions.dart';
import 'package:hybrid/providers/app_provider.dart';
import 'package:hybrid/providers/providers.dart';
import 'package:hybrid/views/admin/admin_page.dart';
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
    const AdminPage(),
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
          leading: Builder(builder: (BuildContext context) {
            return IconButton(
                icon: const Icon(Icons.menu),
                onPressed: () {
                  Scaffold.of(context).openDrawer();
                });
          }),
          // bottom: TabBar(
          //   controller: _controller,
          //   tabs: [for (final page in menuList) Tab(text: page.text)],
          //   onTap: (index) => _tap(context, index, menuList[index].route!),
          // ),
        ),
        drawer: appDrawer(context),
        body: GridView.count(
          padding: const EdgeInsets.all(8),
          crossAxisCount: 3,
          children: [
            for (AppMenuItem item in moduleMenuList) moduleMenuItem(item),
          ],
        )
        // SafeArea(
        //     child: Column(
        //   crossAxisAlignment: CrossAxisAlignment.start,
        //   children: [
        //     Expanded(
        //       flex: 10,
        //       child: IndexedStack(
        //         index: appState.getSelectedTab,
        //         children: pages,
        //       ),
        //     ),
        //   ],
        // )),
        // body: TabBarView(controller: _controller, children: pages),
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
        //           icon: Icon(Icons.admin_panel_settings), label: 'Admin'),
        //       BottomNavigationBarItem(
        //           icon: Icon(Icons.code), label: 'Changelogs'),
        //     ]),
        );
  }

  Container moduleMenuItem(AppMenuItem item) {
    return Container(
        margin: const EdgeInsets.all(10),
        width: 100,
        height: 100,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            color: Theme.of(context).primaryColor),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Icon(
              item.icon,
              size: 25,
            ),
            Text(item.text),
          ],
        ));
  }

  Drawer appDrawer(BuildContext context) {
    return Drawer(
      backgroundColor: Theme.of(context).primaryColor,
      child: ListView(
        children: [
          DrawerHeader(
            decoration: BoxDecoration(),
            child: Center(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [Text('Chhin Sras'), Text('Flutter Developer')],
            )),
          ),
          Wrap(children: [
            for (AppMenuItem item in drawerMenuList)
              InkWell(
                onTap: () => context.go(item.route),
                child: InkWell(
                  onTap: () => context.go(item.route),
                  child: Container(
                      // width: 100,
                      // height: 50,
                      margin: const EdgeInsets.all(10.0),
                      padding: const EdgeInsets.all(8.0),
                      // decoration: BoxDecoration(
                      //     color: Colors.red.shade900,
                      //     borderRadius: BorderRadius.circular(5.0)),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Icon(
                            item.icon,
                            size: 20.0,
                          ),
                          const SizedBox(width: 8.0),
                          Text(
                            item.text,
                            style: const TextStyle(fontSize: 12.0),
                          )
                        ],
                      )),
                ),
              ),
          ]),
          buildDarkModeRow()
        ],
      ),
    );
  }

  Widget buildDarkModeRow() {
    final profileState = ref.read(profileProvider);
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Text('Dark Mode'),
          Switch(
            value: profileState.darkMode,
            onChanged: (value) {
              profileState.darkMode = value;
            },
          )
        ],
      ),
    );
  }
}
