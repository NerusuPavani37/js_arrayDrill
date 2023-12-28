/*reduce() returns the single element after performing the given condition
here i am performing sum of the array */


function reducing(elements,cb){
    //here Tsum works as accumulater in reduce(),intialized with 0
    let Tsum=0;
    for(let i=0;i<elements.length;i++){
        //here elements[i] acts as current the cb() retunrs sum of accumulater and current
        //and updating Tsum(accu) for every iteration
       Tsum=cb(elements[i],Tsum);
    }

    //returning the totalSum
    return Tsum;
}

//exporting reducing funtion to reducetest.js file
module.exports=reducing;