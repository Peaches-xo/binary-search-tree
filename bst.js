//binary search tree

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }    
}

class Tree {
    constructor(array){
       //sort and remove duplicates
        this.sortedArr = array.toSorted((a, b) => a - b)
                               .filter(function(value, index, array) {
                                        return array.indexOf(value) === index; });
       // this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length-1);
       this.root = this.buildTree(this.sortedArr);

    }
   

    buildTree(sortedArr){
        //function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

    

        //take array, find mid (start + end)/2
        //create node & set node.data to mid
        //set node left, call to buildTree with  - left array to start to mid 
        //set node right,call to buildTree with  - right array to mid + 1 to end 


        let start = 0;
        let end = sortedArr.length-1;
        let mid = parseInt((start + end)/2);
        console.log('sortedArr: ', sortedArr);
        console.log(`Start: ${start}, Mid: ${mid}, end: ${end}`);

      //base case 
      if (start > end){
        return null;
    } 

    
      
        let node = new Node(sortedArr[mid]);

        console.log('BEFORE RECURSIVE CALL');
        console.log('1.node.data: ', node.data);
        console.log('2.node.left: ', node.left);
        console.log('3.node.right: ', node.right);

        node.left = this.buildTree(sortedArr.slice(start, mid));
        node.right = this.buildTree(sortedArr.slice(mid+1, end+1));

        console.log('AFTER RECURSIVE CALL');
        console.log('4.node.data: ', node.data);
        console.log('5.node.left: ', node.left);
        console.log('6.node.right: ', node.right);

        prettyPrint(node)
        return node;
    }

    insert(value){
      

         // If the tree is empty, return a new node
         //test this once insert works
         if (this.root == null) {
            this.root = new Node(value);
            return this.root;
        }

        // Check the value to be inserted (say value) with the value of the current node (say nodeval) we are in:
        let currentNode = this.root.data;

         // If value is less than nodeval move to the left subtree.
        if (value < currentNode){
            //call this fn with left next node data
            
        // Otherwise, move to the right subtree.
        } else if (value > currentNode){
            //call this fn with right next node data
        }

        //how to check if leaf node
        
        
       
      
        // Once the leaf node is reached, insert value to its right or left based on the relation between value and the leaf node’s value.
    }
   
}




//prints out tree where node === root node 
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };



  let myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
 // console.log(myTree);
 myTree.insert(10);

 // [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]