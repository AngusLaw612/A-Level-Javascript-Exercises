const board = document.getElementById('board');
const status = document.getElementById('status');
const size = 15;
let currentPlayer = 'X';
let gameBoard = Array(size).fill(null).map(() => Array(size).fill(null));

function createBoard() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        }
    }
}

function handleCellClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (gameBoard[row][col] !== null) return;

    gameBoard[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWin(row, col)) {
        status.textContent = `Player ${currentPlayer} wins!`;
        board.removeEventListener('click', handleCellClick);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin(row, col) {
    row = parseInt(row);
    col = parseInt(col);
    const directions = [
        { x: 1, y: 0 }, { x: 0, y: 1 },
        { x: 1, y: 1 }, { x: 1, y: -1 }
    ];

    for (let { x, y } of directions) {
        let count = 1;
        for (let i = 1; i < 5; i++) {
            if (gameBoard[row + i * y]?.[col + i * x] === currentPlayer) count++;
            else break;
        }
        for (let i = 1; i < 5; i++) {
            if (gameBoard[row - i * y]?.[col - i * x] === currentPlayer) count++;
            else break;
        }
        if (count >= 5) return true;
    }
    return false;
}

createBoard();
status.textContent = `Player ${currentPlayer}'s turn`;