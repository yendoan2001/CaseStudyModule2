"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Account = void 0;
var typedjson_1 = require("typedjson");
var Account = /** @class */ (function () {
    function Account(emailAccount, password) {
        this.emailAccount = emailAccount;
        this.password = password;
    }
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Account.prototype, "emailAccount");
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Account.prototype, "password");
    Account = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Account);
    return Account;
}());
exports.Account = Account;
