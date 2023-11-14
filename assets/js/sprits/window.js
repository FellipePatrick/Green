import { Level} from "../level/level.js";
import {Grove} from "./grove.js";
let temp = document.getElementById("temp");
let tree = document.getElementById("tree");
let time = document.getElementById("timeLevel");
let local = document.getElementById("local");
let localModal = document.getElementById("localModal");
let textModal = document.getElementById("textModal");
let imgModal = document.getElementById("imgModal");
export class Window{
    constructor(ctx, bot){
        this.level = this.setLevel(0);
        console.log(this.level);
        this.grove = new Grove(ctx, bot);
        this.groveNum = 0;
        this.setTemp(this.level.getTemperature());
        this.setTree(this.groveNum);
        this.setTime(this.level.getTime());
        this.setLocal(this.level.getLocal());
        this.setTextModal(this.level.getText());
        this.setImgModal(this.level.getPathImg());
    }
    getLevel(){
        return this.level;
    }
    getGrove(){
        if(this.level.getQtdTree() > this.groveNum){
            this.groveNum++;
            this.updateTemperature();
        }
        return this.grove;
    }
    updateTemperature(){
        let tempNow = this.level.getTemperature() - (this.groveNum*20);
        this.setTemp(tempNow);
        this.setTree(this.groveNum);
    }
    setLevel(x){
        switch(x){
            case 0:
                let pathImg = "./assets/img/imNordeste.jpg";
                let text = " A vegetação do Nordeste tinha relação direta com o clima da região. Áreas mais úmidas apresentavam formações mais densas, como florestas e matas. Nas áreas mais secas, como o semiárido, identificavam-se a presença da Caatinga, que possui plantas adaptadas às condições climáticas locais.";
                const level = new Level("Nordeste", 5,pathImg, text,30,200);
                return level;
            default:
                alert("Voce perdeu!");        
        }
    }
    setTree(x){
        tree.innerHTML = x + " árvores";
    }
    setTemp(x){
        temp.innerHTML = x + "° grau celsius";
    }
    setTime(x){
        time.innerHTML = x + " segundo(s)";
    }
    setLocal(x){
        local.innerHTML = x;
        localModal.innerHTML = x;
    }
    setImgModal(x){
        imgModal.src = x;
    }
    setTextModal(x){
        textModal.innerHTML = x;
    }
}