export interface IPaging {
    next: number[];
    last: number[];
    records: number;
    pages: number;
    pageCurrent: number;
    pageNext: number;
    pagePrev?: any;
    pageSize: number;
  }
  
  export interface IParking {
    id: number;
    objectid: number;
    point_lat: string;
    point_lng: string;
    aantal_plaatsen: string;
    kleur: string;
    jrnr_gr_cbs: string;
    adres: string;
    start_date: string;
    gisid: string;
  }
  
  export interface IData {
    paging: IPaging;
    parking: IParking[];
  }
  