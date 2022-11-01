import {jsonMember, jsonObject} from "typedjson";

@jsonObject
//@ts-ignore
export class Example {

    @jsonMember(String)
    //@ts-ignore
    english: string;

    @jsonMember(String)
    //@ts-ignore
    vietnamese: string;

    constructor(english: string, vietnamese: string) {
        this.english = english;
        this.vietnamese = vietnamese;
    }

    checkEnglishSentence(keyword): boolean {
        return this.english.includes(keyword);
    }

    checkVietnameseSentence(keyword): boolean {
        return this.vietnamese.includes(keyword);
    }
}