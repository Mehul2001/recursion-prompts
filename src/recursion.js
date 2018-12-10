/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	// Strategy : 
	/*
     Check if n is negative return null,
     else check if n = 1 or n = 0 return 1
	 Base Case = if n === 1  then return 1
	 Recursive Case = n > 1 return n and factorial of n-1

	*/
	if(n < 0){
	 return null;
	}else if(n === 1 || n === 0){ // if n = 1 
		return 1; // returns 1
	}
	
	return n * factorial(n-1);
	
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  /*
  Base case : if array length = 1 output array[0]
  Recursive Case : array[0] + sum(array.slice(1))
  input: array;
  ouput : number (sum);
  */	
  if(array.length === 0){
  	return 0;
  }else if(array.length===1){
    return array[0];
  }
  return array[0] + sum(array.slice(1)); 
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // initialize sum at 0
	var sum = 0;
	 // loop through array 
	 for(var i =0; i< array.length; i++){
	   var curVal = array[i];
	  // check if element is numer if true add to sum
	  if(typeof(curVal) === 'number'){
	    sum+= curVal;
	  }else{
	  // esle sum += arraySum(array)
	     sum += arraySum(curVal);
	  }
	  //returning the sum
	 }
  return sum;

};

// 4. Check if a number is even.
var isEven = function(n) {
	// input : number (takes in postive and negative numbers)
	// output true/false
	/*
	Strategy: 
	Check if n is less than 0 than use Math.abs to convert into a positive number.
	if n = 0 return true
	if n = 1 return false
	else reduce n by 2 and callback the function.
	*/
  if(n < 0){
   n = Math.abs(n);
  }
    if(n === 0){
    return true;
    }
     if (n === 1){
        return false;
    } else{
    	n = n - 2;
        return isEven(n);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	// input : number (positive or negative or 0)
	// op : sum of numbers below n
	/*
	Strategy: check if value is a negative or positive
	- if negative then add +1 to the value (that helps neg number to decrease)
		- check if n has reached the value of 0 || 1
		- else return n + sumBelow(n)

	- else if value is positive
		- subtract 1 from value
		- check if n has reached the value of 0 || -1 
		-else return n + sumBelow(n)

	Base Case : if n = 1 return 1
	Assign n = n -1
	return n + sumBelow(n)
	
	//
	*/
	// check if its a neg number
   if(n < 0){
     n = n+1; //-3
    if(n === 0 || n === 1){
      return 0;
    }
    return n + sumBelow(n)
  }else{
    n = n-1;
    if(n === 0 || n === -1){
      return 0;
    }
    return n + sumBelow(n)
  }

	
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	/* 
	inputs : two arguments;
	ouput : an array;
	Base Case : if x === y return [];
	Recursive case : 
	if x < y,
	- check if x = y -1 return array
	- x = x + 1 and push x into array
	- return array and range(x, y)
	else if x > y
	 - check if x = y + 1 return array
	 - x = x -1 and push x into array
	 - return aray and range(x, y) 
	*/
	

  var array = [];
  if(x===y){
	return array;
  } 
  if ( x < y){ //range(2,9)

  	if(x===(y-1)){
      return array;
    } 
    x = x+1;
    array.push(x)
      
    return array.concat(range(x,y));
  }else { //range(9,2)

  	if(x===(y+1)){
      return array;
    } 
    x = x-1;
    array.push(x)
      
    return array.concat(range(x,y));
  };
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
/*
   ip: base and exp (numbers)
   op: result(number)
   Strategy:
   Declare a result variable as 1.
   if exp = 0 return 1
   Base case: if exp = 1 return result = base.
   Recursive case:
   if exp < 0
   - Divide the result by base and perform / (exponent(base,exp+1))
   - Increase the value of exp in recursion callback.
   if exp > 1
  - Multiply the result by base and perform * (exponent(base, exp - 1))
  result = result * base * (exponent(base, exp - 1))
  - Decrease the value of exp in recursion callback. * is not a valid command. In Slack, all messages that start with the "/" character are interpreted as commands.

  If you are trying to send a message and not run a command, try preceding the "/" with an empty space.
  */
  var result = 1;
  if(exp === 0){
      return 1;
  }
  if(exp === 1){
  return result *= base;
  }
  if(exp < 1){
        return result /= base / (exponent(base,exp+1));
  }
  return result *= base * (exponent(base,exp-1)); 
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  /*
  ip: number
  op: true or false
  Strategy:
  Base Case if n = 1 return true
  if n < 1 return false
  return powerOfTwo(n/2);
  */
  if(n === 1) {
       return true;
   }
   if(n < 1){
       return false;
   }
   return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  /*
  ip: string
  op: string
  Strategy
  - Base case: If the length of string is equal to 1 than return that string
  - Recursion Case: recursion + string[0]

  
  */
  if(string.length === 1){
      return string;
  }
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  /*
  ip: string
  op: boolean
  Strategy:
  - Base Case : if the length of string is 1 or 0, return true
  - Recursive case - Compare the first and last element of string, if they are equal
                     then call palindrome(string.slice(1, -1))
                     Compare till you reach the length of string to 1 or 0.

  */
  string = string.split(' ').join('').toLowerCase();
  var length = string.length;
  if(length === 0 || length === 1){
    return true;
  }
  if(string[0] === string[string.length-1]){
    return palindrome(string.slice(1, -1));
  }
   return false;
};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
