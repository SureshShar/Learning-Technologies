// Imported http module 
// var http = require('http');
// var dt = require('./myFirstNodeModule');

// Created server
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end("<html><body><h1>My Header</h1><p>My paragraph.</p></body></html>");
// }).listen(8000);

// console.log('This example is different!');
// console.log(dt.nameString());

// Node.js is an open source server environment
// Node.js is free
// Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
// Node.js uses JavaScript on the server

// Consider modules to be the same as JavaScript libraries.
// A set of functions you want to include in your application.

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata); //returns 'february'