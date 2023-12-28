
//importing fun from filter.js and storing in var filter_fn
let filter_fn=require('./filter');

//given array of numbers
let items=[2,,4,5,7,6];

//call back fun which returns true if the element meets condition or else false
function cb(element){
    return element%2==0;
}

//created an variable for storing which returns by filter_fn
let resultedArray=filter_fn(items,cb);

//printing the the resulted array
console.log(resultedArray);