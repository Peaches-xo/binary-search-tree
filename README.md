# binary-search-tree

The Odin Project // Binary Search Tree

1. - [x] Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

2. - [x] Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

3. - [x] Write a buildTree(array) function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

    [x] Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.

4. - [ ] Write insert(value) and deleteItem(value) functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not.
