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
    
    clear = () => {
        this.ctx.clearRect(0,0,600,600);// Clear the were dimension of bo
    }
    updateWindow = () => {
        this.ctx.drawImage(this.images.getLevelScreen(),0,0,600,600);
        for(let Coord of this.contoursGrove){
            this.Groves.recoveGrove(Coord[0],Coord[1]);   
        }
        this.bos.updateBos();
    }

    getContoursGrove = () => {return this.contoursGrove;}
    setContoursGrove = (contours) => {this.contoursGrove = contours;}
}
// colocar clear geral para limpar toda a tela
//A classe window enviar as cordenadas para ser enviada para o showWindow