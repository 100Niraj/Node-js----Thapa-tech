// Events module
//Node.js has a built-in module, called "Events";
//where we can create - fire  - listen for we own events;
//Events means say that Every action on a computer is an event. ... like button , save file , login , logout ...

//Example 1 - registering for the event to be fired only one time using 

//Example -2 - create an event emitter instance and register a couple of 

//Example - 3- registering for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();



event.on("sayMyname" , () =>{
    console.log("your name is niraj");
});

event.on("sayMyname" , () =>{
    console.log("your name is rishant");
});

event.on("sayMyname" , () =>{
    console.log("your name is pravesh");
});

event.emit("sayMyname");


//we pass paremeters


//event.on("checkpage" , (sc,msg) =>{
//    console.log(`status code is ${sc} and the page is ${msg}`);
//});

//event.emit("checkpage" , 200 , "ok");