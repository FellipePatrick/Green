import {Images} from '../mod/modImages.js';
import { ShowGrove } from './showGrove.js';
import {ShowWindow} from '../shows/showWindow.js';
import {BosCut} from '../spritsCut/bosCut.js';
import {ShowBos} from '../shows/showBos.js';
export class ShowBot{
    constructor(ctx, bot, botCut,bos){
        this.images = new Images();
        this.Groves = new ShowGrove(ctx);
        this.ctx = ctx;
        this.bot = bot;
        this.botCut = botCut;
        this.bos = bos;
        this.showWindow = new ShowWindow(ctx);
        this.bosCut = new BosCut(); 
    }
    drawFrame = (yCut,stop, isY, front, states = 0) => {
        this.clear();
        //Stop Play
        if(stop){
            this.botCut.setXCut(states);
        }else{
            if(isY){   
                this.alterCut(450,150);  
                //Collision up and down
                if(this.canWalk()){
                    if(front){
                        if(this.bot.getYBot() > 0) this.bot.setYBot(-10);
                    }else{
                        if(this.bot.getYBot() <= 515) this.bot.setYBot(10);      
                    }
                }     
            }else{
                this.alterCut(160,160);  
                //Collision right and left
                if(this.canWalk()){
                    if(front){
                        if(this.bot.getXBot() <= 515) this.bot.setXBot(10);       
                    }else{
                        if(this.bot.getXBot() > -20) this.bot.setXBot(-10);     
                    }
                }
            }
        }
        this.ctx.drawImage(this.images.getImgRobo(),this.botCut.getXCut(),yCut,this.bot.getDimensionBot()+50,this.bot.getDimensionBot()+50, this.bot.getXBot(),this.bot.getYBot(),this.bot.getDimensionBot(),this.bot.getDimensionBot());
    }
    alterCut = (end, now) => {
        if(this.botCut.getXCut() < end) this.botCut.setXCut(this.botCut.getXCut()+now);
        else this.botCut.setXCut(0);
    }
     // Code to clear window
    clear = () => {
        this.showWindow.clear(this.ctx);
        this.showWindow.updateWindow(this.ctx);
        this.updateWindow();
    }
    updateWindow = () => { // window update with the objects maked
        for(let Coord of this.bot.getCoord()){
            this.Groves.recoveGrove(Coord[0],Coord[1]);   
        }
        this.bos.updateBos();
        this.bos.setContoursGrove(this.bot.getCoord()); 
    }

    canWalk(){//code that asks if the robot can walk
        for(let Coord of this.bot.getCoord()){
            if ((this.bot.getXBot() < Coord[0] + 80) && (this.bot.getXBot()+ 60 > Coord[0]) &&
                (this.bot.getYBot() < Coord[1] + 60) && (this.bot.getYBot()+ 50 > Coord[1])){
                    if(this.bot.flagList[0]) this.bot.setXBot(-10);
                    else if(this.bot.flagList[1]) this.bot.setXBot(10);
                    else if(this.bot.flagList[2]) this.bot.setYBot(-10);
                    else if(this.bot.flagList[3]) this.bot.setYBot(10);
                    return false;
                }
        }
        return true
    }
}