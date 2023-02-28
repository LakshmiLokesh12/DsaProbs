



function buildTree(input, n){
    let arr = [];
    let parentIndex=0;
    arr[parentIndex] = input[0];
    for(let i=1; i<n; i=i+2){
        let left= 2*parentIndex +1;
        let right= 2*parentIndex +2;
        arr[left] = input[i];
        arr[right] = input[i+1];
        parentIndex++;
    }
    return arr;
}

let input = [10, 20, 30, 40, 50, null, 60, null, null, null, null, null, null, null, null];

console.log(buildTree(input, 15));