"use strict";
exports.__esModule = true;
var Dictionary_1 = require("./Dictionary");
var readlineSync = require("readline-sync");
function menu() {
    console.log('1: Add word');
    console.log('2: Show list of word');
    console.log('0: Exit');
}
var isExit = false;
while (!isExit) {
    menu();
    var number = readlineSync.question('Choose function:  ');
    switch (number) {
        case '1':
            Dictionary_1.Dictionary.addWord();
            break;
        case '2':
            Dictionary_1.Dictionary.show();
            break;
        case '0':
            isExit = true;
            break;
    }
}
