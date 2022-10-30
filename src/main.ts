import {Dictionary} from "./Dictionary";
import {Word} from "./Word";
import {Example} from "./Example";
import {Type} from "./Type";
import {Meaning} from "./Meaning";
import * as readlineSync from "readline-sync"

function menu(){
    console.log('1: Add word');
    console.log('2: Show list of word');
    console.log('0: Exit');
}
let isExit = false;
while (!isExit){
    menu();
    let number = readlineSync.question('Choose function:  ');
    switch (number){
        case '1':
            Dictionary.addWord();
            break;
        case '2':

            break;
        case '0':
            isExit = true;
            break;
    }
}
export function menuEdit(){
    console.log('1: Edit nameWord');
    console.log('2: Edit pronunciation');
    console.log('3: Edit types');
    console.log('0: Exit menuEdit')
}
function subMenuEditTypes(){
    console.log('1: Add 1 type');
    console.log('2: Delete 1 type');
    console.log('3: Edit 1 type');
    console.log('0: Exit subMenuEditType');
}
function subMenuEditOneType(){
    console.log('1: Edit typeName');
    console.log('2: Add 1 meaning');
    console.log('3: Delete 1 meaning');
    console.log('0: Exit subMenuEditMeaning');
}
function subMenuEditOneMeaning(){
    console.log('1: Edit definition');
    console.log('2: Add 1 example');
    console.log('1: Delete 1 example');
    console.log('0: Exit subMenuEditOneMeaning');
}


