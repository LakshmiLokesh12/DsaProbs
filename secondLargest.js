function printsecondlargest() {
    let i;
    if (arr.length < 2) {
        console.log(" Invalid Input ");
        return;
        }
     arr.sort();
     for(i=arr.length-2;i>0;i--){
        if (arr[i] != arr[arr.length- 1]) 
            console.log("The second largest element is " + arr[i]);
            return;
         }
     console.log("There is no second largest element");
    
 }
 let arr = [3,5,2,9,7];
 printsecondlargest();