export class Example{
    english: string;
    vietnamese: string;

    constructor(english: string,vietnamese: string) {
        this.english = english;
        this.vietnamese = vietnamese;
    }
    checkEnglishSentence(keyword):boolean{
        return this.english.includes(keyword);
    }
    checkVietnameseSentence(keyword):boolean{
        return this.vietnamese.includes(keyword);
    }
}