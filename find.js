/*find() retuns the 1st element which meets the conditon */

//function which returns the number if present or undefined as mentioned
function toFind(elements,cb){

  //initially creating variable num (and assinged 0) to store the number which meets condtions
    let num=0;
    
     //iterating
      for(let i=0;i<elements.length;i++){
        //calling cb() which takes element as argument and checks if element meets the conditions
          if(cb(elements[i])){

            //if element meets condtions will assign that element to our num
            num=elements[i];

            //and then we will break it bcz we need to return 1st element which meets condition
            //soon after finding that element i will break the loop
            break;
          }
      }
      //i check if num is 0 if it is there is no number which meets our condtion so returns undefined
      if(num==0){
        return 'undefined';
      }
      else{
        return num; //if num!=0 the we return the num itself
      }
}

//exporting the funtion to findTest.js file
module.exports=toFind;