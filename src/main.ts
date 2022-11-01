import {Dictionary} from "./Dictionary";
import * as readlineSync from "readline-sync"
import {AccountManagement} from "./AccountManagement";
import * as fs from "fs";

const account = require('fs');
const dataAccount = account.readFileSync('../data/data.json', {
    encoding: "utf8"
})
AccountManagement.accounts = JSON.parse(dataAccount);

const word = require('fs');
const data = word.readFileSync('../data/wordData.json', {
    encoding: "utf8"
})
Dictionary.words = JSON.parse(data);

export function save(path: string, object1: object[]) {
    let Data = JSON.stringify(object1, null, '\t');
    fs.writeFileSync(path, Data);
}

export function accountMenu() {
    console.log('1: Register');
    console.log('2: Login');
    console.log('3: Logout');
}

export function mainMenu() {
    console.log('1: Add word');
    console.log('2: Delete word');
    console.log('3: Edit word');
    console.log('4: Show word');
    console.log('5: Show list of words');
    console.log('0: Exit');
}
export function editWord() {
    console.log('1: Edit nameWord');
    console.log('2: Edit pronunciation');
    console.log('3: Edit types');
    console.log('0: Exit menuEdit')
}

export function subMenuEditTypes() {
    console.log('1: Add 1 type');
    console.log('2: Delete 1 type');
    console.log('3: Edit 1 type');
    console.log('0: Exit subMenuEditType');
}


export function subMenuEditOneType() {
    console.log('1: Change name');
    console.log('2: Add 1 meaning');
    console.log('3: Delete 1 meaning');
    console.log('4: Edit 1 meaning');
    console.log('0: Exit subMenuEditMeaning');
}

export function subMenuEditOneMeaning() {
    console.log('1: Edit definition');
    console.log('2: Add 1 example');
    console.log('3: Delete 1 example');
    console.log('0: Exit subMenuEditOneMeaning');
}

let isLoop = true;
while (isLoop) {
    accountMenu();
    let number = readlineSync.question('Choose function:  ');
    switch (number) {
        case '1':
            AccountManagement.Register();
            break;
        case '2':
            AccountManagement.LogIn();
            break;
        case '0':
            isLoop = false;
            break;
    }
}












