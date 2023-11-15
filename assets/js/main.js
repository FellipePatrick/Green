import {Timer} from './timer.js';
import {run} from './mod/modCanva.js';
import {Bos} from './sprits/bos.js';
import {ShowWindow } from './shows/showWindow.js'; 
import {Bot} from './sprits/bot.js';
import {Window} from './sprits/window.js';

let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

let bos = new Bos(ctx);
let showWindow = new ShowWindow(ctx, bos);
let timer = new Timer(ctx,bos, showWindow);
let bot = new Bot(ctx,bos,timer, showWindow);
timer.setTimer(bot);
let  window = new Window(ctx, bot, timer, showWindow); 
run(bot, window);
