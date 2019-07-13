module.exports = {
    name: 'wgr',
    description: 'wgr!',
    execute(message, args) {
        message.channel.send(
            '```A weighted graph is very similar to a normal graph, except that our Adjacency List takes one additional parameter: weight. Weight denotes the value of the edge. This adds even more depth to graphs, as minimum spanning trees now need to find the shortest path considering both edges and weights. There are a variety of different ways to find the shortest paths on a weighted graph such as Dijkstras algorithm, Prims algorithm, and the Kruskal Algorithm. The time complexity for weighted graphs is the same as a normal graph where it has a O(1) time for adding vertices and edges and a time complexity of O(|V|) for removing edges and O(|E|) for removing vertices\n\nRead more below```' + 'http://courses.cs.vt.edu/~cs3114/Fall10/Notes/T22.WeightedGraphs.pdf' + '\nhttps://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/'
        );
    },
};
