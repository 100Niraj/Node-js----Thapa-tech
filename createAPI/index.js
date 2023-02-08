//Api is the acronym for application programming interface .
//which is software intermediary that allows two application to talk each other.
//each time you use an app like facebook,send an instant message,
//or check the weather on your phone,you're using an API.



const fs = require("fs");

const http = require("http");

const server = http.createServer((req , res) => {
    if(req.url == "/"){
        res.end("Welcome to my wev server");
    }
    else if(req.url == "/niraj/"){
        res.end("Hello , Myself Niraj kumar & This is my web server");
    }
    else if(req.url == "/nishant/"){
        res.end("Hello , Hii motka or kkrh");
    }
    else if(req.url == "/motki/"){
        res.end("Hii motki ");
    }
    else if(req.url == "/userapi/"){
        fs.readFile('./webserver/index.js', "utf-8" , (err ,data) =>{
            console.log(data);
            res.end(data);
        })
       
    }
    else {
        res.end("404 , Error page ");
    }
    
});

server.listen(9060 , "127.0.0.1" , () => {
    console.log("Listening to the part no 9060");
});
