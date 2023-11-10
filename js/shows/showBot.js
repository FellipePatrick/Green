import {Images} from '../modImages.js';

export class ShowBot{
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
                if(this.canWalkY()){
                    if(front){
                        if(this.bot.getYBot() > 0) this.bot.setYBot(-10);
                    }else{
                        if(this.bot.getYBot() <= 515) this.bot.setYBot(10);      
                    }
                }     
            }else{
                this.alterCut(160,160);  
                //Collision right and left

                if(this.canWalkX()){
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
        this.ctx.clearRect(this.bot.getXBot(),this.bot.getYBot(),this.bot.getDimensionBot(),this.bot.getDimensionBot());// Clear the were dimension of bot
    }

    canWalkX(){
        let flag = true;
        let matriz = this.bot.getCoord(); // set a matrix to get matrix coord of the groves
        for(let i = 0; i < matriz.length; i++){
            if(this.bot.getXBot()+100 >= matriz[i][0] || this.bot.getXBot()-100 >= matriz[i][0]){ // compare to see if bot coord plus one hundred is bigger then or equal then object colision coord 
                if((this.bot.getXBot() == matriz[i][0]-100 && this.bot.getYBot() == matriz[i][1]) || (this.bot.getXBot() == matriz[i][0]+100 && this.bot.getYBot() == matriz[i][1])){ // compare to see if bot coord X e boot coord Y is equal 
                    flag = false; // set the value of flag to false to make impossible moviment of bot
                    console.log(matriz);
                }
            }
        }
        return flag;
    }
    canWalkY(){
        let flag = true;
        let matriz = this.bot.getCoord();
        for(let i = 0; i < matriz.length; i++){
            if(this.bot.getYBot()+100 >= matriz[i][1] || this.bot.getYBot()-100 >= matriz[i][1]){
                if((this.bot.getXBot() == matriz[i][0] && this.bot.getYBot() == matriz[i][1]-120) || (this.bot.getXBot() == matriz[i][0] && this.bot.getYBot() == matriz[i][1]+100)){
                    flag = false;
                    console.log(matriz);
                }
            }
        }
        return flag;
    }

}