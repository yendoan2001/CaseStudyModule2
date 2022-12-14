"use strict";
exports.__esModule = true;
exports.Dictionary = void 0;
var Word_1 = require("./Word");
var readlineSync = require("readline-sync");
var main_1 = require("./main");
var typedjson_1 = require("typedjson");
var fs = require("fs");
var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    Dictionary.addWord = function () {
        var question;
        do {
            var name_1 = readlineSync.question('Input word need to be added:  ');
            var pronunciation = readlineSync.question('Input pronunciation of word:  ');
            var newWord = new Word_1.Word(name_1, pronunciation);
            newWord.addType();
            Dictionary.words.push(newWord);
            (0, main_1.save)('../data/wordData.json', Dictionary.words);
            question = readlineSync.question('Input yes if you want to continue adding word:  ');
        } while (question == 'yes');
    };
    Dictionary.deleteWord = function () {
        var question;
        var _loop_1 = function () {
            var name_2 = readlineSync.question('Input name of word you want to delete:  ');
            var word = this_1.findWord(name_2);
            if (word !== undefined) {
                Dictionary.words = Dictionary.words.filter(function (item) { return item.nameWord !== name_2; });
                (0, main_1.save)('../data/wordData.json', Dictionary.words);
            }
            else {
                console.log('This word is not exist');
                question = readlineSync.question('Input yes if you want to input name of word again:  ');
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (question == 'yes');
    };
    Dictionary.findWord = function (name) {
        return this.words.find(function (item) {
            return item.nameWord == name;
        });
    };
    Dictionary.editWord = function () {
        var name = readlineSync.question('Input wordName need to be edited:  ');
        var word1 = Dictionary.findWord(name);
        if (word1 !== undefined) {
            var exit = true;
            while (exit == true) {
                (0, main_1.MenuEditWord)();
                var number = readlineSync.question('Choose function to edit word:  ');
                switch (number) {
                    case '1':
                        var newName = readlineSync.question('Input new name of word:  ');
                        word1.nameWord = newName;
                        (0, main_1.save)('../data/wordData.json', Dictionary.words);
                        break;
                    case '2':
                        var newPronunciation = readlineSync.question('Input new pronunciation of word:  ');
                        word1.pronunciation = newPronunciation;
                        (0, main_1.save)('../data/wordData.json', Dictionary.words);
                        break;
                    case '3':
                        var isLoop = true;
                        while (isLoop == true) {
                            (0, main_1.MenuEditWord)();
                            var number_1 = readlineSync.question('Choose function to edit types:  ');
                            switch (number_1) {
                                case '1':
                                    word1.addType();
                                    (0, main_1.save)('../data/wordData.json', Dictionary.words);
                                    break;
                                case '2':
                                    word1.deleteType();
                                    (0, main_1.save)('../data/wordData.json', Dictionary.words);
                                    break;
                                case '3':
                                    word1.editTypes();
                                    (0, main_1.save)('../data/wordData.json', Dictionary.words);
                                    break;
                                case '0':
                                    isLoop = false;
                                    break;
                            }
                        }
                        break;
                    case '0':
                        exit = false;
                        break;
                }
            }
        }
        else {
            console.log('This word is not exist');
        }
    };
    Dictionary.show = function () {
        var name = readlineSync.question('Input word you want to show:  ');
        var word = Dictionary.findWord(name);
        if (word !== undefined) {
            console.log(word.nameWord);
            console.log(word.pronunciation);
            console.log("---------------");
            word.types.forEach(function (type) {
                console.log("\t".concat(type.nameType));
                console.log("\t---------------");
                type.meanings.forEach(function (meaning) {
                    console.log("\t\t".concat(meaning.definition));
                    console.log("\t\t---------------");
                    meaning.examples.forEach(function (example) {
                        console.log("\t\t\t".concat(example.english));
                        console.log("\t\t\t".concat(example.vietnamese));
                    });
                });
            });
        }
        else
            throw new Error('This word is not exist');
    };
    Dictionary.listWords = function () {
        Dictionary.words.forEach(function (word) {
            console.log("".concat(word.nameWord, "\t").concat(word.pronunciation));
        });
    };
    Dictionary.words = typedjson_1.TypedJSON.parseAsArray(fs.readFileSync('../data/wordData.json', {
        encoding: "utf8"
    }), Word_1.Word);
    return Dictionary;
}());
exports.Dictionary = Dictionary;
