let num;
let reversed='';
let result; 

function reverseNum(n){ 
    
  for(let i =0; i<n; i++){  
    num = n%10; // get the last digit e.g 352 %10 = 2
    reversed+= num
    result = parseInt(n / 10); // remove last digit e.g. parseInt(352/10) = 35
    reverseNum(result);
    if(result ===0){ 
        break;
    }  
  } 
 
 // return reversed;
 console.log(reversed);
}
reverseNum(1234);