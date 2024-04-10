import Buyable from './Buyable';
export default class Move implements Buyable {
    constructor(
        public year: number,
        public country: string,
        public slogan: string,
        public genre: string,
        public time: any,
        public prise: number,
        public discounte?: number,
    ){
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
        this.prise= prise;
        this.discounte = discounte;
    }
}