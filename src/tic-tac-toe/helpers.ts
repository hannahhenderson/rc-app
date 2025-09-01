type Cell = "X" | "O" | null;
type Board = Cell[][]; // this only enforces an array of array of cells... good enough for toy problem

type Coord = 0 | 1 | 2;
type Play = [Coord, Coord];
type Exit = "stop" | "s" | "end" | "q" | "exit";
type Player = "Player 1" | "Player 2";
type Marker = "X" | "O" | null;

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

const isValidPlay = (v: string): boolean => {
  if (/^(0|1|2),(0|1|2)$/.test(v)) {
    return true;
  } else {
    return false;
  }
};

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

export type { Player, Play, Board };
export { isValidPlay, isExitRequest, displayBoard, nextPlayer, getMarker };
