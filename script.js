const Gameboard = function() {
  const INPUT_PLAYERS_FORM = document.getElementById('inputForm');
  const INPUT_PLAYER1 = document.getElementById('playerName1');
  const INPUT_PLAYER2 = document.getElementById('playerName2');
  const ERROR_MESSAGE = document.querySelectorAll('.error');
  const GAMEPAD = document.getElementById('gamePad');
  GAMEPAD.style.backgroundColor = 'lightgray';


  INPUT_PLAYER1.onchange = function (e) {
    if (e.target.value.length < 6) {
      ERROR_MESSAGE[0].innerText = 'Name must be at least 6 characters';
      return false;
    }
    if (e.target.value.length > 20) {
      ERROR_MESSAGE[0].innerText = 'Name must not be more than 20 characters';
      return false;
    }
    ERROR_MESSAGE[0].innerText = '';
    return true;
  }

  INPUT_PLAYER2.onchange = function (e) {
    if (e.target.value.length < 6) {
      ERROR_MESSAGE[1].innerText = 'Name must be at least 6 characters';
      return false;
    }
    if (e.target.value.length > 20) {
      ERROR_MESSAGE[1].innerText = 'Name must not be more than 20 characters';
      return false;
    }
    ERROR_MESSAGE[1].innerText = '';
    return true;
  }

  let player1;
  let player2;

  const DISPLAY = document.querySelector('#display');
  DISPLAY.innerText = 'Welcome!';

  const SUBMIT_PLAYERS_NAME = document.querySelector('#submitPlayerName');
  const RESET_BUTTON = document.querySelector('#resetButton');
  const NEW_GAME_BUTTON = document.querySelector('#newGameButton');

  let currentSign = 'X';
  let currentPlayer;

  SUBMIT_PLAYERS_NAME.onclick = function(e) {
    e.preventDefault();
    if (INPUT_PLAYER1.value.length < 6 && INPUT_PLAYER1.value.length < 20) {
      ERROR_MESSAGE[0].innerText = 'Name must be at least 6 characters';
      ERROR_MESSAGE[1].innerText = 'Name must be at least 6 characters';
      return;
    }
    GAMEPAD.style.backgroundColor = 'rgb(146, 146, 146)';
    player1 = document.getElementById('playerName1').value;
    player2 = document.getElementById('playerName2').value;
    currentPlayer = player1;
    DISPLAY.innerText = `${currentPlayer}'s Move!`;
    INPUT_PLAYERS_FORM.className = 'hidden';
  };  
  
  function changeCurrentSign() {
    if (currentSign === 'X') {
      currentSign = 'O';
      currentPlayer = player2;
    } else {
      currentSign = 'X';
      currentPlayer = player1;
    }
  }

  function showCurrentSign() {
    return currentSign;
  }

  let gameBoardArr =  ['','','','','','','','',''];

  let checkArr = function(arr) {    
    return arr.includes('');
  };

  const renderBoard = function() {
    const BOARD = document.querySelector('#gamePad');
  
    let fillBoard = function(arr) {
      BOARD.innerHTML = '';
      for  (let i = 0; i < arr.length; i++) {
        let item = document.createElement('div');
        item.id = [i];
        item.innerText = arr[i];
        item.onclick = putSign.bind(null, item.id);
        BOARD.appendChild(item);
      }
    }(gameBoardArr);  
  
  };

  function putSign(id) {
    if (INPUT_PLAYERS_FORM.className !== 'hidden') return;
    if (checkWin(currentSign)) return;
    
    if (gameBoardArr[id] === '') {    
      gameBoardArr[id] = showCurrentSign();
      renderBoard();
      if (checkWin(currentSign)) {
        DISPLAY.innerText = `Winner is ${currentPlayer}!`;
        return;
      }
      if (!gameBoardArr.includes('')) DISPLAY.innerText = `It's a Draw!`;
      changeCurrentSign();
      DISPLAY.innerText = `${currentPlayer}'s Move!`;
    }
  }

  RESET_BUTTON.onclick  = function() {
    gameBoardArr =  ['','','','','','','','',''];
    currentSign = 'X';
    currentPlayer = player1;
    DISPLAY.innerText = `${currentPlayer}'s Move!`;
    renderBoard();
  }

  NEW_GAME_BUTTON.onclick = function() {
    player1 = '';
    player2 = '';
    document.getElementById('playerName1').value = '';
    document.getElementById('playerName2').value = '';
    GAMEPAD.style.backgroundColor = 'lightgray';
    INPUT_PLAYERS_FORM.className = '';
    gameBoardArr =  ['','','','','','','','',''];
    currentSign = 'X';
    DISPLAY.innerText = `Welcome!`;
    renderBoard();
  }

  function checkWin(currentSign) {
    return (
        (currentSign === gameBoardArr[0] &&
        currentSign === gameBoardArr[1] &&
        currentSign === gameBoardArr[2])
        || 
        (currentSign === gameBoardArr[3] &&
        currentSign === gameBoardArr[4] &&
        currentSign === gameBoardArr[5])
        ||
        (currentSign === gameBoardArr[6] &&
        currentSign === gameBoardArr[7] &&
        currentSign === gameBoardArr[8])
        ||
        (currentSign === gameBoardArr[0] &&
        currentSign === gameBoardArr[3] &&
        currentSign === gameBoardArr[6])
        ||
        (currentSign === gameBoardArr[1] &&
        currentSign === gameBoardArr[4] &&
        currentSign === gameBoardArr[7])
        ||
        (currentSign === gameBoardArr[2] &&
        currentSign === gameBoardArr[5] &&
        currentSign === gameBoardArr[8])
        ||
        (currentSign === gameBoardArr[0] &&
        currentSign === gameBoardArr[4] &&
        currentSign === gameBoardArr[8])
        ||
        (currentSign === gameBoardArr[2] &&
        currentSign === gameBoardArr[4] &&
        currentSign === gameBoardArr[6])
      );
  }

  return {
    renderBoard
  };
}();

Gameboard.renderBoard();