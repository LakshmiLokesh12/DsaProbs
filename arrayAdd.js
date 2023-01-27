/*Array Addition
Have the function ArrayAddition(arr) take
 the array of numbers stored in arr and 
 return the string true if any combination
  of numbers in the array 
  (excluding the largest number) can be added 
  up to equal the largest number in the 
  array, otherwise return the string false.
   For example: if arr contains [4, 6, 23, 10, 1, 3]
    the output should return true because 4 + 6 + 10 + 3 = 23. 
    The array will not be empty, will not contain all the 
    same elements, and may contain negative numbers.
*/
    function ArrayAdditionI(arr) { 

  arr = arr.sort(function(a,b){return a-b;});
  var largestval = arr.pop();
  var sum = arr.reduce(function(x,y){return x +y;});

  for (var i = arr.length-1; i>=0; i--){
    if (sum-arr[i]==largestval){
      return true;
  }
    if (largestval-sum == 0){
      return true;
    }
  }
  return false;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline())