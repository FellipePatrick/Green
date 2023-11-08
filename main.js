import {Robo} from './js/robo.js';
let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");
let aux;
let flagList = [false,false,false,false]; // lista que determina qual direção o boneco está 
const imagem = new Image();
const imagemW = new Image();
const imagemA = new Image();
imagemA.src = "./img/arvore.png";
imagem.src = "./img/robo.png";
imagemW.src = "./img/water.png";
const robo = new Robo(0,0,0);
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" ) {
        if(robo.getX() < 160){
            robo.setX(160);
        }else{
            robo.setX(0);
        }
        if(robo.getY() <= 515){
            robo.setY(10);
        }
        directionRight();
        flagList = [true,false,false,false];
    }else if(event.key === "ArrowLeft"){
        if(robo.getX() < 160){
            robo.setX(160);
        }else{
            robo.setX(0);
        }
        if(robo.getY()>0){
            robo.setY(-10);
        }
        flagList = [false,true,false,false];
        directionLeft();
    }else if(event.key === "ArrowDown"){
        if(aux < 450){
            aux+=150;
            robo.setX(aux);
        }else{
            aux = 0;
            robo.setX(aux);
        }
        if(robo.getZ() <= 515){
            robo.setZ(10);
        }
        directionDown();
        flagList = [false,false,true,false];
    }else if(event.key === "ArrowUp"){
        if(aux < 450){
            aux+=150;
            robo.setX(aux);
        }else{
            aux = 0;
            robo.setX(aux);
        }
        if(robo.getZ() > 0){
            robo.setZ(-(10));
        }
        flagList = [false,false,false,true];
        directionUp();
    }else if(event.key === "Enter"){
        showerPlants();
    }
  });
document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight") {
        stopRight();
    }else if(event.key === "ArrowLeft"){
        stopLeft();
    }else if(event.key === "ArrowDown"){
        stopDown();
    }else if(event.key === "ArrowUp"){
        stopUp();
    }
});

// Animação para plantar as arvores

const showerPlants = () => { //planta uma arvore
    if(flagList[0]){
        ctx.drawImage( imagemA, 20, 20, 100, 100, robo.getY()+100, robo.getZ(), 120, 120);
    }else if(flagList[1]){
        ctx.drawImage(imagemA, 20, 20, 100, 100, robo.getY()-100,  robo.getZ(), 120, 120);
    }else if(flagList[2]){
        ctx.drawImage(imagemA, 20, 20, 100, 100, robo.getY(),  robo.getZ()+100, 120, 120);
    }else if(flagList[3]){
        ctx.drawImage(imagemA, 20, 20, 100, 100, robo.getY(),  robo.getZ()-100, 120, 120);
    }
}

// Codigo para a limpeza

const clear = () => {
    ctx.clearRect(robo.getY(),robo.getZ(),robo.getCorte(),robo.getCorte());// Limpar o canvas em cada quadro
    //ctx.fillRect(y,z,dH,dH); pinta o cenario por onde o boneco passa
}



// Movimentação do ROBO



const directionRight = () => { //movimentação do robo para direita
    const drawFrame = () => {
        clear();
        ctx.drawImage(imagem,robo.getX(),160,150,150, robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();   
}
const stopRight = () =>  { 
    const drawFrame = () => {
        robo.setX(0);
        clear();
        ctx.drawImage(imagem,robo.getX(),160,150,150, robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();
}
const directionLeft = () => { //movimentação para a esquerda
    const drawFrame = () => {
        clear();
        ctx.drawImage(imagem,robo.getX(),460,150,150, robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();   
}
const stopLeft = () =>  {
    const drawFrame = () => {
        robo.setX(160);
        clear();
        ctx.drawImage(imagem,robo.getX(),460,150,150, robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();
}

const directionDown = () => { //movimentação para baixo
    const drawFrame = () => {
        clear();
        ctx.drawImage(imagem,robo.getX(),0,150,150, robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();   
}
const stopDown = () =>  {
    const drawFrame = () => {
        robo.setX(300);
        clear();
        ctx.drawImage(imagem,robo.getX(),0,150,150,robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();
}

const directionUp = () => { //movimentação para cima
    const drawFrame = () => {
        clear();
        ctx.drawImage(imagem,robo.getX(),320,150,150, robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();   
}
const stopUp = () => {
    const drawFrame = () => {
        robo.setX(300);
        clear();
        ctx.drawImage(imagem,robo.getX(),320,150,150, robo.getY(),robo.getZ(),100,100);
    }
    drawFrame();
}


