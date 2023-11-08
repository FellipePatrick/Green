export class Robo {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.pontos = 0;
        this.corteBoneco = 100;
    }
    getX(){
        return this.x;
    }
    setX(value){
        this.x = value;
    }
    getY(){
        return this.y;
    }
    setY(value){
        this.y += value;
    }
    getZ(){
        return this.z;
    }
    setZ(value){
        this.z += value;
    }
    getCorte(){
        return this.corteBoneco;
    }
}