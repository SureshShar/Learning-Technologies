/**
 * 
  Now that you've helpfully marked up their design documents, it occurs to you that triangles are specified in groups of three vertically. Each set of three numbers in a column specifies a triangle. The rows are unrelated.

  For example, given the following specification, numbers with the same hundreds digit would be part of the same triangle:
  101 301 501
  102 302 502
  103 303 503

  201 401 601
  202 402 602
  203 403 603
  In your puzzle input, and instead reading by columns, how many of the listed triangles are possible?
*/

const fs = require('fs');

// File path
const filePath = './triangleData.txt';

// Function return possible triangle 
function nextPossibleCorrectTriangles(sides){
    const triangleSides = [];
    const correctSideTriangles = []

    sides.forEach((side, index) => {
        if (index%3 !== 0) return;

        const sideOne = Number(side);
        const sideTwo = Number(sides[index + 1]);
        const sideThree = Number(sides[[index + 2]]);

        const sumOne = sideTwo + sideOne;
        const sumTwo = sideTwo + sideThree;
        const sumThree = sideOne + sideThree;

        if (sumOne > sideThree && sumTwo > sideOne && sumThree > sideTwo) triangleSides.push([sideOne, sideTwo, sideThree])
    });

    let firstDigitHelper = null;
    triangleSides.forEach((sides, index) => {
        let firstSide = sides[0];
        const firstDigit = (firstSide - firstSide%100)/100
        
        if(firstDigitHelper ===firstDigit) return;

        if (firstSide < 100 || firstDigit) {
            firstDigitHelper = firstDigit;
            correctSideTriangles.push(sides);
        }
    })

    return correctSideTriangles.length;
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
    console.log(nextPossibleCorrectTriangles(triangleSidesArray));  
});

// Output: 831