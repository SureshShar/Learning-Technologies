Number.prototype.multiply = function(val){
    console.log("This keyword -->", (this));
    return val = (this)*val;
};
  
const multi = (60).multiply(6);
console.log(multi);