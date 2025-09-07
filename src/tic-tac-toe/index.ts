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
  Marker,
  isWinner,
  isDraw,
} from "@ttt/helpers";

const makePlay = (play: Play, player: Player, board: Board): Board => {
  const [row, col] = play;

  const marker = getMarker(player);

  board[row][col] = marker;

  return board;
};

const playGame = async (): Promise<void> => {
  let player: Player = "Player 1";
  let gameOver = false;
  let board: Board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // Create a readline in the CLI
  const rl = readline.createInterface({ input, output });

  while (gameOver === false) {
    const cliInput =
      await rl.question(`👋 ${player}: Where would you like to play? Enter "row#, col#".
            ${displayBoard(board)}
To exit this game, enter "s" or "stop"
`);

    if (isExitRequest(cliInput) || gameOver) {
      console.log(`\n🙇‍♀️ Thank you for playing!\n`);
      break;
    }

    // Check validity of play
    let { play, isValidSyn } = isValidSyntax(cliInput);
    let isValidP = isValidPlay(board, play);

    if (!isValidSyn || !isValidP) {
      console.log(`\n❌ "${cliInput}" is an invalid play, please try again.\n`);
    } else {
      board = makePlay(play, player, board);
    }

    // Is the game over?
    if (isWinner(board)) {
      console.log(`\n🎉 Congratulations ${player}! You win!\n`);
      gameOver = true;
    }
    if (isDraw(board)) {
      console.log(`\n🤺 Duel another day, today you have a draw!\n`);
      gameOver = true;
    }

    if (isValidP) {
      // progress to next player
      // also no need to progress if isWinner or isDraw... but won't matter as game ends
      player = nextPlayer(player);
    }
  }

  rl.close();
};

playGame();
