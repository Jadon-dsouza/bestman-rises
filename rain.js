class rain {
    constructor(x,y){
        var options = {
        
            isStatic: true,
        }
        
        this.rain = Bodies.circle(x,y,5,options);
        this.friction=0.1,
        World.add(world, this.rain)
        
    }
        
    display(){
        var pos = this.rain.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
