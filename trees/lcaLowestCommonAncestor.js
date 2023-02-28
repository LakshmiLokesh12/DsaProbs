
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


function lowestCommonAncestor(root, node1, node2){ //LCA
    if(root == null){ //base case - 1
        return null;
    }

    if(root.data== node1.data || root.data == node2.data){//base case - 2
        return root;
    }

    //self work

    let leftLCA = lowestCommonAncestor(root.left, node1, node2);
    let rightLCA = lowestCommonAncestor(root.right, node1, node2);

    //current node is LCA
    if(leftLCA != null && rightLCA != null){
        return root;
    }

    return (leftLCA!=null)? leftLCA : rightLCA;
}



// let root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(4);
// root.left.right = new Node(6);
// root.right.right = new Node(19);

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(4);
root.left.left.left = new Node(14);
root.left.right = new Node(6);
root.left.right.right = new Node(16);
root.right.right = new Node(19);

let lca = lowestCommonAncestor(root, root.left.left.left, root.left );
console.log(lca.data);