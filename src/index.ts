#!/usr/bin/env node

import { Command } from "commander";
import {
    errorColor,
    generatePassword,
    getVersion,
    pwLenArg
} from "./uttils.js";
import { PW_MIN_LEN } from "./constants.js";

const program = new Command();

program.configureOutput({
    outputError: (str, write) => write(errorColor(str))
});

program.description(
    "This utility tool helps you to generate password in terminal."
);

program
    .option("-u, --uppercase", "include uppercase", false)
    .option("-n, --numbers", "include numbers", false)
    .option("-s, --symbols", "include symbols", false)
    .option(
        "-l, --length <number>",
        "length of password (min: 8, max: 64)",
        pwLenArg,
        PW_MIN_LEN
    );

program.version(getVersion(), "-v, --version", "display the current version");

program.action((argv) => generatePassword(argv));

program.parse(process.argv);
