//importing the fun from find.js and storing in find_fn
let find_fn=require('./find');

//array of numbers
let items=[1,2,3,4,6];

//call back fun which checks wheather the element meets our conditon if yes return the number
function cb(element){
    return element > 2;
}

//calling fun which is in find.js and giving arguments as array and call back fun
let numFound=find_fn(items,cb);

//printing what function returns i.e number or 'undefined'
console.log(numFound);