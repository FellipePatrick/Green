import {Images} from './modImages.js';
export class Robo { 
    constructor(ctx){
        this.images = new Images();
        this.xCut = 0;
        this.xBot = 0;
        this.yCut = 0;
        this.yBot = 0;
        this.dimensionBot = 100;
        this.ctx = ctx;
        this.flagList = [];
    }

    getXCut() {return this.xCut;}

    setXCut(value){
        if(value != 0) this.xCut+=value;
        else this.xCut = 0;       
    }

    getYCut() {return this.yCut;}

    setYCut(value){this.yCut = value;}

    getXBot() {return this.xBot;}

    setXBot(value){this.xBot += value;}

    getYBot() {return this.yBot;}

    setYBot(value){this.yBot += value;}
    
    getDimensionBot(){return this.dimensionBot;}
    
    // Animation to grove
    showerPlants = () => { //plant one grove
        if(this.flagList[0]){
            this.ctx.drawImage(this.images.getImgGrove(), 120, 20, 100, 100, this.getXBot()+100, this.getYBot(), 120, 120);
        }else if(this.flagList[1]){
            this.ctx.drawImage(this.images.getImgGrove(), 20, 20, 100, 100, this.getXBot()-100,  this.getYBot(), 120, 120);
        }else if(this.flagList[2]){
            this.ctx.drawImage(this.images.getImgGrove(), 220, 20, 100, 100, this.getXBot(),  this.getYBot()+100, 120, 120);
        }else if(this.flagList[3]){
            this.ctx.drawImage(this.images.getImgGrove(), 20, 20, 100, 100, this.getXBot(),  this.getYBot()-130, 120, 120);
        }
    }
    // Code to clear window
    clear = () => {
        this.ctx.clearRect(this.getXBot(),this.getYBot(),this.getDimensionBot(),this.getDimensionBot());// Clear the were dimension of bot
        //this.ctx.fillRect(robo.getX(),robo.getY(),robo.getDimensionBot(),robo.getDimensionBot()); //pinta o cenario por onde o boneco passa
    }
    alterCut = (end, now) => {
        if(this.setXCut() < end) this.setXCut(now);
        else this.setXCut(0);
    }
    // Draw Bot
    drawFrame = (yCut,stop, isY, front, states = 0) => { //160 515 160
        this.clear();
        //Stop Play
        if(stop){
            this.setXCut(states);
        }else{
            if(isY){   
                this.alterCut(450,150);  
                //Collision up and down
                if(front){
                    if(this.getYBot() > 0) this.setYBot(-10);
                }else{
                    if(this.getYBot() <= 515) this.setYBot(10);      
                }     
            }else{
                this.alterCut(160,160);  
                //Collision right and left
                if(front){
                    if(this.getXBot() <= 515) this.setXBot(10);       
                }else{
                    if(this.getXBot() > -20) this.setXBot(-10);     
                }
            }
        }
        this.ctx.drawImage(this.images.getImgRobo(),this.getXCut(),yCut,150,150, this.getXBot(),this.getYBot(),100,100);
    }
    // 
    directionRight = () => { //moviment bot to right
        this.drawFrame(160, false,false,true);
        this.flagList = [true,false,false,false];   
    }
    stopRight = () =>  { 
        this.drawFrame(160,0,true,false,false);
    }
    directionLeft = () => { //moviment bot to left
        this.drawFrame(460, false,false,false); 
        this.flagList = [false,true,false,false];  
    }
    stopLeft = () =>  {
        this.drawFrame(460, true,false,false);
    }
    directionDown = () => { //moviment bot to down
        this.drawFrame(0, false,true,false);
        this.flagList = [false,false,true,false];   
    }
    stopDown = () =>  {
        this.drawFrame(0, true,true,false);
    }
    directionUp = () => { //moviment bot to up
        this.drawFrame(320,false,true,true, 300);
        this.flagList = [false,false,false,true];
    }
    stopUp = () => {
        this.drawFrame(320,true,true,true, 300);
    }
}

// limite up e down 150 ate 450

// limete right e leeft 160

