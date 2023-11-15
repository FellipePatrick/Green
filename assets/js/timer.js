import {ShowWindow} from './shows/showWindow.js';
let timer = document.getElementById("timeLevel");
export class Timer{
    constructor(ctx, bos, showWindow){
       this.ysEnd = false;
       this.ctx = ctx;
       this.bos = bos;
       this.showWindow = showWindow;
       this.splashScreen = true;
    }

    setTimer = (bot) => {
        setInterval(() => {
            if(timer.innerHTML[0]+timer.innerHTML[1] > 30){
                timer.innerHTML = (parseInt(timer.innerHTML) - 1)+ " segundos";
                this.showWindow.splashScreen();
            }else this.splashScreen = false;
            if(!this.ysEnd  && !this.bos.getGameOver() && !this.splashScreen){
                timer.innerHTML = (parseInt(timer.innerHTML) - 1)+ " segundos";
                for(let i = 0; i < 10; i++) this.bos.addBos();
                this.showWindow.updateWindow(this.ctx);
                this.end(this.ctx);
                bot.stateStop();
            }else{
                if(this.ysEnd) this.showWindow.gameover();
                else this.showWindow.win();
            }
        },1000);
    };
    
    end(){
        if(timer.innerHTML[0]+timer.innerHTML[1] ==  0){
            this.ysEnd = true;
            this.showWindow.clear(this.ctx);
        } 
        return false;
    }
    
    getSplashScreen(){return this.splashScreen;}
    getIsEnd(){return this.ysEnd;}
}
