function addts(a, b) {
    return a + b;
}
function log(msg) {
    console.log(msg);
}
function throwError() {
    throw new Error("Something Failled!!!");
}
var price = 100;
price = 2;
console.log(price);
var b = 10;
b = true;
b = 12;
b = "hello";
b = null;
var c = 11;
c = true;
c = 12;
c = "hello";
c = null;
var d = "hello";
d = true;
d = 12;
d = null;
d = "hello";
if (typeof d === "string") {
    console.log(d.toUpperCase());
}
// number array
var marks = [1, 2, 3, 4, 5];
var scores = [2, 3, 4, 5, 6];
//tuples fixed structure array
var usr = [2, "India"];
usr = [1, "Ram"];
log("Hello World!");
//throwError();
log("Hello after!");
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var role = Role.Guest;
log(role);
var user;
user = { age: 10, name: "Abc" };
var u2 = { age: 13, name: "Abcd" };
