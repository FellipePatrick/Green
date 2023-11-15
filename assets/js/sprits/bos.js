import {ShowBos} from '../shows/showBos.js';
import {BosCut} from '../spritsCut/bosCut.js';
export class Bos{
    constructor(ctx){
        this.ctx = ctx;
        this.xBos = 535;
        this.yBos = 535;
        this.bosCut = new BosCut();
        this.ShowBos = new ShowBos(this.ctx, this.bosCut);
        this.contoursGrove = [];
        this.contoursBos = [this.xBos, this.yBos];
        this.gameOver = false;
    }

    addBos = () => {
        if(!this.gameOver) this.go();
    }

    updateBos = () => {
        this.ShowBos.updateBos();
    }

    go = () => {
        this.ShowBos.newBos(this.xBos,this.yBos);
        if(this.xBos < 500 && this.canGo(1)){
            this.setXBot(30);
            this.contoursBos.push(this.getXBot(), this.getYBot());
            return;
        } 
        else if(this.yBos < 500 && this.canGo(2)){
            this.setYBot(30);
            this.contoursBos.push(this.getXBot(), this.getYBot());
            return;
        } 
        else if(this.xBos > 0 && this.canGo(3)){
            this.setXBot(-30);
            this.contoursBos.push(this.getXBot(), this.getYBot());
            return;
        }  
        else if(this.yBos > 0 && this.canGo(4)){
            this.setYBot(-30);
            this.contoursBos.push(this.getXBot(), this.getYBot());
            return;
        } 
        this.gameOver = true;
    }

    canGo(x){//collision
        for(let contours of this.ShowBos.getContoursBos()){//collision with bot
            if(x == 1){
                if(contours[0] == this.xBos+30 && contours[1] == this.yBos) return false;
            }else if(x == 2){
                if(contours[0] == this.xBos && contours[1] == this.yBos+30) return false;
            }else if(x == 3){
                if(contours[0] == this.xBos-30 && contours[1] == this.yBos) return false;
            }else if(x == 4){
                if(contours[0] == this.xBos && contours[1] == this.yBos-30) return false;
            }
        }

        for(let Coord of this.contoursGrove){
            if(x == 1){
                if ((this.xBos+30 < Coord[0]+100) && (this.xBos+30 + 30 > Coord[0]) &&
                    (this.yBos < Coord[1] + 100) && (this.yBos+30> Coord[1]))
                        return false; 
            }else if(x == 2){
                if ((this.xBos < Coord[0] + 100) && (this.xBos+30 > Coord[0]) &&
                    (this.yBos+30 < Coord[1] + 100) && (this.yBos+30+30 > Coord[1]))
                        return false;
            }else if(x == 3){
                if ((this.xBos-30 < Coord[0] + 100) && (this.xBos-30-30 > Coord[0]) &&
                    (this.yBos < Coord[1] + 100) && (this.yBos+30 > Coord[1]))
                        return false;
            }else if(x == 4){
                if ((this.xBos < Coord[0] + 100) && (this.xBos+30 > Coord[0]) &&
                    (this.yBos-30 < Coord[1] + 100) && (this.yBos-30-30 > Coord[1]))
                        return false;
            }
        }

        return true;
    }

    getXBot(){return this.xBos;}   
    getYBot(){return this.yBos;}
    getContoursGrove = () => {return this.contoursGrove;}
    getContoursBos = () => {return this.contoursBos;}   
    getGameOver = () => {return this.gameOver;}
    setContoursGrove = (contours) => {this.contoursGrove = contours;}
    setXBot(x){this.xBos += x;}
    setYBot(y){this.yBos += y;}   
}