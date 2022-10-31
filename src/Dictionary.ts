import {Word} from "./Word";
import * as readlineSync from "readline-sync";
import {Type} from "./Type";
import {Meaning} from "./Meaning";
import {Example} from "./Example";
import {editWord} from "./main";
import {subMenuEditTypes} from "./main";
import {subMenuEditOneMeaning} from "./main";
import {subMenuEditOneType} from "./main";
import {question} from "readline-sync";

export class Dictionary{
    static words: Word[]=[];

    static addWord(){
        let question;
        do {
            let name = readlineSync.question('Input word need to be added:  ');
            let pronunciation = readlineSync.question('Input pronunciation of word:  ');
            let newWord = new Word(name,pronunciation);
            newWord.addType();
            Dictionary.words.push(newWord);
            question = readlineSync.question('Input yes if you want to continue adding word:  ');
        } while (question == 'yes');
    }
    static deleteWord():void{
        let question;
        do{
            let name = readlineSync.question('Input name of word you want to delete:  ');
            let word = this.findWord(name);
            if(word!==undefined){
                Dictionary.words = Dictionary.words.filter(item => item.nameWord !==name);
            }else{
                console.log('This word is not exist');
                question = readlineSync.question('Input yes if you want to input name of word again:  ');
            }
        } while (question =='yes');
    }
    static findWord(name:string): Word | undefined {
        return this.words.find(item=>{
            return item.nameWord == name;
        })
    }
    static editWord() {
        let question;
        do {
            let name = readlineSync.question('Input wordName need to be edited:  ');
            let word = this.findWord(name);
            if(word!==undefined){
                let exit = true
                while (exit==true){
                    editWord();
                    let number = readlineSync.question('Choose function to edit word:  ');
                    switch (number) {
                        case '1':
                            word.setName();
                            break;
                        case '2':
                            word.setPronunciation();
                            break;
                        case '3':
                            let isLoop = true;
                            while (isLoop ==true){
                                editWord();
                                let number = readlineSync.question('Choose function to edit types:  ')
                                switch (number) {
                                    case '1':
                                        word.addType();
                                        break;
                                    case '2':
                                        word.deleteType();
                                        break;
                                    case '3':
                                        word.editOneType();
                                        break;
                                    case '0':
                                        isLoop=false;
                                        break;
                                }
                            }
                            break;
                        case '0':
                            exit = false;
                            break;
                    }
                }
            } else {
                console.log('This word is not exist');
                question = readlineSync.question('Input yes if you want to edit word again:   ')
            }
        } while (question == 'yes');
    }
    static show() {
        let name = readlineSync.question('Input word you want to show:  ');
        let word = Dictionary.findWord(name);
        console.log(word.nameWord)
        console.log(word.pronunciation)
        console.log("---------------")
        word.types.forEach(type => {
            console.log(`\t${type.nameType}`)
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