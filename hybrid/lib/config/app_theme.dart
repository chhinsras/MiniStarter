import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hybrid/config/colors.dart';

class AppTheme {
  static TextTheme lightTextTheme = TextTheme(
    displayLarge: GoogleFonts.moul(
      fontSize: 57.0,
      fontWeight: FontWeight.bold,
      color: Colors.black,
    ),
    displayMedium: GoogleFonts.moul(
      fontSize: 45.0,
      fontWeight: FontWeight.w700,
      color: Colors.black,
    ),
    displaySmall: GoogleFonts.moul(
      fontSize: 36.0,
      fontWeight: FontWeight.w600,
      color: Colors.black,
    ),
    headlineLarge: GoogleFonts.moul(
      fontSize: 32.0,
      fontWeight: FontWeight.w600,
      color: Colors.black,
    ),
    headlineMedium: GoogleFonts.moul(
      fontSize: 28.0,
      fontWeight: FontWeight.w600,
      color: Colors.black,
    ),
    headlineSmall: GoogleFonts.moul(
      fontSize: 24.0,
      fontWeight: FontWeight.w600,
      color: Colors.black,
    ),
    titleLarge: GoogleFonts.moul(
      fontSize: 22.0,
      fontWeight: FontWeight.w700,
      color: Colors.black,
    ),
    titleMedium: GoogleFonts.moul(
      fontSize: 16.0,
      fontWeight: FontWeight.w700,
      color: Colors.black,
    ),
    titleSmall: GoogleFonts.moul(
      fontSize: 14.0,
      fontWeight: FontWeight.w700,
      color: Colors.black,
    ),
    labelLarge: GoogleFonts.battambang(
      fontSize: 18.0,
      color: Colors.black,
      fontWeight: FontWeight.w500,
    ),
    labelMedium: GoogleFonts.battambang(
      fontSize: 16.0,
      color: Colors.black,
      fontWeight: FontWeight.w500,
    ),
    labelSmall: GoogleFonts.battambang(
      fontSize: 14.0,
      color: Colors.black,
      fontWeight: FontWeight.w500,
    ),
    bodyLarge: GoogleFonts.battambang(
      fontSize: 16.0,
      fontWeight: FontWeight.w500,
      color: Colors.black,
    ),
    bodyMedium: GoogleFonts.battambang(
      fontSize: 14.0,
      fontWeight: FontWeight.w500,
      color: Colors.black,
    ),
    bodySmall: GoogleFonts.battambang(
      fontSize: 12.0,
      fontWeight: FontWeight.w500,
      color: Colors.black,
    ),
  );

  static TextTheme darkTextTheme = TextTheme(
    displayLarge: GoogleFonts.moul(
      fontSize: 57.0,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
    displayMedium: GoogleFonts.moul(
      fontSize: 45.0,
      fontWeight: FontWeight.w700,
      color: Colors.white,
    ),
    displaySmall: GoogleFonts.moul(
      fontSize: 36.0,
      fontWeight: FontWeight.w600,
      color: Colors.white,
    ),
    headlineLarge: GoogleFonts.moul(
      fontSize: 32.0,
      fontWeight: FontWeight.w600,
      color: Colors.white,
    ),
    headlineMedium: GoogleFonts.moul(
      fontSize: 28.0,
      fontWeight: FontWeight.w600,
      color: Colors.white,
    ),
    headlineSmall: GoogleFonts.moul(
      fontSize: 24.0,
      fontWeight: FontWeight.w600,
      color: Colors.white,
    ),
    titleLarge: GoogleFonts.moul(
      fontSize: 22.0,
      fontWeight: FontWeight.w700,
      color: Colors.white,
    ),
    titleMedium: GoogleFonts.moul(
      fontSize: 16.0,
      fontWeight: FontWeight.w700,
      color: Colors.white,
    ),
    titleSmall: GoogleFonts.moul(
      fontSize: 14.0,
      fontWeight: FontWeight.w700,
      color: Colors.white,
    ),
    labelLarge: GoogleFonts.battambang(
      fontSize: 18.0,
      color: Colors.white,
      fontWeight: FontWeight.w500,
    ),
    labelMedium: GoogleFonts.battambang(
      fontSize: 16.0,
      color: Colors.white,
      fontWeight: FontWeight.w500,
    ),
    labelSmall: GoogleFonts.battambang(
      fontSize: 14.0,
      color: Colors.white,
      fontWeight: FontWeight.w500,
    ),
    bodyLarge: GoogleFonts.battambang(
      fontSize: 16.0,
      fontWeight: FontWeight.w500,
      color: Colors.white,
    ),
    bodyMedium: GoogleFonts.battambang(
      fontSize: 14.0,
      fontWeight: FontWeight.w500,
      color: Colors.white,
    ),
    bodySmall: GoogleFonts.battambang(
      fontSize: 12.0,
      fontWeight: FontWeight.w500,
      color: Colors.white,
    ),
  );

  static ThemeData light() {
    return ThemeData(
      visualDensity: VisualDensity.adaptivePlatformDensity,
      primaryColor: colorPrimary,
      backgroundColor: colorWhite,
      brightness: Brightness.light,
      checkboxTheme: CheckboxThemeData(
        fillColor: MaterialStateColor.resolveWith(
          (states) {
            return Colors.black;
          },
        ),
      ),
      appBarTheme: const AppBarTheme(
        foregroundColor: colorBlack,
        backgroundColor: colorPrimary,
      ),
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
        foregroundColor: colorWhite,
        backgroundColor: colorBlack,
      ),
      bottomNavigationBarTheme: const BottomNavigationBarThemeData(
        selectedItemColor: colorPrimary,
      ),
      textTheme: lightTextTheme,
    );
  }

  static ThemeData dark() {
    return ThemeData(
      visualDensity: VisualDensity.adaptivePlatformDensity,
      primaryColor: colorBlack,
      backgroundColor: colorBlack,
      brightness: Brightness.dark,
      appBarTheme: const AppBarTheme(
        foregroundColor: colorWhite,
        backgroundColor: colorBlack,
      ),
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
        foregroundColor: colorWhite,
        backgroundColor: colorPrimary,
      ),
      bottomNavigationBarTheme: const BottomNavigationBarThemeData(
        selectedItemColor: colorPrimary,
      ),
      textTheme: darkTextTheme,
    );
  }
}
