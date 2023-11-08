let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");
let ctx2 = canvas.getContext("2d");
let x, y = 0, z = 0;
let flagList = [false,false,false,false];
const imagem = new Image();
const imagemW = new Image();
const imagemA = new Image();
imagemA.src = "arvore.png";
imagem.src = "robo.jpg";
imagemW.src = "water.png";
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" ) {
        if(x < 160){
            x+=160;
        }else{
            x = 0;
        }
        if(y <= 515){
            y+=10;
        }
        directionRight();
        flagList = [true,false,false,false];
    }else if(event.key === "ArrowLeft"){
        if(x < 160){
            x+=160;
        }else{
            x = 0;
        }
        if(y > 0){
            y-=10;
        }
        flagList = [false,true,false,false];
        directionLeft();
    }else if(event.key === "ArrowDown"){
        if(x < 450){
            x+=150;
        }else{
            x = 0;
        }
        if(z <= 515){
            z+=10;
        }
        directionDown();
        flagList = [false,false,true,false];
    }else if(event.key === "ArrowUp"){
        if(x < 450){
            x+=150;
        }else{
            x = 0;
        }
        if(z > 0){
            z-=10;
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

const showerPlants = () => {
    if(flagList[0]){
        let i = 0;
        const drawFrame = () => {
            // Limpar o canvas em cada quadro
               if (i <= 200) {
                   if(i == 0){
                       ctx.clearRect(0, 0, canvas.width, canvas.height);
                       ctx.drawImage(imagemW, i, 0, 150, 150, y, z+20, 100, 100);
                   }else if(i == 200){
                       ctx.clearRect(0, 0, canvas.width, canvas.height);
                       ctx.drawImage(imagemW, i, 0, 150, 150, y, z+20, 100, 100);          
                   }
                   i+=200;
               } else {
                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   ctx.drawImage(imagemA, 20, 20, 100, 100, y+10, z, 120, 120);
               }
               
               setTimeout(() => {
                   requestAnimationFrame(drawFrame); // Chamar novamente para criar uma animação contínua com atraso de 2000 ms (2 segundos)
               }, 500);
           }
           drawFrame(); 
    }else if(flagList[1]){
        ctx2.drawImage(imagemW,0,0,150,150, y-55,z,100,100);
    }else if(flagList[2]){
        ctx2.drawImage(imagemW,0,0,150,150, y,z+25,100,100);
    }else if(flagList[3]){
        ctx2.drawImage(imagemW,0,0,150,150, y,z-85,100,100);
    }
}


const directionRight = () => { //movimentação do robo para direita
    const drawFrame = () => {
        setTimeout(100);
        ctx.clearRect(0, 0, canvas.width, canvas.height);// Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,160,150,150, y,z,100,100);
    }
    drawFrame();   
}
const stopRight = () =>  { 
    const drawFrame = () => {
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);// Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,160,150,150, y,z,100,100);
    }
    drawFrame();
}
const directionLeft = () => { //movimentação para a esquerda
    const drawFrame = () => {
        setTimeout(100);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,460,150,150, y,z,100,100);
    }
    drawFrame();   
}
const stopLeft = () =>  {
    const drawFrame = () => {
        x = 160;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,460,150,150, y,z,100,100);
    }
    drawFrame();
}
const directionDown = () => { //movimentação para baixo
    const drawFrame = () => {
        setTimeout(100);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,0,150,150, y,z,100,100);
    }
    drawFrame();   
}
const stopDown = () =>  {
    const drawFrame = () => {
        x = 300;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,0,150,150, y,z,100,100);
    }
    drawFrame();
}

const directionUp = () => { //movimentação para cima
    const drawFrame = () => {
        setTimeout(100);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,320,150,150, y,z,100,100);
    }
    drawFrame();   
}
const stopUp = () => {
    const drawFrame = () => {
        x = 300;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
        ctx.drawImage(imagem,x,320,150,150, y,z,100,100);
    }
    drawFrame();
}

