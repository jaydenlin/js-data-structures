var assert = require('assert');
describe('binaryTree', function() {
  it('insert test', function () {
  	  var BinaryTree = require("../binaryTree"),
  	      binaryTree = new BinaryTree();
  	  
  	  binaryTree.insert(5);
  	  binaryTree.insert(4);
      binaryTree.insert(3);
  	  binaryTree.insert(2);
  	  binaryTree.insert(1);
  	  binaryTree.insert(9);
  	 
      binaryTree.inOrder(binaryTree.root);

      //TODO
     
    });

  it('remove test', function () {
      var BinaryTree = require("../binaryTree"),
          binaryTree = new BinaryTree();
      
      binaryTree.insert(5);
      binaryTree.insert(4);
      binaryTree.insert(3);
      binaryTree.insert(2);
      binaryTree.insert(1);
      binaryTree.insert(9);
   
      binaryTree.inOrder(binaryTree.remove(binaryTree.root,3));
    
      //TODO
     
    });

  it('find max test', function () {
      var BinaryTree = require("../binaryTree"),
          binaryTree = new BinaryTree();
      
      binaryTree.insert(5);
      binaryTree.insert(4);
      binaryTree.insert(3);
      binaryTree.insert(2);
      binaryTree.insert(1);
      binaryTree.insert(9);
      
      assert.equal(binaryTree.findMax(binaryTree.root).data, 9);
     
    });

  it('find min test', function () {
      var BinaryTree = require("../binaryTree"),
          binaryTree = new BinaryTree();
      
      binaryTree.insert(5);
      binaryTree.insert(4);
      binaryTree.insert(3);
      binaryTree.insert(2);
      binaryTree.insert(1);
      binaryTree.insert(9);
      
      assert.equal(binaryTree.findMin(binaryTree.root).data, 1);
     
    });
});