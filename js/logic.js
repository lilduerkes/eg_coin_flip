let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;

function runGame(x) {
  let choiceResult = x;
  let randNum = Math.floor(Math.random() * 2) + 1;

  let flipResult;
  if (randNum === 1) {
    flipResult = 'tails';
  } else {
    flipResult = 'heads';
  }

  let gameResult;
  if (flipResult === choiceResult) {
    gameResult = "win";
    gamesWon++;
  } else {
    gameResult = "loss";
    gamesLost++;
  }

  gamesPlayed++;

  document.getElementById('prediction').innerText = choiceResult;
  document.getElementById('flip').innerText = flipResult;
  document.getElementById('result').innerText = gameResult;
  document.getElementById('count').innerText = gamesPlayed;
  document.getElementById('wins').innerText = gamesWon;
  document.getElementById('losses').innerText = gamesLost;
}

function resetScore() {
  gamesPlayed = 0;
  gamesWon = 0;
  gamesLost = 0;

  document.getElementById('count').innerText = gamesPlayed;
  document.getElementById('wins').innerText = gamesWon;
  document.getElementById('losses').innerText = gamesLost;
}
