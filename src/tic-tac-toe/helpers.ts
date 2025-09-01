type Cell = "X" | "O" | null;
type Board = Cell[][]; // this only enforces an array of array of cells... good enough for toy problem

type Coord = 0 | 1 | 2;
type Play = [Coord, Coord];
type Exit = "stop" | "s" | "end" | "q" | "exit";
type Player = "Player 1" | "Player 2";
type Marker = "X" | "O" | null;

const deepEqualJSON = (a: any, b: any): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const getMarker = (player: Player): Marker => {
  if (player === "Player 1") {
    return "X";
  } else {
    return "O";
  }
};

const logWithSpacing = (text: String) => {
  console.log(String.raw`${text}`);
};

const nextPlayer = (player: Player): Player => {
  if (player === "Player 1") {
    return "Player 2";
  } else {
    return "Player 1";
  }
};

const isExitRequest = (v: string): boolean => {
  if (v === "stop" || v === "s" || v === "end" || v === "q" || v === "exit") {
    return true;
  } else {
    return false;
  }
};

const isValidSyntax = (v: string): boolean => {
  if (/^(0|1|2),(0|1|2)$/.test(v)) {
    return true;
  } else {
    return false;
  }
};

// Can this player pick this spot?
const isValidPlay = () => {};

// display board with a trailing newline
const displayBoard = (currentBoard: Board): String => {
  let boardString = "";

  currentBoard.forEach((row, rowNum) => {
    // display headers
    if (rowNum === 0) {
      boardString += "\n  | 0 | 1 | 2  (row)\n--------------";
    }

    // display row contents
    boardString += `\n${rowNum} | ${row.join("  | ")}`;

    // add divider
    if (rowNum != 2) {
      boardString += "\n--------------";
    } else {
      boardString += "\n(col)\n";
    }
  });
  return boardString;
};

const isWinner = (board: Board): boolean => {
  const gridSize = 3; // 3x3 board; this could be changed depending on board needs
  const val = { X: 1, O: -1, null: 0 };

  let rowSum = 0;
  let colSum = 0;

  // TODO get diagonal sums
  let diagSumR = 0;
  let diagSumL = 0;

  for (let a = 0; a < gridSize; a++) {
    // check diagonal down + to the right
    const diagKeyR = board[a][a] ?? "null";
    diagSumR += val[diagKeyR];
    if (Math.abs(diagSumR) === gridSize) return true;

    // check diagonal down + to the left
    const diagKeyL = board[a][gridSize - 1 - a] ?? "null";
    diagSumL += val[diagKeyL];
    if (Math.abs(diagSumL) === gridSize) return true;

    for (let b = 0; b < gridSize; b++) {
      // check rows
      console.log(`rows: ${board[a][b] ?? "null"}`);
      const rowKey = board[a][b] ?? "null";
      rowSum += val[rowKey];
      if (Math.abs(rowSum) === gridSize) return true;

      // check columns
      console.log(`columns: ${board[b][a] ?? "null"}`);
      const colKey = board[b][a] ?? "null";
      colSum += val[colKey];
      if (Math.abs(colSum) === gridSize) return true;
    }
  }
  return false;
};

const isDraw = (board: Board): boolean => {
  // might take in isWinner results, too
  return false;
};

const isGameOver = (board: Board, marker: Marker): boolean => {
  if (isWinner(board) || isDraw(board)) {
    return true;
  } else {
    return false;
  }
};

export type { Player, Play, Board, Marker };
export {
  isValidSyntax,
  isValidPlay,
  isExitRequest,
  displayBoard,
  nextPlayer,
  getMarker,
  deepEqualJSON,
  isWinner,
};
