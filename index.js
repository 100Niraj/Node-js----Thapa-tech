const fs = require("fs");

//difference between synchronous and  Asynchronous 

const data = fs.readFileSync("read.txt" , "utf-8");
console.log(data);

console.log("after the data");
//if use asynchrounous then we err callback funt  so we use fun(err) it is run after data we first pass 

fs.readFile("read.txt" , "utf-8" , (err , data) => {
    console.log(data);
})