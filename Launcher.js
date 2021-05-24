class Launcher {
    constructor(bodyA,pointB){
       var options= {

          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.04,
          length : 5
       }
       this.sling = Constraint.create(options);
       this.pointB = pointB;
       
      
       World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
        
    }
    display(){
        
        if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;
           strokeWeight(5);
           line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
       
    
    }
}



/*class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
      
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
               
            }
           
            
            pop();
        }
    }
    
}*/