export class BosCut{
    constructor(){
        this.xCut = 80;
        this.yCut = 80;
    }
    getXCut() {return this.xCut;}
    getYCut() {return this.yCut;}
    setXCut(value){
        if(value != 0) this.xCut+=value;
        else this.xCut = 0;       
    }
    setYCut(value){this.yCut = value;}
}