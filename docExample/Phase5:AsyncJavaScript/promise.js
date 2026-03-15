
let resolve = (x) => { console.log("In resolve function \n. logging " + x); };
let reject = (x) => { console.log("In reject function \n. logging " + x); };

let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
        // reject ("failled");
    }, 1000);
});


pro.then(result => {
    console.log(result);
}).then(x => {

}).catch(error => {
    console.error(error);
})

fetch(pro);

pro.then( result => {
    if(result.isOk){
        let id  = result.id;
        fetch("urlForGetPost"+id).then( result => {
            
        }

        )
    }
})