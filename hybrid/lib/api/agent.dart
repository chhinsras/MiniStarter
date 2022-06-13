import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:hybrid/api/error_interceptor.dart';
import 'package:hybrid/api/jwt_interceptor.dart';
import 'package:hybrid/entities/entities.dart';
import 'package:universal_platform/universal_platform.dart';

class Agent {
  static final Agent _instance = Agent._();
  factory Agent() => _instance;

  final Dio _dio = Dio();
  final plainResponseOptions = Options(responseType: ResponseType.plain);

  Agent._() {
    // self-signed certificate for https workaround
    if (UniversalPlatform.isIOS || UniversalPlatform.isMacOS) {
      (_dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
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
    _dio.options = options;
    _dio.interceptors.addAll({
      JwtInterceptor(dio: _dio),
      ErrorInterceptor(dio: _dio),
    });
  }

// Auditing
  Future<Response> getAudits() async =>
      _dio.get('auditlogs', options: plainResponseOptions);

// Account
  Future<Response> loginUser(Map<String, dynamic> login) async =>
      _dio.post('account/login', data: jsonEncode(login));
  Future<Response> refreshToken(Map<String, dynamic> request) async =>
      _dio.post('account/refresh-token', data: jsonEncode(request));
  Future<Response> registerUser(User user) async =>
      _dio.post('account/register', data: {user});
  Future<Response> confirmEmail(Map<String, dynamic> params) async =>
      _dio.post('account/confirm-email', queryParameters: params);
  // static Future<Response> confirmPhoneNumber(
  //         Map<String, dynamic> params) async =>
  //     _dio.post('account/confirm-phone-number', queryParameters: params);
  // static Future<Response> forgotPassword(String email) async =>
  //     _dio.post('account/forgot-password', data: {email});
  // static Future<Response> resetPassword(ResetPassword resetPassword) async =>
  //     _dio.post('account/reset-password', data: {resetPassword});
}
