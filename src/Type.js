"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Type = void 0;
var Meaning_1 = require("./Meaning");
var readlineSync = require("readline-sync");
var main_1 = require("./main");
var typedjson_1 = require("typedjson");
var Type = /** @class */ (function () {
    function Type(typeName) {
        //@ts-ignore
        this.meanings = [];
        this.nameType = typeName;
    }
    Type.prototype.setNameType = function () {
        var newNameType = readlineSync.question('Input new name of type:  ');
        this.nameType = newNameType;
    };
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
    Type.prototype.deleteMeaning = function () {
        var question;
        var _loop_1 = function () {
            var definition = readlineSync.question('Input meaning you want to delete:  ');
            var meaning = this_1.findMeaning(definition);
            if (meaning !== undefined) {
                this_1.meanings = this_1.meanings.filter(function (type) { return type.definition !== definition; });
            }
            else {
                console.log('This definition is not exist');
                question = readlineSync.question('Input yes if you want to continue deleting meaning of word:  ');
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (question == "yes");
    };
    Type.prototype.editOneMeaning = function () {
        var question;
        do {
            var name_1 = readlineSync.question('Input definition you want to edit:  ');
            var definition = this.findMeaning(name_1);
            if (definition !== undefined) {
                var exit = true;
                while (exit == true) {
                    (0, main_1.subMenuEditOneMeaning)();
                    var number = readlineSync.question('Choose function to edit one definition');
                    switch (number) {
                        case '1':
                            definition.setDefinition();
                            break;
                        case '2':
                            definition.addExample();
                            break;
                        case '3':
                            definition.deleteExample();
                            break;
                        case '0':
                            exit = false;
                            break;
                    }
                }
            }
            else {
                console.log('This meaning is not exist');
                question = readlineSync.question('Input yes if you want to continue editing meaning');
            }
        } while (question == 'yes');
    };
    Type.prototype.findMeaning = function (name) {
        return this.meanings.find(function (item) {
            return item.definition == name;
        });
    };
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Type.prototype, "nameType");
    __decorate([
        (0, typedjson_1.jsonArrayMember)(Meaning_1.Meaning)
        //@ts-ignore
    ], Type.prototype, "meanings");
    Type = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Type);
    return Type;
}());
exports.Type = Type;
