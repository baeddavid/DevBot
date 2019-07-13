module.exports = {
    name: 'gr',
    description: 'gr!',
    execute(message, args) {
        message.channel.send(
            '```A graph is a group of vertices connected by edges. The edges are represented by something generally called an Adjacency List. Graphs have a O(1) time for adding vertices and edges. However it has a time complexity of O(|V|) for removing edges and O(|E|) for removing vertices, because we must find all vertices and edges. Graphs are particularly useful for representing anything that may need to be mapped out, whether it be roads or networking. There are three main algorithms you can perfrom with a graph.\n\n1.    Depth First Search\n2.    Bredth First Search\n3.    Minimum Spanning Tres\n\nTo see their implementations please use command !algo.\n\nRead more below```' + 'http://web.cecs.pdx.edu/~sheard/course/Cs163/Doc/Graphs.html'
        );
    },
};
