/*filter() returns an array of elements which meets the condition */


//filtering() got array and call back function as parameters
function filtering(elements,cb){
    //creating empty array to store the elements which meets condition
    let arr=[];

    for(let i=0;i<elements.length;i++){

        //calling callback fun and sending  element as argument which returns true or false
        //if the element passes the condition retuns true or else false
       let passed=cb(elements[i]);

       //if the retuning boolean is true the we will push element into the array
       if(passed==true){
           arr.push(elements[i]);
       }
    }
    //and return the array from this function
    return arr;
}

//exporting filtering function to filterTest.js
module.exports=filtering;