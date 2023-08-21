/**
 * 
Now that you can think clearly, you move deeper into the labyrinth of hallways and office furniture that makes up this part of Easter Bunny HQ. This must be a graphic design department; the walls are covered in specifications for triangles.

Or are they?

The design document gives the side lengths of each triangle it describes, but... 5 10 25? Some of these aren't triangles. You can't help but mark the impossible ones.

In a valid triangle, the sum of any two sides must be larger than the remaining side. For example, the "triangle" given above is impossible, because 5 + 10 is not larger than 25.

In your puzzle input, how many of the listed triangles are possible?
*/

const fs = require('fs');

// File path
const filePath = './triangleData.txt';

function possibleTriangles(sides){
    let noOfTriangles = 0;

    sides.forEach((side, index) => {
        if (index%3 !== 0) return;

        const sideOne = Number(side);
        const sideTwo = Number(sides[index + 1]);
        const sideThree = Number(sides[[index + 2]]);

        const sumOne = sideTwo + sideOne;
        const sumTwo = sideTwo + sideThree;
        const sumThree = sideOne + sideThree;

        if (sumOne > sideThree && sumTwo > sideOne && sumThree > sideTwo) noOfTriangles += 1;
    });

    return noOfTriangles;
}

// Read the file
fs.readFile(filePath, 'utf8', (err, triangleSides) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  const triangleSidesArray = triangleSides.trim().split(" ").map(value => {
    const valueTrimmed = value.trim();
    const side = valueTrimmed.includes("\n") ? valueTrimmed.replace("\n", "").trim() : valueTrimmed
    return side;
  }).filter((val => !!val))
  
//   console.log('File contents:', triangleSidesArray);
    console.log(possibleTriangles(triangleSidesArray));  
});

// Output: 982