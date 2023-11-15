export class Images{
    imgRobo = new Image();
    imgGrove = new Image();
    imgBos = new Image();
    splashScreen = new Image();
    levelScreen = new Image();
    gamerOver = new Image();
    win = new Image();
    constructor(){
        this.imgGrove.src = "./assets/img/arvore.png";
        this.imgRobo.src = "./assets/img/robo.png";
        this.imgBos.src = "./assets/img/bos.png";
        this.levelScreen.src = "./assets/img/cenarioNorte.png";
        this.gamerOver.src = "./assets/img/gameOver.png";
        this.win.src = "./assets/img/win.png";
        this.splashScreen.src = "./assets/img/telaInicial.png";
    }
    getImgGrove(){ return this.imgGrove;}
    getImgRobo(){ return this.imgRobo;}
    getImgBos(){return this.imgBos;}
    getLevelScreen(){return this.levelScreen;}
    getSplashScreen(){return this.splashScreen;}
    getGameOver(){return this.gamerOver;}
    getWin(){return this.win;}
}