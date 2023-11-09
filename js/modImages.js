export class Images{
    imagem = new Image();
    imagemW = new Image();
    imagemA = new Image();
    constructor(){
        this.imagemA.src = "./img/arvore.png";
        this.imagem.src = "./img/robo.png";
        this.imagemW.src = "./img/water.png";
    }
    getImagemA(){
        return this.imagemA;
    }
    getImagem(){
        return this.imagem;
    }
    getImagemW(){
        return this.imagemW;
    }
}