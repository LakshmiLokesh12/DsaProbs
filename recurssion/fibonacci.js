// var fibonacci_series = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

//  console.log(fibonacci_series(8));
// fibonacci_series(5);


  function fib(n){
    if(n == 0 || n == 1){ //base case
        return n;
    }
    let result = fib(n-1) + fib(n-2);
    return result;
}

console.log(fib(6));
 