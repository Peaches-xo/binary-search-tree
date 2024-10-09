  // * First iteration of the insert function
  // * 
  // * Although this version does work as intended, after some more reading I came up with the second version, which checks for leaf nodes. This may be unneccesary as nodes are created when the currentNode (aka root in the first iteration) is null, meaning it does not have any children. So it might not need to have two individual checks for leaf
  // *
  // * 4. Write insert(value) function 
  insert(root, nodeToInsert) {
    console.log(`root: ${JSON.stringify(root)}`);
  
    //Check for empty tree
    if (root === null)
        return new Node(nodeToInsert);
        
    //Check for duplicates 
    if (root.data === nodeToInsert)
        return root;
        
    //Run comparisons & recurse to nodes
    if (nodeToInsert < root.data)
        root.left = this.insert(root.left, nodeToInsert);
    else if (nodeToInsert > root.data)
        root.right = this.insert(root.right, nodeToInsert);
   
    //prettyPrint(root);
    return root;
  }

//This is the second iteration of the insert function, which includes checking for leaf nodes before inserting. 
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


//updated insert function to check for leaf node before inserting
