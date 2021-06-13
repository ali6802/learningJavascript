//Create a function that will retrieve the posts from the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts). Set up the function so you can pass in the userID and the function will assign only the posts for that user to a variable. The data should be stored in an array.
//
/* MY TAKE
function getPost(ID){
     let url='https://jsonplaceholder.typicode.com/posts';
     //
     return fetch(url).then(a=>a.json()).filter(obj=>obj.id==ID).catch(err=>console.error(err));
}
*/
var user3Posts;
const retrievePost = async function (userId){
     let url='https://jsonplaceholder.typicode.com/posts',posts=[];
     //
     posts= await fetch(url).then(resp=>resp.json()).catch(err=>console.error(err));

     return posts.filter(obj=>obj.userId===userId);     
}

retrievePost(3).then(val=>user3Posts=val);
console.log("Remaining Code.");