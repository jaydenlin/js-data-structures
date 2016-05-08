var graph = [
    [0, 1, 1, null, 1],
    [1, 0, null, 1, null],
    [1, null, 0, null, 1],
    [null, 1, null, 0, null],
    [1, null, 1, null, 0]
];
var queue = [];
var n = graph.length;

var visitedDots = [0, 0, 0, 0, 0];
var bfs = function (current) {
    //visit
    queue.push(current);
    console.log(current);
    visitedDots[current] = 1;
    
    while (queue.length > 0) {
       
        var j = queue.pop();
        for (var i = 0; i < n; i++) {
            if (graph[j][i] === 1 && visitedDots[i] !== 1) {
                //visit
                console.log(i);
                visitedDots[i] = 1;
                
                queue.push(i);
            }
        }
    }

}
bfs(0);