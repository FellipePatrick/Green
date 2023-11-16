import {Images} from '../mod/modImages.js';
import { ShowGrove } from './showGrove.js'; 
let temp = document.getElementById("temp");

export class ShowWindow{
    constructor(ctx, bos){
        this.ctx = ctx;
        this.setTemp(this.level.getTemperature());
        this.images = new Images();
        this.bos = bos;
        this.contoursGrove = [] 
        this.xBoot = 0;
        this.yBoot = 0;
        this.Groves = new ShowGrove(ctx);
        this.n = 0;
    }
    
    clear = () => {this.ctx.clearRect(0,0,600,600);}

    updateTemperature(){
        let tempNow = (this.level.getTemperature() - (this.grove.getQuantityGrove()*20)+ (this.bos.getQuantityBos()+10));
        this.setTemp(tempNow);
    }

    setTemp(x){temp.innerHTML = x + "° grau celsius";}

    setLevel(x){
        switch(x){
            case 0:
                alert("Esse é o Green, o jogo aonde você tem que isolar o calor, para que o robo consiga ficar no planeta em uma temperatura ideal, sem aumentar.");
                let pathImg = "./assets/img/imNordeste.jpg";
                let text = " A vegetação do Nordeste tinha relação direta com o clima da região. Áreas mais úmidas apresentavam formações mais densas, como florestas e matas. Nas áreas mais secas, como o semiárido, identificavam-se a presença da Caatinga, que possui plantas adaptadas às condições climáticas locais.";
                const level = new Level("Nordeste", 5,pathImg, text,32,200);
                return level;
            default:
                alert("Voce perdeu!");        
        }
    }

    updateWindow = () => {
        this.ctx.drawImage(this.images.getLevelScreen(),0,0,600,600);
        for(let Coord of this.contoursGrove){
            this.Groves.recoveGrove(Coord[0],Coord[1]);   
        }
        this.bos.updateBos();
    }

    gameover = () => {
        if(this.n == 0){
            alert('O calor venceu no nordeste, que pena!');
            this.n++;
        }
        this.ctx.drawImage(this.images.getGameOver(),0,0,600,600);
    }

    win = () => {
        if(this.n == 0){
            alert('Você venceu o calor no nordeste!');
            this.n++;
        }
        this.ctx.drawImage(this.images.getWin(),0,0,600,600);
    }

    splashScreen = () => {
        this.ctx.drawImage(this.images.getSplashScreen(),0,0,600,600);
    }

    getContoursGrove = () => {return this.contoursGrove;}
    setContoursGrove = (contours) => {this.contoursGrove = contours;}
}
