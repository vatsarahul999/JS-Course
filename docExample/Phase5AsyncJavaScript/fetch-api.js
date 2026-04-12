let url = "https://jsonplaceholder.typicode.com/users";

fetch(url).then(res => {
    if (res.ok) {
        let a = res.json();
        return a;
    } else {
        console.log("we had error in calling api");
    }
}).then(  rawData => {
    let innerHTML = "";
    for (var data of rawData) {
        innerHTML+= "<TR><td> Name : </td><td>"+data.name+"<td>"
    }
    let table = document.getElementById("test");
    table.innerHTML = innerHTML;
    return rawData;
}

).then(data => console.log(data)).catch(err => console.error(err));
