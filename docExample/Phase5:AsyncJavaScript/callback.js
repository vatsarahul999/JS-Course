function fetchData(callback) {
    setTimeout(()=> {
        callback("Got the data");
    }, 1000);
}
function myFunction (data) {
    console.log(data);
}
console.log("Start");
console.log("Calling MyFunction");
fetchData(myFunction);
console.log("Calling Arrow Function");
fetchData((data)=> {
    console.log("in arrow");
    console.log(data);
});
console.log("End");