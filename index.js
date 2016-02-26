var Node=require("./node");

var node=new Node();
var node2=new Node();
node.data="Hello";
node.left=node2;
node2.data="World";
node.left.show();
