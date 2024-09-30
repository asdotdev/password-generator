import {
    LOWERCASE_CHARS,
    PW_MAX_LEN,
    PW_MIN_LEN,
    NUMBER_CHARS,
    SYMBOL_CHARS,
    UPPERCASE_CHARS
} from "./constants.js";
import { readFileSync } from "fs";

export function textInColor(ansiColorCode: number, text: string): string {
    // Add ANSI escape codes to display text in color.
    return `\x1b[${ansiColorCode}m${text}\x1b[0m`;
}

export function errorColor(str: string): string {
    return textInColor(31, str);
}

export function successColor(str: string): string {
    return textInColor(32, str);
}

export function warnColor(str: string): string {
    return textInColor(33, str);
}

export function pwLenArg(value: string): number {
    return parseInt(value, 10);
}

export function getVersion(): string {
    try {
        const buffer = readFileSync("./config/app.json");

        let content: string = "";
        if (Buffer.isBuffer(buffer)) content = buffer.toString("utf8");
        content = content.replace(/^\uFEFF/, "");

        const packageInfo = JSON.parse(content);

        return successColor("v" + packageInfo.version);
    } catch (error) {
        return errorColor("Something went wrong!");
    }
}

export const generatePassword = ({
    uppercase,
    numbers,
    symbols,
    length
}: {
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
    length: number;
}) => {
    let includeedCharacters = LOWERCASE_CHARS;
    if (uppercase) includeedCharacters += UPPERCASE_CHARS;
    if (numbers) includeedCharacters += NUMBER_CHARS;
    if (symbols) includeedCharacters += SYMBOL_CHARS;

    let n = Math.max(PW_MIN_LEN, Math.min(length, PW_MAX_LEN));
    if (isNaN(length)) {
        console.log(warnColor("The length argument has an invalid value."));
        n = PW_MIN_LEN;
    }

    let generatedPassword = "";
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(
            Math.random() * includeedCharacters.length
        );
        generatedPassword += includeedCharacters[randomIndex];
    }

    console.log(generatedPassword);
};
