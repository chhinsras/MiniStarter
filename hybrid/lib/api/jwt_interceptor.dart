import 'package:dio/dio.dart';
import 'package:hybrid/config/app_cache.dart';

class JwtInterceptor extends Interceptor {
  final Dio dio;
  final AppCache _appCache = AppCache();

  JwtInterceptor({required this.dio});

  @override
  void onRequest(
      RequestOptions options, RequestInterceptorHandler handler) async {
    String? accessToken = await _appCache.getUserToken();
    if (accessToken != null) {
      // check if token is expired
      // try refresh token
      options.headers['Authorization'] = 'Bearer $accessToken';
    }

    return handler.next(options);
  }
}
