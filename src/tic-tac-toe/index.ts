import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  isValidPlay,
  isExitRequest,
  displayBoard,
  nextPlayer,
  Player,
  Play,
  Board,
  getMarker,
} from "@ttt/helpers";

let player: Player = "Player 1";
let isWinner = false;

let board: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const makePlay = (play: Play, player: Player): void => {
  const [row, col] = play;
  board[row][col] = getMarker(player);
};

const playGame = async (): Promise<void> => {
  // Create a readline in the CLI
  const rl = readline.createInterface({ input, output });

  while (isWinner === false) {
    console.log({ player });
    const cliInput = await rl.question(`${player}: Where would you like to play? Enter "row#, col#".
            ${displayBoard(board)}
To exit this game, enter "s" or "stop"
`);

    if (isExitRequest(cliInput) || isWinner) {
      console.log(`\n👋 Thank you for playing!\n`);
      break;
    }

    // TODO: Update to 1. isValidPlayType and 2. can you play here? i.e. is another player already holding this spot?
    if (isValidPlay(cliInput)) {
      makePlay(cliInput.split(","), player);

      //progress to next player
      player = nextPlayer(player);
      console.log("gotcha");
    } else {
      console.log(`\n❌ "${cliInput}" is an invalid play, please try again.\n`);
    }
  }

  rl.close();
};

playGame();
