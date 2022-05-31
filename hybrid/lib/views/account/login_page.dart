import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/components/app_submit_button.dart';
import 'package:hybrid/components/app_textfield.dart';
import 'package:hybrid/providers/providers.dart';
import 'package:reactive_forms/reactive_forms.dart';

import '../../services/services.dart';

class LoginPage extends ConsumerWidget {
  final String? username;

  LoginPage({Key? key, this.username}) : super(key: key);

  final loginForm = FormGroup({
    'userName': FormControl<String>(
        value: 'superadmin', validators: [Validators.required]),
    'password': FormControl<String>(validators: [Validators.required]),
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appManager = ref.watch(appProvider);
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Center(
          child: ReactiveForm(
            formGroup: loginForm,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const SizedBox(
                  height: 200,
                  child: Image(
                    image: AssetImage('assets/images/logo.png'),
                  ),
                ),
                const SizedBox(height: 16),
                AppTextField(
                  hintText: 'UserName',
                  formControlName: 'userName',
                  validationMessages: (control) => {
                    ValidationMessage.required: 'The username must not be empty'
                  },
                ),
                const SizedBox(height: 16),
                AppTextField(
                  hintText: 'Password',
                  formControlName: 'password',
                  validationMessages: (control) => {
                    ValidationMessage.required: 'The password must not be empty'
                  },
                  obscureText: true,
                ),
                const SizedBox(height: 16),
                AppSubmitButton(
                  label: 'Submit',
                  onPress: () => appManager.login(loginForm.value),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
