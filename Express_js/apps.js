var express = require("express");
var app = express();

// app.get(route ,callback)

app.get("/" , (req , res) =>{

    res.send("Hello from express.js")

});

//now port listen krna hai so we run 

app.listen(9060 , ()=>{
    console.log("listing the port at 9060");
});

//the callback function has 2 parameters, request(req) and response(res)
//the request object(req) represents the http request and
//has properties for the request query stirng , patameters, body,
//http headers, etc

//similarly, the response object represnts the http response 
//that the express app sends when it receives an http request


