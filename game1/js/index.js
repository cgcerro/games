

let canvas;
var ctx;
let fps = 50;

let player1;

let Player = function (x,y) {
    this.x = x;
    this.y = y;

    this.moveRight = true;

    this.draw = () => {
        console.log(this.x, this.y)
        ctx.fillstyle = 'red';
        ctx.fillRect(this.x, this.y, 50, 50)
    }

    this.move = (speed) => {
        if (this.x >= 400) {
            this.moveRight = false;
        } else if(this.x <= 20) {
            this.moveRight = true;
        }
        this.x = this.moveRight ? this.x + speed : this.x - speed;
    }
}

player1 = new Player(20,50);
player2 = new Player(20,120);
player3 = new Player(20,180);

let init = () => {
    canvas = document.getElementById('canvas')

    ctx = canvas.getContext('2d');

    setInterval(main, 1000/fps);
}

let clearCanvas = () => {
    canvas.width = 500;
    canvas.height = 300;
}

//Main
let main = () => {
    clearCanvas();
    player1.draw();
    player2.draw();
    player3.draw();

    player1.move(5);
    player2.move(10);
    player3.move(15);
}




