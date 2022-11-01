"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Example = void 0;
var typedjson_1 = require("typedjson");
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
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Example.prototype, "english");
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Example.prototype, "vietnamese");
    Example = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Example);
    return Example;
}());
exports.Example = Example;
