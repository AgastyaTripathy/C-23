class Ground {

    constructor(x, y, width, height) {
        var Ground_options ={
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, width, height, Ground_options);
        this.height = height;
        this.width = width;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(156);
        rect(pos.x, pos.y, this.width, this.height);
    }
}