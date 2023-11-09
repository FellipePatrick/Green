import {Robo} from './modRobo.js';
export const run = (ctx) => {
    const robo = new Robo(ctx);
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight" ) robo.directionRight();
        else if(event.key === "ArrowLeft") robo.directionLeft();
        else if(event.key === "ArrowDown") robo.directionDown();
        else if(event.key === "ArrowUp") robo.directionUp();
        else if(event.key === "Enter") robo.showerPlants();
    });
    document.addEventListener("keyup", function(event) {
        if (event.key === "ArrowRight") robo.stopRight();
        else if(event.key === "ArrowLeft") robo.stopLeft();
        else if(event.key === "ArrowDown") robo.stopDown();
        else if(event.key === "ArrowUp") robo.stopUp();
    });
}