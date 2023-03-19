import {getUsers, getPost} from "./data.js";

(async()=>{
    await getUsers(1)
    .then((data)=> console.log(data))
     .catch((e)=> console.log(e));

    await getPost(1)
    .then((data)=> console.log(data))
    .catch((e)=> console.log(e));
}
)();

 
  

  

