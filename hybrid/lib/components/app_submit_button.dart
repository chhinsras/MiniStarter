import 'package:flutter/material.dart';
import 'package:hybrid/config/colors.dart';
import 'package:reactive_forms/reactive_forms.dart';

class AppSubmitButton extends StatelessWidget {
  final String label;
  Function() onPress;
  AppSubmitButton({Key? key, required this.label, required this.onPress})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final form = ReactiveForm.of(context);
    return SizedBox(
      height: 50,
      child: MaterialButton(
        color: colorPrimary,
        disabledColor: colorGrey,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
        onPressed: form!.valid ? onPress : null,
        child: Text(
          label,
          style: const TextStyle(color: Colors.white),
        ),
      ),
    );
  }
}
