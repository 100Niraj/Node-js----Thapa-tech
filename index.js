const fs = require("fs");

//creating new file 

fs.writeFileSync("read.txt" , "Hi niraj !");

//if we write something in read text file then we use this module

fs.appendFileSync("read.txt" , "  How are you");

// if we read file then we do first we declare a variable and convert to into string if we write string 

const buf_data = fs.readFileSync("read.txt");

const org_data = buf_data.toString();

console.log(org_data);
