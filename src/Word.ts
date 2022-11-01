import {Type} from "./Type";
import * as readlineSync from "readline-sync";
import {save, subMenuEditOneMeaning, subMenuEditOneType, subMenuEditTypes} from "./main";
import {jsonArrayMember, jsonMember, jsonObject} from "typedjson";

@jsonObject
//@ts-ignore
export class Word {

    @jsonMember(String)
    //@ts-ignore
    nameWord: string;

    @jsonMember(String)
    //@ts-ignore
    pronunciation: string;

    @jsonArrayMember(Type)
    //@ts-ignore
    types: Type[] = [];

    constructor(nameWord: string, pronunciation: string) {
        this.nameWord = nameWord;
        this.pronunciation = pronunciation;
    }

    setName(): void {
        let newName = readlineSync.question('Input new name of word:  ');
        this.nameWord = newName;
    }

    setPronunciation(): void {
        let newPronunciation = readlineSync.question('Input new pronunciation of word:  ');
        this.pronunciation = newPronunciation;
    }

    addType(): void {
        let question;
        do {
            let nameOfType = readlineSync.question('Input type of word:  ');
            let type = new Type(nameOfType);
            type.addMeaning();
            this.types.push(type);
            question = readlineSync.question('Input yes if you want to input type of word:  ');
        } while (question == 'yes')
    }

    deleteType(): void {
        let question;
        do {
            let nameType = readlineSync.question('Input name of type you want to delete:  ');
            let type = this.findType(nameType);
            if (type !== undefined) {
                this.types = this.types.filter(type => type.nameType !== nameType);
            } else {
                console.log('This type is not exist');
                question = readlineSync.question('Input yes if you want to continue deleting type of word:  ');
            }
        } while (question == 'yes');
    }

    findType(name: string): Type | undefined {
        return this.types.find(item => {
            return item.nameType == name;
        })
    }

    editTypes(): void {
        while (true) {
            subMenuEditTypes();
            let number = readlineSync.question('Chon chuc nang:  ');
            switch (number) {
                case "1":
                    this.addType();
                    break;
                case "2":
                    this.deleteType();
                    break;
                case "3":
                    let nameType = readlineSync.question('Nhap type:  ');
                    let type = this.findType(nameType);
                    let out = true;
                    while (out == true) {
                        subMenuEditOneType();
                        let number = readlineSync.question('Chon chuc nang:  ');
                        switch (number) {
                            case "1":
                                type.addMeaning();
                                break;
                            case "2":
                                type.deleteMeaning();
                                break;
                            case "3":
                                type.editOneMeaning();
                                break;
                            case "0":
                                out = false;
                                break;
                        }
                    }
                    break
                case "0":
                    return
            }
        }
    }

}