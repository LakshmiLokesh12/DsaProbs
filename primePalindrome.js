function prime(num){
    let check1=1;
    for (k=2 ;k<num; k++){
      if (num%k==0){
        check1=0
      }
    }
    return check1;
  }
  function palindrome(num){
    let number=num;
    let reverse=0;
    while (num>0){
      reverse= (reverse*10) + num%10;
      num= parseInt(num/10);
    }
    if (reverse==number){
      return 1
    } else {
      return 0
    }
  }
  for (i=1; i<=50 ; i++){
    if (prime(i)==1 && palindrome(i)==1){
      
      console.log(i);
    }

  }
palindrome(505);
