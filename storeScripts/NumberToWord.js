const helper = { 0: "", 00: "", 1: "One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine", 10:"Ten", 11:"Eleven", 12:"Twelve", 13:"Thirteen",
14:"Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Nineteen", 20: "Twenty", 30:"Thirty", 40: "Forty", 50: "Fifty", 60: "Sixty", 70: "Seventy",
80:"Eighty", 90:"Ninety", 100: "Hundred", 1000: "Thousand", 1000000: "Million", 1000000000: "Billion", 1000000000000: "Trillion" }; 

//Store number in group of 3 - 3 digit 
let BreakedNumber = [];

// Break number into three tree digit group
const breakIntoDigits = function(x){
    if (x <= 1000) return BreakedNumber.push(x);
    const split = x%1000;
    const newNum = (x-split)/1000;
    BreakedNumber.push(split);
    return breakIntoDigits(newNum);
}


//  Function to Convert each three digit number to word
const EachThreeDigitToWord = (x) => {
    if(helper[x]) return helper[x];
    const a = x%10;
    const b = ((x%100)-a);
    const c = (x -(b+a))/100
    if( c === 0) return `${helper[b]} ${helper[a]}`
    return `${helper[c]} Hundred ${helper[b]} ${helper[a]}`
};

const secondHelper= { 0:"", 1: " Thousand ", 2: " Million ", 3: " Billion ", 4: " Trillion " };

const NumberToWords = function(num){
    if(typeof num === "string") num = Number(num);
    if(num === 0 ) return "Please enter number greater then zero";
    if(helper[num]) return helper[num];
    breakIntoDigits(num);

    if(BreakedNumber.length > 4) return "Number is too big";
    let string = "";

    for (i = 0; i < BreakedNumber.length; i++ ){
        if(BreakedNumber[i]){
         string = (EachThreeDigitToWord(BreakedNumber[i])+ secondHelper[i]) + string;
        }   
    }

    BreakedNumber = [];
    return string;
}

console.log(NumberToWords(55676576687));

// Try this command
// node NumberToWord.js


// // code for prime number check
// const isPrimeNumber = function (n) {
//     if(n === 3 || n === 5)  return "It is Prime number";
//     if(n%2 === 0)return "It is Not Prime number";
//     for(i=3; i < n/2;i=i+2) {
//         if(i%3 === 0 || i%5 === 0) continue;
//         if(n%i === 0) return "It is Not Prime number";
//     };
//     return "It is Prime number";
// } 

// console.log('hello world');
// console.log(isPrimeNumber(67878685485348979459875));

