"use strict";
exports.__esModule = true;
exports.Meaning = void 0;
var Example_1 = require("./Example");
var readlineSync = require("readline-sync");
var Meaning = /** @class */ (function () {
    function Meaning(definition) {
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
    return Meaning;
}());
exports.Meaning = Meaning;
