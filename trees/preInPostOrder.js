class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preorderTraversal(root){
    if(root == null) return; //base case
    //root, left , right
    console.log(root.data);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

function postorderTraversal(root){
    if(root == null) return; //base case
    //left , right, root
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    console.log(root.data);
}

function inorderTraversal(root){
    if(root == null) return; //base case
    // left ,root, right
    inorderTraversal(root.left);
    console.log(root.data);
    inorderTraversal(root.right);
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.right = new Node(19);
// root.right.left = new Node(24);
// root.left.left.left = new Node(30);
preorderTraversal(root);
console.log("----------------");
postorderTraversal(root);
console.log("--------------------");
inorderTraversal(root);
//console.log(root);
console.log("---------");
//heightOfTree(root);

function heightOfTree(root){
    if(root == null){
        return -1;
    }

    let leftSubtreeHeight = heightOfTree(root.left); //-1 //0
    let rightSubtreeHeight = heightOfTree(root.right);//-1 //0

    let currHeight = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    return currHeight; //0
}
let height = heightOfTree(root);
console.log(height);


function depthOfTree(root){
    if(root == null){
        return 0;
    }

    let leftSubtreeHeight = depthOfTree(root.left);
    let rightSubtreeHeight = depthOfTree(root.right);

    let currHeight = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    return currHeight; 
}
console.log("************")
let depth = depthOfTree(root);
console.log(depth);
