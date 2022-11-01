"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Word = void 0;
var Type_1 = require("./Type");
var readlineSync = require("readline-sync");
var main_1 = require("./main");
var typedjson_1 = require("typedjson");
var Word = /** @class */ (function () {
    function Word(nameWord, pronunciation) {
        //@ts-ignore
        this.types = [];
        this.nameWord = nameWord;
        this.pronunciation = pronunciation;
    }
    Word.prototype.setName = function () {
        var newName = readlineSync.question('Input new name of word:  ');
        this.nameWord = newName;
    };
    Word.prototype.setPronunciation = function () {
        var newPronunciation = readlineSync.question('Input new pronunciation of word:  ');
        this.pronunciation = newPronunciation;
    };
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
    Word.prototype.editTypes = function () {
        while (true) {
            (0, main_1.subMenuEditTypes)();
            var number = readlineSync.question('Chon chuc nang:  ');
            switch (number) {
                case "1":
                    this.addType();
                    break;
                case "2":
                    this.deleteType();
                    break;
                case "3":
                    var nameType = readlineSync.question('Nhap type:  ');
                    var type = this.findType(nameType);
                    var out = true;
                    while (out == true) {
                        (0, main_1.subMenuEditOneType)();
                        var number_1 = readlineSync.question('Chon chuc nang:  ');
                        switch (number_1) {
                            case "1":
                                type.addMeaning();
                                break;
                            case "2":
                                type.deleteMeaning();
                                break;
                            case "3":
                                type.editOneMeaning();
                                break;
                            case "0":
                                out = false;
                                break;
                        }
                    }
                    break;
                case "0":
                    return;
            }
        }
    };
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Word.prototype, "nameWord");
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Word.prototype, "pronunciation");
    __decorate([
        (0, typedjson_1.jsonArrayMember)(Type_1.Type)
        //@ts-ignore
    ], Word.prototype, "types");
    Word = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Word);
    return Word;
}());
exports.Word = Word;
