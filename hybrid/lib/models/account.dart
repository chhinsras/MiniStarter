import 'package:json_annotation/json_annotation.dart';
part 'account.g.dart';

@JsonSerializable()
class Token {
  String? token;
  String? refreshToken;
  DateTime? refreshTokenExpiryTime;

  Token(
      {String? token, String? refreshToken, DateTime? refreshTokenExpiryTime});
  factory Token.fromJson(Map<String, dynamic> json) => _$TokenFromJson(json);
  Map<String, dynamic> toJson() => _$TokenToJson(this);
}

@JsonSerializable()
class Login {
  String? userName;
  String? password;

  Login({required this.userName, required this.password});

  factory Login.fromJson(Map<String, dynamic> json) => _$LoginFromJson(json);
  Map<String, dynamic> toJson() => _$LoginToJson(this);
}

class RefreshTokenRequest {
  String? token;
  String? refreshToken;
}

class ResetPassword {
  String? email;
  String? password;
  String? token;
}

class ConfirmEmailParams {
  String? userId;
  String? code;
}

class ConfirmPhoneNumberParams {
  String? userId;
  String? code;
}
