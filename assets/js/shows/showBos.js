import {Images} from '../mod/modImages.js';
export class ShowBos{
    constructor(ctx, bosCut){
        this.images = new Images();
        this.ctx = ctx;
        this.bosCut = bosCut;
        this.contoursBos = [];
    }

    newBos(x,y){
        this.ctx.drawImage(this.images.getImgBos(), this.bosCut.getXCut(),this.bosCut.getYCut(), this.bosCut.getDimensionBos(),this.bosCut.getDimensionBos(), x,y,this.bosCut.getDimensionBos()/2,this.bosCut.getDimensionBos()/2);
        this.contoursBos.push([x,y]);
    }

    repaintBos(x,y){
        this.ctx.drawImage(this.images.getImgBos(), this.bosCut.getXCut(),this.bosCut.getYCut(), this.bosCut.getDimensionBos(),this.bosCut.getDimensionBos(), x,y,this.bosCut.getDimensionBos()/2,this.bosCut.getDimensionBos()/2);
    }

    updateBos(){
        for(let contours of this.contoursBos){
            this.repaintBos(contours[0],contours[1]);   
        }
    }

    getContoursBos(){
        return this.contoursBos;
    }
}