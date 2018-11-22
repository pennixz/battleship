class Board {
    constructor(pcs, xOffset) {
        this.ships = [];
        this.pieces = pcs || [];
        this.xOffset = xOffset || 0;
        this.r = 0;
        this.b = 255;
        this.g = 177;
    }
    drawBoard() {
        let w = 50;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if ((this.pieces[i][j][0] == 1 && this.pieces[i][j][1] == 1) || (this.pieces[i][j][0] == 0 && this.pieces[i][j][1] == 1)) {
                    fill('silver');
                    stroke(0);
                    rect(i * w + this.xOffset, j * w, w - 1, w - 1);
                } else if (this.pieces[i][j][0] == 1) {
                    fill(this.r, this.b, this.g);
                    stroke(0);
                    strokeWeight(2);
                    rect(i * w + this.xOffset, j * w, w - 1, w - 1);
                } else if (this.pieces[i][j][0] == 3) {
                    fill('red');
                    stroke(0);
                    rect(i * w + this.xOffset, j * w, w - 1, w - 1);
                } else {
                    fill(255);
                    strokeWeight(1);
                    stroke(0);
                    rect(i * w + this.xOffset, j * w, w - 1, w - 1);
                }
            }
        }
    }
}



function randomizeColor(tar) {
    let r1 = Math.round(Math.random() * 255);
    let b1 = Math.round(Math.random() * 255);
    let g1 = Math.round(Math.random() * 255);
    tar.r = r1;
    tar.b = b1;
    tar.g = g1;
}

function resetPlayer() {
    player.pieces = [
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    ];
}


                function setPiece(value) {
    value.name.pieces[value.x][value.y][value.z] = value.val;
}

function randomizePieces(tar) {
    tar.pieces = [
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    ];
    let pcs = tar.pieces;
    let triples = 0;
    let doubles = 0;
    let singles = 0;

    while (triples < 3) {
        let checkAngled = Math.round(Math.random());
        let chosenX = Math.floor(Math.random() * 10);
        let chosenY = Math.floor(Math.random() * 10);
        if (chosenY > 0 && chosenX > 0 && chosenY < 9 && chosenX < 9) {
            if (checkAngled < 1 && chosenY > 0 && chosenY < 9) {
                if (pcs[chosenX][chosenY][0] == 0 &&
                    (typeof pcs[chosenX][chosenY + 1][0] == 'undefined' || pcs[chosenX][chosenY + 1][0] == 0) &&
                    (typeof pcs[chosenX][chosenY - 1][0] == 'undefined' || pcs[chosenX][chosenY - 1][0] == 0) &&
                    (typeof pcs[chosenX - 1][chosenY - 1][0] == 'undefined' || pcs[chosenX - 1][chosenY - 1][0] == 0) &&
                    (typeof pcs[chosenX - 1][chosenY][0] == 'undefined' || pcs[chosenX - 1][chosenY][0] == 0) &&
                    (typeof pcs[chosenX - 1][chosenY + 1][0] == 'undefined' || pcs[chosenX - 1][chosenY + 1][0] == 0) &&
                    (typeof pcs[chosenX + 1][chosenY + 1][0] == 'undefined' || pcs[chosenX + 1][chosenY + 1][0] == 0) &&
                    (typeof pcs[chosenX + 1][chosenY][0] == 'undefined' || pcs[chosenX + 1][chosenY][0] == 0) &&
                    (typeof pcs[chosenX + 1][chosenY - 1][0] == 'undefined' || pcs[chosenX + 1][chosenY - 1][0]) &&
                    (typeof pcs[chosenX][chosenY - 2] == 'undefined' || pcs[chosenX][chosenY - 2][0] == 0) &&
                    (typeof pcs[chosenX][chosenY + 2] == 'undefined' || pcs[chosenX][chosenY + 2][0] == 0)) {

                    pcs[chosenX][chosenY - 1][0] = 1;
                    pcs[chosenX][chosenY][0] = 1;
                    pcs[chosenX][chosenY + 1][0] = 1;
                    triples++;
                    console.log('triple block created');

                } else {
                    console.log('triple block attempt failed');
                }
            } else if (checkAngled == 1 && chosenX > 0 && chosenX < 9) {
                if (pcs[chosenX][chosenY][0] == 0 &&
                    (typeof pcs[chosenX + 1][chosenY][0] == 'undefined' || pcs[chosenX + 1][chosenY][0] == 0) &&
                    (typeof pcs[chosenX - 1][chosenY][0] == 'undefined' || pcs[chosenX - 1][chosenY][0] == 0) &&
                    (typeof pcs[chosenX - 1][chosenY - 1][0] == 'undefined' || pcs[chosenX - 1][chosenY - 1][0] == 0) &&
                    (typeof pcs[chosenX - 1][chosenY + 1][0] == 'undefined' || pcs[chosenX - 1][chosenY + 1][0] == 0) &&
                    (typeof pcs[chosenX][chosenY - 1][0] == 'undefined' || pcs[chosenX][chosenY - 1][0] == 0) &&
                    (typeof pcs[chosenX][chosenY + 1][0] == 'undefined' || pcs[chosenX][chosenY + 1][0] == 0) &&
                    (typeof pcs[chosenX + 1][chosenY - 1][0] == 'undefined' || pcs[chosenX + 1][chosenY - 1][0] == 0) &&
                    (typeof pcs[chosenX + 1][chosenY + 1][0] == 'undefined' || pcs[chosenX + 1][chosenY + 1][0] == 0) &&
                    (typeof pcs[chosenX + 1][chosenY][0] == 'undefined' || pcs[chosenX + 1][chosenY][0] == 0) &&
                    (typeof pcs[chosenX - 2] == 'undefined' || pcs[chosenX - 2][chosenY][0] == 0) &&
                    (typeof pcs[chosenX + 2] == 'undefined' || pcs[chosenX + 2][chosenY][0] == 0)) {

                    pcs[chosenX - 1][chosenY][0] = 1;
                    pcs[chosenX][chosenY][0] = 1;
                    pcs[chosenX + 1][chosenY][0] = 1;
                    triples++;
                    console.log('angled triple block created');
                } else {
                    console.log('angled triple block attempt failed');

                }
            }
        }
    }
    while (doubles < 3) {
        let checkAngled = Math.round(Math.random());
        let chosenX = Math.floor(Math.random() * 10);
        let chosenY = Math.floor(Math.random() * 10);
        if (chosenY > 1 && chosenX > 1 && chosenY < 8 && chosenX < 8) {
            if (checkAngled < 1) {
                if (pcs[chosenX][chosenY][0] == 0 &&
                    pcs[chosenX][chosenY - 1][0] == 0 &&
                    pcs[chosenX - 1][chosenY][0] == 0 &&
                    pcs[chosenX - 1][chosenY - 1][0] == 0 &&
                    pcs[chosenX + 1][chosenY][0] == 0 &&
                    pcs[chosenX + 1][chosenY - 1][0] == 0 &&
                    (typeof pcs[chosenX][chosenY - 2][0] == 'undefined' || pcs[chosenX][chosenY - 2][0] == 0) &&
                    pcs[chosenX][chosenY + 1][0] == 0) {
                    pcs[chosenX][chosenY - 1][0] = 1;
                    pcs[chosenX][chosenY][0] = 1;
                    doubles++;
                    console.log('double block created');
                } else {
                    console.log('double block attempt failed');
                }

            } else if (checkAngled == 1) {
                if (pcs[chosenX][chosenY][0] == 0 &&
                    pcs[chosenX + 1][chosenY][0] == 0 &&
                    pcs[chosenX][chosenY - 1][0] == 0 &&
                    pcs[chosenX][chosenY + 1][0] == 0 &&
                    pcs[chosenX + 1][chosenY - 1][0] == 0 &&
                    pcs[chosenX + 1][chosenY + 1][0] == 0 &&
                    (typeof pcs[chosenX + 2][chosenY][0] == 'undefined' || pcs[chosenX + 2][chosenY][0] == 0) &&
                    pcs[chosenX - 1][chosenY][0] == 0
                ) {
                    pcs[chosenX][chosenY][0] = 1;
                    pcs[chosenX + 1][chosenY][0] = 1;
                    doubles++
                    console.log('angled double block created');
                } else {
                    console.log('angled double block attempt failed');
                }
            }
        }
    }

    while (singles < 4) {
        let chosenX = Math.floor(Math.random() * 9);
        let chosenY = Math.floor(Math.random() * 9);
        if (chosenY > 0 && chosenX > 0 && chosenY < 9 && chosenX < 9) {
            if (pcs[chosenX][chosenY][0] == 0 && pcs[chosenX + 1][chosenY][0] == 0 && pcs[chosenX - 1][chosenY][0] == 0 && pcs[chosenX][chosenY + 1][0] == 0 && pcs[chosenX][chosenY - 1][0] == 0) {
                pcs[chosenX][chosenY][0] = 1;
                console.log('single block created');
                singles++;
            } else {
                console.log('single block attempt failed');
            }
        }
    }
}



function checkMove(target, x, y) {
    let tp = target.pieces;
    let dummyBrd = dummyBoard.pieces;
    let value = {
        name: target,
        x: x,
        y: y,
        z: 1,
        val: 1
    };
    let dValue;
    if (value.name == opponent) {
        dValue = {
            name: dummyBoard,
            x: x,
            y: y,
            z: 1,
            val: 1
        };
    }

    if (tp[x][y][0] == 3) {
        if (typeof tp[x + 1] != 'undefined' && tp[x + 1][y][0] == 0) {
            tp[x + 1][y][1] = 1;
            if (dValue) {
                dummyBrd[x + 1][y][1] = 1;
            }
        }
        if (typeof tp[x][y + 1] != 'undefined' && tp[x][y + 1][0] == 0) {
            tp[x][y + 1][1] = 1;
            if (dValue) {
                dummyBrd[x][y + 1][1] = 1;
            }
        }
        if (typeof tp[x + 1] != 'undefined' && typeof tp[x+1][y + 1] != 'undefined' && tp[x + 1][y + 1][0] == 0) {
            tp[x + 1][y + 1][1] = 1;
            if (dValue) {
                dummyBrd[x + 1][y + 1][1] = 1;
            }
        }
        if (typeof tp[x - 1] != 'undefined' && tp[x - 1][y][0] == 0) {
            tp[x - 1][y][1] = 1;
            if (dValue) {
                dummyBrd[x - 1][y][1] = 1;
            }
        }
        if (typeof tp[x][y - 1] != 'undefined' && tp[x][y - 1][0] == 0) {
            tp[x][y - 1][1] = 1;
            if (dValue) {
                dummyBrd[x][y - 1][1] = 1;
            }
        }
        if (typeof tp[x - 1] != 'undefined' && tp[x - 1][y - 1] != 'undefined' && tp[x - 1][y - 1][0] == 0) {
            tp[x - 1][y - 1][1] = 1;
            if (dValue) {
                dummyBrd[x - 1][y - 1][1] = 1;
            }
        }
        if (typeof tp[x - 1] != 'undefined' && typeof tp[x - 1][y + 1] != 'undefined' && tp[x - 1][y + 1][0] == 0) {
            tp[x - 1][y + 1][1] = 1;
            if (dValue) {
                dummyBrd[x - 1][y + 1][1] = 1;
            }
        }
        if (typeof tp[x + 1] != 'undefined' && tp[x+1][y - 1][0] != 'undefined' && tp[x + 1][y - 1][0] == 0) {
            tp[x + 1][y - 1][1] = 1;
            if (dValue) {
                dummyBrd[x + 1][y - 1][1] = 1;
            }
        }
    }
}