import axios from"axios";
const getUsers =(user_id)=>{
    return new Promise( async(resolve, reject) => {
       const{data:user}=await axios("https://jsonplaceholder.typicode.com/users/" +user_id)
       resolve(user);
    });
};

const getPost = (user_id)=>{
    return new Promise(async(resolve, reject) => {
        const{data:post}=await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)
        resolve(post);
    });

}

// const datas= async(user_id) =>{
//     try{
//         const user=await getUsers(user_id)
//         const posts=await getPost(user_id)
//         console.log(user);
//          console.log(posts);
//     }catch(e){
//         console.log("e")
//     }}

export {getUsers,getPost}

