
// const {add , sub , mult , name}= require('./order');
// console.log(add(5,5));
// console.log(sub(5,5));
// console.log(mult(5,5));
// console.log(name);


// create a wev page 

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
    else if(req.url == "/shera/"){
        res.end("bsdk mar jaa tu ");
    }
    else {
        res.end("404 , Error page ");
    }
    
});

server.listen(9060 , "127.0.0.1" , () => {
    console.log("Listening to the part no 9060");
})
