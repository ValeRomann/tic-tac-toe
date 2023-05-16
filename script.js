const Gameboard = function() {
  const DISPLAY = document.querySelector('#display');
  DISPLAY.innerText = 'kek';
  const RESET_BUTTON = document.querySelector('#resetButton')
  let currentSign = 'X';

  function changeCurrentSign() {
    if (currentSign === 'X') currentSign = 'O';
    else currentSign = 'X';
  }
  function showCurrentSign(){
    return currentSign;
  }

  let gameBoardArr =  ['','','','','','','','',''];

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
    if (gameBoardArr[id] === '') {    
      gameBoardArr[id] = showCurrentSign();
      renderBoard();
      checkWin(currentSign);
      console.log(checkWin(currentSign), currentSign);      
      changeCurrentSign();
    }
  }

  function resetGame() {
    gameBoardArr =  ['','','','','','','','',''];
    currentSign = 'X';
    renderBoard();
  }

  RESET_BUTTON.onclick = resetGame;

  function checkWin(currentSign) {
    if (
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
      ) return true;
      return false
  }

  return {
    renderBoard
  };
}();

Gameboard.renderBoard();