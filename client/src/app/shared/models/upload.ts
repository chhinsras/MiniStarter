export class Upload {
  fileName: string;
  extension: string;
  uploadType: UploadType;
  data: string | ArrayBuffer;
}

export enum UploadType {
  Product,
  Brand,
}
