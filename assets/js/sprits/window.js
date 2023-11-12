import {Grove} from "./grove.js";
let temp = document.getElementById("temp");
let tree = document.getElementById("tree");
export class Window{
    constructor(ctx, bot){
        this.temperature = 300;
        this.grove = new Grove(ctx, bot);
        this.groveNum = 0;
        this.fase = "Nordeste";
        this.setTemp(this.temperature);
        this.setTree(this.groveNum);
    }
    getGrove(){
        this.groveNum++;
        this.updateTemperature();
        return this.grove;
    }
    updateTemperature(){
        let tempNow = this.temperature - (this.groveNum*20);
        this.setTemp(tempNow);
        this.setTree(this.groveNum);
    }
    setTree(x){
        tree.innerHTML = x + " árvores";
    }
    setTemp(x){
        temp.innerHTML = x + "° grau celsius";
    }
    //° grau celsius
}