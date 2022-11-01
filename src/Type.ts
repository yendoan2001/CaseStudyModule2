import {Meaning} from "./Meaning";
import * as readlineSync from "readline-sync";
import {subMenuEditOneMeaning} from "./main";

export class Type {
    nameType: string;
    meanings: Meaning[] = [];

    constructor(typeName: string) {
        this.nameType = typeName;
    }

    setNameType(): void {
        let newNameType = readlineSync.question('Input new name of type:  ');
        this.nameType = newNameType;
    }

    addMeaning() {
        let question;
        do {
            let definition = readlineSync.question('Input definition of word:  ');
            let meaning = new Meaning(definition);
            meaning.addExample();
            this.meanings.push(meaning);
            question = readlineSync.question('Input yes if you want to input meaning of type:  ');
        } while (question == "yes");
    }

    deleteMeaning() {
        let question;
        do {
            let definition = readlineSync.question('Input meaning you want to delete:  ');
            let meaning = this.findMeaning(definition);
            if (meaning !== undefined) {
                this.meanings = this.meanings.filter(type => type.definition !== definition);
            } else {
                console.log('This definition is not exist')
                question = readlineSync.question('Input yes if you want to continue deleting meaning of word:  ');
            }
        } while (question == "yes");
    }

    editOneMeaning(): void {
        let question;
        do {
            let name = readlineSync.question('Input definition you want to edit:  ');
            let definition = this.findMeaning(name);
            if (definition !== undefined) {
                let exit = true;
                while (exit == true) {
                    subMenuEditOneMeaning();
                    let number = readlineSync.question('Choose function to edit one definition');
                    switch (number) {
                        case '1':
                            definition.setDefinition();
                            break;
                        case '2':
                            definition.addExample();
                            break;
                        case '3':
                            definition.deleteExample();
                            break;
                        case '0':
                            exit = false;
                            break;
                    }
                }
            } else {
                console.log('This meaning is not exist');
                question = readlineSync.question('Input yes if you want to continue editing meaning');
            }
        } while (question == 'yes');
    }

    findMeaning(name: string): Meaning | undefined {
        return this.meanings.find(item => {
            return item.definition == name;
        })
    }
}