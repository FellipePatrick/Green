import {Images} from './modImages.js';
export class Robo { 
    constructor(ctx){
        this.images = new Images();
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.corteBoneco = 100;
        this.ctx = ctx;
        this.flagList = [];
    }
    getX(){
        return this.x;
    }
    setX(value){
        this.x = value;
    }
    getY(){
        return this.y;
    }
    setY(value){
        this.y += value;
    }
    getZ(){
        return this.z;
    }
    setZ(value){
        this.z += value;
    }
    getCorte(){
        return this.corteBoneco;
    }
    // Animação para plantar as arvores
    showerPlants = () => { //planta uma arvore
        if(this.flagList[0]){
            this.ctx.drawImage(this.images.getImagemA(), 120, 20, 100, 100, this.getY()+100, this.getZ(), 120, 120);
        }else if(this.flagList[1]){
            this.ctx.drawImage(this.images.getImagemA(), 20, 20, 100, 100, this.getY()-100,  this.getZ(), 120, 120);
        }else if(this.flagList[2]){
            this.ctx.drawImage(this.images.getImagemA(), 220, 20, 100, 100, this.getY(),  this.getZ()+100, 120, 120);
        }else if(this.flagList[3]){
            this.ctx.drawImage(this.images.getImagemA(), 20, 20, 100, 100, this.getY(),  this.getZ()-130, 120, 120);
        }
    }
    // Codigo para a limpeza
    clear = () => {
        this.ctx.clearRect(this.getY(),this.getZ(),this.getCorte(),this.getCorte());// Limpar o canvas em cada quadro
        //this.ctx.fillRect(robo.getY(),robo.getZ(),robo.getCorte(),robo.getCorte()); //pinta o cenario por onde o boneco passa
    }
    // Desenha robo
    drawFrame = (value,states,x, Xcompar, uP,right, xValue) => { //160 515 160
        if(!x){
            if(this.getX() < Xcompar){
                this.setX(xValue);
             }else{
                 this.setX(0);
             }
             if(right){
                 if(this.getY() <= 515){
                    if(uP){
                        this.setY(10);
                    }else{
                        this.setY(-10);
                    }
                 }
             }else{
                 if(this.getZ() > 0){
                    if(uP){
                        this.setZ(10);
                    }else{
                        this.setZ(-10);
                    }
                 }
             }
        }
        this.clear();
        if(x){
            this.setX(states);
        }
        this.ctx.drawImage(this.images.getImagem(),this.getX(),value,150,150, this.getY(),this.getZ(),100,100);
    }
    // Movimentação do ROBO
    directionRight = () => { //movimentação do robo para direita
        this.drawFrame(160, 0, false,160,true,true,160);
        this.flagList = [true,false,false,false];   
    }
    stopRight = () =>  { 
        this.drawFrame(160,0,true,160,true,true,160);
    }
    directionLeft = () => { //movimentação para a esquerda
        this.drawFrame(460,0,false,160,false,true,160); 
        this.flagList = [false,true,false,false];  
    }
    stopLeft = () =>  {
        this.drawFrame(460,0,true,160,false,true,160);
    }
    directionDown = () => { //movimentação para baixo
        this.drawFrame(0,0,false,450,false,false,150);
        this.flagList = [false,false,true,false];   
    }
    stopDown = () =>  {
        this.drawFrame(0,0,true,450,false,false,150);
    }
    directionUp = () => { //movimentação para cima
        this.drawFrame(320,300,false,450,true,false,150);
        this.flagList = [false,false,false,true];
    }
    stopUp = () => {
        this.drawFrame(320,300,true,450,true,false,150);
    }
}