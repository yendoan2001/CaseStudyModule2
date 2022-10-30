"use strict";
exports.__esModule = true;
exports.Word = void 0;
var Type_1 = require("./Type");
var readlineSync = require("readline-sync");
var Word = /** @class */ (function () {
    function Word(nameWord, pronunciation) {
    }
    Word.prototype.addType = function () {
        var question;
        do {
            var nameOfType = readlineSync.question('Input type of word:  ');
            var type = new Type_1.Type(nameOfType);
            type.addMeaning();
            this.types.push(type);
            question = readlineSync.question('Input yes if you want to input type of word:  ');
        } while (question == 'yes');
    };
    return Word;
}());
exports.Word = Word;
