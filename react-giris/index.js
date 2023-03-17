// console.log("Hello node")

// var slugify =require('slugify') bu yazılım ES6 modul sistemi öncesi

//calismasi icin .json da type modul eklemen lazım
 import slugify from "slugify";
const title = slugify('some string lorem ipsum', '*') //ikinci olarak verdigim degiskeni araya koyar
 console.log(title);

import {hello,topla,cikar} from "./my-module.js";
console.log(topla(2,6));
console.log(cikar(8, 4))
hello('busra');

