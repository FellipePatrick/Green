import {Images} from '../mod/modImages.js';

export class Bos{
    constructor(ctx){
        this.ctx = ctx;
        this.image = new Images();
        this.bosCut = new BosCut();
        this.showBosFrames = new ShowBot(ctx,this,this.botCut); //
        this.showWindow = new ShowWindow(ctx);
        this.dimensionBos = 100;
        //this.flagList = [];
        //this.coord = []; // matrix of obstacles cordinates]
    }

}