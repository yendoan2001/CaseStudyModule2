"use strict";
exports.__esModule = true;
exports.Type = void 0;
var Meaning_1 = require("./Meaning");
var readlineSync = require("readline-sync");
var Type = /** @class */ (function () {
    function Type(typeName) {
        this.typeName = typeName;
    }
    Type.prototype.addMeaning = function () {
        var question;
        do {
            var definition = readlineSync.question('Input definition of word:  ');
            var meaning = new Meaning_1.Meaning(definition);
            meaning.addExample();
            this.meanings.push(meaning);
            question = readlineSync.question('Input yes if you want to input meaning of type:  ');
        } while (question == "yes");
    };
    return Type;
}());
exports.Type = Type;
