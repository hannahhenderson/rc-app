import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cracklePop } from "@cp/index";

/* Code CracklePop
Write a program that:
    Prints out the numbers 1 to 100 (inclusive)
    If the number is divisible by 3, print Crackle instead of the number. 
    If it's divisible by 5, print Pop instead of the number. 
    If it's divisible by both 3 and 5, print CracklePop instead of the number.
*/

const smallNum = 2; // not divisible by 3 or 5
const divisibleBy3 = 3;
const divisibleBy5 = 5;
const divisibleBy3and5 = 15;

describe("cracklePop", () => {
  let logSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("logs every number, inclusive", () => {
    cracklePop(0, smallNum);
    expect(logSpy).toHaveBeenCalledTimes(smallNum + 1);
  });

  it("logs the first line correctly", () => {
    cracklePop(0, smallNum);
    expect(logSpy.mock.calls[0][0]).toBe("CracklePop");
  });

  it("logs the last line correctly", () => {
    cracklePop(0, smallNum);
    expect(logSpy.mock.calls[smallNum][0]).toBe(smallNum);
  });

  it("logs 'Crackle' for numbers divisble by 3", () => {
    cracklePop(0, divisibleBy3 * 2);
    expect(logSpy.mock.calls[divisibleBy3][0]).toBe("Crackle");
    expect(logSpy.mock.calls[divisibleBy3 * 2][0]).toBe("Crackle");
  });

  it("logs 'Pop' for numbers divisble by 5", () => {
    cracklePop(0, divisibleBy5 * 2);
    expect(logSpy.mock.calls[divisibleBy5][0]).toBe("Pop");
    expect(logSpy.mock.calls[divisibleBy5 * 2][0]).toBe("Pop");
  });

  it("logs 'CracklePop' for numbers divisble by 3 AND 5", () => {
    cracklePop(0, divisibleBy3and5 * 2);
    expect(logSpy.mock.calls[divisibleBy3and5][0]).toBe("CracklePop");
    expect(logSpy.mock.calls[divisibleBy3and5 * 2][0]).toBe("CracklePop");
  });
});
