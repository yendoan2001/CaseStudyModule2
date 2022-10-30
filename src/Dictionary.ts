import {Word} from "./Word";
import * as readlineSync from "readline-sync";
import {Type} from "./Type";
import {Meaning} from "./Meaning";
import {Example} from "./Example";
import {menuEdit} from "./main";

export class Dictionary{
    static words: Word[]=[];
    static addWord(){
        let name = readlineSync.question('Input word need to be added:  ');
        let pronunciation = readlineSync.question('Input pronunciation of word:  ');
        let newWord = new Word(name,pronunciation);
        newWord.addType();
        Dictionary.words.push(newWord);
    }
    static deleteWord(name: string): void {
        Dictionary.words = Dictionary.words.filter(word => word.nameWord !== name)
    }
    static edit(){
        let name = readlineSync.question('Input wordName need to be edited');
        let word = this.find(name);
        if(word!==undefined){
            let exit =true
            while (exit==true){
                menuEdit();
                let number = readlineSync.question('Choose function');
                switch (number) {
                    case '1':
                        word.setName();
                        break;
                    case '2':
                        word.setPronunciation();
                        break;
                    case '3':
                        
                        break;
                    case '0':
                        exit = false;
                        break;
                }
            }
        }

    }
    static find(name:string): Word | undefined {
        return this.words.find(item=>{
            return item.nameWord == name
        })
    }
}