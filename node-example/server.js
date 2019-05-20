'use strict';
const express = require('express');
const app = express();

const { facts } = require('./facts');


app.get('/', (req, res) => {
res.send(facts[Math.floor(Math.random()*facts.length)]);
//if you wanted to manually set the server status:
// res.status(500).send(facts[Math.floor(Math.random()*facts.length)]);
});

app.listen(8888, () => console.log('server up and running on port: 8888'));




// "use strict";
// const http = require("http");

// // my solution initially:
// const facts = ['I am a human', 'mushrooms are my spirit organism', 'I have synesthesia'];
// function randomFact(facts) {
//     return facts[Math.floor(Math.random()*facts.length)];
// }

// http.createServer((req, res) => {
//     res.writeHead(300, { "Content-type": "text/plain" });
//     res.write(randomFact(facts));
//     res.end();
//     //telling it what to do 
// }).listen(8888);
//what server its on

// //ivan's solution which is pretty much the sames
// http.createServer((req, res) => {
    //     res.writeHead(300, { "Content-type": "text/plain" });
    //     res.write((facts[Math.floor(Math.random()*facts.length)]));
    //     res.end();
    //     //telling it what to do 
    // }).listen(8888);
    
    //another example
    // "use strict";
    // const http = require("http");
    // http.createServer((req, res) => {
    //     res.writeHead(300, { "Content-type": "text/plain" });
    //     res.write("300 message");
    //     res.end();
    //     //telling it what to do 
    // }).listen(8888);
    // //what server its on