const Gameboard = function() {
  let currentSign = 'X';
  function changeCurrentSign() {
    if (currentSign === 'X') currentSign = 'O';
    if (currentSign === 'O') currentSign = 'X';
  }
  function showCurrentSign(){
    return currentSign;
  }

  const gameBoardArr =  ['','','','','','','','',''];

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
      changeCurrentSign();
      renderBoard();
    }
  }

  return {
    renderBoard
  };
}();

Gameboard.renderBoard();