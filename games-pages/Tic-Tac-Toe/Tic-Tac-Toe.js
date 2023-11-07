//selects all HTML elements with the class "cell" that represent each cell in the game
const cells = document.querySelectorAll('.cell');

//display the players turns and who wins
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');
//Initialize the first player to X
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

//a function to handle players moves 
function makeMove(cellIndex) {
    //Checks if the selected cell is empty, the board is not full, and no player has won
    //then, move can be made 
    if (!board[cellIndex] && board.includes('') && !checkWinner()) {
        //Updates the game board with the current player's symbol ('X' or 'O') in the selected cell
        board[cellIndex] = currentPlayer;
        //Updates the display representation of the cell with the current player's symbol.
        cells[cellIndex].textContent = currentPlayer;
        //Switches the current player between 'X' and 'O' after making a move
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        // Updates the message element to indicate the next player's turn
        message.textContent = `Player ${currentPlayer}'s Turn`;
        //Checks if the game is still in progress and not a draw. If this is the case, it updates the message to indicate a draw
        if (!checkWinner() && !board.includes('')) {
            message.textContent = "It's a draw!";
        }
    }
}
// check the winner function to determine if there's a winner
function checkWinner() {

    //Defines an array of arrays, winCombos, that represent all possible winning combinations in the game
    const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    // Iterates through each winning combination in winCombos
    for (const combo of winCombos) {
        //Destructures the winning combination array into three variables: a, b, and c.
        const [a, b, c] = combo;
        //Checks if the current combination contains the same symbol ('X' or 'O') in all three cells. If it does, a player has won
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            //Updates the message to declare the winning player
            message.textContent = `Player ${board[a]} wins!`;
            return true;//a winner has been found
        }
    }

    return false;// no winner has been found
}
//reset the game button
function resetBoard() {
    //reset the array to its initial empty state
    board = ['', '', '', '', '', '', '', '', ''];
    //reset the current player to X
    currentPlayer = 'X';
    // Resets the message to "Player X's Turn."
    message.textContent = "Player X's Turn";

    //Clears the text content of each cell, resetting it to empty
    for (const cell of cells) {
        cell.textContent = '';
    }
}
//adds event listeners for the cells and restart button
// When a cell is clicked, it call the makeMove function with the corresponding index
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        makeMove(index);
    });
});
//Adding a click event listener to the restart button
restartButton.addEventListener('click', resetBoard);
//Calls the resetBoard function to initialize the game with an empty board and 'X' as the starting player

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