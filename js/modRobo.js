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
        this.xValue = 0;
    }
    getxValue(){
        return this.xValue;
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
    setXValue(value){
        if(value != 0){
            this.xValue+=value;
        }else{
            this.xValue = 0;    
        }
        this.setX(this.xValue);
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
    drawFrame = (value,states,stop, isY, front) => { //160 515 160
        // para saber se o boneco está parado ou não
        this.clear();
        if(stop){
            this.setX(states);
        }else{
            if(!isY){
                if(this.setXValue() < 160){
                    this.setXValue(160);
                }else{
                    this.setXValue(0);
                }
                if(front){
                    if(this.getY() <= 515){
                        this.setY(10);
                    }
                }else{
                    if(this.getY() > 0){ 
                        this.setY(-10);
                    }
                }
            }else{
                if(this.setXValue() < 450){
                    this.setXValue(150);
                }else{
                    this.setXValue(0);
                }
                if(!front){
                    if(this.getZ() <= 515){
                        this.setZ(10);
                    }
                }else{
                    if(this.getZ() > 0){
                        this.setZ(-10);
                    }
                }
            }
        }
        this.ctx.drawImage(this.images.getImagem(),this.getX(),value,150,150, this.getY(),this.getZ(),100,100);
    }
    // Movimentação do ROBO
    directionRight = () => { //movimentação do robo para direita
        this.drawFrame(160, 0, false,false,true);
        this.flagList = [true,false,false,false];   
    }
    stopRight = () =>  { 
        this.drawFrame(160,0,true,false,false);
    }
    directionLeft = () => { //movimentação para a esquerda
        this.drawFrame(460,0,false,false,false); 
        this.flagList = [false,true,false,false];  
    }
    stopLeft = () =>  {
        this.drawFrame(460,0,true,false,false);
    }
    directionDown = () => { //movimentação para baixo
        this.drawFrame(0,0,false,true,false);
        this.flagList = [false,false,true,false];   
    }
    stopDown = () =>  {
        this.drawFrame(0,0,true,true,false);
    }
    directionUp = () => { //movimentação para cima
        this.drawFrame(320,300,false,true,true);
        this.flagList = [false,false,false,true];
    }
    stopUp = () => {
        this.drawFrame(320,300,true,true,true);
    }
}

// limite up e down 150 ate 450

// limete right e leeft 160

