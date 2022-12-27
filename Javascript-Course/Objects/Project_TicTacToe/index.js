const max = Math.max;
const min = Math.min;

const DOM = (() => {
  const player1 = () =>
    document.querySelector("#player1>input").value
      ? document.querySelector("#player1>input").value
      : "Player x";
  const player2 = () =>
    document.querySelector("#player2>input").value
      ? document.querySelector("#player2>input").value
      : "Player o";
  const announcement = () => document.querySelector("#announcement");
  const NewGameBtn = document.querySelector("#btn-new-game");
  const againstAIBtn = document.querySelector("#btn-against-ai");
  const againstPlayerBtn = document.querySelector("#btn-against-player");
  const HardModeBtn = document.querySelector("#btn-hard-mode");
  const EasyModeBtn = document.querySelector("#btn-easy-mode");
  return {
    player1,
    player2,
    announcement,
    NewGameBtn,
    againstAIBtn,
    againstPlayerBtn,
    HardModeBtn,
    EasyModeBtn,
  };
})();

const gameBoard = (() => {
  let gameBoard = [];
  //to change area later
  for (let i = 0; i < 9; i++) {
    gameBoard.push("");
  }
  let sign = "x";
  const getGameBoard = () => gameBoard;
  const getSign = () => sign;
  //construct  gameboard to render
  const oppositeSign = () => {
    sign = sign == "x" ? "o" : "x";
  };
  const constructBoard = () => {
    //add event click to cells
    function renderValue() {
      if (!displayController.getGameIsOver() && this.textContent == "") {
        this.textContent = sign;
        gameBoard[this.getAttribute("index-for-array")] = sign;
        let result = displayController.checkGame(gameBoard, sign);
        if (result) {
          if (result == "tie") {
            DOM.announcement().textContent = `Game is over. Draw`;
          } else {
            DOM.announcement().textContent = `${
              result == "x" ? DOM.player1() : DOM.player2()
            } has won`;
          }
        } else if (displayController.getComputerMove()) {
          let turn = displayController.getComputerTurn();
          oppositeSign();
          if (turn) {
            displayController.oppositeTurn();
            if (displayController.getMode()) {
              displayController.computerMoveActionHard();
            } else {
              displayController.computerMoveAction();
            }
          } else {
            displayController.oppositeTurn();
            DOM.announcement().textContent = `${DOM.player1()}'s turn`;
          }
        } else {
          DOM.announcement().textContent = `${
            sign == "x" ? DOM.player2() : DOM.player1()
          }'s turn`;
        }
        oppositeSign();
      }
    }
    //creating game board cells
    let gameBoardContainer = document.querySelector("#game-board-container");
    for (let i = 0; i < 9; i++) {
      let cell = document.createElement("div");
      cell.classList.add("game-board-cell");
      cell.setAttribute("index-for-array", i);
      cell.addEventListener("click", renderValue);
      gameBoardContainer.appendChild(cell);
    }
  };
  const init = () => {
    gameBoard = [];
    //to change area later
    for (let i = 0; i < 9; i++) {
      gameBoard.push("");
    }
    sign = "x";
    constructBoard();
    DOM.announcement().textContent = `${DOM.player1()}'s turn`;
  };
  return { init, getSign, getGameBoard, oppositeSign };
})();
gameBoard.init();

//an object to control flow of the game
const displayController = (() => {
  let gameIsOver = false;
  let computerMove = false;
  let computerTurn = false;
  let hardMode = false;
  const oppositeTurn = () => {
    computerTurn = computerTurn ? false : true;
  };
  const getGameIsOver = () => gameIsOver;
  const getComputerMove = () => computerMove;
  const getComputerTurn = () => computerTurn;
  const getMode = () => hardMode;
  //random choices of computer
  const computerMoveAction = () => {
    let arr = gameBoard.getGameBoard();
    let newArr = [];
    for (let i = 0; i < 9; i++) {
      if (arr[i] == "") {
        newArr.push(i);
      }
    }
    let randomIndex = newArr[Math.floor(Math.random() * newArr.length)];
    let cell = document.querySelector(`[index-for-array="${randomIndex}"]`);
    cell.click();
  };

  //unbeatable computer, using minimax algorithm
  const computerMoveActionHard = () => {
    let board = gameBoard.getGameBoard();
    let bestScore = Infinity;
    let move;
    for (let i = 0; i <= 9; i++) {
      if (board[i] == "") {
        board[i] = "o";
        let score = minimax(board, 0, true);
        console.log(score);
        board[i] = "";
        if (score < bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    let cell = document.querySelector(`[index-for-array="${move}"]`);
    computerTurn = false;
    cell.click();
  };
  let scores = { x: 10, o: -10, tie: 0 };
  const minimax = (board, depth, isMaximiszing) => {
    let result = checkGame(board, (sign = isMaximiszing ? "o" : "x"));
    gameIsOver = false;

    if (result != null) {
      return scores[result];
    }
    if (isMaximiszing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] == "") {
          board[i] = "x";

          let score = minimax(board, depth + 1, false);
          board[i] = "";
          bestScore = max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] == "") {
          board[i] = "o";
          let score = minimax(board, depth + 1, true);
          board[i] = "";
          bestScore = min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  //function that checks if win
  const checkGame = (boardArr, winner) => {
    //checking all possible combinations
    (function () {
      if (
        boardArr[0] != "" &&
        boardArr[0] == boardArr[4] &&
        boardArr[0] == boardArr[8]
      ) {
        gameIsOver = true;
        return;
      } else if (
        boardArr[2] != "" &&
        boardArr[2] == boardArr[4] &&
        boardArr[2] == boardArr[6]
      ) {
        gameIsOver = true;
        return;
      } else {
        for (let i = 0; i <= 6; i++) {
          if (boardArr[i] != "") {
            if (i % 3 == 0) {
              if (
                boardArr[i] == boardArr[i + 1] &&
                boardArr[i] == boardArr[i + 2]
              ) {
                gameIsOver = true;
                return;
              }
            }
            if (i == 0 || i == 1 || i == 2) {
              if (
                boardArr[i] == boardArr[i + 3] &&
                boardArr[i] == boardArr[i + 6]
              ) {
                gameIsOver = true;
                return;
              }
            }
          }
        }
      }
      if (boardArr.every((v) => v != "")) {
        gameIsOver = true;
        winner = "";
      }
    })();
    if (gameIsOver) {
      if (!winner) {
        return "tie";
      } else {
        return winner == "x" ? "x" : "o";
      }
    }
  };
  const startNewGame = () => {
    gameIsOver = false;
    computerTurn = true;
    let gameBoardContainer = document.querySelector("#game-board-container");
    while (gameBoardContainer.firstChild) {
      gameBoardContainer.removeChild(gameBoardContainer.firstChild);
    }
    gameBoard.init();
  };
  //add functions to buttons
  DOM.NewGameBtn.addEventListener("click", startNewGame);
  DOM.againstAIBtn.addEventListener("click", function () {
    startNewGame();
    computerMove = true;
    computerTurn = true;
    this.style.display = "none";
    DOM.againstPlayerBtn.removeAttribute("style");
    document.querySelector("#player2>input").value = "computer";
    document.querySelector("#player2>input").setAttribute("disabled", "");
    DOM.HardModeBtn.removeAttribute("style");
  });
  DOM.againstPlayerBtn.addEventListener("click", function () {
    startNewGame();
    computerMove = false;
    this.style.display = "none";
    DOM.againstAIBtn.removeAttribute("style");
    document.querySelector("#player2>input").removeAttribute("disabled");
    document.querySelector("#player2>input").value = "";
    DOM.HardModeBtn.style.display = "none";
    DOM.EasyModeBtn.style.display = "none";
  });
  DOM.HardModeBtn.addEventListener("click", function () {
    startNewGame();
    hardMode = true;
    this.style.display = "none";
    DOM.EasyModeBtn.removeAttribute("style");
  });
  DOM.EasyModeBtn.addEventListener("click", function () {
    startNewGame();
    hardMode = false;
    this.style.display = "none";
    DOM.HardModeBtn.removeAttribute("style");
  });
  return {
    getGameIsOver,
    checkGame,
    getComputerTurn,
    getComputerMove,
    computerMoveAction,
    computerMoveActionHard,
    oppositeTurn,
    getMode,
  };
})();
