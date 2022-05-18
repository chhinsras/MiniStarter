import 'dart:async';
import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import '../helpers/helpers.dart';
import '../models/models.dart';

class Agent {
  final Dio dio = Dio();

  Agent() {
    var options = BaseOptions(
      baseUrl: dotenv.env['BASE_URL']!,
      connectTimeout: 50000,
      receiveTimeout: 30000,
    );
    dio.options = options;

    dio.interceptors.add(InterceptorsWrapper(onRequest: (options, handler) {
      return handler.next(options);
    }, onResponse: (response, handler) {
      return handler.next(response);
    }, onError: (DioError e, handler) {
      switch (e.type) {
        case DioErrorType.connectTimeout:
        case DioErrorType.receiveTimeout:
        case DioErrorType.sendTimeout:
          Toastr.showError(
              text: 'The connection has timed out, please try again.');
          break;
        case DioErrorType.response:
          switch (e.response?.statusCode) {
            case 400:
              Toastr.showError(text: 'Invalid Request.');
              break;
            case 401:
              Toastr.showWarning(text: 'Unauthorized.');
              break;
            case 403:
              Toastr.showWarning(text: 'Access Denied.');
              break;
            case 404:
              Toastr.showError(
                  text: 'The requested information could not be found');
              break;
            case 409:
              Toastr.showError(text: 'Conflict occurred.');
              break;
            case 500:
              Toastr.showError(
                  text: 'Internal Server Error, please try again later.');
              break;
            default:
          }
          break;
        case DioErrorType.cancel:
          break;
        case DioErrorType.other:
          Toastr.showError(
              text: 'No internet connection detected, please try again.');
      }

      return handler.next(e);
    }));
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