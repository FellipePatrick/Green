import {ShowPlant} from '../shows/showPlant.js';
export class Plant{
    constructor(ctx,bot){
        this.bot = bot;
        this.ctx = ctx;
        this.ShowPlant = new ShowPlant(ctx,bot);
    }
    getShowPlant(){
        return this.ShowPlant;
    }
    getCoordPlant(){
        return this.ShowPlant.getCoord();
    }
}