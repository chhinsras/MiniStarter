import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
  int? id;
  String userName;
  String? email;
  String? firstName;
  String? lastName;
  String? imageUrl;
  bool isActive;
  String? token;
  String? refreshToken;
  String? refreshTokenExpiryTime;
  bool? darkMode;

  User(
      {this.id,
      required this.userName,
      this.email,
      this.firstName,
      this.lastName,
      this.imageUrl,
      required this.isActive,
      this.token,
      this.refreshToken,
      this.refreshTokenExpiryTime,
      this.darkMode});

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
  Map<String, dynamic> toJson() => _$UserToJson(this);
}

class UserParams {
  String? searchTerm;
  int pageNumber = 1;
  int pageSize = 20;
  String? orderBy;
}
