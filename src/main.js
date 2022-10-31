"use strict";
exports.__esModule = true;
exports.subMenuEditOneMeaning = exports.subMenuEditOneType = exports.subMenuEditTypes = exports.editWord = exports.mainMenu = exports.accountMenu = void 0;
var readlineSync = require("readline-sync");
var AccountManagement_1 = require("./AccountManagement");
var word = require('fs');
var data = word.readFileSync('../data/data.json', {
    encoding: "utf8"
});
AccountManagement_1.AccountManagement.accounts = JSON.parse(data);
function accountMenu() {
    console.log('1: Register');
    console.log('2: Login');
    console.log('3: Logout');
}
exports.accountMenu = accountMenu;
function mainMenu() {
    console.log('1: Add word');
    console.log('2: Delete word');
    console.log('3: Edit word');
    console.log('4: Show word');
    console.log('5: Show list of words');
    console.log('0: Exit');
}
exports.mainMenu = mainMenu;
var isLoop = true;
while (isLoop) {
    accountMenu();
    var number = readlineSync.question('Choose function:  ');
    switch (number) {
        case '1':
            AccountManagement_1.AccountManagement.Register();
            break;
        case '2':
            AccountManagement_1.AccountManagement.LogIn();
            break;
        case '0':
            isLoop = false;
            break;
    }
}
function editWord() {
    console.log('1: Edit nameWord');
    console.log('2: Edit pronunciation');
    console.log('3: Edit types');
    console.log('0: Exit menuEdit');
}
exports.editWord = editWord;
function subMenuEditTypes() {
    console.log('1: Add 1 type');
    console.log('2: Delete 1 type');
    console.log('3: Edit 1 type');
    console.log('0: Exit subMenuEditType');
}
exports.subMenuEditTypes = subMenuEditTypes;
function subMenuEditOneType() {
    console.log('1: Change name');
    console.log('2: Add 1 meaning');
    console.log('3: Delete 1 meaning');
    console.log('4: Edit 1 meaning');
    console.log('0: Exit subMenuEditMeaning');
}
exports.subMenuEditOneType = subMenuEditOneType;
function subMenuEditOneMeaning() {
    console.log('1: Edit definition');
    console.log('2: Add 1 example');
    console.log('3: Delete 1 example');
    console.log('0: Exit subMenuEditOneMeaning');
}
exports.subMenuEditOneMeaning = subMenuEditOneMeaning;
