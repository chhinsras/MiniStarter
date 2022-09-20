export class Upload {
  file: File;
  uploadType: UploadType;
}

export enum UploadType {
  UserPhoto = 0,
  Product = 1,
  Brand = 2,
}
