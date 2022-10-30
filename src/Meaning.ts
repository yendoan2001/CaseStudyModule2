import {Example} from "./Example";
import * as readlineSync from "readline-sync";
export class Meaning{
    definition: string;
    examples: Example[] = [];

    constructor(definition: string) {
        this.definition = definition;
    }
    addExample(){
        let question;
        do{
            let english = readlineSync.question('Input English example:  ')
            let vietnamese = readlineSync.question('Input Vietnamese example:  ')
            let example = new Example(english,vietnamese);
            this.examples.push(example);
            question = readlineSync.question('Input yes if you want to input example of meaning:  ')
        }while (question=='yes');
    }
}