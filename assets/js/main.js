import {Timer} from './timer.js';
import {run} from './mod/modCanva.js';
import {Bos} from './sprits/bos.js';
let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

let bos = new Bos(ctx);
let timer = new Timer(ctx,bos);
timer.setTimer();

run(ctx,bos, timer);
