import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  isValidSyntax,
  isValidPlay,
  isExitRequest,
  displayBoard,
  nextPlayer,
  Player,
  Play,
  Board,
  getMarker,
  deepEqualJSON,
  Marker,
} from "@ttt/helpers";

let board: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Return bool true/false "?"
const makePlay = (play: Play, player: Player): boolean => {
  const [row, col] = play;

  // TODO: Perhaps don't update the board with a side effect...
  const marker = getMarker(player);

  board[row][col] = marker;
};

const playGame = async (): Promise<void> => {
  let player: Player = "Player 1";
  let gameOver = false;

  // Create a readline in the CLI
  const rl = readline.createInterface({ input, output });

  while (gameOver === false) {
    const cliInput = await rl.question(`${player}: Where would you like to play? Enter "row#, col#".
            ${displayBoard(board)}
To exit this game, enter "s" or "stop"
`);

    if (isExitRequest(cliInput) || gameOver) {
      console.log(`\n👋 Thank you for playing!\n`);
      break;
    }

    let play: Play = isValidSyntax(cliInput);

    if (isValidSyntax(cliInput) && isValidPlay()) {
      // TODO: Also accept numnum as entry (for ease of typing in CLI)
      makePlay(cliInput.split(","), player);
      isGameOver;

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
