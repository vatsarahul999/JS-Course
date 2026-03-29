"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
function subtract(a, b) {
    return a - b;
}
function multiplty(a, b) {
    return a * b;
}
function greeting(name, age) {
    if (age === void 0) { age = 12; }
    console.log("Hey! " + name + " \n You are getting old at " + age);
}
function g2(name, age) {
    console.log("Hey! " + name);
    if (age !== undefined) {
        console.log("Age is defined. It is " + age);
    }
}
var add = function (a, b) {
    return a + b;
};
console.log("New ADD:: " + add(1, 5));
console.log(subtract(2, 4));
console.log(subtract(9, 1));
greeting("P1");
greeting("P2", 45);
g2("Ram");
g2("Ramesh", 12);
var prn = new person_1.Person("ABC", 10);
