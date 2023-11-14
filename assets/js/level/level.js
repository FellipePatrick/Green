export class Level{
    constructor(local, qtdTree,pathImg, text, time, temperature){
        this.local = local;
        this.qtdTree = qtdTree;
        this.pathImg = pathImg;
        this.text = text;
        this.time = time;
        this. temperature = temperature;
    }
    getQtdTree(){
        return this.qtdTree;
    }
    getLocal= () =>{
        return this.local;
    }
    getPathImg= () =>{
        return this.pathImg;
    }
    getText = () =>{
        return this.text;
    }
    getTime= () =>{
        return this.time;
    }
    getTemperature = () =>{
        return this.temperature;
    }
}