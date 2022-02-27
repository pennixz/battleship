let player;
let opponent;
let playerScore = 0;
let opponentScore = 0;
let dummyBoard;
let lastPiece;
let button = {
    height: 40,
    width: 80,
    x: 250,
    y: 550
};
let startButton = {
    height: 40,
    width: 40,
    x: 200,
    y: 550
};
let rColorBtn = {
    height: 40,
    width: 100,
    x: 340,
    y: 550
}
let statusText = '';
let playerTurn = true;
var started = false;
let newGameButton = document.getElementById('newGame');


function setup() {

    createCanvas(1100, 750);

    player = new Board(newBlankBoard(), 0);
    opponent = new Board(newBlankBoard(), 550);
    dummyBoard = new Board(newBlankBoard(), 550);

    randomizePieces(opponent);
}
const resetAll = () => {
    resetPlayer()
    resetDummy()
    resetOpponent()
    playerScore = 0
    opponentScore = 0
    started = false;
}

function main() {
    if (playerScore == 19) {
        alert("You win! Great job defeating the evil computer in this vital game of battleship! ...hic!")
        resetAll()

    } else if (opponentScore == 19) {
        alert("You wi... Wait what you lost? The computer got the best of you... Take your revenge, now, do it.");
        resetAll()
    }
    if (started) {
        if (!playerTurn) {
            opponentGuess();
            statusText = "Computers turn";
        } else {
            statusText = "Your turn";
        }
    } else {
        statusText = "Choose your layout";
    }
}

function draw() {
    main();
    clear();

    player.drawBoard();
    dummyBoard.drawBoard();

    fill(0);
    text(statusText, 500, 520);
    text('You have ' + playerScore + ' points', 250, 525);
    text('Opponent has ' + opponentScore + ' points', 750, 525);

    if (started == false) {
        fill(0);
        rect(button.x, button.y, button.width, button.height);
        rect(startButton.x, startButton.y, startButton.width, startButton.height);
        rect(rColorBtn.x, rColorBtn.y, rColorBtn.width, rColorBtn.height);

        fill(255);
        text('Randomize', button.x + 10, button.y + 25);
        text('Start', startButton.x + 7, startButton.y + 25);
        text('Randomize color', rColorBtn.x + 6, rColorBtn.y + 25);
    }
}