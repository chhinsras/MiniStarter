import 'package:flutter/material.dart';
import 'package:hybrid/api/agent.dart';

import '../../components/components.dart';
import '../../models/models.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  // final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Audit> data = [];
  final agent = Agent();

  void initState() {
    super.initState();
    loadData();
  }

  loadData() async {
    data = await agent.getAudits();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('widget.title'),
      ),
      body: Column(
        children: [
          FutureBuilder(
              future: agent.getAudits(),
              builder:
                  (BuildContext context, AsyncSnapshot<List<Audit>> snapshot) {
                if (snapshot.hasData) {
                  return Expanded(
                    child: ListView.builder(
                        itemCount: snapshot.data!.length,
                        itemBuilder: (context, index) {
                          Audit audit = snapshot.data![index];
                          return Card(
                            child: ListTile(
                              title: Text(audit.id.toString()),
                              trailing: Icon(Icons.more_vert),
                            ),
                          );
                        }),
                  );
                } else {
                  return Container();
                }
              }),
          const Expanded(
            child: Center(
              child: AppLanguage(),
            ),
          ),
        ],
      ),
    );
  }
}
