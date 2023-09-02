/**
 * You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny Recruiting Document the Elves intercepted start here, and nobody had time to work them out further.
 * The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.
 * There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?
 * 
 * For example:
 * 1. Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
 * 2. R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
 * 3. R5, L5, R5, R3 leaves you 12 blocks away.
 * 
 * How many blocks away is Easter Bunny HQ?
 */

const fs = require('fs');

function numberOfBlocksWithEsterBunny(directions) {
    let x = 0;
    let y = 0;
    let dir = "N";
    const allDirections = [];

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

    //   allDirections.push(`${x},${y},${dir}`);
    }

    return Math.abs(x) + Math.abs(y);
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

// Output: 279;