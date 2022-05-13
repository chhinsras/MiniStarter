import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/material.dart';

class Toastr {
  static showSuccessAction({required String text}) {
    BotToast.showText(
      text: '✅ ' + text,
      contentColor: Colors.green,
      contentPadding: const EdgeInsets.all(12.0),
      align: const Alignment(0.9, 0.9),
    );
  }

  static showUnauthorized() {
    BotToast.showText(
      text: "Unauthorized.",
      contentColor: Colors.red,
      contentPadding: const EdgeInsets.all(12.0),
      align: const Alignment(0.9, 0.9),
    );
  }

  static showAccessDenied() {
    BotToast.showText(
      text: "Access Denied.",
      contentColor: Colors.amber,
      contentPadding: const EdgeInsets.all(12.0),
      align: const Alignment(0.9, 0.9),
    );
  }

  static showBadRequest() {
    BotToast.showText(
        text: 'Bad Request',
        contentColor: Colors.red,
        contentPadding: const EdgeInsets.all(12.0),
        align: const Alignment(0.9, 0.9));
  }
}
