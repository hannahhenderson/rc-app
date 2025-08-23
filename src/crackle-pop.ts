/* Code CracklePop
Write a program that:
    Prints out the numbers 1 to 100 (inclusive)
    If the number is divisible by 3, print Crackle instead of the number. 
    If it's divisible by 5, print Pop instead of the number. 
    If it's divisible by both 3 and 5, print CracklePop instead of the number.
*/
export const cracklePop = (start: number, end: number): void => {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};

export const cp0through100 = (): void => cracklePop(0, 100);
