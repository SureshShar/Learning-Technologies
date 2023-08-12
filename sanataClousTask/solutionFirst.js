const fs = require('fs');

function coordinatesToString(x, y) {
  return `${x},${y}`;
}

function numberOfHousesWithPresents(directions) {
    let x = 0;
    let y = 0;
    const housesWithGift= new Set();

    // Loop over direction from the input
    for (const direction of directions) {
      switch (direction) {
        case '^':
          y++;
          break;
        case 'v':
          y--;
          break;
        case '>':
          x++;
          break;
        case '<':
          x--;
          break;
      }

      housesWithGift.add(coordinatesToString(x, y));
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
  
  // console.log('File contents:', inputDirections);
  console.log(numberOfHousesWithPresents(inputDirections));  
});

// Output: 2565
  