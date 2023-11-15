import {Bot} from '../sprits/bot.js';
import {Window} from '../sprits/window.js';
export const run = (ctx,bos, timer) => {
    const bot = new Bot(ctx,bos);
    const window = new Window(ctx, bot);
    if(!timer.getIsEnd()){   // if the time is not over
        document.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight") bot.directionRight();
            else if(event.key === "ArrowLeft") bot.directionLeft();
            else if(event.key === "ArrowDown") bot.directionDown();
            else if(event.key === "ArrowUp") bot.directionUp();
            else if(event.key === "Enter") window.getGrove().getShowGrove().plantGrove();
        });
        document.addEventListener("keyup", function(event) {
            if (event.key === "ArrowRight") bot.stopRight();
            else if(event.key === "ArrowLeft") bot.stopLeft();
            else if(event.key === "ArrowDown") bot.stopDown();
            else if(event.key === "ArrowUp") bot.stopUp();
        });
    }  else{
        window.clear();
    } 
}