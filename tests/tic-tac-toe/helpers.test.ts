import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { isValidSyntax, isValidPlay, Play, Board, isWinner, isDraw } from "@ttt/helpers";

//  npm run dev:ttt

const boardInitial: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// No winners, no draws
const boardPartialGame: Board = [
  [null, null, "X"],
  ["O", "X", null],
  [null, null, null],
];

const boardDraw: Board = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["O", "X", "O"],
];

// Reminder -- this could get out of date quickly
describe("⚠️ untested functions include:", () => {
  it("displayBoard", () => {
    expect(true).toBe(true);
  });
  it("getMarker", () => {
    expect(true).toBe(true);
  });
  it("nextPlayer", () => {
    expect(true).toBe(true);
  });
  it("isExitRequest", () => {
    expect(true).toBe(true);
  });
});

describe("isValidSyntax", () => {
  it("successfully returns correct syntax as a Play", () => {
    expect(isValidSyntax("0,1").play).toStrictEqual([0, 1]);
    expect(isValidSyntax("01").play).toStrictEqual([0, 1]);
    expect(isValidSyntax("a").isValidSyn).toBe(false);
    expect(isValidSyntax("0,0").isValidSyn).toBe(true);
  });
  it("successfully returns 'false' when syntax is not valid", () => {
    expect(isValidSyntax("0,3").isValidSyn).toBe(false);
    expect(isValidSyntax("a").isValidSyn).toBe(false);
    expect(isValidSyntax("b").play).toStrictEqual([0, 0]); // Possible bug source
  });
  it("successfully ignores whitespaces", () => {
    expect(isValidSyntax(" 0 1 ").play).toStrictEqual([0, 1]);
    expect(isValidSyntax(" 0 , 2 ").play).toStrictEqual([0, 2]);
    expect(isValidSyntax(" a ").isValidSyn).toBe(false);
  });
});

describe("isDraw", () => {
  it("successfully identifies when a draw happens", () => {
    expect(isDraw(boardDraw)).toBe(true);
  });

  it("succesfully does not identify a draw when there is no draw", () => {
    expect(isDraw(boardInitial)).toBe(false);
    expect(isDraw(boardPartialGame)).toBe(false);
  });

  // Reminder: Order matters
  it("will not identify a winner if game is allowed to play past a win", () => {
    const boardWinnerFull: Board = [
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["O", "O", "O"],
    ];
    expect(isDraw(boardWinnerFull)).toBe(true);
  });
});

describe("isWinner", () => {
  it("successfully identifies winners on a row, X or O", () => {
    const boardX: Board = [
      ["X", "O", null],
      ["X", "X", "X"],
      ["X", "O", null],
    ];

    const boardO: Board = [
      ["X", "O", null],
      ["O", "O", "O"],
      ["X", "X", null],
    ];

    expect(isWinner(boardX)).toBe(true);
    expect(isWinner(boardO)).toBe(true);
  });

  it("successfully identifies winners on a col, X or O", () => {
    const boardX: Board = [
      ["X", "X", null],
      ["O", "X", "X"],
      [null, "X", null],
    ];

    const boardO: Board = [
      ["X", null, "O"],
      [null, "X", "O"],
      ["X", "O", "O"],
    ];

    expect(isWinner(boardX)).toBe(true);
    expect(isWinner(boardO)).toBe(true);
  });

  it("successfully identifies winners on a diagonal", () => {
    const boardR: Board = [
      ["X", "X", null],
      ["O", "X", null],
      [null, "O", "X"],
    ];

    const boardL: Board = [
      ["X", null, "O"],
      [null, "O", "X"],
      ["O", null, "O"],
    ];

    expect(isWinner(boardL)).toBe(true);
    expect(isWinner(boardR)).toBe(true);
  });

  it("succesfully does not identify a winner when there is none", () => {
    expect(isWinner(boardDraw)).toBe(false);
    expect(isWinner(boardInitial)).toBe(false);
    expect(isWinner(boardPartialGame)).toBe(false);
  });
});

describe("isValidPlay", () => {
  const board: Board = [
    [null, null, null],
    [null, "X", null],
    [null, null, null],
  ];

  const playConflicting = [1, 1] as unknown as Play;
  const playOK = [0, 0] as unknown as Play;

  it("successfully identifies when a position is unoccupied", () => {
    expect(isValidPlay(board, playOK)).toBe(true);
  });

  it("successfully identifies when a position is already occupied", () => {
    expect(isValidPlay(board, playConflicting)).toBe(false);
  });
});
// test game over

// To change player, you'll want to test:
// nextPlayer
// getMarker
