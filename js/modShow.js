import {Images} from './modImages.js';
import {Bot} from './bot.js';
export class ModShow{
    constructor(ctx, bot, botCut){
        this.images = new Images();
        this.ctx = ctx;
        this.bot = bot;
        this.botCut = botCut;
    }
    drawFrame = (yCut,stop, isY, front, states = 0) => { //160 515 160
        this.clear();
        //Stop Play
        if(stop){
            this.botCut.setXCut(states);
        }else{
            if(isY){   
                this.alterCut(450,150);  
                //Collision up and down
                if(front){
                    if(this.bot.getYBot() > 0) this.bot.setYBot(-10);
                }else{
                    if(this.bot.getYBot() <= 515) this.bot.setYBot(10);      
                }     
            }else{
                this.alterCut(160,160);  
                //Collision right and left
                if(front){
                    if(this.bot.getXBot() <= 515) this.bot.setXBot(10);       
                }else{
                    if(this.bot.getXBot() > -20) this.bot.setXBot(-10);     
                }
            }
        }
        this.ctx.drawImage(this.images.getImgRobo(),this.botCut.getXCut(),yCut,this.bot.getDimensionBot()+50,this.bot.getDimensionBot()+50, this.bot.getXBot(),this.bot.getYBot(),this.bot.getDimensionBot(),this.bot.getDimensionBot());
    }
    alterCut = (end, now) => {
        if(this.botCut.setXCut() < end) this.botCut.setXCut(now);
        else this.botCut.setXCut(0);
    }
     // Code to clear window
     clear = () => {
        this.ctx.clearRect(this.bot.getXBot(),this.bot.getYBot(),this.bot.getDimensionBot(),this.bot.getDimensionBot());// Clear the were dimension of bot
        //this.ctx.fillRect(robo.getX(),robo.getY(),robo.getDimensionBot(),robo.getDimensionBot()); //pinta o cenario por onde o boneco passa
    }
}