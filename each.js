/*forEach function iterates every elements and below function works as it*/

//function which implements foreach loop function
function each(elements,cb){
    //iterating the elements array
    for(let i=0;i<elements.length;i++){
        //calling callback function sending element and index as arguments which prints element and index
        cb(elements[i],i);
    }
}
//exporting each function to eachTest.js for printing the array elements along with their index
module.exports=each;





