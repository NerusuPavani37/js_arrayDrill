//importing the funtion from reduce.js
var reduce_fn=require('./reduce');

const items=[1,2,3,4,5];

//the cb() returns the sum of element and sumTill which are parametes of cb()
function cb(element , sumTill){
    return element+sumTill;
}

//storing what fun returns i.e sum of array in totalSum 
let totalSum=reduce_fn(items,cb);

//printing totalsum of array elements
console.log(totalSum);