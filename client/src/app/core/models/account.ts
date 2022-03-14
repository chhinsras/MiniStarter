export class Token {
  token: string;
  refreshToken: string;
  refreshTokenExpiryTime: Date;
}

export class Login {
  userName: string;
  password: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export class ResetPassword {
  email: string;
  password: string;
  token: string;
}

export class ConfirmEmailParams {
    userId: string;
    code: string;
}

export class ConfirmPhoneNumberParams {
    userId: string;
    code: string;
}
