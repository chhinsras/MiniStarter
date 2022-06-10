import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/config/config.dart';
import 'package:hybrid/extensions/extensions.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/models/models.dart';
import 'menu_list.dart';

class AdminLayoutPage extends ConsumerStatefulWidget {
  const AdminLayoutPage({Key? key}) : super(key: key);

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<AdminLayoutPage>
    with TickerProviderStateMixin {
  // static List<Widget> pages = <Widget>[
  //   const DashboardPage(),
  //   const GazetteerPage(),
  //   const UserPage(),
  //   const AdminPage(),
  //   AuditPage()
  // ];

  // late final TabController _controller;

  @override
  void initState() {
    super.initState();
    ref.read(appModel);

    // _controller = TabController(
    //     length: pages.length, vsync: this, initialIndex: widget.currentTab);
  }

  @override
  void dispose() {
    // _controller.dispose();
    super.dispose();
  }

  // void _tap(BuildContext context, int index, String route) =>
  //     context.router.pushNamed('/$route');

  @override
  Widget build(BuildContext context) {
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
        drawer: sideMenu(context),
        body: Responsive(
          smallMobile: SizedBox(
              height: SizeConfig.screenHeight, child: const AutoRouter()),
          mobile: SizedBox(
              height: SizeConfig.screenHeight, child: const AutoRouter()),
          tablet: Row(
            children: [
              Expanded(
                flex: 2,
                child: SizedBox(
                  height: SizeConfig.screenHeight,
                  width: double.infinity,
                  child: sideMenu(context),
                ),
              ),
              Expanded(
                flex: 10,
                child: SizedBox(
                  height: SizeConfig.screenHeight,
                  child: const AutoRouter(),
                  // In case we want to use bottom navigation for mobile
                  // child: Responsive.isDesktop(context)
                  //     ? const AutoRouter()
                  //     : IndexedStack(
                  //         index: appState.getSelectedTab,
                  //         children: pages,
                  //       ),
                ),
              ),
            ],
          ),
          desktop: Row(
            children: [
              Expanded(
                flex: 2,
                child: SizedBox(
                  height: SizeConfig.screenHeight,
                  width: double.infinity,
                  child: sideMenu(context),
                ),
              ),
              Expanded(
                flex: 10,
                child: SizedBox(
                  height: SizeConfig.screenHeight,
                  child: const AutoRouter(),
                  // In case we want to use bottom navigation for mobile
                  // child: Responsive.isDesktop(context)
                  //     ? const AutoRouter()
                  //     : IndexedStack(
                  //         index: appState.getSelectedTab,
                  //         children: pages,
                  //       ),
                ),
              ),
            ],
          ),

          // Column(
          //   children: [
          //     // Expanded(
          //     //   child: GridView.count(
          //     //     padding: const EdgeInsets.all(8),
          //     //     crossAxisCount: 3,
          //     //     children: [
          //     //       for (AppMenuItem item in moduleMenuList) moduleMenuItem(item),
          //     //     ],
          //     //   ),
          //     // ),
          //      Row(
          //       mainAxisAlignment: MainAxisAlignment.center,
          //       children: <Widget>[
          //         ElevatedButton(
          //           onPressed: () {
          //             appState.changeLanguage(const Locale("en"));
          //             Toastr.showSuccess(
          //                 text:
          //                     context.localization.translate('switch_language_en'));
          //           },
          //           child: const Text('English'),
          //         ),
          //         ElevatedButton(
          //           onPressed: () {
          //             appState.changeLanguage(const Locale("km"));
          //             Toastr.showSuccess(
          //                 text:
          //                     context.localization.translate('switch_language_km'));
          //           },
          //           child: const Text('Khmer'),
          //         )
          //       ],
          //     ),
          //   ],
          // ),
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
          //     ]),,
        ));
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

  Widget sideMenu(BuildContext context) {
    return Drawer(
      backgroundColor: Theme.of(context).primaryColor,
      child: ListView(
        children: [
          DrawerHeader(
            child: Center(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [Text('Chhin Sras'), Text('Flutter Developer')],
            )),
          ),
          Wrap(children: [
            for (AppMenuItem item in drawerMenuList)
              AppHasPermission(
                permissions: [item.permission],
                child: InkWell(
                  onTap: () => context.router.navigateNamed(item.route),
                  child: Container(
                      margin: const EdgeInsets.all(8.0),
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
          buildDarkModeRow(),
          MaterialButton(
              onPressed: () => ref.read(accountModel).logout(),
              child: const Text('Logout'))
        ],
      ),
    );
  }

  Widget buildDarkModeRow() {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Text('Dark Mode'),
          Switch(
            value: ref.read(profileModel).darkMode,
            onChanged: (value) {
              ref.read(profileModel).darkMode = value;
            },
          )
        ],
      ),
    );
  }
}
