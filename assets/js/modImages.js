export class Images{
    imgRobo = new Image();
    imgGrove = new Image();
    constructor(){
        this.imgGrove.src = "./assets/img/arvore.png";
        this.imgRobo.src = "./assets/img/robo.png";
    }
    getImgGrove(){ return this.imgGrove;}
    getImgRobo(){ return this.imgRobo;}
}