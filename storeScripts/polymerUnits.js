function possibleMinLength(sequence) {
    const deletePosition = {};
    let max = 0;
    let alpha = "";

    for (let i = 0; i < sequence.length; i++) {
        const alphbate = sequence[i].toLowerCase();
        
        if(!deletePosition[alphbate]) {
            deletePosition[alphbate] = 1;
            continue;
        }
        deletePosition[alphbate] += 1;
        //logic to reset varible max and alpha
        if (deletePosition[alphbate] > max) {
            max = deletePosition[alphbate];
            alpha = alphbate;
        }    
    }

    const lowerCaseRemoved = sequence.replaceAll(alpha,"");

    // Here upper case are removed
    return lowerCaseRemoved.replaceAll(alpha.toUpperCase(), "")

}

const shortestPolymer = possibleMinLength("dabAcCaCBAcCcaDaaa");
console.log(shortestPolymer)

// function polymerReducer(sequence) {
//     var deletePosition = [];

//     for (let i = 1; i < sequence.length; i++) {
//         if (sequence[i] !== sequence[i - 1] && (sequence[i] === sequence[i - 1].toLowerCase() || sequence[i].toLowerCase() === sequence[i - 1])) {
//             deletePosition.push(i-1, i);
//             i++
//         }
//     }

//     let string = "sequence";
//     deletePosition.forEach(val => {
//         string = string + `.replace('${sequence[val]}', "")`;
//     }); 

//     return eval(string)
// }

