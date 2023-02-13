class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insertInBST(root, data){
    if(root == null){ //base case
        root = new Node(data);
        return root;
    }

    if(data < root.data){
        root.left = insertInBST(root.left, data);
    }
    else{
        root.right = insertInBST(root.right, data);
    }
    return root;
}

// function minValue(root){
//     if(root == null){
//         return NaN;
//     }
//     while(root.left != null){
//         root = root.left;
//     }
//     return root.data;
// }
