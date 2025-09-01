// https://nodejs.org/api/readline.html

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// Create a readline in the CLI
const rl = readline.createInterface({ input, output });

const play = await rl.question("Where would you like to play?");
console.log(`thank you for telling me, ${play}`);

rl.close();
