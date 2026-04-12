import { User } from "./User";
function updatePTag(): void {
    const inputTagText = document.getElementById("myInput") as HTMLInputElement;
    const pTagTarget = document.getElementById("target") as HTMLParagraphElement;
    pTagTarget.textContent = inputTagText.value;
    console.log(" In UpdatePTag");
}
const btn = document.getElementById("btn") as HTMLButtonElement;

btn?.addEventListener("click", (event: MouseEvent) => {
    console.log("clicked");
    updatePTag();
})

const myUser:User = new User("Rahul","foo", 33);

console.log(myUser.name.toUpperCase());
console.log(myUser.age);