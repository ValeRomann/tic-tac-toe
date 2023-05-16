const Gameboard = function() {
  return {
    gameBoardArr: ['','','','','','','','',''],
  };
}();

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
  }(Gameboard.gameBoardArr);  

};

renderBoard();

function putSign(id) {
  if (Gameboard.gameBoardArr[id] === '') {    
    Gameboard.gameBoardArr[id] = 'X';
    renderBoard();
  }
}