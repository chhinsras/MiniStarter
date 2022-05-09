import 'dart:async';
import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import '../models/models.dart';

class Agent {
  final Dio dio = Dio();

  Agent() {
    var options = BaseOptions(
      baseUrl: 'https://localhost:5001/api/',
      connectTimeout: 50000,
      receiveTimeout: 30000,
    );
    dio.options = options;

    dio.interceptors.add(InterceptorsWrapper(onRequest: (options, handler) {
      return handler.next(options);
    }, onResponse: (response, handler) {
      return handler.next(response);
    }, onError: (DioError e, handler) {
      final response = e.response!;
      switch (response.statusCode) {
        case 400:
          break;
        case 401:
          // toast(response.statusMessage);
          break;
        case 500:
          // toast(response.statusMessage);
          break;
        default:
      }
      return handler.next(e);
    }));
  }

  toast(BuildContext context, String? message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message ?? ""),
      ),
    );
  }

// Auditing
  Future<List<Audit>> getAudits() async {
    var response = await dio.get(
      'auditlogs',
      options: Options(
        responseType: ResponseType.plain,
      ),
    );
    List<Audit> result = [];

    (jsonDecode(response.data.toString())).forEach((element) {
      result.add(Audit.fromJson(element));
    });
    return result;
  }

// Account
  Future<Response> loginUser(Login login) async =>
      dio.post('account/login', data: {login});
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
