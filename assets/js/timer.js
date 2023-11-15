import {ShowWindow} from './shows/showWindow.js';
let timer = document.getElementById("timeLevel");
export class Timer{
    constructor(ctx, bos, showWindow){
       this.ysEnd = false;
       this.ctx = ctx;
       this.bos = bos;
       this.showWindow = showWindow;
    }

    setTimer = (bot) => {
        setInterval(() => {
            if(!this.ysEnd ){
                timer.innerHTML = (parseInt(timer.innerHTML) - 1)+ " segundos";
                this.bos.addBos();
                this.showWindow.updateWindow(this.ctx);
                this.end(this.ctx);
                bot.stateStop();
            }
        },1000);
    };
    
    end(){
        if(timer.innerHTML[0]+timer.innerHTML[1] ==  0){
            this.showWindow.clear(this.ctx);
            this.ysEnd = true;
        } 
        return false;
    }

    getIsEnd(){return this.ysEnd;}
}
