// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      id: json['id'] as int?,
      userName: json['userName'] as String,
      email: json['email'] as String?,
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      imageUrl: json['imageUrl'] as String?,
      isActive: json['isActive'] as bool,
      token: json['token'] as String?,
      refreshToken: json['refreshToken'] as String?,
      refreshTokenExpiryTime: json['refreshTokenExpiryTime'] as String?,
      darkMode: json['darkMode'] as bool?,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'id': instance.id,
      'userName': instance.userName,
      'email': instance.email,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'imageUrl': instance.imageUrl,
      'isActive': instance.isActive,
      'token': instance.token,
      'refreshToken': instance.refreshToken,
      'refreshTokenExpiryTime': instance.refreshTokenExpiryTime,
      'darkMode': instance.darkMode,
    };

UserParams _$UserParamsFromJson(Map<String, dynamic> json) => UserParams(
      pageNumber: json['pageNumber'] as int,
      pageSize: json['pageSize'] as int,
      searchTerm: json['searchTerm'] as String?,
      orderBy: json['orderBy'] as String?,
    );

Map<String, dynamic> _$UserParamsToJson(UserParams instance) =>
    <String, dynamic>{
      'pageNumber': instance.pageNumber,
      'pageSize': instance.pageSize,
      'searchTerm': instance.searchTerm,
      'orderBy': instance.orderBy,
    };
