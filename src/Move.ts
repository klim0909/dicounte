import Buyable from './Buyable';
export default class Move implements Buyable {
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly genre: string;
    readonly time: any;
    prise: number;
    discounte?: number;

    constructor(year: number, country: string, slogan: string, genre: string, time: any, prise: number, discounre?: number){
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
        this.prise= prise;
        this.discounte = discounre;
    }
}