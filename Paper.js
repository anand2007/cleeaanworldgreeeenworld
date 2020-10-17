class Paper {
    constructor(x,y) {
        var options = {
            isStatic:false,
            restitution : 0.8,
            density : 1.2,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;

        

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        stroke("black");
        ellipse(0,0,this.radius,this.radius);
        pop();
         //strokeWeight(4);
        push()
        translate(pos.x,pos.y);
        fill("lightblue");
        ellipse(0,0,25,25);
        pop();
        push();
        translate(pos.x,pos.y);
        fill("white");
        stroke("white");
        ellipse(20,10,1,1);
        pop();
        push();
        translate(pos.x,pos.y);
        fill("white");
        stroke("white");
        ellipse(20,-10,1,1);
        pop();        
        push();
        translate(pos.x,pos.y);
        fill("white");
        stroke("white");
        ellipse(-20,-10,1,1);
        pop();      
        push();
        translate(pos.x,pos.y);
        fill("white");
        stroke("white");
        ellipse(0,-20,1,1);
        pop();   
        push();
        translate(pos.x,pos.y);
        fill("white");
        stroke("white");
        ellipse(0,20,1,1);
        pop();   
        push();
        translate(pos.x,pos.y);
        fill("white");
        stroke("white");
        ellipse(-20,10,1,1);
        pop(); 
        



    }

}