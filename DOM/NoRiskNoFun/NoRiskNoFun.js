let scoreA = document.getElementById("scoreA");
let scoreB = document.getElementById("scoreB");

let playerA = document.getElementById("playerA");
let playerB = document.getElementById("playerB");

let scoreATurn = document.getElementById("scoreATurn");
let scoreBTurn = document.getElementById("scoreBTurn");

let displayRound = document.getElementById("round");
let displayPlayersTurn = document.getElementById("playersTurn");
let displayRolledNumber = document.getElementById("rolledNumber");

let buttonPass = document.getElementById("bu2");
let buttonReset = document.getElementById("bu3");

let dice = document.getElementById("dice");
let buttonRollDice = dice.addEventListener("click", rollDice)

let pointsTotal, pointsRound, round, activePlayer, end, interval;
let amountRounds = 10;
let playerNames = ["A", "B"];
let diceSide = 1;

init();


function init() {
    end = false;
    pointsTotal = [0, 0];
    pointsRound = [0, 0];
    round = 1;
    activePlayer = 0;
    buttonReset.disabled = true;
    buttonPass.disabled = false;
    update();
}

function update() {
    scoreA.innerHTML = `<b> ${pointsTotal[0]} </b> Points`;
    scoreB.innerHTML = `<b> ${pointsTotal[1]} </b> Points`;
    scoreATurn.innerHTML = `<b> + ${pointsRound[0]} </b>`;
    scoreBTurn.innerHTML = `<b> + ${pointsRound[1]} </b>`;
    displayRound.innerHTML = `Round ${round}/${amountRounds}`
    displayPlayersTurn.innerHTML = `Player ${playerNames[activePlayer]}'s turn`
    buttonPass.innerHTML = `${playerNames[activePlayer]} pass`;

    if (end) return;

    if (activePlayer == 0) {
        setColorPlayerA("black");
        setColorPlayerB("gray");
    }
    else {
        setColorPlayerB("black");
        setColorPlayerA("gray");
    }
}

function rollDice() {
    interval = setInterval(turnDice, 100);
    setTimeout(rollNumber, 1000);
}

function turnDice() {
    diceSide++;
    if (diceSide > 6) {
        diceSide = 1;
    }
    displayDice(diceSide);
}

function rollNumber() {
    clearInterval(interval);

    let n = Math.floor(Math.random() * 6 + 1);
    displayDice(n);

    if (n < 6) {
        pointsRound[activePlayer] += n;
    }

    else {
        pointsRound[activePlayer] = 0;
        switchPlayer();
    }

    update();
}

function pass() {						
    pointsTotal[activePlayer] += pointsRound[activePlayer];
    pointsRound[activePlayer] = 0;

    switchPlayer();
    update();
}

function switchPlayer() {
    if (activePlayer == 0) activePlayer = 1;
    else {
        round += 1;
        activePlayer = 0;
    }

    if (round > amountRounds) {
        gameOver();
        return;
    }
}

function reset() {					
    init();
}

function gameOver() {
    buttonPass.disabled = true;
    end = true;

    let text;

    if (pointsTotal[0] > pointsTotal[1]) {
        text = `Player ${playerNames[0]} wins`
        setColorPlayerA("green");
        setColorPlayerB("red");
    }
    else if (pointsTotal[0] == pointsTotal[1]) {
        text = `It is a draw`;
        setColorPlayerA("green");
        setColorPlayerB("green");
    }
    else {
        text = `Player ${playerNames[1]} wins`;
        setColorPlayerB("green");
        setColorPlayerA("red");
    }

    displayRolledNumber.innerHTML = text;
    buttonReset.disabled = false;
    round = 10;
}

function setColorPlayerA(color) {
    playerA.style.color = color
    scoreA.style.color = color
    scoreATurn.style.color = color
}

function setColorPlayerB(color) {
    playerB.style.color = color
    scoreB.style.color = color
    scoreBTurn.style.color = color
}


function displayDice(n) {
    let src = "dice.png"
    switch (n) {
        case 1:
            src = "dice/one.png"
            break
        case 2:
            src = "dice/two.png"
            break
        case 3:
            src = "dice/three.png"
            break
        case 4:
            src = "dice/four.png"
            break
        case 5:
            src = "dice/five.png"
            break
        case 6:
            src = "dice/six.png"
            break
        default:
            break
    }

    dice.src = src;
}