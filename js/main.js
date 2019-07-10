
let playerToken = '';
let opponentToken = '';

$(document).ready(function () {

  const resetGameHtml = function() {
    $('.message-board').html('');
    $('.score-board').html('');
    $('button').css('visibility','hidden');
  }


  const updateBoard = function(cell) {
    tictactoe.pickBox( row, column );
    $(cell).unbind();
    if (playerTurn === 'player1') {
      // $(cell).css({
      //   "background-image":`url(images/${ playerToken })`,
      //   "background-size":"contain"
      // });
      $(cell).addClass(`${ playerToken }`);
    }
    else if (playerTurn === 'player2') {
      // $(cell).css({
      //   "background-image":`url(images/${ opponentToken })`,
      //   "background-size":"contain"
      // });
      $(cell).addClass(`${ opponentToken }`);
    }
  }

  const gameOverDisplay = function() {
    if (p1Points === 3 || p2Points === 3) {
      $('td').unbind();
      if (p1Points > p2Points) {
        $('.message-board').html(`Player 1 is the Winner!`);
      }
      else {
        $('.message-board').html(`Player 2 is the Winner!`);
      }
      $('.score-board').html(`${ updateScore() }`);
    }
    else if (gameOver && playerTurn === 'player2') {
      $('*').removeClass(`${ playerToken }`);
      $('tbody').addClass('gameOver');
      $('.message-board').html(`Player2 won! <br/> ${ updateScore() }`);
      $('button').css('visibility','visible');
      $('td').unbind();
    }
    else if (gameOver && playerTurn === 'player1') {
      $('*').removeClass(`${ opponentToken }`);
      $('tbody').addClass('gameOver');
      $('.message-board').html(`Player1 won! <br/> ${ updateScore() }`);
      $('button').css('visibility','visible');
      $('td').unbind();
    }
    else if (turn === 9) {
      $('*').removeClass(`${ opponentToken }`);
      $('*').removeClass(`${ playerToken }`);
      $('.message-board').html(`Draw!`);
      $('.score-board').html(`${ updateScore() }`);
      $('button').css('visibility','visible');

    }
  }

  const pickBox = function() {
    $('td').on('click', function() {
      row = this.dataset.row;
      column = this.dataset.col;
      updateBoard(this);
      gameOverDisplay();
    });
  }

  const selectToken = function() {
    $('img').on('click', function() {
      // animation
      if (playerToken === '') {
        playerToken = `${ this.alt }-red`;
      }
      else {
        opponentToken = `${ this.alt }-blue`;
        setTimeout(function() {
          $('img').hide(1200);
          $('h3').hide(1200);
          pickBox();
        }, 800);
      };

      $(this).hide(1000);
      console.log(playerToken)
      console.log(`${playerToken}`)
      console.log(this);
    })
  }

  const gameStart = function() {
    selectToken();
  }

  gameStart();

  pickBox();
  $('td').unbind();


  $('button').on('click', function() {
    resetGameValues();
    $('*').removeClass(`${ playerToken }`);
    $('*').removeClass(`${ opponentToken }`);
    $('*').removeClass('gameOver');
    resetGameHtml();
    pickBox();
    round = round + 1;
  });
});
