import {ShowWindow} from './shows/showWindow.js';
let timer = document.getElementById("timeLevel");
export class Timer{
    constructor(ctx, bos){
       this.ysEnd = false;
       this.ctx = ctx;
       this.bos = bos;
       this.showWindow = new ShowWindow(ctx);
    }

    setTimer = () => {
        setInterval(() => {
            if(!this.ysEnd ){
                timer.innerHTML = (parseInt(timer.innerHTML) - 1)+ " segundos";
                this.bos.addBos();
                this.end(this.ctx);
            }
        },1000);
    };
    
    end(){
        if(timer.innerHTML[0]+timer.innerHTML[1] ==  0) this.ysEnd = true;
        return false;
    }

    getIsEnd(){return this.ysEnd;}
}
