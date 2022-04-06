const playerInfo = {
  player1: "Player X's Turn!",
  player1symbol: 'X',
  player2: "Player O's Turn!",
  player2symbol: 'O',
};

let playersTurn = "Player O's Turn!";

function playGameRefactored(tile) {
  tile = document.querySelector(`#${tile}`);
  const turn = document.querySelector('#player-text');

  let isTheTileUsed;
  tile.innerText === 'X' || tile.innerText === 'O' //
    ? (isTheTileUsed = true)
    : (isTheTileUsed = false);

  if (!isTheTileUsed) {
    if (playersTurn === playerInfo.player1) {
      tile.innerText = playerInfo.player2symbol;
    } else {
      tile.innerText = playerInfo.player1symbol;
    }
    if (playersTurn === playerInfo.player1) {
      playersTurn = playerInfo.player2;
      turn.innerText = playerInfo.player1;
    } else {
      playersTurn = playerInfo.player1;
      turn.innerText = playerInfo.player2;
    }
  } else {
    tileIsUsedError();
  }
}

function tileIsUsedError() {
  const alert = document.querySelector('#alert');
  alert.innerHTML = `
    <div class="alert alert-danger" role="alert">
      This space is already used! Please choose another.
    </div>`;
  setTimeout(() => {
    alert.innerHTML = '';
  }, 3000);
}

// function isWinner() {
//   const board1 = document.querySelector('#board1');
//   const board2 = document.querySelector('#board2');
//   const board3 = document.querySelector('#board3');
//   const board4 = document.querySelector('#board4');
//   const board5 = document.querySelector('#board5');
//   const board6 = document.querySelector('#board6');
//   const board7 = document.querySelector('#board7');
//   const board8 = document.querySelector('#board8');
//   const board9 = document.querySelector('#board9');
//   let x = ['X', 'O'];

//   x.includes(board1.innerText) && board1.innerText === board2.innerText && board2.innerText === board3.innerText
//     ? (board1.innerText = '🎉') && (board2.innerText = '🎉') && (board3.innerText = '🎉')
//     : console.log();

//   x.includes(board4.innerText) && board4.innerText === board5.innerText && board5.innerText === board6.innerText
//     ? (board4.innerText = '🎉') && (board5.innerText = '🎉') && (board6.innerText = '🎉')
//     : console.log();

//   x.includes(board7.innerText) && board7.innerText === board8.innerText && board8.innerText === board9.innerText
//     ? (board7.innerText = '🎉') && (board8.innerText = '🎉') && (board9.innerText = '🎉')
//     : console.log();

//   x.includes(board1.innerText) && board1.innerText === board5.innerText && board5.innerText === board9.innerText
//     ? (board1.innerText = '🎉') && (board5.innerText = '🎉') && (board9.innerText = '🎉')
//     : console.log();

//   x.includes(board3.innerText) && board3.innerText === board5.innerText && board5.innerText === board7.innerText
//     ? (board3.innerText = '🎉') && (board5.innerText = '🎉') && (board7.innerText = '🎉')
//     : console.log();
// }
