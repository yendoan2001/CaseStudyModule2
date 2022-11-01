export class Account {
    emailAccount: string;
    password: string;

    constructor(emailAccount: string, password: string) {
        this.emailAccount = emailAccount;
        this.password = password;
    }
}