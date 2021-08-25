Create a function implementing the tribonacci sequence. This is a variation on the Fibonacci sequence, in which every next number is found by adding up the two preceding numbers. The tribonacci sequence is similar, but instead of starting with two predetermined numbers, the sequence starts with three predetermined numbers and each subsequent number is the sum of the three preceding numbers.

The function has two parameters:

A signature array of 3 elements containing the predetermined starting numbers of the tribonacci sequence.
A non-negative integer of the first n elements that the functions should return.

If n == 0, return 0.

Examples:

```
tribonacci([0, 0, 1], 9) // should == [0, 0, 1, 1, 2, 4, 7, 13, 24]
tribonacci([1, 1, 1], 5) // should == [1, 1, 1, 3, 5]
tribonacci([1, 2, 3], 2) // should == [1, 2]

export function tribonacci( signature, n ) {

     //Insert your code here

}
```
