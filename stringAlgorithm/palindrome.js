function ispalindrome(s){
    let l = s.length;
    //let j;
     
    for(let i = 0, j = l - 1; i <= j; i++, j--)
    {
        if(s[i] != s[j])
            return false;
           // console.log("false");
    }
    return true;
   // console.log("true");
}
//ispalindrome("abbac");



let s = "ABACDABA";
let cnt = 0;
let flag = 0;
while (s.length > 0){   
    if (ispalindrome(s)) {
        flag = 1;
        break;
    }
    else {
        cnt++;
        s = s.substring(0, s.length - 1);
        }
}
if (flag)
console.log(cnt);

  
   function canConverttoPalindrome(s) {
      let i = 0, j = s.length- 1;
      
      while (i < j && s.charAt(i) == s.charAt(j)) {
        i++; j--;
      }
      
      return i >= j ||
             isPalindrome(s.charAt(j) + s.substring(i, j + 1)) ||
             isPalindrome(s.substring(i, j + 1) + s.charAt(i));
             console.log(s);
    }
    function isPalindrome(s){
      let i = 0, j = s.length- 1;
      
      while (i < j && s.charAt(i) == s.charAt(j)) { 
        i++; j--; 
        
      }
      console.log(s);
      return i >= j;
    }
    
    //let s = "aacecaaa";
  
    canConverttoPalindrome(s);