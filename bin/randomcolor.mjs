#!/usr/bin/env node

import { generateRandomHexColor, displayColoredText } from "../index.mjs";
import { program } from "commander";
import cliMd from 'cli-markdown';

program
  .name("randomcolor")
  .usage("[options]")
  .option("-r, --randomcolor", "Generate a random color");

program.parse(process.argv);

const { randomcolor } = program.opts();

if (randomcolor) {
  const randomColor = generateRandomHexColor();
  const { coloredText, hexColor } = displayColoredText(
    "This is a colored text!",
    randomColor
  );
  console.log(cliMd(coloredText));
  console.log(cliMd(hexColor));
} else {
  console.log(program.help());
}
