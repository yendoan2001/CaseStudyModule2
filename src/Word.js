"use strict";
exports.__esModule = true;
exports.Word = void 0;
var Type_1 = require("./Type");
var readlineSync = require("readline-sync");
var main_1 = require("./main");
var Word = /** @class */ (function () {
    function Word(nameWord, pronunciation) {
        this.types = [];
        this.nameWord = nameWord;
        this.pronunciation = pronunciation;
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
    Word.prototype.deleteType = function () {
        var question;
        var _loop_1 = function () {
            var nameType = readlineSync.question('Input name of type you want to delete:  ');
            var type = this_1.findType(nameType);
            if (type !== undefined) {
                this_1.types = this_1.types.filter(function (type) { return type.nameType !== nameType; });
            }
            else {
                console.log('This type is not exist');
                question = readlineSync.question('Input yes if you want to continue deleting type of word:  ');
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (question == 'yes');
    };
    Word.prototype.findType = function (name) {
        return this.types.find(function (item) {
            return item.nameType == name;
        });
    };
    Word.prototype.editOneType = function () {
        var question;
        do {
            var name_1 = readlineSync.question('Input name of type you want to edit:  ');
            var type = this.findType(name_1);
            if (type !== undefined) {
                var exit = true;
                while (exit == true) {
                    (0, main_1.subMenuEditOneType)();
                    var number = readlineSync.question('Choose function to edit one type');
                    switch (number) {
                        case '1':
                            type.setNameType();
                            break;
                        case '2':
                            type.addMeaning();
                            break;
                        case '3':
                            type.deleteMeaning();
                            break;
                        case '4':
                            type.editOneMeaning();
                            break;
                        case '0':
                            exit = false;
                            break;
                    }
                }
            }
            else {
                console.log('This type is not exist');
                question = readlineSync.question('Input yes if you want to continue editing type');
            }
        } while (question == 'yes');
    };
    Word.prototype.setName = function () {
        var newName = readlineSync.question('Input new name of word:  ');
        this.nameWord = newName;
    };
    Word.prototype.setPronunciation = function () {
        var newPronunciation = readlineSync.question('Input new pronunciation of word:  ');
        this.pronunciation = newPronunciation;
    };
    return Word;
}());
exports.Word = Word;
