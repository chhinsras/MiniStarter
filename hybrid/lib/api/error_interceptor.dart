import 'package:dio/dio.dart';
import 'package:hybrid/helpers/helpers.dart';

class ErrorInterceptor extends Interceptor {
  final Dio dio;

  ErrorInterceptor({required this.dio});

  @override
  void onError(DioError err, ErrorInterceptorHandler handler) {
    switch (err.type) {
      case DioErrorType.connectTimeout:
      case DioErrorType.receiveTimeout:
      case DioErrorType.sendTimeout:
        Toastr.showError(
            text: 'The connection has timed out, please try again.');
        break;
      case DioErrorType.response:
        switch (err.response?.statusCode) {
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
            Toastr.showError(text: 'Unable to Connect to Server..');
            break;
        }
        break;
      case DioErrorType.cancel:
        break;
      case DioErrorType.other:
        Toastr.showError(text: err.message);
    }

    return handler.next(err);
  }
}
