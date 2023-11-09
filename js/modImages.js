export class Images{
    imagem = new Image();
    imagemA = new Image();
    constructor(){
        this.imagemA.src = "./img/arvore.png";
        this.imagem.src = "./img/robo.png";
    }
    getImagemA(){
        return this.imagemA;
    }
    getImagem(){
        return this.imagem;
    }
}