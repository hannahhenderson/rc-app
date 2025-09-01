import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { isValidPlay, isExitRequest, displayBoard } from "@ttt/helpers";

let is_winner = false;

let player1 = "X";
let player2 = "O";

let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const makePlay = (play, player): void => {};

const playGame = async (): Promise<void> => {
  // Create a readline in the CLI
  const rl = readline.createInterface({ input, output });

  while (is_winner === false) {
    const cliInput = await rl.question(`Where would you like to play? Enter "row#, col#".
            ${displayBoard(board)}
To exit this game, enter "s" or "stop"
`);

    if (isExitRequest(cliInput)) {
      // Break the loop
      is_winner = true;
    }

    if (isValidPlay(cliInput)) {
      makePlay(cliInput);
    } else {
      console.log(`\n❌ "${cliInput}" is an invalid play, please try again.\n`);
    }
  }

  rl.close();
};

playGame();
