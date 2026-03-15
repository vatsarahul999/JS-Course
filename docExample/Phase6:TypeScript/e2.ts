function subtract(a: number, b: number): number {
    return a - b;
}
function multiplty(a: number, b: number): number {
    return a * b;
}

function greeting(name: string, age: number = 12): void {
    console.log("Hey! " + name + " \n You are getting old at " + age);
}
function g2(name: string, age?: number): void {
    console.log("Hey! " + name);
    if(age !== undefined) {
        console.log("Age is defined. It is "+age);
    }
}
console.log(subtract(2, 4));
console.log(subtract(9, 1));
greeting("P1");
greeting("P2", 45);
g2("Ram");
g2("Ramesh", 12);