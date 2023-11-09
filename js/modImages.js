export class Images{
    imgRobo = new Image();
    imgGrove = new Image();
    constructor(){
        this.imgGrove.src = "./img/arvore.png";
        this.imgRobo.src = "./img/robo.png";
    }
    getImgGrove(){ return this.imgGrove;}
    getImgRobo(){ return this.imgRobo;}
}