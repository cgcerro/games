

let canvas;
let canva2;
let ctx;
let ctx2;
const fps = 50;


const scenaWidth = 10;
const scenaHeight = 16;

const fieldWidth = 40 / 2;
const fieldHeight = 40 / 2;

const canvasWidth = 400 / 2;
const canvasHeight = 640 / 2;

imgFire = new Image();
imgFire.src = 'img/fire.png';

scena1 =
[
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

scena2 =
[
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 1, 1],
    [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1],
    [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1],
    [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

scena3 =
[
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1],
    [1, 1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

scena4 =
[
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

    
let scenas = [scena1, scena2, scena3, scena4]
//Scena
class Scena {
    scena = [];

    firedRows = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];

    marginTop = 4;
    marginLeft = 2;

    scenaNumber = 0;


    constructor()
    {
        this.scena = scenas[this.scenaNumber];
    }

    draw = () => {
        for (let row = this.marginTop; row < scenaHeight + this.marginTop; row++) {
            for (let col = this.marginLeft; col < scenaWidth + this.marginLeft; col++) {
                if (this.scena[row][col] == 2) {
                    ctx.fillStyle = '#333';
                    ctx.fillRect((col - this.marginLeft) * fieldWidth, (row - this.marginTop) * fieldHeight, fieldWidth, fieldHeight);
                } if (this.scena[row][col] == 1) {
                    ctx.fillStyle = '#cccccc';
                    ctx.fillRect((col - this.marginLeft) * fieldWidth, (row - this.marginTop) * fieldHeight, fieldWidth, fieldHeight);
                }
                if (this.firedRows[row]) {
                    ctx.drawImage(imgFire, (col - this.marginLeft) * fieldWidth, (row - this.marginTop) * fieldHeight)
                }
            }
        }
    }

    clearRow = () => {
        for (let row = this.marginTop; row < scenaHeight + this.marginTop; row++) {
            let allComplete = true;
            for (let col = this.marginLeft; col < scenaWidth + this.marginLeft; col++) {
                if (!this.scena[row][col])
                    allComplete = false;
            }
            if (allComplete) {
                //draw fire
                this.firedRows[row] = 1;
                
                let self = this;
                setInterval(function () {
                    self.firedRows = [
                        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ]
                }, 1000);

                for (let col = this.marginLeft; col < scenaWidth + this.marginLeft; col++) {
                    this.scena[row][col] = 0;
                }
                this.downAll(row);
                if (this.checkWin()) {
                    //alert("you win");
                    this.scenaNumber++;
                    this.scena = scenas[this.scenaNumber];
                }
            }
        }
    }

    downAll = (toRow) => {
        for (let row = toRow; row >= 0; row--) {
                for (let col = this.marginLeft; col < scenaWidth + this.marginLeft; col++) {
                    if (this.scena[row][col]) {
                        this.scena[row + 1][col] = this.scena[row][col];
                        this.scena[row][col] = 0;
                    }
                }
        }
    }

    checkWin = () => {
        for (let row = this.marginTop; row <= scenaHeight + this.marginTop; row++) {
            for (let col = this.marginLeft; col < scenaWidth + this.marginLeft; col++) {
                if (this.scena[row][col] == 2) {
                    return false;
                }
            }
        }
        return true;
    }

    checkLose = () => {
        for (let row = 0; row < this.marginTop; row++) {
            for (let col = this.marginLeft; col < scenaWidth + this.marginLeft; col++) {
                if (this.scena[row][col]) {
                    return true;
                }
            }
        }
    }
}



//Pieces
const square = {
    color: '#0000ff',
    position1 : [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    position2 : [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    position3 : [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    position4 : [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]
};

const bar = {
    color: '#ff0000',
    position1 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1]
    ],
    position2 : [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ],
    position3 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1]
    ],
    position4 : [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ]
};

const el = {
    color: '#00ff00',
    position1 : [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0]
    ],
    position2 : [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    position3 : [
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
    ],
    position4 : [
        [0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
        [0, 0, 0, 0]
    ]
};

const inverseEl = {
    color: 'yellow',
    position1 : [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0]
    ],
    position2 : [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    position3 : [
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    position4 : [
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 0]
    ]
};

const es = {
    color: '#f59542',
    position1 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0]
    ],
    position2 : [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    position3 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0]
    ],
    position4 : [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0]
    ]
}

const zet = {
    color: '#9525a8',
    position1 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0]
    ],
    position2 : [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0]
    ],
    position3 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0]
    ],
    position4 : [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0]
    ]
}

const te = {
    color: '#62d3d9',
    position1 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0]
    ],
    position2 : [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    position3 : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0]
    ],
    position4 : [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0]
    ]
}

class Player {
    constructor() {
        this.x = 4;
        this.y = 5;
        this.position = 1;
        this.type = 2;
    }

    getType = () => {
        switch (this.type) {
            case 0: return square; break;
            case 1: return bar; break;
            case 2: return el; break;
            case 3: return inverseEl; break;
            case 4: return es; break;
            case 5: return zet; break;
            case 6: return te; break;
        }
    }

    new = () => {
        this.type = Math.floor(Math.random() * 7);
        this.x = 4;
        this.y = 0;
        this.position = 1;
    }

    draw = () => {
        let type = this.getType();
        let piece = type['position' + this.position];
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (piece[row][col]) {
                    ctx.fillStyle = type.color;
                    ctx.fillRect((this.x + col - 1) * fieldWidth, (this.y + row - 4) * fieldHeight, fieldWidth, fieldHeight);
                }
            }
        }
    }

    drawNext = () => {
        let type = this.getType();
        let piece = type['position' + this.position];
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (piece[row][col]) {
                    ctx2.fillStyle = type.color;
                    ctx2.fillRect( (col + 1) * fieldWidth, row * fieldHeight, fieldWidth, fieldHeight);
                }
            }
        }
    }

    delay = 50;
    counter = 0;

    collision = (x, y, position, scena) => {
        let type = this.getType();
        let piece = type['position' + position];
        let ret = false;
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if ( (scena[y + row][x + col +1] && piece[row][col]) ) {
                    ret = true;
                    break;
                }
            }
        }
        return ret;
    }

    fallDown = () => {
        if (this.counter < this.delay) {
            this.counter++;
        } else {
            if (this.collision(this.x, this.y + 1, this.position, scena.scena)) {
                this.fixToScena(scena);
            } else {
                this.y++;
            }
            this.counter = 0;
        }
        
    }

    copyFromPlayer = (player) => {
        this.x = 4;
        this.y = 0;
        this.position = player.position;
        this.type = player.type;
    }

    rotate = () => {
        let next = this.position == 4 ? 1 : this.position + 1;
        if (!this.collision(this.x, this.y, next, scena.scena))
            this.position = next
    }

    left = () => {
        if (!this.collision(this.x - 1,this.y,this.position,scena.scena))
            this.x--;
    }

    right = () => {
        if (!this.collision(this.x + 1,this.y,this.position,scena.scena))
            this.x++;
    }

    down = () => {
        if (this.collision(this.x, this.y + 1, this.position, scena.scena)) {
            this.fixToScena(scena);
        } else {
            this.y++;
        }
    }

    fixToScena = (scena) => {
        let type = this.getType();
        let piece = type['position' + this.position];
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (piece[row][col]) {
                    scena.scena[row + this.y][col + this.x + 1] = 1;
                }
            }
        }
        scena.clearRow(scena);
        if (scena.checkLose()) {
            alert("Game over");
            top.location.reload();
        }
        this.copyFromPlayer(nextPlayer);
        nextPlayer.new();
    }
}

let player = new Player();
player.new()

let nextPlayer = new Player();
nextPlayer.new();

let scena = new Scena();



let init = () => {
    canvas = document.getElementById('canvas');
    canvas2 = document.getElementById('canvas2');
    ctx = canvas.getContext('2d');
    ctx2 = canvas2.getContext('2d');
    canvas.style.width = canvasWidth;
    canvas.style.height = canvasHeight;

    initKeyboard();

    setInterval(main, 1000 / fps);
}

let clearCanvas = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}
let clearCanvas2 = () => {
    canvas2.width = 100;
    canvas2.height = 100;
}

let initKeyboard = () => {
    document.addEventListener('keydown', (key) => {
        switch (key.code) {
            case 'ArrowUp':
            case 'Space':
                player.rotate();
                break;
            case 'ArrowRight':
                player.right();
                break;
            case 'ArrowDown':
                player.down();
                break;
            case 'ArrowLeft':
                player.left();
                break;
        }
    })
}

let main = () => {
    clearCanvas();
    clearCanvas2();
    scena.draw();
    player.fallDown();
    player.draw();
    nextPlayer.drawNext();
}