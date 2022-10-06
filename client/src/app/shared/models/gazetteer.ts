export interface Province {
  type: string;
  code: number;
  nameKH: string;
  nameEN: string;
}

export interface District {
  type: string;
  code: number;
  provinceCode: number;
  nameKH: string;
  nameEN: string;
}

export interface Commune {
  type: string;
  code: number;
  districtCode: number;
  nameKH: string;
  nameEN: string;
}

export interface Village {
  type: string;
  code: number;
  communeCode: number;
  nameKH: string;
  nameEN: string;
}
