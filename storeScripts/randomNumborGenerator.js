const fs = require('fs');

// console.log("Number are generated here");
// Random number are generated here
// const randomId = [];
// let startNo = 300000000000; 
// for(let i = 0; i<1000000; i++ ){
//     const random = Math.floor(100000000000 + Math.random() * 90000045667);
//     randomId.push(startNo + i + random);
// }

const adhaar1 = [];
const adhaar2 = [];
const helperObject = {};

fs.readFile('adhaarOne.txt', (err, data) => {
    if (err) throw err;
    
    console.log("adhaarOne.txt has been read ");
    const start = Date.now();
    const arr = data.toString().split(",");
    console.log(arr.length);
    const nums = arr.map(function(str) {
        // using map() to convert array of strings to numbers
        const int = parseInt(str);
        helperObject.int=int;
        return int; 
    });
    // nums.sort();
    adhaar1 = nums;
    
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
})

fs.readFile('adhaarTwo.txt', (err, data) => {
    if (err) throw err;
    
    console.log("adhaarTwo.txt has been read ");
    const start = Date.now();
    const arr = data.toString().split(",");
    console.log(arr.length);
    console.log(typeof arr[0])
    const nums = arr.map(function(str) {
        // using map() to convert array of strings to numbers
        return parseInt(str); 
    });
    console.log(typeof nums[0])
    // nums.sort();
    adhaar2 = nums;
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
})

// fs.unlink("sample.txt", (err) => {
//     if (err) throw err;
//     console.log("File deleted!");
//  });

// fs.open("adhaarTwo.js", "w", (err, file) => {
//     if (err) throw err;
//     console.log(file);
// });

// fs.appendFile("adhaarAlloted.json", "Appending content", (err) => {
//     if (err) throw err;
//     console.log("Completed!");
// });

// fs.writeFile("adhaarTwo.js",JSON.stringify(randomId), (err) => {
//     if (err) throw err;
//     console.log("Completed!");
// });