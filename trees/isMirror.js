
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isMirror(root){
    return isMirrorHelper(root.left, root.right);
}

function isMirrorHelper(x, y){
    if(x == null && y== null) return true; //both are null
    if(x == null || y== null) return false; //any one of them is null
    return (x.data == y.data) && isMirrorHelper(x.left, y.right) && isMirrorHelper(x.right, y.left);//both are not null
}