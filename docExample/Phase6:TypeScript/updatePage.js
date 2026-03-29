"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
function updatePTag() {
    var inputTagText = document.getElementById("myInput");
    var pTagTarget = document.getElementById("target");
    pTagTarget.textContent = inputTagText.value;
    console.log(" In UpdatePTag");
}
var btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (event) {
    console.log("clicked");
    updatePTag();
});
var myUser = new User_1.User("Rahul", "foo", 33);
console.log(myUser.name.toUpperCase());
console.log(myUser.age);
