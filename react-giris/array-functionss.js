/* 
push       => arrayin sonuna yeni eleman ekler
map        => arrayin tüm elemanlarini doner
find       =>arama islemi yapar
filter     =>filtreleme yapıyor
some       => true ya da false döner
every      => bütün arrayin şartları true olmalı
includes   => icinde geciyor mu gecmiyor mu bakar
 */

const users=[
    {
        name:"mehmet",
        age:19,
    },
    {
        name:"mehet",
        age:40,
    },
    {
        name:"mercan",
        age:29
    }]
// push
// users.push("fatma")
// console.log(users);

// map
// users.map((item)=>{
//     console.log(item.name);
// })

// find
// const result=users.find((item)=> item.name==="mehmet" && item.age>20);
// console.log(result)

// //filter
// const filtered= users.filter(
// (item) => item.age>30);
// console.log(filtered)

//some
// const somed=users.some(item => item.age===10);
// console.log(somed)

//every
// const every =users.every(item => item.age>5);
//  console.log(every)

//includes

const meyveler=["elma","muz","cilek"];
// const isIncludes=meyveler.includes("muz");
const isIncludes=meyveler.includes("armut");

console.log(isIncludes)