//binary search tree

// * 1. Build a Node class/ factory. 
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }    
}

// * 2. Build a Tree class/ factory.
class Tree {
    constructor(array){
       //sort and remove duplicates
       //debugger;
        this.sortedArr = array.toSorted((a, b) => a - b)
                               .filter(function(value, index, array) {
                                        return array.indexOf(value) === index; });
       this.root = this.buildTree(this.sortedArr);
    }
   
    // * 3. Write a buildTree(array)
    buildTree(sortedArr){
        //function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

        let start = 0;
        let end = sortedArr.length-1;
        let mid = parseInt((start + end)/2);
        console.log('sortedArr: ', sortedArr);
        console.log(`Start: [${start}], Mid: [${mid}], end: [${end}]`);

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

        //prettyPrint(node); //call prettyPrint with root level node 
        return node;
    }

    // * 4. Write insert(value) function 
    insert(currentNode, nodeToInsert){
      console.log(`currentNode: ${JSON.stringify(currentNode)}`);
  
      //check for empty tree. If tree is empty, create a new tree. 
      if (currentNode === null){
          return new Node(nodeToInsert);
      }
  
      //check for duplicates. We dont want to add duplicates
      if (currentNode.data === nodeToInsert){
          return currentNode;
      }
  
      //run comparisons & recurse to nodes
      if (nodeToInsert < currentNode.data){ //go left
          
          //check if currentNode is a leaf
          if (currentNode.left === null){
              currentNode.left = new Node(nodeToInsert);
          } else {
              this.insert(currentNode.left, nodeToInsert);
          }
      }
  
      if (nodeToInsert > currentNode.data){ //go right
  
           //check if currentNode is a leaf
           if (currentNode.right === null){
              currentNode.right = new Node(nodeToInsert);
          } else {
              this.insert(currentNode.right, nodeToInsert);
          }
      }
  
      return currentNode;
  }


  // * 4. Write delete value function
    delete(currentNode,nodeToDelete){
   
        //tree is empty
        if (currentNode === null){
            return currentNode;
        }


        if (currentNode.data < nodeToDelete){

        }


         if (currentNode.data === nodeToDelete){
           //find node to replace by checking for children

            //if currentNode has 1 child

            //if currentNode has 2 children
                //call successor function

            //if currentNode has 0 children (is leaf)
            //       if (currentNode.left === null && currentNode.right === null){
            //         console.log(`this node ${currentNode.data} is a leaf!`);
            //       }
    
         }

    //  if (nodeToDelete < currentNode.data){
    //   //go to left subtree
    //   console.log(`nodeToDel is less than currentNode.data`);
    //   this.delete(currentNode.left, nodeToDelete);
    //  }

    //  if (nodeToDelete > currentNode.data){
    //   //go to right subtree
    //   console.log(`nodeToDel is more than currentNode.data`);
    //   this.delete(currentNode.right, nodeToDelete);
    //  }


    

     

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

  //let myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
let myTree = new Tree([4,6,9,1,2,4,7]);
prettyPrint(myTree.root);
myTree.insert(myTree.root, 5);
myTree.insert(myTree.root, 3);
prettyPrint(myTree.root);
//myTree.delete(myTree.root, 5);


