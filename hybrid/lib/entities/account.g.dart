// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'account.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Token _$TokenFromJson(Map<String, dynamic> json) => Token(
      token: json['token'] as String?,
      refreshToken: json['refreshToken'] as String?,
      refreshTokenExpiryTime: json['refreshTokenExpiryTime'] == null
          ? null
          : DateTime.parse(json['refreshTokenExpiryTime'] as String),
    );

Map<String, dynamic> _$TokenToJson(Token instance) => <String, dynamic>{
      'token': instance.token,
      'refreshToken': instance.refreshToken,
      'refreshTokenExpiryTime':
          instance.refreshTokenExpiryTime?.toIso8601String(),
    };

Login _$LoginFromJson(Map<String, dynamic> json) => Login(
      userName: json['userName'] as String?,
      password: json['password'] as String?,
    );

Map<String, dynamic> _$LoginToJson(Login instance) => <String, dynamic>{
      'userName': instance.userName,
      'password': instance.password,
    };
