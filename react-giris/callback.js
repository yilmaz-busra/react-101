//  verecegimz parametredeki sure tamamlandıktan sonra 1 kere calisir

// iki tane parametre alacak bizden 1-> bir fonksiyon olacak 2-> 2000 = 2 saniye süre yazılır

// setTimeout(()=> {
//     console.log("Merhaba");
// },2000)

// verilen parametreyi her periyotta calistirir
// setInterval(()=>{
//     console.log("Her saniye çalışacağım")
// }, 1000)

// const sayHi =(cb)=>{
//     cb();
// }

// sayHi(()=>{
//     console.log("selam")
// }
// )

// herhangi bir veri kaynağına gidip veri cekebilmek icin bize verilen native bir fonksiyon var
// adı fetch = bu herhangi bir veri kaynagina baglaniyor her hangi bir veriyi alip gosteriyo

// import fetch from"node-fetch"; 932 
import axios from"axios"; 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json() )
// .then((users)=> {console.log(users) 
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=> data.json())
//     .then((post)=> console.log("post1 yüklendi", post));

//     fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then((data)=> data.json())
//     .then((post) => console.log("post2 yüklendi", post))
// });
//  yukardaki islemi daha düzgün yazmak icin

// async function getData(){
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         ).json();

//     const post1 = await ( 
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await( 
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();
    
//     console.log("users",users);
//     console.log("post1",post1);
//     console.log("post2",post2);
// }

// getData();


// anonim function nasil olusur?

// ( async()=>{
//     const {data:users}= await axios("https://jsonplaceholder.typicode.com/users");
   
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1" )
       
    
//     const {data:post2} = await axios( "https://jsonplaceholder.typicode.com/posts/2" )
            
            
//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

//Promises baslangic

// const getComments = (number)=>{
//    return new Promise((resolve, reject) => {
//         if(number===1){
//             resolve({text:"Selam"})
//         } reject("bir problem var")
//     })
// }

// getComments(2)
// .then((data)=> console.log(data))
// .catch((e)=> console.log(e));

const getUsers =()=>{
    return new Promise( async(resolve, reject) => {
       const{data}=await axios("https://jsonplaceholder.typicode.com/users")
       resolve(data);
    // reject("bir sorun olustu");
    });
};
const getPost =(post_id)=>{
    return new Promise( async(resolve, reject) => {
        const{data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)
         resolve(data);
        // reject("ikinci sorun olustu")
        
    })
}
//random calisir böyle yazinca hangisi önce gelir belli degil
// getUsers()
// .then((data)=> console.log(data))
// .catch((e)=> console.log(e));

// getPost(1)
// .then((data)=> console.log(data))


// sirali olmasi icin

// (async()=>{
//  await getUsers()
//  .then((data)=> console.log(data))
//  .catch((e)=> console.log(e));

//  await getPost(1)
//  .then((data)=> console.log(data))
//  .catch((e)=> console.log(e));

// })()

// hata yakalamasi yapabilmesi icin
// (async()=>{
//     try{
//     const users=await getUsers();
   
//     const post= await getPost(1);
   
//     console.log(users);
//     console.log(post);

//     }catch(e){
//     console.log(e)
//     }
    
//    })()

Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);