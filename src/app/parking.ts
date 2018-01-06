export class Parking{
    constructor( 
        public id: number,
        public objectid: number,
        public point_lat: string,
        public point_lng: string,
        public aantal_plaatsen: string,
        public kleur: string,
        public jrnr_gr_cbs: string,
        public adres: string,
        public start_date: string,
        public gisid: string )
    {

    }
}