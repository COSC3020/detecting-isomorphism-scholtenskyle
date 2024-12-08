const fs = require('fs');
const JSVerify = require('jsverify');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testset = [
    { graph1:[[0, 1, 0, 1, 0], 
        [1, 0, 0, 1, 1], 
        [0, 0, 0, 1, 0], 
        [1, 1, 1, 0, 1], 
        [0, 1, 0, 1, 0]], 
    graph2:[[0, 1, 0, 1, 0], 
        [1, 0, 1, 1, 1], 
        [0, 1, 0, 0, 0], 
        [1, 1, 0, 0, 1], 
        [0, 1, 0, 1, 0]], expected: true},
     { graph1:[[0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 1, 1, 0], 
        [0, 1, 0, 0, 0, 1], 
        [1, 1, 0, 0, 1, 0], 
        [0, 1, 0, 1, 0, 0], 
        [1, 0, 1, 0, 0, 0]], 
    graph2:[[0, 1, 0, 1, 0, 1], 
        [1, 0, 0, 1, 1, 0], 
        [0, 0, 0, 1, 0, 1], 
        [1, 1, 1, 0, 1, 0], 
        [0, 1, 0, 1, 0, 0], 
        [1, 0, 1, 0, 0, 0]],  expected: true},
    { graph1:[[0, 1, 0, 1, 0, 1, 0], 
        [1, 0, 0, 1, 1, 0, 0], 
        [0, 0, 0, 1, 0, 1, 0], 
        [1, 1, 1, 0, 1, 0, 0], 
        [0, 1, 0, 1, 0, 0, 1], 
        [1, 0, 1, 0, 0, 0, 0], 
        [0, 0, 0, 0, 1, 0, 0]],
    graph2:[[0, 1, 0, 1, 0, 1, 1], 
        [1, 0, 1, 1, 1, 0, 0], 
        [0, 1, 0, 0, 0, 1, 0], 
        [1, 1, 0, 0, 1, 0, 0], 
        [0, 1, 0, 1, 0, 0, 0], 
        [1, 0, 1, 0, 0, 0, 0], 
        [1, 0, 0, 0, 0, 0, 0]],  expected: false},
    { graph1:[[0, 1, 0, 1, 0, 1, 0], 
        [1, 0, 0, 1, 1, 0, 0], 
        [0, 0, 0, 1, 0, 1, 0], 
        [1, 1, 1, 0, 1, 0, 0], 
        [0, 1, 0, 1, 0, 0, 1], 
        [1, 0, 1, 0, 0, 0, 0], 
        [0, 0, 0, 0, 1, 0, 0]],
    graph2:[[0, 1, 0, 1, 0, 1], 
            [1, 0, 0, 1, 1, 0], 
            [0, 0, 0, 1, 0, 1], 
            [1, 1, 1, 0, 1, 0], 
            [0, 1, 0, 1, 0, 0], 
            [1, 0, 1, 0, 0, 0]],  expected: false},
    
]

testset.forEach(({ graph1, graph2, expected }, index) => {
    let testWorks = (JSON.stringify(are_isomorphic(graph1,graph2)) === JSON.stringify(expected));
    console.log("\ntest:",index++, testWorks ? "Success" : "Failed");
    if(!testWorks){ throw console.log("Failed with values:", graph,"\nExpected Result:",expected, "\nGot Result:", JSON.stringify(dijkstra(graph1,graph2)));}
});
