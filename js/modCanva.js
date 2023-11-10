import {Bot} from './sprits/bot.js';
import {Window} from './sprits/window.js';
//import {Plant} from './bot.js';
export const run = (ctx) => {
    const bot = new Bot(ctx);
    const window = new Window(ctx, bot);
    //const window = new Window(ctx, bot);
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight" ) bot.directionRight();
        else if(event.key === "ArrowLeft") bot.directionLeft();
        else if(event.key === "ArrowDown") bot.directionDown();
        else if(event.key === "ArrowUp") bot.directionUp();
        else if(event.key === "Enter") window.getPlant().showPlant();
    });
    document.addEventListener("keyup", function(event) {
        if (event.key === "ArrowRight") bot.stopRight();
        else if(event.key === "ArrowLeft") bot.stopLeft();
        else if(event.key === "ArrowDown") bot.stopDown();
        else if(event.key === "ArrowUp") bot.stopUp();
    });
}