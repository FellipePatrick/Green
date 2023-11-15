export class BosCut{
    constructor(){
        this.xCut = 80;
        this.yCut = 80;
        this.dimensionBos = 150;
    }
    getXCut() {return this.xCut-60;}
    getYCut() {return this.yCut;}
    getDimensionBos() {return this.dimensionBos;}
    setXCut(value){
        if(value != 0) this.xCut+=value;
        else this.xCut = 0;       
    }
    setYCut(value){this.yCut = value;}
}