/**
 * Then, you notice the instructions continue on the back of the Recruiting Document. Easter Bunny HQ is actually at the first location you visit twice.
 * For example, if your instructions are R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.
 * 
 * How many blocks away is the first location you visit twice?
 */

const fs = require('fs');

function numberOfBlocksWithEsterBunny(directions) {
    let x = 0;
    let y = 0;
    let dir = "N";
    // const allDirections = [];
    // const allUniqueDirections = new Set();

    // Loop over direction from the input
    for (const direction of directions) {
        const block = Number(direction.slice(1))

        if (direction[0] === "R") {
            // Left hand bunny direction handler 
            if(dir === "N"){
                x += block;
                dir = "E";
            } else if (dir === "S") {
                x -= block;
                dir = "W";
            } else if (dir === "E") {
                y -= block;
                dir = "S";
            } else if (dir === "W") {
                y += block
                dir = "N";
            }
        // Left hand bunny direction handler 
        } else if (direction[0] === "L") {
            if(dir === "N"){
                x -= block;
                dir = "W";
            } else if (dir === "S") {
                x += block
                dir = "E";
            } else if (dir === "E") {
                y += block
                dir = "N";
            } else if (dir === "W") {
                y -= block
                dir = "S";
            }
        }

    //   allDirections.push(`${x},${y}-${dir}`);
    //   allUniqueDirections.add(`${x},${y}-${dir}`)
    }

   return `${x},${y}-${dir}`;
}
  
// File path
const filePath = './directions.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, inputDirections) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  // console.log('File contents:', inputDirections.split(", "));
  console.log(numberOfBlocksWithEsterBunny(inputDirections.split(", ")));  
});

// Output: ;