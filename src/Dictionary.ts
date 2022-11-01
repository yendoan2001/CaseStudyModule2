import {Word} from "./Word";
import * as readlineSync from "readline-sync";
import {MenuEditWord, save} from "./main";
import {TypedJSON} from "typedjson";
import * as fs from "fs";

export class Dictionary {
    static words: Word[] = TypedJSON.parseAsArray(fs.readFileSync('../data/wordData.json', {
        encoding: "utf8"
    }), Word);

    static addWord() {
        let question;
        do {
            let name = readlineSync.question('Input word need to be added:  ');
            let pronunciation = readlineSync.question('Input pronunciation of word:  ');
            let newWord = new Word(name, pronunciation);
            newWord.addType();
            Dictionary.words.push(newWord);
            save('../data/wordData.json', Dictionary.words);
            question = readlineSync.question('Input yes if you want to continue adding word:  ');
        } while (question == 'yes');
    }

    static deleteWord(): void {
        let question;
        do {
            let name = readlineSync.question('Input name of word you want to delete:  ');
            let word = this.findWord(name);
            if (word !== undefined) {
                Dictionary.words = Dictionary.words.filter(item => item.nameWord !== name);
                save('../data/wordData.json', Dictionary.words);
            } else {
                console.log('This word is not exist');
                question = readlineSync.question('Input yes if you want to input name of word again:  ');
            }
        } while (question == 'yes');
    }

    static findWord(name: string): Word | undefined {
        return this.words.find(item => {
            return item.nameWord == name;
        })
    }

    static editWord() {
            let name = readlineSync.question('Input wordName need to be edited:  ');
            const word1 = Dictionary.findWord(name);
            if (word1 !== undefined) {
                let exit = true
                while (exit == true) {
                    MenuEditWord();
                    let number = readlineSync.question('Choose function to edit word:  ');
                    switch (number) {
                        case '1':
                            let newName = readlineSync.question('Input new name of word:  ');
                            word1.nameWord = newName;
                            save('../data/wordData.json', Dictionary.words);
                            break;
                        case '2':
                            let newPronunciation = readlineSync.question('Input new pronunciation of word:  ');
                            word1.pronunciation = newPronunciation;
                            save('../data/wordData.json', Dictionary.words);
                            break;
                        case '3':
                            let isLoop = true;
                            while (isLoop == true) {
                                MenuEditWord();
                                let number = readlineSync.question('Choose function to edit types:  ')
                                switch (number) {
                                    case '1':
                                        word1.addType();
                                        save('../data/wordData.json', Dictionary.words);
                                        break;
                                    case '2':
                                        word1.deleteType();
                                        save('../data/wordData.json', Dictionary.words);
                                        break;
                                    case '3':
                                        word1.editTypes();
                                        save('../data/wordData.json', Dictionary.words);
                                        break;
                                    case '0':
                                        isLoop = false;
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
            }

    }

    static show() {
        let name = readlineSync.question('Input word you want to show:  ');
        let word = Dictionary.findWord(name);
        if (word !== undefined) {
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
        } else throw new Error('This word is not exist')
    }

    static listWords() {
        Dictionary.words.forEach(word => {
            console.log(`${word.nameWord}\t${word.pronunciation}`)
        })
    }
}