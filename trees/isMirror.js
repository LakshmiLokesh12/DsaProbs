
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.right = new Node(19);
function isMirror(root){
    return isMirrorHelper(root.left, root.right);
}

function isMirrorHelper(x, y){
    if(x == null && y== null) return true; //both are null
    if(x == null || y== null) return false; //any one of them is null
    return (x.data == y.data) && isMirrorHelper(x.left, y.right) && isMirrorHelper(x.right, y.left);//both are not null
}

function printAllNodesAtDistanceK(root, k, x){

    if(root == null){
        return -1;
    }

    if(root.data == x){
         printAllDescendentNodesAtDistanceK(root,k);
         return 0;
    }

    let distanceLeft =  printAllNodesAtDistanceK(root.left, k, x);

    if(distanceLeft != -1){ //node x exists on left
        if(distanceLeft + 1 == k){ //root's distance from x
            console.log(root.data);
        }
        else{
            printAllDescendentNodesAtDistanceK(root.right, k-distanceLeft-2);
        }
    }

    let distanceRight =  printAllNodesAtDistanceK(root.right, k, x);
    if(distanceRight != -1){ //node x exists on right
        if(distanceRight + 1 == k){//root's distance from x
            console.log(root.data);
        }
        else{
            printAllDescendentNodesAtDistanceK(root.left, k-distanceRight-2);
        }
    }

}

function printAllDescendentNodesAtDistanceK(root, k){
    if(root == null || k<0){
        return;
    }
    if(k == 0){
        console.log(root.data);
    }

    printAllDescendentNodesAtDistanceK(root.left, k-1);
    printAllDescendentNodesAtDistanceK(root.right, k-1);

}


