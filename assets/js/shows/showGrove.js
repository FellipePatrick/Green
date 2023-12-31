import {Images} from '../mod/modImages.js';
export class ShowGrove{
    constructor(ctx, bot, grove,timer){
        this.images = new Images();
        this.ctx = ctx;
        this.bot = bot;
        this.grove = grove;
        this.timer = timer;
    }
    plantGrove = () => { //plant one grove
        if(this.bot.flagList[0] && this.bot.getXBot() < 420){
            this.ctx.drawImage(this.images.getImgGrove(), 120, 20, 100, 100, this.bot.getXBot()+100, this.bot.getYBot(), 120, 120);
            this.bot.setCoord(this.bot.getXBot()+100, this.bot.getYBot());
            this.grove.setTree();
        }else if(this.bot.flagList[1] && this.bot.getXBot() > 50){
            this.ctx.drawImage(this.images.getImgGrove(), 120, 20, 100, 100, this.bot.getXBot()-100,  this.bot.getYBot(), 120, 120);
            this.bot.setCoord(this.bot.getXBot()-100, this.bot.getYBot());
            this.grove.setTree();
        }else if(this.bot.flagList[2] && this.bot.getYBot() < 420){
            this.ctx.drawImage(this.images.getImgGrove(), 120, 20, 100, 100, this.bot.getXBot(),  this.bot.getYBot()+100, 120, 120);
            this.bot.setCoord(this.bot.getXBot(), this.bot.getYBot()+100);
            this.grove.setTree();
        }else if(this.bot.flagList[3] && this.bot.getYBot() > 50){
            this.ctx.drawImage(this.images.getImgGrove(), 120, 20, 100, 100, this.bot.getXBot(),  this.bot.getYBot()-100, 120, 120);
            this.bot.setCoord(this.bot.getXBot(), this.bot.getYBot()-100);
            this.grove.setTree();
        }
    }
    recoveGrove = (x,y) => { //metod that is used to recover one grove
        this.ctx.drawImage(this.images.getImgGrove(), 120, 20, 100, 100, x, y, 120, 120);
    }

}