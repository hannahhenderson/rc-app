import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

type Cell = "X" | "O" | null;
type Board = Cell[][]; // this only enforces an array of array of cells... good enough for toy problem

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const logWithSpacing = (text: String) => {
  console.log(String.raw`${text}`);
};

const displayBoard = (currentBoard: Board) => {
  currentBoard.forEach((row, rowNum) => {
    // display headers
    if (rowNum === 0) {
      logWithSpacing("  | 0 | 1 | 2  (row)");
      logWithSpacing("--------------");
    }

    // display row contents
    logWithSpacing(`${rowNum} | ${row.join("  | ")}`);

    // add divider
    if (rowNum != 2) {
      logWithSpacing("--------------");
    } else {
      logWithSpacing("(col)");
      console.log("");
    }
  });
};

// Create a readline in the CLI
const rl = readline.createInterface({ input, output });

const play = await rl.question(`Where would you like to play?
    ${displayBoard(board)}
    `);
console.log(`thank you for telling me, ${play}`);
displayBoard(board);

rl.close();
