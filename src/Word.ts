import {Type} from "./Type";
import * as readlineSync from "readline-sync";
import {Meaning} from "./Meaning";
import {Example} from "./Example";

export class Word{
    nameWord: string;
    pronunciation: string;
    types:  Type[]=[];
    constructor(nameWord: string,pronunciation: string) {
    }
    addType():void{
        let question;
        do{
            let nameOfType = readlineSync.question('Input type of word:  ');
            let type = new Type(nameOfType);
            type.addMeaning();
            this.types.push(type);
            question = readlineSync.question('Input yes if you want to input type of word:  ');
        }while (question =='yes')
    }
    static deleteOneType(name: string): void {
        Word.types = Word.types.filter(type => type.typeName !== name)
    }
    setName():void{
        let newName = readlineSync.question('Input new name of word:  ');
        this.nameWord = newName;
    }
    setPronunciation():void{
        let newPronunciation = readlineSync.question('Input new pronunciation of word:  ');
        this.pronunciation = newPronunciation;
    }
}