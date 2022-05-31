import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:hybrid/api/error_interceptor.dart';
import 'package:hybrid/api/jwt_interceptor.dart';
import 'package:universal_platform/universal_platform.dart';
import '../models/models.dart';

class Agent {
  final Dio dio = Dio();
  final plainResponseOptions = Options(responseType: ResponseType.plain);

  Agent() {
    // self-signed certificate for https workaround
    if (UniversalPlatform.isIOS || UniversalPlatform.isMacOS) {
      (dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
          (HttpClient client) {
        client.badCertificateCallback =
            (X509Certificate cert, String host, int port) => true;
        return client;
      };
    }
    var options = BaseOptions(
      baseUrl: dotenv.env['BASE_URL']!,
      connectTimeout: 5000,
      receiveTimeout: 3000,
    );
    dio.options = options;

    dio.interceptors.addAll({
      JwtInterceptor(dio: dio),
      ErrorInterceptor(dio: dio),
    });
  }

// Auditing
  Future<Response> getAudits() async =>
      dio.get('auditlogs', options: plainResponseOptions);

// Account
  Future<Response> loginUser(dynamic login) async =>
      dio.post('account/login', data: jsonEncode(login));
  Future<Response> refreshToken(RefreshTokenRequest request) async =>
      dio.post('account/refresh-token', data: {request});
  Future<Response> registerUser(User user) async =>
      dio.post('account/register', data: {user});
  Future<Response> confirmEmail(Map<String, dynamic> params) async =>
      dio.post('account/confirm-email', queryParameters: params);
  // static Future<Response> confirmPhoneNumber(
  //         Map<String, dynamic> params) async =>
  //     dio.post('account/confirm-phone-number', queryParameters: params);
  // static Future<Response> forgotPassword(String email) async =>
  //     dio.post('account/forgot-password', data: {email});
  // static Future<Response> resetPassword(ResetPassword resetPassword) async =>
  //     dio.post('account/reset-password', data: {resetPassword});
}
