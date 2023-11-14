import {Timer} from './timer.js';
import {run} from './mod/modCanva.js';

let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

let timer = new Timer(ctx);
timer.setTimer(ctx);

run(ctx);
