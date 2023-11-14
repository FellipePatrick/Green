export class Images{
    imgRobo = new Image();
    imgGrove = new Image();
    imgBos = new Image();
    constructor(){
        this.imgGrove.src = "./assets/img/arvore.png";
        this.imgRobo.src = "./assets/img/robo.png";
        this.imgBos.src = "./assets/img/bos.png";
    }
    getImgGrove(){ return this.imgGrove;}
    getImgRobo(){ return this.imgRobo;}
    getImgBos(){return this.imgBos;}
}