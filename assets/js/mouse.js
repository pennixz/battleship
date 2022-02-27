function mousePressed() {
    let mx = Math.round(mouseX);
    let my = Math.round(mouseY);

    if (mx > 550 && my < 500 && playerTurn == true && started == true) {
        let nx = mx - 550;
        let x = Math.floor(nx / 50);
        let y = Math.floor(my / 50);
        let pieces = opponent.pieces;

        if (pieces[x][y][0] == 1) {
            setPiece({
                name: dummyBoard,
                val: 3,
                x: x,
                y: y,
                z: 0
            });
            setPiece({
                name: opponent,
                val: 3,
                x: x,
                y: y,
                z: 0
            });
            checkMove(opponent, x, y);
            playerScore = playerScore + 1;
            console.log('Hit!');
        } else if (pieces[x][y][0] == 3 || pieces[x][y][1] == 1) {
            console.log('Already hit that, try again!');
        } else {
            console.log('Miss');
            setPiece({
                name: dummyBoard,
                val: 1,
                x: x,
                y: y,
                z: 1
            });
            setPiece({
                name: opponent,
                val: 1,
                x: x,
                y: y,
                z: 1
            });
            playerTurn = false;
        }


    } else if (started == false && mx > button.x && mx < button.x + button.width && my > button.y && my < button.y + button.height) {
        randomizePieces(player);
    } else if (started == false && mx > startButton.x && mx < startButton.x + startButton.width &&
        my > startButton.y && my < startButton.y + startButton.height) {
        started = true;
    } else if (started == false && mx > rColorBtn.x && mx < rColorBtn.x + rColorBtn.width && my > rColorBtn.y &&
        my < rColorBtn.y + rColorBtn.height) {
        randomizeColor(player);
    }
}