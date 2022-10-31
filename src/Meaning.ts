import {Example} from "./Example";
import * as readlineSync from "readline-sync";
export class Meaning{
    definition: string;
    examples: Example[] = [];

    constructor(definition: string) {
        this.definition = definition;
    }
    addExample() {
        let question;
        do {
            let english = readlineSync.question('Input English example:  ')
            let vietnamese = readlineSync.question('Input Vietnamese example:  ')
            let example = new Example(english, vietnamese);
            this.examples.push(example);
            question = readlineSync.question('Input yes if you want to input example of meaning:  ')
        } while (question == "yes");
    }
    deleteExample() {
        let question;
        do {
            let keyword = readlineSync.question('Input keyword of example you want to delete:  ');
            let example = this.findExample(keyword);
            if(example!==undefined){
                this.examples = this.examples.filter(item => item!== example);
            } else {
                console.log('This example is not exist')
                question = readlineSync.question('Input yes if you want to continue deleting example:  ');
            }
        } while (question=="yes");
    }
    setDefinition():void{
        let newDefinition = readlineSync.question('Input new definition of word');
        this.definition = newDefinition;
    }
    findExample(keyword:string): Example | undefined {
        return this.examples.find(item=>{
            return item.checkEnglishSentence(keyword)|| item.checkVietnameseSentence(keyword) ;
        })
    }
}