//use two dimentioal array to present a graph
var graph = [
    [0, 1, 1, null, 1],
    [1, 0, null, 1, null],
    [1, null, 0, null, 1],
    [null, 1, null, 0, null],
    [1, null, 1, null, 0]
];

//a record for visited dots
var visitedDots = [0, 0, 0, 0, 0];

//the count of the dots in graph
var n = graph.length;

//sum of visited dots
var sumOfVisitedDots = 0;

var dfs = function (current) {
    console.log(current);
    visitedDots[current]=1;
    sumOfVisitedDots++;
    if (sumOfVisitedDots === n) {
        return;
    }
    for (var i = 0; i < n; i++) {
        if (graph[current][i] === 1 && visitedDots[i]===0){
            
            dfs(i);
           
        }
    }
      
    return;

}

dfs(0);
