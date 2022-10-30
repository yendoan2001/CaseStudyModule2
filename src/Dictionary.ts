import {Word} from "./Word";
import * as readlineSync from "readline-sync";
import {Type} from "./Type";
import {Meaning} from "./Meaning";
import {Example} from "./Example";
import {menuEdit} from "./main";
import {subMenuEditTypes} from "./main";
import {subMenuEditOneMeaning} from "./main";
import {subMenuEditOneType} from "./main";

export class Dictionary{
    static words: Word[]=[];
    static addWord(){
        let name = readlineSync.question('Input word need to be added:  ');
        let pronunciation = readlineSync.question('Input pronunciation of word:  ');
        let newWord = new Word(name,pronunciation);
        newWord.addType();
        Dictionary.words.push(newWord);
    }
    static deleteWord(name:string):void{
        Dictionary.words = Dictionary.words.filter(item => item.nameWord !==name);
    }
    static find(name:string): Word | undefined {
        return this.words.find(item=>{
            return item.nameWord == name;
        })
    }
    static editWord(){
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
                        subMenuEditTypes();
                        let number = readlineSync.question('Choose function to edit types:  ')
                        switch (number) {
                            case '1':

                                break;
                            case '2':
                                break;
                            case '3':
                                break;
                            case '0':
                                break;
                        }
                        break;
                    case '0':
                        exit = false;
                        break;
                }
            }
        }

    }
    static show() {
        let name = readlineSync.question('Input word you want to show:  ');
        let word = Dictionary.words[name];
        console.log(word.nameWord)
        console.log(word.pronunciation)
        console.log("---------------")
        word.types.forEach(type => {
            console.log(`\t${type.typeName}`)
            console.log("\t---------------")
            type.meanings.forEach(meaning => {
                console.log(`\t\t${meaning.definition}`)
                console.log("\t\t---------------")
                meaning.examples.forEach(example => {
                    console.log(`\t\t\t${example.english}`)
                    console.log(`\t\t\t${example.vietnamese}`)
                })
            })
        })
    }

    static listWords() {
        Dictionary.words.forEach(word => {
            console.log(`${word.nameWord}\t${word.pronunciation}`)
        })
    }

}