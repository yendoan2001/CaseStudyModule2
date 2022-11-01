import {jsonMember, jsonObject} from "typedjson";

@jsonObject
//@ts-ignore
export class Account {

    @jsonMember(String)
    //@ts-ignore
    emailAccount: string;

    @jsonMember(String)
    //@ts-ignore
    password: string;

    constructor(emailAccount: string, password: string) {
        this.emailAccount = emailAccount;
        this.password = password;
    }
}