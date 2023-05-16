const Gameboard = function() {
  return {
    gameBoardArr: ['O','X','O','X','O','X','O','X','O'],
  };
}();

const renderBoard = function() {
  const BOARD = document.querySelector('#gamePad');

  let fillBoard = function(arr) {
    BOARD.innerHTML = '';
    for  (let i = 0; i < arr.length; i++) {
      let item = document.createElement('div');
      item.innerText = arr[i];
      BOARD.appendChild(item);
    }
  }(Gameboard.gameBoardArr);

}();