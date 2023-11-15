import {ShowGrove} from '../shows/showGrove.js';
let tree = document.getElementById("tree");
export class Grove{
    constructor(ctx,bot){
        this.bot = bot;
        this.ctx = ctx;
        this.quantityGrove = 0;
        this.setTree(this.quantityGrove);
        this.ShowGrove = new ShowGrove(ctx,bot,this);
    }
    getShowGrove(){return this.ShowGrove;}
    getCoordGrove(){return this.ShowGrove.getCoord();}
    getQuantityGrove(){return this.quantityGrove;}
    setTree(){tree.innerHTML = (this.quantityGrove++) + " árvores";}
}