import {ShowBot} from '../shows/showBot.js';
import {ShowWindow} from '../shows/showWindow.js';
import {BotCut} from '../spritsCut/botCut.js';
let timer = document.getElementById("timeLevel");

export class Bot { 
    constructor(ctx){
        this.botCut = new BotCut();
        this.xBot = 0;
        this.showBotFrames = new ShowBot(ctx,this,this.botCut); //
        this.showWindow = new ShowWindow(ctx);
        this.yBot = 0;    
        this.dimensionBot = 100;
        this.flagList = [];
        this.coord = []; // matrix of obstacles cordinates]
    }

    end(){
        if(timer.innerHTML[0]+timer.innerHTML[1] <=  0){
            return true;
        }else{
            this.showWindow.clear();
        } 
        return false;

    }

    directionRight = () => { //moviment bot to right
        if(!this.end()){
            this.showBotFrames.drawFrame(160, false,false,true);
            this.flagList = [true,false,false,false];
        }   
    }
    directionLeft = () => { //moviment bot to left
        if(!this.end()){
            this.showBotFrames.drawFrame(460, false,false,false); 
            this.flagList = [false,true,false,false];  
        }
    }
    directionDown = () => { //moviment bot to down
        if(!this.end()){
            this.showBotFrames.drawFrame(0, false,true,false);
            this.flagList = [false,false,true,false];  
        }
    }
    directionUp = () => { //moviment bot to up
        if(!this.end()){
            this.showBotFrames.drawFrame(320,false,true,true, 300);
            this.flagList = [false,false,false,true];
        }
    }

    stopDown = () =>  {
        if(!this.end())
            this.showBotFrames.drawFrame(0, true,true,false);
    }
    stopRight = () =>  {
        if(!this.end())
            this.showBotFrames.drawFrame(160,true,false,false);
    }
    
    stopLeft = () =>  {
        if(!this.end())
            this.showBotFrames.drawFrame(460, true,false,false);
    }

    stopUp = () => {
        if(!this.end())
            this.showBotFrames.drawFrame(320,true,true,true, 300);
    }
    getCtx(){
        return this.ctx;
    }
    //define coordenados dos obstaculos
    setCoord(coordX, coordY){
        this.coord.push([coordX, coordY]);
    }
    getCoord(){
        return this.coord;
    }
    getXBot() {return this.xBot;}
    getYBot() {return this.yBot;}
    getFlagList(){return this.flagList;} //return
    getDimensionBot(){return this.dimensionBot;}
    setXBot(value){this.xBot += value;}
    setYBot(value){this.yBot += value;}

}