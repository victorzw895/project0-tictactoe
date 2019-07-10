let turn = 0;
let round = 1;
let gameOver = false;
let p1Points = 0;
let p2Points = 0;
let score = '';
let playerTurn = '';


// const startPlayer = function() {
//   if (round%2 === 1) {
//     return '1';
//   }
//   else {
//     return '2';
//   }
// }

const resetGameValues = function() {
  turn = 0;
  gameOver = false;
  tictactoe.player1 = [];
  tictactoe.player2 = [];
};

const whosTurn = function() {
  turn = turn + 1;
  if (round%2 === 1) { // if Round 1,3,5
    if (turn%2 === 1) { // player1 starts first turn
      console.log(`player 1 turn ${turn}, round ${round}`)
      return 'player1';
    }
    else if (turn%2 === 0) {
      console.log(`player 2 turn ${turn}, round ${round}`)
      return 'player2';
    }
  }
  else if (round%2 === 0) { // if Round 2,4
    if (turn%2 === 1) { // player2 starts first turn
      console.log(`player 2 turn ${turn}, round ${round}`)
      return 'player2';
    }
    else if (turn%2 === 0) {
      console.log(`player 1 turn ${turn}, round ${round}`)
      return 'player1';
    }
  }
};

const player1Selected = function(element) {
  return tictactoe.player1.includes(element);
}

const player2Selected = function(element) {
  return tictactoe.player2.includes(element);
}

const updateScore = function() {
  score = `${ p1Points } - ${ p2Points }`;
  return score;
}

const checkWin = function() {
  for (let i = 1; i <= 8; i++) {
    if(playerTurn === 'player2') {
      if (tictactoe.winCondition['win'+i].every(player2Selected)){
        console.log('player2 won');
        gameOver = true;
        p2Points = p2Points + 1;
        updateScore();
      }
    }
    else if (playerTurn === 'player1') {
      if (tictactoe.winCondition['win'+i].every(player1Selected)){
        console.log('player1 won');
        gameOver =  true;
        p1Points = p1Points + 1;
        updateScore();
      }
    }
  }
}

const tictactoe = {
  winCondition: {
    win1: ['r0c0','r0c1','r0c2'],
    win2: ['r1c0','r1c1','r1c2'],
    win3: ['r2c0','r2c1','r2c2'],
    win4: ['r0c0','r1c0','r2c0'],
    win5: ['r0c1','r1c1','r2c1'],
    win6: ['r0c2','r1c2','r2c2'],
    win7: ['r0c0','r1c1','r2c2'],
    win8: ['r0c2','r1c1','r2c0'],
  },

  player1: [],

  player2: [],

  pickBox: function ( row, column ) {
    playerTurn = whosTurn();
    console.log(playerTurn);
    tictactoe[playerTurn].push(`r${row}c${column}`);
    console.log(tictactoe.player1);
    console.log(tictactoe.player2);
    checkWin();
  }
}
