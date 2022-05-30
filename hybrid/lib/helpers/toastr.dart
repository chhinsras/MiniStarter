import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/material.dart';

class Toastr {
  static showSuccess({required String text}) {
    BotToast.showText(
      text: '✅ $text',
      contentColor: Colors.teal,
      contentPadding: const EdgeInsets.all(12.0),
      align: const Alignment(0.9, 0.9),
    );
  }

  static showError({required String text}) {
    BotToast.showText(
      text: text,
      contentColor: Colors.red,
      contentPadding: const EdgeInsets.all(12.0),
      align: const Alignment(0.9, 0.9),
    );
  }

  static showWarning({required String text}) {
    BotToast.showText(
      text: text,
      contentColor: Colors.amber,
      contentPadding: const EdgeInsets.all(12.0),
      align: const Alignment(0.9, 0.9),
    );
  }
}
