
/* Consider the following scenario. 
   You have an asynchronous operation, which takes some time to complete. 
   This operation could be file system access, database access, network access etc.
   The operation is started and you get the result after a while. 

   Here below the async operation is represented by a simple 1000ms timeout. 
   The operation is named timeout_1 in the console printouts. The printout sequence will
   be as follows:
    Starting timeout_1
    timeout_1 started
    timeout_1 finished
   */

console.log("Starting timeout_1");
setTimeout(() => {
  console.log("timeout_1 finished");
}, 1000);
console.log("timeout_1 started");


/* Next consider the scenario that you would like to execute some operation 
   once the async operation is completed. Also consider that the async operation is
   something which you would like to do many times, but the operation which works 
   with the results is different. 
   You could solve this with a function for example and provide the information / function
   of what to do when the async operation finishes.
   */

function asyncFunction(callback)
{
  console.log("Starting timeout_2");
  setTimeout(() => {
    console.log("timeout_2 finished");
    // Now execute the callback function.
    // Depending on what the async operation was (db operation for example) we can provide the results as a parameter.
    // Here we do not have any data to pass, instead we call just the callback directly.
    callback()
  }, 1000);
  console.log("timeout_2 started");  
}

console.log('Starting asyncFunction call');
asyncFunction(() => {
  console.log('asyncFunction has successfully called the callback');
});
console.log('Called asyncFunction');

/* A promise is alternative to the callback scenario above.
   With a promise we do not have to pass a callback directly to the called function,
   instead we have to use the Promise object returned to us to deal with 
   results of the async operation. The Promise promises that a result, may it be 
   succeful or failed, is provided.
   */


function asyncPromiseFunction()
{
  let promise = new Promise((resolve, reject) => {
    console.log("Starting timeout_3");
    setTimeout(() => {
      console.log("timeout_3 finished");
      resolve(); // You can pass data to the resolve if you want, it will be available in the 'then' callback.
    }, 1000);
    console.log("timeout_3 started");
  });
  
  return promise;
}



console.log("Starting asyncPromiseFunction");
asyncPromiseFunction().then(() => {
  console.log("This will be called when asyncPromiseFunction is finished");
  // Now we could deal with whatever data our promise gives to us. To access the data the 
  // callback given to the 'then' function needs to provide a parameter for that.
});
console.log("timeoutDemo function completed");

