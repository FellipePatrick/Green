import {ShowBos} from '../shows/showBos.js';
import {BosCut} from '../spritsCut/bosCut.js';
export class Bos{
    constructor(ctx){
        this.ctx = ctx;
        this.xBos = 535;
        this.yBos = 535;
        this.bosCut = new BosCut();
        this.ShowBos = new ShowBos(this.ctx, this.bosCut, this);
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

    goRight = () => {   
        this.setXBot(30);
        this.contoursBos.push(this.getXBot(), this.getYBot());
        return;
    }

    goLeft = () => {    
        this.setXBot(-30);
        this.contoursBos.push(this.getXBot(), this.getYBot());
        return;
    }

    goDown = () => {
        this.setYBot(30);
        this.contoursBos.push(this.getXBot(), this.getYBot());
        return;
    }

    goUp = () => {
        this.setYBot(-30);
        this.contoursBos.push(this.getXBot(), this.getYBot());
        return;
    }

    go = () => {
        this.ShowBos.newBos(this.xBos,this.yBos);
        var vez = Math.floor(Math.random() * 4) + 1;
        if(this.xBos < 500 && vez == 1 && this.canGo(1)) this.goRight();
        else if(this.yBos < 500 && vez == 2 && this.canGo(2)) this.goDown();
        else if(this.xBos > 0  && vez == 3 && this.canGo(3)) this.goLeft();
        else if(this.yBos > 0 && vez == 4 && this.canGo(4)) this.goUp();
        else{
            if(this.xBos < 500 && this.canGo(1)){
                this.goRight();
            } 
            else if(this.yBos < 500 && this.canGo(2)){
                this.goDown();
            } 
            else if(this.xBos > 0 && this.canGo(3)){
                this.goLeft();
            }  
            else if(this.yBos > 0 && this.canGo(4)){
                this.goUp();
            } 
        }
       // this.gameOver = true;
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
    getQuantityBos = () => {return this.contoursBos.length;} 
    getGameOver = () => {return this.gameOver;}
    setContoursGrove = (contours) => {this.contoursGrove = contours;}
    setXBot(x){this.xBos += x;}
    setYBot(y){this.yBos += y;}   
}