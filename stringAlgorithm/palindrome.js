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
ispalindrome("abbac");