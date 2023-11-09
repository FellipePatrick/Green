import {ModShow} from './modShow.js';
import {BotCut} from './botCut.js';
export class Bot { 
    constructor(ctx){
        this.botCut = new BotCut();
        this.xBot = 0;
        this.showFrames = new ModShow(ctx,this,this.botCut); // trying talking with modShow with this and this.botCut
        this.yBot = 0;    
        this.dimensionBot = 100;
        this.flagList = [];
    }

    directionRight = () => { //moviment bot to right
        this.showFrames.drawFrame(160, false,false,true);
        this.flagList = [true,false,false,false];   
    }
    
    directionLeft = () => { //moviment bot to left
        this.showFrames.drawFrame(460, false,false,false); 
        this.flagList = [false,true,false,false];  
    }

    directionDown = () => { //moviment bot to down
        this.showFrames.drawFrame(0, false,true,false);
        this.flagList = [false,false,true,false];  
    }
    directionUp = () => { //moviment bot to up
        this.showFrames.drawFrame(320,false,true,true, 300);
        this.flagList = [false,false,false,true];
    }

    stopDown = () =>  {
        this.showFrames.drawFrame(0, true,true,false);
    }
    stopRight = () =>  { 
        this.showFrames.drawFrame(160,true,false,false);
    }
    
    stopLeft = () =>  {
        this.showFrames.drawFrame(460, true,false,false);
    }

    stopUp = () => {
        this.showFrames.drawFrame(320,true,true,true, 300);
    }

    getXBot() {return this.xBot;}
    getYBot() {return this.yBot;}
    setXBot(value){this.xBot += value;}
    setYBot(value){this.yBot += value;}
    getDimensionBot(){return this.dimensionBot;}

}