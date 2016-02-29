var Node = require("./node");
var _traversalRecord = [];
var BinaryTree = function() {
    this.root = null;
    this.insert = insert;
    this.remove = remove;
    this.inOrder = inOrder;
    this.findMax = findMax;
    this.findMin = findMin;
    this._traversalRecord = _traversalRecord;
}

function insert(data) {
    var that = this;
    var node = new Node({
        data: data,
        left: null,
        right: null
    });

    if (that.root === null) {
        that.root = node;
        return;
    } else {
        var currentNode = that.root;
        while (true) {
            if (data > currentNode.data) {
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = node;
                    break;
                }

            } else {
                if (currentNode.left !== null) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = node;
                    break;
                }

            }
        }
    }
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        node.show();
        //console.log("_traversalRecord");
        //console.log(_traversalRecord);
        _traversalRecord.push(node.data);
        inOrder(node.right);
    }
}

function findMax(node) {
    var currentNode = node;
    while (currentNode.right !== null) {
        currentNode = currentNode.right;
    }
    return currentNode;
}

function findMin(node) {
    var currentNode = node;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
}

function remove(node, data) {
    //TODO
    if (node === null) {
        return node;

    } else if (data > node.data) {

        node.right = remove(node.right, data);

    } else if (data < node.data) {

        node.left = remove(node.left, data);

    } else {

        //Case 1. No Child
        if (node.left === null && node.right === null) {
            //console.log("Case 1.  No Child");
            node = null;
        }
        //Case 2.  One Child 
        else if (node.left === null) {
            //console.log("Case 2.  One Child - right");
            node = node.right;

        } else if (node.right === null) {
            //console.log("Case 2.  One Child - left");
            node = node.left;

        }
        //Case 3.  Two Children
        else {
            //console.log("Case 3.  Two Children");
            var tempNode = this.findMax(node.left);
            node.data = tempNode.data;
            node.left = remove(node.left, tempNode.data);

        }
    }

    return node;

}



module.exports = BinaryTree;