const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(cellIndex) {
    if (!board[cellIndex] && board.includes('') && !checkWinner()) {
        board[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        message.textContent = `Player ${currentPlayer}'s Turn`;
        if (!checkWinner() && !board.includes('')) {
            message.textContent = "It's a draw!";
        }
    }
}

function checkWinner() {
    const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            message.textContent = `Player ${board[a]} wins!`;
            return true;
        }
    }

    return false;
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    message.textContent = "Player X's Turn";
    for (const cell of cells) {
        cell.textContent = '';
    }
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        makeMove(index);
    });
});

restartButton.addEventListener('click', resetBoard);

resetBoard();


//back to previous page icon
// get back button img 
const goBackButton1 = document.getElementById('back-arrow');
goBackButton1.addEventListener('click', function() {
  window.history.back();
});
// get back button p
const goBackButton2 = document.getElementById('back-arrow1');
goBackButton2.addEventListener('click', function() {
  window.history.back();
});