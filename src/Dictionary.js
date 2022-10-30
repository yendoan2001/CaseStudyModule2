"use strict";
exports.__esModule = true;
exports.Dictionary = void 0;
var Word_1 = require("./Word");
var readlineSync = require("readline-sync");
var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    Dictionary.addWord = function () {
        var name = readlineSync.question('Input word need to be added:  ');
        var pronunciation = readlineSync.question('Input pronunciation of word:  ');
        var newWord = new Word_1.Word(name, pronunciation);
        newWord.addType();
        Dictionary.words.push(newWord);
    };
    Dictionary.show = function () {
        var word = Dictionary.words[0];
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
