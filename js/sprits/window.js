import {Grove} from "./grove.js";
export class Window{
    constructor(ctx, bot){
        this.grove = new Grove(ctx, bot);
    }
    getGrove(){
        return this.grove;
    }
    
}