import {Type} from "./Type";
import * as readlineSync from "readline-sync";
import {Meaning} from "./Meaning";
import {Example} from "./Example";
import {subMenuEditOneType} from "./main";

export class Word{
    nameWord: string;
    pronunciation: string;
    types:  Type[]=[];
    constructor(nameWord: string,pronunciation: string) {
        this.nameWord = nameWord;
        this.pronunciation = pronunciation;
    }
    addType():void{
        let question;
        do{
            let nameOfType = readlineSync.question('Input type of word:  ');
            let type = new Type(nameOfType);
            type.addMeaning();
            this.types.push(type);
            question = readlineSync.question('Input yes if you want to input type of word:  ');
        } while (question =='yes')
    }
    deleteType():void {
        let question;
        do {
            let nameType = readlineSync.question('Input name of type you want to delete:  ');
            let type = this.findType(nameType);
            if(type!==undefined){
                this.types = this.types.filter(type => type.nameType !== nameType);
            } else {
                console.log('This type is not exist');
                question = readlineSync.question('Input yes if you want to continue deleting type of word:  ');
            }
        } while (question=='yes');
    }
   findType(name:string): Type | undefined {
        return this.types.find(item=>{
            return item.nameType == name;
        })
    }
    editOneType():void{
        let question;
        do {
            let name = readlineSync.question('Input name of type you want to edit:  ');
            let type = this.findType(name);
            if (type !== undefined) {
                let exit = true;
                while (exit == true) {
                    subMenuEditOneType();
                    let number = readlineSync.question('Choose function to edit one type');
                    switch (number) {
                        case '1':
                            type.setNameType();
                            break;
                        case '2':
                            type.addMeaning();
                            break;
                        case '3':
                            type.deleteMeaning();
                            break;
                        case '4':
                            type.editOneMeaning()
                            break;
                        case '0':
                            exit = false;
                            break;
                    }
                }
            } else {
                console.log('This type is not exist');
                question = readlineSync.question('Input yes if you want to continue editing type');
            }
        } while (question == 'yes');
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