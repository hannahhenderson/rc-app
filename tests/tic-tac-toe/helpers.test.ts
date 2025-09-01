import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
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
  isWinner,
} from "@ttt/helpers";

//  npm run dev:ttt

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
    const boardDraw: Board = [
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["O", "X", "O"],
    ];

    const boardNew: Board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    const boardPartial: Board = [
      [null, null, "X"],
      ["O", "X", null],
      [null, null, null],
    ];

    expect(isWinner(boardDraw)).toBe(false);
    expect(isWinner(boardNew)).toBe(false);
    expect(isWinner(boardPartial)).toBe(false);
  });
});
