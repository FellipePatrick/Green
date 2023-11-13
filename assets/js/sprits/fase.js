
export class Fase{
    constructor(nome,local, qtdArvores, temperatura, time, img, text){
        this.nome = nome;
        this.local = local;
        this.qtdArvores = qtdArvores;
        this.temperatura = temperatura;
        this.time = time;
        this.img = img;
        this.text = text;
    }

    getNome(){
        return this.nome;
    }
    getLocal(){
        return this.local;
    }
    getQtdArvores(){
        return this.qtdArvores;
    }
    getTime(){
        return this.time;
    }
    getTemperatura(){
        return this.temperatura;
    }
    getImg(){
        return this.img;
    }
    getText(){
        return this.text;
    }
}