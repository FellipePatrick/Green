export class Images{
    imgRobo = new Image();
    imgGrove = new Image();
    imgBos = new Image();
    splashScreen = new Image();
    levelScreen = new Image();
    constructor(){
        this.imgGrove.src = "./assets/img/arvore.png";
        this.imgRobo.src = "./assets/img/robo.png";
        this.imgBos.src = "./assets/img/bos.png";
        this.splashScreen.src = "./assets/img/telaInicial.png";
        this.levelScreen.src = "./assets/img/cenarioNorte.png";
    }
    getImgGrove(){ return this.imgGrove;}
    getImgRobo(){ return this.imgRobo;}
    getImgBos(){return this.imgBos;}
    getLevelScreen(){return this.levelScreen;}
    getSplashScreen(){return this.splashScreen;}
}