// Variables
const startNewGameBtnElement = document.querySelector('.start-new-game');
const board = document.querySelector('#game-board');

function startGameFn() {
  console.log('The game is clicked!');
}

startNewGameBtnElement.addEventListener('click', startGameFn)