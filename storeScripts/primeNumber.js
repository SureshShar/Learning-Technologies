// code for prime number check
const isPrimeNumber = function (n) {
    if(n === 3 || n === 5)  return "It is Prime number";
    if(n%2 === 0)return "It is Not Prime number";
    for(i=3; i < n/2;i=i+2) {
        if(i%3 === 0 || i%5 === 0) continue;
        if(n%i === 0) return "It is Not Prime number";
    };
    return "It is Prime number";
} 

console.log('hello world');
console.log(isPrimeNumber(67878685485348979459875));