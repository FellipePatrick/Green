import {Images} from '../modImages.js';
export class ShowPlant{
    constructor(ctx, bot){
        this.images = new Images();
        this.ctx = ctx;
        this.bot = bot;
    }
    showerPlants = () => { //plant one grove
        if(this.bot.flagList[0]){
            this.ctx.drawImage(this.images.getImgGrove(), 120, 20, 100, 100, this.bot.getXBot()+100, this.bot.getYBot(), 120, 120);
            this.ctx.fillStyle = "red";
            this.ctx.strokeRect(this.bot.getXBot()+100, this.bot.getYBot(), 120, 120);
            this.bot.setCoord(this.bot.getXBot()+100, this.bot.getYBot());
        }else if(this.bot.flagList[1]){
            this.ctx.drawImage(this.images.getImgGrove(), 20, 20, 100, 100, this.bot.getXBot()-100,  this.bot.getYBot(), 120, 120);
            this.ctx.fillStyle = "red";
            this.ctx.strokeRect(this.bot.getXBot()-100,  this.bot.getYBot(), 120, 120);
            this.bot.setCoord(this.bot.getXBot()-100, this.bot.getYBot());
        }else if(this.bot.flagList[2]){
            this.ctx.drawImage(this.images.getImgGrove(), 220, 20, 100, 100, this.bot.getXBot(),  this.bot.getYBot()+100, 120, 120);
            this.ctx.fillStyle = "red";
            this.ctx.strokeRect(this.bot.getXBot(),  this.bot.getYBot()+100, 120, 120);
            this.bot.setCoord(this.bot.getXBot(), this.bot.getYBot()+100);
        }else if(this.bot.flagList[3]){
            this.ctx.drawImage(this.images.getImgGrove(), 20, 20, 100, 100, this.bot.getXBot(),  this.bot.getYBot()-120, 130, 120, 120);
            this.ctx.fillStyle = "red";
            this.ctx.strokeRect(this.bot.getXBot(),  this.bot.getYBot()-120, 130, 120, 120);
            this.bot.setCoord(this.bot.getXBot(), this.bot.getYBot()-100);
        }
    }
}

