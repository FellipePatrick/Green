import {Images} from '../mod/modImages.js';
import { ShowGrove } from './showGrove.js'; 
export class ShowWindow{
    constructor(ctx, bos){
        this.ctx = ctx;
        this.images = new Images();
        this.bos = bos;
        this.contoursGrove = []
        this.xBoot = 0;
        this.yBoot = 0;
        this.Groves = new ShowGrove(ctx);
    }
    
    clear = () => {this.ctx.clearRect(0,0,600,600);}

    updateWindow = () => {
        this.ctx.drawImage(this.images.getLevelScreen(),0,0,600,600);
        for(let Coord of this.contoursGrove){
            this.Groves.recoveGrove(Coord[0],Coord[1]);   
        }
        this.bos.updateBos();
    }

    gameover = () => {
        this.ctx.drawImage(this.images.getGameOver(),0,0,600,600);
    }

    win = () => {
        this.ctx.drawImage(this.images.getWin(),0,0,600,600);
    }

    splashScreen = () => {
        this.ctx.drawImage(this.images.getSplashScreen(),0,0,600,600);
    }

    getContoursGrove = () => {return this.contoursGrove;}
    setContoursGrove = (contours) => {this.contoursGrove = contours;}
}
