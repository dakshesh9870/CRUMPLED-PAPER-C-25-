class paper
{
 constructor(x,y,r){
     var options={
        isStatic:false ,
        friction: 0 ,
        restitution: 0.3,
        density: 1.2
    
     }
     this.x = x
     this.y = y
     this.r = r
     this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
     World.add(world,this.body)
     this.image= loadImage("paper.png")
    }
  display(){
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.image,0,0,this.r)
     ellipse(0,0,this.r);
      pop()
  }
} 