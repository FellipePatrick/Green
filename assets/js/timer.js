import {ShowWindow} from './shows/showWindow.js';
let timer = document.getElementById("timeLevel");
export class Timer{
    constructor(ctx){
       this.ysEnd = false;
       this.showWindow = new ShowWindow(ctx);
    }

    setTimer = (ctx) => {
        setInterval(() => {
            if(!this.ysEnd ){
                timer.innerHTML = (parseInt(timer.innerHTML) - 1)+ " segundos";
            }
            this.end(ctx);
        },1000);
        this.end(ctx);
    };
    
    end(ctx){
        if(timer.innerHTML[0]+timer.innerHTML[1] <=  25){
            this.ysEnd = true;
            this.showWindow.clear(ctx);
        } 
        return false;
    }

    getIsEnd(){
        return this.ysEnd;
    }
}
