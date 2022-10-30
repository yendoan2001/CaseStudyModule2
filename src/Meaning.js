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
        } while (question == 'yes');
    };
    return Meaning;
}());
exports.Meaning = Meaning;
