import 'package:dio/dio.dart';
import 'package:hybrid/models/app_cache.dart';
import 'package:hybrid/services/account_service.dart';
import 'package:jwt_decoder/jwt_decoder.dart';

class JwtInterceptor extends Interceptor {
  final Dio dio;
  final AppCache _appCache = AppCache();

  JwtInterceptor({required this.dio});

  @override
  void onRequest(
      RequestOptions options, RequestInterceptorHandler handler) async {
    String? accessToken = await _appCache.getUserToken();
    if (accessToken != null) {
      // try refresh token
      await refreshToken(options);
      options.headers['Authorization'] = 'Bearer $accessToken';
    }

    return handler.next(options);
  }

  refreshToken(RequestOptions options) async {
    if (!options.uri.toString().contains('account')) {
      String? localToken = await _appCache.getUserToken();
      if (localToken == null) return;

      bool isNotExpired = JwtDecoder.isExpired(localToken);
      var remainingTime = JwtDecoder.getRemainingTime(localToken);
      if (!isNotExpired && remainingTime.inMinutes < 2) {
        await AccountService().tryRefreshingToken();
      }
    }
  }
}
