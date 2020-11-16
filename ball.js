class Ball{
   constructor(x,y,radius){
              
   var options = {

     isStatic:false
    
    }
   this.radius = radius
   this.x = x
   this.y = y
   this.body = Bodies.rectangle(x,y,radius,options)

   }
  display(){
var pos = this.body.position
push()
translate(pos.x,pos.y)
fill("pink")
rectMode(CENTER)
ellipse(0,0,this.radius,this.radius)
pop()
}
}