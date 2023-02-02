const fs = require("fs");

// first create a folder then   next we create a file and  write bio in file 

fs.mkdirSync("niraj");

//finally i create new  a folder niraj;

//now i make a new file and include in some bio

fs.writeFileSync("niraj/bio.txt" , "My name is niraj kumar");

// now we add something in bio file 

// fs.appendFileSync("niraj/bio.txt" , "  I'm from BIHAR and currently purchuing btech in national institute of technology Agartal from production engg in 3rd year .");

//and same process as lesson_1

// we rename the file 
fs.renameSync("niraj/bio.txt" , "niraj/Bio.text");

//now we delte file

fs.unlinkSync("niraj/Bio.text");




 