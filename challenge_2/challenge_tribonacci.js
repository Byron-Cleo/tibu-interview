function tribonacci(signature, n) {
  //Insert your code here


  //1.Copy all the elements in the signature array in newSignature array.
  //newSignature array will be the final array with the previous last 3 incrementing elements
  let newSignature = [...signature];
  // console.log('YYYYYYYY', newSignature);


  //2. If n is not 0(zero), then;
  if (n > 0 && n > newSignature.length) {
    //2a. Loop the input array while inserting the sum of last 3 elements
    //3. The condition in the for loop returns the remaining number of loops the for loop should execute with each loop
    //giving a result of the sum of the last 3 elements.
    for (let i = 0; i < n - signature.length; i++) {
      //4. Add the sum of last 3 elements and insert at the end of the newSequensce array
      newSignature.push(
        newSignature[newSignature.length - 1] +
          newSignature[newSignature.length - 2] +
          newSignature[newSignature.length - 3]
      );
    }
    return newSignature;
    //5. If n is not 0(zero
  } else if (n > 0 && n < newSignature.length) {
    const firstElement = newSignature[0]
    const secondElement = newSignature[1]
    newSignature = [firstElement, secondElement]
    return newSignature
    // console.log('This is the block of code');
  } else if (n == 0) {
    return 0;
  }
}
// console.log(tribonacci([0, 0, 1], 9))
// console.log(tribonacci([1, 1, 1], 5))
// console.log(tribonacci([1, 2, 3], 2));
// console.log(tribonacci([1, 2, 3], 0));

module.exports = tribonacci;
