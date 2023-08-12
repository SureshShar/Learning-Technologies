const fs = require('fs');

function coordinatesToString(x, y) {
    return `${x},${y}`;
}

function numberOfHousesWithPresents(directions) {
    let santaX = 0;
    let santaY = 0;
    let robotX = 0;
    let robotY = 0;
    let isSantaClous = true;
    const housesWithGift = new Set();
  
    // Loop over direction from the input
    for (const direction of directions) {
      const x = isSantaClous ? santaX : robotX;
      const y = isSantaClous ? santaY : robotY;
  
      switch (direction) {
        case '^':
          isSantaClous ? santaY++ : robotY++;
          break;
        case 'v':
          isSantaClous ? santaY-- : robotY--;
          break;
        case '>':
          isSantaClous ? santaX++ : robotX++;
          break;
        case '<':
          isSantaClous ? santaX-- : robotX--;
          break;
      }
  
      housesWithGift.add(coordinatesToString(x, y));
  
      // Switch to the next person
      isSantaClous = !isSantaClous;
    }
  
    return housesWithGift.size;
}
 
// File path
const filePath = './houseMap.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, inputDirections) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
//   console.log('File contents:', inputDirections);
  console.log(numberOfHousesWithPresents(inputDirections));  // Output: 2638
});
  