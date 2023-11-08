 class Robo{
    constructor(x,y,z,canvas, ctx, imagem){
        this.x = x;
        this.y = y;
        this.z = z;
        this.canvas = canvas;
        this.ctx = ctx;
        this.imagem = imagem;
    }
    getX(){
        return this.x;
    }
    setX(valor){
        this.x += valor;
    }
    getY(){
        return this.y;
    }
    setY(valor){
        this.y+=valor;
    }
    getZ(){
        return this.z;
    }
    setZ(valor){
        this.z+=valor;
    }

    directionRight(){ //movimentação do robo para direita
        const drawFrame = () => {
            setTimeout(100);
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.this.x,160,150,150, this.y,this.z,100,100);
        }
        return drawFrame();   
    }
    stopRight() { 
        const drawFrame = () => {
            this.x = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.this.x,160,150,150, this.y,this.z,100,100);
        }
        drawFrame();
    }
    directionLeft(){ //movimentação para a esquerda
        const drawFrame = () => {
            setTimeout(100);
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.this.x,460,150,150, this.y,this.z,100,100);
        }
        drawFrame();   
    }
    stopLeft() {
        const drawFrame = () => {
            this.x = 160;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.x,460,150,150, this.y,this.z,100,100);
        }
        drawFrame();
    }
    directionDown(){ //movimentação para baixo
        const drawFrame = () => {
            setTimeout(100);
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.x,0,150,150, this.y,this.z,100,100);
        }
        drawFrame();   
    }
    stopDown() {
        const drawFrame = () => {
            this.x = 300;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.x,0,150,150, this.y,this.z,100,100);
        }
        drawFrame();
    }
    
    directionUp(){ //movimentação para cima
        const drawFrame = () => {
            setTimeout(100);
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.x,320,150,150, this.y,this.z,100,100);
        }
        drawFrame();   
    }
    stopUp() {
        const drawFrame = () => {
            x = 300;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas em cada quadro
            ctx.drawImage(imagem,this.x,320,150,150, this.y,this.z,100,100);
        }
        drawFrame();
    }
}