function addts(a: number, b: number): number {
    return a + b;
}

function log(msg: string| Role): void {
    console.log(msg);
}

function throwError(): never {
    throw new Error("Something Failled!!!");
}


let price: number = 100;
price = 2;
console.log(price);

let b: string | number | boolean | null = 10;
b = true;
b = 12;
b = "hello";
b = null;



let c: any = 11;
c = true;
c = 12;
c = "hello";
c = null;

let d: unknown = "hello";
d = true;
d = 12;
d = null;
d = "hello";

if (typeof d === "string") {
    console.log(d.toUpperCase());
}

// number array
let marks: number[] = [1,2,3,4,5];
let scores: Array<number> = [2,3,4,5,6];

//tuples fixed structure array

let usr:[number, string] = [2,"India"];
usr = [1, "Ram"];


log("Hello World!");
//throwError();
log("Hello after!");

enum Role {
    Admin,
    User,
    Guest
}
let role:Role = Role.Guest;

log(role);

let user: {
    name: string;
    age: number;
};
user = {age: 10, name:"Abc"};

interface User {
    name: string;
    age: number;
}

let u2:User ={age: 13, name:"Abcd"};