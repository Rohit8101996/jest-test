//Testing with Jest on Javasript 


function sum(num1, num2) {
    return num1 + num2;
}

console.log( 3===3);
console.log ("" === "");
//Below line will returns false since js compares reference for object and arrays
// while above two to be true 
//console.log({} === {});
//console.log([] === []);

//Also for truthy and falsey values
//below is truthy
if(true) {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}
//below is falsey
if(false) {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}
//below is truthy 
if("dfdsfds") {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}

//below is falsey
if("") {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}

//below is falsey
if(0) {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}

//below is truthy
if(1) {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}

//below evaluates to falsey
if(null) {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}

//below evaluates to falsey
if(undefined) {
    console.log("this is truthy");
}else {
    console.log("this is falsey")
}
module.exports = sum;