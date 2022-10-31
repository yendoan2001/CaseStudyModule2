"use strict";
exports.__esModule = true;
exports.Example = void 0;
var Example = /** @class */ (function () {
    function Example(english, vietnamese) {
        this.english = english;
        this.vietnamese = vietnamese;
    }
    Example.prototype.checkEnglishSentence = function (keyword) {
        return this.english.includes(keyword);
    };
    Example.prototype.checkVietnameseSentence = function (keyword) {
        return this.vietnamese.includes(keyword);
    };
    return Example;
}());
exports.Example = Example;
