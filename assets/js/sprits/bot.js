import {ShowBot} from '../shows/showBot.js';
import {BotCut} from '../spritsCut/botCut.js';

export class Bot { 
    constructor(ctx,bos,timer,showWindow){
        this.botCut = new BotCut();
        this.xBot = 0;
        this.showBotFrames = new ShowBot(ctx,this,this.botCut,bos, showWindow); //
        this.yBot = 0;    
        this.dimensionBot = 100;
        this.flagList = [];
        this.coord = []; // matrix of obstacles cordinates
        this.timer = timer;
        this.bos = bos;
    }

    directionRight = () => { //moviment bot to right
        if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()){
            this.showBotFrames.drawFrame(160, false,false,true);
            this.flagList = [true,false,false,false];
        }
    }
    directionLeft = () => { //moviment bot to left
        if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()){
            this.showBotFrames.drawFrame(460, false,false,false); 
            this.flagList = [false,true,false,false];  
        }
    }
    directionDown = () => { //moviment bot to down
        if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()){
            this.showBotFrames.drawFrame(0, false,true,false);
            this.flagList = [false,false,true,false];  
        }
    }
    directionUp = () => { //moviment bot to up
        if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()){
            this.showBotFrames.drawFrame(320,false,true,true, 300);
            this.flagList = [false,false,false,true];
        }
    }

    stateStop = () => { 
        if(!this.timer.getIsEnd()){
            if(this.flagList[0]) this.showBotFrames.drawFrame(160, true,false,true);
            else if(this.flagList[1]) this.showBotFrames.drawFrame(460, true,false,false);
            else if(this.flagList[2]) this.showBotFrames.drawFrame(0, true,true,false);
            else if(this.flagList[3]) this.showBotFrames.drawFrame(320,true,true,true, 300);
        }
    }

    stopDown = () =>  {if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()) this.showBotFrames.drawFrame(0, true,true,false);}
    stopRight = () =>  {if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()) this.showBotFrames.drawFrame(160,true,false,false);}
    stopLeft = () =>  {if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()) this.showBotFrames.drawFrame(460, true,false,false);}
    stopUp = () => {if(!this.timer.getIsEnd() && !this.bos.getGameOver() && !this.timer.getSplashScreen()) this.showBotFrames.drawFrame(320,true,true,true, 300);}

    getCtx(){return this.ctx;}
    getCoord(){return this.coord;}
    getXBot() {return this.xBot;}
    getYBot() {return this.yBot;}
    getFlagList(){return this.flagList;}
    getDimensionBot(){return this.dimensionBot;}

    setXBot(value){this.xBot += value;}
    setYBot(value){this.yBot += value;}
    setCoord(coordX, coordY){//set the coordinates of the obstacles
        this.coord.push([coordX, coordY]);
    }

}