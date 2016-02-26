var Node=function(){
   this.data=null;
   this.left=null;
   this.right=null;
   this.show=show;
}

function show(){
   console.log(this.data);    
}


module.exports=Node;
