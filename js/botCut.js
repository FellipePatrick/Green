//Cuts of bot frames in canvas context
export class BotCut { 
    constructor(){
        this.xCut = 0;
        this.yCut = 0;
    }
    getXCut() {return this.xCut;}
    getYCut() {return this.yCut;}
    setXCut(value){
        if(value != 0) this.xCut+=value;
        else this.xCut = 0;       
    }
    setYCut(value){this.yCut = value;}

}