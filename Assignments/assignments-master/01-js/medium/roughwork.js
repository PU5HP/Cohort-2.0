function myFunction() {
    // Your code here
    let a =0;
    for (let i = 0; i < 100000000000; i++) {
      // Some computation or task
      a++;
    }
  }
  
  // Measure the time taken by myFunction
  const startTime = performance.now();
  myFunction();
  const endTime = performance.now();
  
  // Calculate the elapsed time
  const elapsedTime = endTime - startTime;
  
  console.log(`myFunction took ${elapsedTime} milliseconds to complete.`);