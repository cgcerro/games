

let canvas;
var ctx;
let fps = 50;

let player1;

let imgRex;
let imgKey;

let widthElement = 50;
let heightElement = 50;

let water = 'watter';
let gress = 'gress';
let earth = 'earth'

let scena = [
    [water, gress, gress, gress, earth, earth, earth, earth, earth, gress,],
    [gress, water, gress, gress, earth, earth, earth, earth, earth, gress,],
    [earth, gress, water, gress, earth, earth, earth, gress, gress, gress,],
    [earth, gress, water, gress, earth, earth, gress, gress, earth, earth,],
    [earth, gress, water, gress, earth, gress, gress, earth, earth, earth,],
    [earth, gress, water, gress, gress, gress, earth, earth, earth, earth,],
    [earth, gress, water, gress, earth, earth, earth, earth, earth, earth,],
    [earth, gress, water, gress, earth, earth, earth, earth, earth, earth,],
    [earth, gress, water, gress, earth, earth, earth, earth, earth, earth,],
    [earth, gress, water, gress, gress, gress, earth, earth, earth, earth,],
];


let tileMap = new Image();
tileMap.src = 'img/tilemap.png';


let printScena = scena => {
    for (row = 0; row < 10; row++) {
        for (col = 0; col < 10; col++) {
            //ctx.fillStyle = scena[row][col];
            //ctx.fillRect(col * widthElement, row * heightElement, widthElement, heightElement);
            let tile = scena[row][col];
            switch (tile) {
                case "watter":
                    tileCol = 3;
                    tileRow = 1;
                    break;
                case "gress":
                    tileCol = 0;
                    tileRow = 2;
                break;
                case "earth":
                        tileCol = 2;
                        tileRow = 0;
                break;
            }
            ctx.drawImage(tileMap, tileCol * 32, tileRow * 32, 32, 32, col * widthElement, row * widthElement, widthElement, heightElement);

        }
    }
}

let Player = function (x,y) {
    this.x = x;
    this.y = y;

    this.moveRight = true;

    this.draw = () => {
        //ctx.fillStyle = 'red';
        //ctx.fillRect(this.x, this.y, 50, 50)
        ctx.drawImage(tileMap, 0, 0, 32, 32, this.x , this.y, widthElement, heightElement)
    }

    this.move = (speed) => {
        if (this.x >= 400) {
            this.moveRight = false;
        } else if(this.x <= 20) {
            this.moveRight = true;
        }
        this.x = this.moveRight ? this.x + speed : this.x - speed;

        //Check colision with mainPlayer
        if (this.collisionMainPlayer(mainPlayer)) {
            mainPlayer.x = 1;
            mainPlayer.y = 0;
            mainPlayer.calculateReal();
            mainPlayer.lifes--;
            if (mainPlayer.lifes <= 0) {
                alert('you lose');
                location.reload();
            }
        }
    }

    this.collisionMainPlayer = (mainPlayer) => {
        x1 = this.x;
        x2 = this.x + 50;
        mpx1 = mainPlayer.realx;
        mpx2 = mainPlayer.realx + 50;
        y1 = this.y;
        y2 = this.y + 50;
        mpy1 = mainPlayer.realy;
        mpy2 = mainPlayer.realy + 50;
        
        ret =
        ( (x1 < mpx2 && x1 > mpx1) || (x2 > mpx1 && x2 < mpx2) )
        &&
        ( (y1 < mpy2 && y1 > mpy1) || (y2 > mpy1 && y2 < mpy2) || (y1 == mpy1) )
        ;
        
        return ret;
        
    }
}

let MainPlayer = function (x,y) {
    this.x = x;
    this.y = y;
    this.hasKey = false;
    this.lifes = 3;
    this.realx = this.x * widthElement;
    this.realy = this.y * heightElement;

    this.calculateReal = () => {
        this.realx = this.x * widthElement;
        this.realy = this.y * heightElement;
    }

    this.draw = () => {
        ctx.drawImage(imgRex, this.x * widthElement, this.y * heightElement)
    }

    this.moveUp = () => {
        if (this.cellValid(this.y - 1, this.x)) {
            this.y--;
            this.calculateReal();
            this.objectsLogic();
        }
    }

    this.moveDown = () => {
        if (this.cellValid(this.y + 1, this.x)) {
            this.y++;
            this.calculateReal();
            this.objectsLogic();
        }
    }

    this.moveRight = () => {
        if (this.cellValid(this.y, this.x + 1)) {
            this.x++;
            this.calculateReal();
            this.objectsLogic();
        }
    }

    this.moveLeft = () => {
        if (this.cellValid(this.y, this.x - 1)) {
            this.x--;
            this.calculateReal();
            this.objectsLogic();
        }
    }

    this.text = () => {
        ctx.font = '30px impact';
        ctx.fillStyle = '#333333';
        ctx.fillText("Life:" + this.lifes, 20 , 20)
    }

    this.cellValid = (row, col) => {
        return scena[row][col] == gress;
    }

    this.objectsLogic = () => {
        if (this.x == 5 && this.y == 9) {
            this.hasKey = true;
            objects[0] = null;
        }
        if (this.x == 9 && this.y == 0 && this.hasKey) {
            alert("You win!!!");
            init();
        }
    }
}


let Key = function(x, y) {
    this.x = x;
    this.y = y;

    this.draw = () => {
        ctx.drawImage(imgKey, this.x * widthElement, this.y * heightElement)
    }


}

let Door = function(x, y) {
    this.x = x;
    this.y = y;

    this.draw = () => {
        ctx.drawImage(imgDoor, this.x * widthElement, this.y * heightElement)
    }


}

player1 = new Player(20,50);
player2 = new Player(20,120);
player3 = new Player(20, 180);

mainPlayer = new MainPlayer(1, 0);


let objects = [new Key(5, 9), new Door(9, 0)];


drawObjects = (objects) => {
    objects.forEach(object => {
        if (object)
            object.draw()
    });
}


document.addEventListener('keydown', (key) => {
    
    switch (key.code) {
        case 'ArrowUp':
            mainPlayer.moveUp();
            break;
        case 'ArrowRight':
            mainPlayer.moveRight();
            break;
        case 'ArrowDown':
            mainPlayer.moveDown();
            break;
        case 'ArrowLeft':
            mainPlayer.moveLeft();
            break;
    }
})

let init = () => {

    imgRex = new Image();
    imgRex.src = 'img/dino.png';

    imgKey = new Image();
    imgKey.src = 'img/key.png';

    imgDoor = new Image();
    imgDoor.src = 'img/door.png';

    canvas = document.getElementById('canvas')

    ctx = canvas.getContext('2d');

    objects = [new Key(5, 9), new Door(9, 0)];

    mainPlayer = new MainPlayer(1, 0);

    setInterval(main, 1000 / fps);
    

}

let clearCanvas = () => {
    canvas.width = 500;
    canvas.height = 500;
}

//Main
let main = () => {
        
    clearCanvas();
    printScena(scena);
    player1.draw();
    player2.draw();
    player3.draw();
    
    mainPlayer.draw();
    mainPlayer.text();

    drawObjects(objects);

    player1.move(3);
    player2.move(5);
    player3.move(8);
}

