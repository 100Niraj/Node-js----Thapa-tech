const fs = require("fs");
//for file module create;


const biodata = {
    name : "Niraj",
    age : 20,
    address : "Patelnagar , warisaliganj , bihar ",
}

//1. convert to json 
//2. durse file me add karna
//3. read file
//4. again convert back to js obj original
//5. console.log()

const jsondata =  JSON.stringify(biodata);
//1.done
fs.writeFile("Json.1" , jsondata ,(err) =>{
    console.log("done");
});

//2.done

fs.readFile("Json.1" , "utf-8" , (err , data) =>{
    console.log(data);
});

//3.done

const orgData = JSON.parse(jsondata);
console.log(jsondata);
//4.done or 5.done