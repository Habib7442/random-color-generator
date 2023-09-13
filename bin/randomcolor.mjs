#!/usr/bin/env node

import { generateRandomHexColor, displayColoredText } from "../index.mjs";
import { program } from "commander";
import cliMd from "cli-markdown";

program
  .name("randomcolor")
  .version("0.0.2")
  .usage("[options]")
  .option("-r, --randomcolor", "Generate a random color")
  .option("-v, --version", "Display the package version");

program.parse(process.argv);

const { randomcolor, version } = program.opts();

if (version) {
  console.log(`Random Color Generator version ${program.version()}`);
} else if (randomcolor) {
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
