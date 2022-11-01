"use strict";
exports.__esModule = true;
exports.AccountManagement = void 0;
var account_1 = require("./account");
var readlineSync = require("readline-sync");
var main_1 = require("./main");
var Dictionary_1 = require("./Dictionary");
var AccountManagement = /** @class */ (function () {
    function AccountManagement() {
    }
    AccountManagement.Register = function () {
        var email = readlineSync.question('Input email:  ');
        var password = readlineSync.question('Input password:  ');
        var check = this.findAccount(email);
        if (check !== undefined) {
            console.log('This account has existed');
        }
        else {
            var userAccount = new account_1.Account(email, password);
            this.accounts.push(userAccount);
            (0, main_1.save)('../data/data.json', AccountManagement.accounts);
        }
    };
    AccountManagement.LogIn = function () {
        var inputEmail = readlineSync.question('Input your email:  ');
        var inputPassword = readlineSync.question('Input your password:  ');
        var account = this.accounts.find(function (account) {
            return account.emailAccount == inputEmail && account.password == inputPassword;
        });
        if (account !== undefined) {
            var isExit = false;
            while (!isExit) {
                (0, main_1.mainMenu)();
                var number = readlineSync.question('Choose function:  ');
                switch (number) {
                    case '1':
                        Dictionary_1.Dictionary.addWord();
                        break;
                    case '2':
                        Dictionary_1.Dictionary.deleteWord();
                        break;
                    case '3':
                        Dictionary_1.Dictionary.editWord();
                        break;
                    case '4':
                        try {
                            Dictionary_1.Dictionary.show();
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case '5':
                        Dictionary_1.Dictionary.listWords();
                        break;
                    case '0':
                        isExit = true;
                        break;
                }
            }
        }
        else {
            console.log("This account hasn't exited");
        }
    };
    AccountManagement.findAccount = function (email) {
        return this.accounts.find(function (item) {
            return item.emailAccount == email;
        });
    };
    AccountManagement.accounts = [];
    return AccountManagement;
}());
exports.AccountManagement = AccountManagement;
