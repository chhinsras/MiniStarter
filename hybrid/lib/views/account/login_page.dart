import 'package:flutter/material.dart';
import 'package:reactive_forms/reactive_forms.dart';

class LoginPage extends StatelessWidget {
  final String? username;

  LoginPage({
    Key? key,
    this.username,
  }) : super(key: key);

  final Color rwColor = const Color.fromRGBO(64, 143, 77, 1);
  final TextStyle focusedStyle = const TextStyle(color: Colors.green);
  final TextStyle unfocusedStyle = const TextStyle(color: Colors.grey);

  final loginForm = FormGroup({
    'username': FormControl<String>(
        value: 'superadmin', validators: [Validators.required]),
    'password': FormControl<String>(validators: [Validators.required]),
  });

  login() {
    print('login');
    print(loginForm.value);
  }

  @override
  Widget build(BuildContext context) {
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
                ReactiveTextField(
                  formControlName: 'username',
                  validationMessages: (control) =>
                      {'required': 'The username must not be empty'},
                ),
                // buildTextfield(username ?? '🍔 username', 'username'),
                const SizedBox(height: 16),
                // buildTextfield('🎹 password', 'password', true),
                ReactiveTextField(
                  formControlName: 'password',
                  validationMessages: (control) =>
                      {'required': 'The password must not be empty'},
                  obscureText: true,
                ),
                const SizedBox(height: 16),
                ReactiveFormConsumer(
                  builder: (context, loginForm, child) {
                    return MaterialButton(
                      onPressed: () {
                        loginForm.valid ? login() : null;
                      },
                      color: loginForm.valid ? rwColor : Colors.grey,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8.0)),
                      child: const Text('Submit'),
                    );
                  },
                ),

                // SizedBox(
                //   height: 55,
                //   child: ReactiveFormConsumer(
                //     builder: ((context, form, child) => MaterialButton(
                //           color: rwColor,
                //           shape: RoundedRectangleBorder(
                //               borderRadius: BorderRadius.circular(8.0)),
                //           // onPressed: () => login(),
                //           onPressed: () => form.valid ? login() : null,
                //           child: const Text(
                //             'Login',
                //             style: TextStyle(color: Colors.white),
                //           ),
                //         )),
                //   ),
                // ),
                Text(loginForm.value.toString()),
                Text(loginForm.valid.toString())
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildTextfield(String hintText, String formControlName,
      [bool obscureText = false]) {
    return ReactiveTextField(
      formControlName: formControlName,
      cursorColor: rwColor,
      obscureText: obscureText,
      decoration: InputDecoration(
        border: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.green,
            width: 1.0,
          ),
        ),
        focusedBorder: const OutlineInputBorder(
          borderSide: BorderSide(color: Colors.green),
        ),
        hintText: hintText,
        hintStyle: const TextStyle(height: 0.5),
      ),
    );
  }
}
