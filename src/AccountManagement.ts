import {Account} from "./account";
import * as readlineSync from "readline-sync";
import {mainMenu, save} from "./main";
import {Dictionary} from "./Dictionary";

export class AccountManagement {
    static accounts: Account[] = [];

    constructor() {
    }

    static Register(): void {
        let email = readlineSync.question('Input email:  ');
        let password = readlineSync.question('Input password:  ');
        let check = this.findAccount(email);
        if (check !== undefined) {
            console.log('This account has existed');
        } else {
            let userAccount = new Account(email, password);
            this.accounts.push(userAccount);
            save('../data/data.json', AccountManagement.accounts);
        }
    }

    static LogIn(): void {
        let inputEmail = readlineSync.question('Input your email:  ');
        let inputPassword = readlineSync.question('Input your password:  ');
        let account = this.accounts.find(account => {
            return account.emailAccount == inputEmail && account.password == inputPassword
        });
        if (account !== undefined) {
            let isExit = false;
            while (!isExit) {
                mainMenu();
                let number = readlineSync.question('Choose function:  ');
                switch (number) {
                    case '1':
                        Dictionary.addWord();
                        break;
                    case '2':
                        Dictionary.deleteWord();
                        break;
                    case '3':
                        Dictionary.editWord();
                        break;
                    case '4':
                        try {
                            Dictionary.show();
                        } catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case '5':
                        Dictionary.listWords();
                        break;
                    case '0':
                        isExit = true;
                        break;
                }
            }
        } else {
            console.log("This account hasn't exited");
        }

    }

    static findAccount(email: string): Account | undefined {
        return this.accounts.find(item => {
            return item.emailAccount == email
        })
    }
}