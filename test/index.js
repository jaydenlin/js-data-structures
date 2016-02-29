var assert = require('assert');
describe('binaryTree', function() {
    it('insert test', function() {
        var BinaryTree = require("../binaryTree"),
            binaryTree = new BinaryTree();

        binaryTree.insert(5);
        binaryTree.insert(4);
        binaryTree.insert(3);
        binaryTree.insert(2);
        binaryTree.insert(1);
        binaryTree.insert(9);

        //Clean _traversalRecord before traversal
        binaryTree._traversalRecord.length = 0;
        binaryTree.inOrder(binaryTree.root);
        console.log(binaryTree._traversalRecord);
        var stub = [1, 2, 3, 4, 5, 9];
        assert.equal(binaryTree._traversalRecord.toString(), stub.toString());


    });

    it('remove test', function() {
        var BinaryTree = require("../binaryTree"),
            binaryTree = new BinaryTree();

        binaryTree.insert(5);
        binaryTree.insert(4);
        binaryTree.insert(3);
        binaryTree.insert(2);
        binaryTree.insert(1);
        binaryTree.insert(9);

        //Clean _traversalRecord before traversal
        binaryTree._traversalRecord.length = 0;
        binaryTree.inOrder(binaryTree.remove(binaryTree.root, 3));
        console.log(binaryTree._traversalRecord);
        var stub = [1, 2, 4, 5, 9];
        assert.equal(binaryTree._traversalRecord.toString(), stub.toString());

    });

    it('find max test', function() {
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

    it('find min test', function() {
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