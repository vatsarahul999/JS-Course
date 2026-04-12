function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched!");
        callback( {id: id,  name:"Rahul" }) ;
    }, 500);
}

function getPost(user, callback) {
    setTimeout(() => {
        console.log("POST fetched!");
        callback([{ id:101 , post: "POST 1" },
        { id:102, post:"POST 2"}]);
    }, 300);
}


function getComments(post, callback) {
    setTimeout(() => {
        console.log("Comments  fetched!");
        callback([{ id:101 , comment:"Nice POST",post: "POST 1" },
        { id:102, comment:" Good ", post:"POST 2"}]);
    }, 1000);
}
// getUser(id, (user) => {
//     getPost(user, (post) => {
//         getComments(post[0], (comments) => {
//             console.log(comments);
//         });
//     });
// });

getUser(1, (user) => {
    getPost(user, (posts) => {
        getComments(posts[0], (comments) => {
            console.log("Final comments", comments);
        });
    });
});