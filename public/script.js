
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restart = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell) => {
    cell.addEventListener("click", () => {

        if (cell.textContent !== "" || !gameActive) {
            return;
        }

        cell.textContent = currentPlayer;

        let winner = false;

        winningPatterns.forEach(pattern => {
            const [a, b, c] = pattern;

            if (
                cells[a].textContent === currentPlayer &&
                cells[b].textContent === currentPlayer &&
                cells[c].textContent === currentPlayer
            ) {
                winner = true;
            }
        });

        if (winner) {
            statusText.textContent =
                "Player " + currentPlayer + " Wins! 🎉";
            gameActive = false;
        }
        else if (
            [...cells].every(cell => cell.textContent !== "")
        ) {
            statusText.textContent = "Match Draw!";
            gameActive = false;
        }
        else {
            currentPlayer =
                currentPlayer === "X" ? "O" : "X";

            statusText.textContent =
                "Player " + currentPlayer + "'s Turn";
        }
    });
});

restart.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
    });

    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Player X's Turn";
});
