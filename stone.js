class Stone{
    constructor(x,y,r){

      var  Option ={
        isStatic: false,
        restitution:0.5,
         density:1.2,
        friction:1
      }
      this.image=loadImage("Plucking mangoes/stone.png")
      this.body=Bodies.circle(x,y,r,Option);
      World.add(world,this.body);
      this.r=r;

      
    }

    display(){

        var pos= this.body.position;

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
    
    }
}