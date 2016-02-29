var Node=function(params){
   this.data=params.data;
   this.left=params.left;
   this.right=params.right;
   this.show=show;
}

function show(){
   console.log(this.data); 
   return this.data;   
}


module.exports=Node;
