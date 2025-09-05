const squares = document.querySelectorAll(".square");
const statusText = document.getElementById("status");
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

squares.forEach((square, index) => {
  square.addEventListener("click", () => {
    if (square.textContent || gameOver) return;

    square.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
      statusText.textContent = `Player ${currentPlayer} wins! 🎉`;
      gameOver = true;
    } else if ([...squares].every(s => s.textContent)) {
      statusText.textContent = "It's a tie!!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
  });
});

function checkWin(player) {
  return winPatterns.some(pattern => {
    return pattern.every(index => squares[index].textContent === player);
  });
}

function restartGame() {
  squares.forEach(square => square.textContent = "");
  currentPlayer = "X";
  gameOver = false;
  statusText.textContent = "Player X's turn";
}
