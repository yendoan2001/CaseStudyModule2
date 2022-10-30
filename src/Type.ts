import {Meaning} from "./Meaning";
import * as readlineSync from "readline-sync";
import {Example} from "./Example";
export class Type{
    typeName: string;
    meanings: Meaning[]=[];

    constructor(typeName: string) {
        this.typeName = typeName
    }
    addMeaning() {
        let question;
        do {
            let definition = readlineSync.question('Input definition of word:  ');
            let meaning = new Meaning(definition);
            meaning.addExample();
            this.meanings.push(meaning);
            question = readlineSync.question('Input yes if you want to input meaning of type:  ');
        } while (question=="yes")
    }
}