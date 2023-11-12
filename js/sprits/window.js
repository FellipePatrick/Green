import {Plant} from "./plant.js";
export class Window{
    constructor(ctx, bot){
        this.plant = new Plant(ctx, bot);
    }
    getPlant(){
        return this.plant;
    }
    
}