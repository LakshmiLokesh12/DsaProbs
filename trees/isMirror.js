
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