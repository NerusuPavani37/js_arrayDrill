//importing function from map.js file 
var map_fn=require('./map');


const items =[1,2,3,4,5];

//console.log(items);

//call bacak fun which recives element as parameter and returns the transformed element
function cb(element){
    return element *2;
}

//calling fun which is in map.js and storing what it returns i.e transformed array
let res=map_fn(items,cb);

//printing the transformed array
console.log(res);