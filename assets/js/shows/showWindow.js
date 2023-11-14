import {Images} from '../mod/modImages.js';
export class ShowWindow{
    constructor(cxt){
        this.ctx = cxt;
        this.images = new Images();
    }
    clear = () => {
        this.ctx.clearRect(0,0,600,600);// Clear the were dimension of bo
    }
    updateWindow = () => {
        this.ctx.drawImage(this.images.getSplashScreen(),0,0,600,600);
    }
}
// colocar clear geral para limpar toda a tela
//A classe window enviar as cordenadas para ser enviada para o showWindow