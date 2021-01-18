class Mango {
    constructor(x,y,width,height){

        var Option = {
            isStatic : true
        }
          this.image=loadImage("Plucking mangoes/mango.png")
          this.width= width;
          this.height= height;
          this.body= Bodies.rectangle(x,y,width,height,Option);
          World.add(world,this.body);
        
    }

    display(){

        var pos = this.body.position;

        fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

    }
}