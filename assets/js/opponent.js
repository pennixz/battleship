function checkLast() {
    //IF .x 0 && .y - 1
    if (typeof player.pieces[lastPiece.x][lastPiece.y - 1] != 'undefined') {
        if (player.pieces[lastPiece.x][lastPiece.y - 1][1] == 0 && player.pieces[lastPiece.x][lastPiece.y - 1][0] != 3) {
            opponentGuess(lastPiece.x, lastPiece.y - 1);
        }
    } //IF .x 0 && .y + 1        
    else if (typeof player.pieces[lastPiece.x][lastPiece.y + 1] != 'undefined') {
        if (player.pieces[lastPiece.x][lastPiece.y + 1][1] == 0 && player.pieces[lastPiece.x][lastPiece.y + 1][0] != 3) {
            opponentGuess(lastPiece.x, lastPiece.y + 1);
        }
    }
    //IF .x - 1
    else if (typeof player.pieces[lastPiece.x - 1] != 'undefined') {

        if (player.pieces[lastPiece.x - 1][lastPiece.y][1] == 0 && player.pieces[lastPiece.x - 1][lastPiece.y][0] != 3) {
            opponentGuess(lastPiece.x - 1, lastPiece.y);
            //IF .y - 1
        } else if (typeof player.pieces[lastPiece.x - 1][lastPiece.y - 1] != 'undefined') {
            if (player.pieces[lastPiece.x - 1][lastPiece.y - 1][1] == 0 && player.pieces[lastPiece.x - 1][lastPiece.y - 1][0] != 3) {
                opponentGuess(lastPiece.x - 1, lastPiece.y - 1);
            }
        } //IF .y + 1
        else if (typeof player.pieces[lastPiece.x - 1][lastPiece.y + 1] != 'undefined') {
            if (player.pieces[lastPiece.x - 1][lastPiece.y + 1][1] == 0 && player.pieces[lastPiece.x - 1][lastPiece.y + 1][0] != 3) {
                opponentGuess(lastPiece.x - 1, lastPiece.y + 1);
            }
        }
    }
    //IF .x + 1
    else if (typeof player.pieces[lastPiece.x + 1] != 'undefined') {
        if (player.pieces[lastPiece.x + 1][lastPiece.y][1] == 0 && player.pieces[lastpiece.x + 1, lastPiece.y][0] != 3) {
            opponentGuess(lastPiece.x + 1, lastPiece.y);
        } //IF .y + 1
        else if (typeof player.pieces[lastPiece.x + 1][lastPiece.y + 1] != 'undefined') {
            if (player.pieces[lastPiece.x + 1][lastPiece.y + 1][1] == 0 && player.pieces[lastPiece.x + 1][lastPiece.y + 1][0] != 3) {
                opponentGuess(lastPiece.x + 1, lastPiece.y + 1);
            } //IF .y - 1
        } else if (typeof player.pieces[lastPiece.x + 1][lastPiece.y - 1] != 'undefined') {
            if (player.pieces[lastPiece.x + 1][lastPiece.y - 1][1] == 0 && player.pieces[lastPiece.x + 1][lastPiece.y - 1][0] != 3) {
                opponentGuess(lastPiece.x + 1, lastPiece.y - 1);
            }
        }
    } else {
        lastPiece = undefined;
        opponentGuess();
    }
}


function opponentGuess(x, y) {


    if (typeof lastPiece == 'undefined') {
        let randX = x || Math.floor(Math.random() * 10);
        let randY = y || Math.floor(Math.random() * 10);
        let pcs = player.pieces;


        if (pcs[randX][randY][0] == 3) {

            console.log('opponent struck already hit tile, retrying..');
            opponentGuess();

        } else if (pcs[randX][randY][1] == 1) {

            console.log('opponent struck already hit tile, retrying..');
            opponentGuess();

        } else if (pcs[randX][randY][0] == 0) {

            setPiece({
                name: player,
                val: 1,
                x: randX,
                y: randY,
                z: 1
            });
            console.log('opponent miss');
            playerTurn = true;
        } else if (pcs[randX][randY][0] == 1) {

            lastPiece = {
                x: randX,
                y: randY
            }

            setPiece({
                name: player,
                val: 3,
                x: randX,
                y: randY,
                z: 0
            });

            checkMove(player, randX, randY);
            opponentScore++;
            console.log('opponent hit! going in again..');
            opponentGuess();

        } else {
            checkLast();
        }
    }
}

function resetOpponent() {
    opponent.pieces = [
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
    randomizePieces(opponent);
    resetDummy();
}

function resetDummy() {
    dummyBoard.pieces = [
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