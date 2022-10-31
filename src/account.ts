export class Account{
    emailAccount: string;
    password: string;
    constructor(emailAccount: string, password: string) {
        this.emailAccount = emailAccount;
        this.password = password;
    }
    // getEmailAccount():string{
    //     return this.emailAccount;
    // }
    // getPassword():string{
    //     return this.password;
    // }
}