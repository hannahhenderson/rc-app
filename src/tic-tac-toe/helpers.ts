type Cell = "X" | "O" | null;
type Board = Cell[][]; // this only enforces an array of array of cells... good enough for toy problem

type Coord = 0 | 1 | 2;
type Play = `${Coord},${Coord}`;
type Exit = "stop" | "s" | "end" | "q" | "exit";

const logWithSpacing = (text: String) => {
  console.log(String.raw`${text}`);
};

const isExitRequest = (v: string): boolean => {
  if (v === "stop" || v === "s" || v === "end" || v === "q" || v === "exit") {
    return true;
  } else {
    return false;
  }
};

const isValidPlay = (v: string): boolean => {
  if (v === "stop" || v === "s" || v === "end" || v === "q" || /^(0|1|2),(0|1|2)$/.test(v)) {
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

/*
check boolean and narrow types value
function isCliInput(v: string): boolean {
    return (
      v === "stop" ||
      v === "s" ||
      v === "end" ||
      /^(0|1|2),(0|1|2)$/.test(v)
    );
  }
*/

// export type {  };
export { isValidPlay, isExitRequest, displayBoard };
