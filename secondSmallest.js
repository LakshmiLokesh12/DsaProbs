function secondsmallest(){
     arr.sort();
    for (let i= 0; i<= arr.length ; i++){
        if (arr[i]>arr[0]) {
            console.log('Second smallest number: ' ,arr[i]);  
               
        return;
        }
    }
}  
   
let arr = [9,2,5,1,7]
secondsmallest();
