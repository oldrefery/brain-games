#!/usr/bin/env node
import { readName } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const name = readName();
console.log(`Hello, ${name}!`);
