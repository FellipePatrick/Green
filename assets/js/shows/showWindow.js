export class ShowWindow{
    constructor(cxt){
        this.ctx = cxt;
    }
    clear = () => {
        this.ctx.clearRect(0,0,600,600);// Clear the were dimension of bo
    }
    updateWindow = () => {
    
    }
}
// colocar clear geral para limpar toda a tela
//A classe window enviar as cordenadas para ser enviada para o showWindow