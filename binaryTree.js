var Node = require("./node");

var BinaryTree = function() {
	this.root = null;
	this.insert = insert;
	this.remove = remove;
	this.inOrder = inOrder;
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
		inOrder(node.right);
	}
}


function remove(data) {
	console.log("remove");
	//TODO

}


module.exports = BinaryTree;