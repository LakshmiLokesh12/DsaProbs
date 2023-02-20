class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


function printLevelK(root, currLevel, levelToPrint){
    if(root == null) return; //base case
    //root, left , right
    if(currLevel == levelToPrint){
        console.log(root.data);
        return;
    }
    printLevelK(root.left, currLevel+1, levelToPrint);
    printLevelK(root.right, currLevel+1, levelToPrint);
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.right = new Node(19);
printLevelK(root, 0, 2);

function heightOfTree(root){
    if(root == null){
        return -1;
    }

    let leftSubtreeHeight = heightOfTree(root.left); //-1 //0
    let rightSubtreeHeight = heightOfTree(root.right);//-1 //0

    let currHeight = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    return currHeight; //0
}

function printAllLevels(root){ //n + (n*height)=> O(n*height)
    let lastLevel = heightOfTree(root);  //O(n)
    for(let x = 0; x <= lastLevel; x++){ //O(n*height)
        console.log("-------level : ",x," ------");
        printLevelK(root, 0, x); //O(n)
        console.log("-------------");
    }
}
printAllLevels(root);

function isValidBST(root){
    return isBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

//minimum = maximum of left subtree, maximum => minimum of right subtree
function isBST(node, minimum, maximum){
    if(node == null){ //base case
        return true;
    }

    if(minimum > node.data || node.data > maximum){
        return false;
    }

    let leftSubtreeIsBST = isBST(node.left, minimum, node.data);
    let rightSubtreeIsBST = isBST(node.right, node.data, maximum);

    return leftSubtreeIsBST && rightSubtreeIsBST;
}
console.log("********")
console.log(isValidBST(root));