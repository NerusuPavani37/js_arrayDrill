/*map() transforms the array and returns the array */


function mapping(elements,cb){
    //creating an empty array to store transformed elements
    let arr=[];

    for(let i=0;i<elements.length;i++){
        //calling cb() and sending element as argument and storing what it retus in transformed_ele
        let transformed_ele= cb(elements[i]);
        //pushing that transformed element in the array
        arr.push(transformed_ele);
    }
    //returning the transformed array 
    return arr;
}

//exporting the function of mapping to mapTest.js file
module.exports=mapping;
