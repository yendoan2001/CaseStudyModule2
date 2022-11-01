"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Meaning = void 0;
var Example_1 = require("./Example");
var readlineSync = require("readline-sync");
var typedjson_1 = require("typedjson");
var Meaning = /** @class */ (function () {
    function Meaning(definition) {
        //@ts-ignore
        this.examples = [];
        this.definition = definition;
    }
    Meaning.prototype.addExample = function () {
        var question;
        do {
            var english = readlineSync.question('Input English example:  ');
            var vietnamese = readlineSync.question('Input Vietnamese example:  ');
            var example = new Example_1.Example(english, vietnamese);
            this.examples.push(example);
            question = readlineSync.question('Input yes if you want to input example of meaning:  ');
        } while (question == "yes");
    };
    Meaning.prototype.deleteExample = function () {
        var question;
        var _loop_1 = function () {
            var keyword = readlineSync.question('Input keyword of example you want to delete:  ');
            var example = this_1.findExample(keyword);
            if (example !== undefined) {
                this_1.examples = this_1.examples.filter(function (item) { return item !== example; });
            }
            else {
                console.log('This example is not exist');
                question = readlineSync.question('Input yes if you want to continue deleting example:  ');
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (question == "yes");
    };
    Meaning.prototype.setDefinition = function () {
        var newDefinition = readlineSync.question('Input new definition of word');
        this.definition = newDefinition;
    };
    Meaning.prototype.findExample = function (keyword) {
        return this.examples.find(function (item) {
            return item.checkEnglishSentence(keyword) || item.checkVietnameseSentence(keyword);
        });
    };
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Meaning.prototype, "definition");
    __decorate([
        (0, typedjson_1.jsonArrayMember)(Example_1.Example)
        //@ts-ignore
    ], Meaning.prototype, "examples");
    Meaning = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Meaning);
    return Meaning;
}());
exports.Meaning = Meaning;
