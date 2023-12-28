//creating nested array
let arr=[1, [2], [[3]], [[[4]]]];//--->1,2,3,4,5,6,7,8,9

//creating empty array to store elements
let flattenArray=[];

//function which recursively flattens the array
function flatten(arr){
    for(let i=0;i<arr.length;i++){

        //checking if element is in an another array or not if yes then i am calling flatten function
        if(Array.isArray(arr[i])){
            flatten(arr[i]);
        }
        else{
            //if not i am pushing the elements to the array of flattening
            flattenArray.push(arr[i]);
        }
    }
}
//calling flatten function and sending given array as argument
flatten(arr);

//finally printing the flattend array
console.log(flattenArray);
