import {ShowGrove} from '../shows/showGrove.js';
export class Grove{
    constructor(ctx,bot){
        this.bot = bot;
        this.ctx = ctx;
        this.xGrove = 0;
        this.ShowGrove = new ShowGrove(ctx,bot);
    }
    getShowGrove(){return this.ShowGrove;}
    getCoordGrove(){return this.ShowGrove.getCoord();}
}