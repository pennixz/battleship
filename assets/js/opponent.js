function checkLast() {
    let roll = Math.round(Math.random() * 7);
    switch (roll) {
        case 0:
            if (player.pieces[lastPiece.x][lastPiece.y - 1][1] == 0 && player.pieces[lastPiece.x][lastPiece.y - 1][0] != 3) {
                opponentGuess(lastPiece.x, lastPiece.y - 1);
            } else {
                checkLast();
            }
            break
        case 1:

            if (player.pieces[lastPiece.x][lastPiece.y + 1][1] == 0 && player.pieces[lastPiece.x][lastPiece.y + 1][0] != 3) {
                opponentGuess(lastPiece.x, lastPiece.y + 1);
            } else {
                checkLast();
            }
            break

        case 2:
            if (player.pieces[lastPiece.x - 1][lastPiece.y][1] == 0 && player.pieces[lastPiece.x - 1][lastPiece.y][0] != 3) {
                opponentGuess(lastPiece.x - 1, lastPiece.y);
            } else {
                checkLast();
            }
            break
        case 3:
            if (player.pieces[lastPiece.x - 1][lastPiece.y - 1][1] == 0 && player.pieces[lastPiece.x - 1][lastPiece.y - 1][0] != 3) {
                opponentGuess(lastPiece.x - 1, lastPiece.y - 1);

            } else {
                checkLast();
            }
            break
        case 4:

            if (player.pieces[lastPiece.x - 1][lastPiece.y + 1][1] == 0 && player.pieces[lastPiece.x - 1][lastPiece.y + 1][0] != 3) {
                opponentGuess(lastPiece.x - 1, lastPiece.y + 1);
            } else {
                checkLast();
            }
            break
        case 5:
            if (player.pieces[lastPiece.x + 1][lastPiece.y][1] == 0 && player.pieces[lastpiece.x + 1, lastPiece.y][0] != 3) {
                opponentGuess(lastPiece.x + 1, lastPiece.y);

            } else {
                checkLast();
            }
            break

        case 6:
            if (player.pieces[lastPiece.x + 1][lastPiece.y + 1][1] == 0 && player.pieces[lastPiece.x + 1][lastPiece.y + 1][0] != 3) {
                opponentGuess(lastPiece.x + 1, lastPiece.y + 1);
            } else {
                checkLast();
            }
            break
        case 7:
            if (player.pieces[lastPiece.x + 1][lastPiece.y - 1][1] == 0 && player.pieces[lastPiece.x + 1][lastPiece.y - 1][0] != 3) {
                opponentGuess(lastPiece.x + 1, lastPiece.y - 1);
            } else {
                checkLast()
            }
            break
    }
}




function opponentGuess(x, y) {

    if (lastPiece != 0 || typeof lastPiece != 'undefined') {
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

            setPiece({
                name: player,
                val: 3,
                x: randX,
                y: randY,
                z: 0
            });

            lastPiece = {
                x: randX,
                y: randY
            }
            checkMove(player, randX, randY);
            opponentScore++;
            console.log('opponent hit! going in again..');
            opponentGuess();

        }

    } else {
        checkLast();
    }
}

function resetOpponent() {
    opponent.pieces = newBlankBoard()  
    randomizePieces(opponent);
    resetDummy();
}

function resetDummy() {
    dummyBoard.pieces = newBlankBoard() 
}