async function fetchNames() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("REs populated"+ res);
    let data =  await res.json();
    console.log(data);
}
console.log("LINE 6");
fetchNames();
console.log("After Function call ");