//importing the each funtion from each.js and storing in variable  import_fn
var import_fn=require('./each');

//array of numbers
const items=[1,2,3,4,5];

//call back function which recives element of array and its index
function cb(element,index){
    //printing the elements and their indexes
    console.log(`Element at index ${index} is : ${element}`)
}

//calling function which is in each.js and sending array and call back function as arguments
let resul=import_fn(items,cb);