export class User {
    public name: string;
    private password: string;
    public age : number;
    constructor(name: string, password: string, age:number) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
   
}