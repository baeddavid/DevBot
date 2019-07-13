module.exports = {
    name: 'hp',
    description: 'hp!',
    execute(message, args) {
        message.channel.send(
            '```Heaps are array based data structures that represents trees. There are two kinds of heaps. Max-heaps and Min-heaps.Heaps guarantee that the root of every sub-tree is the largest/smallest value. Unlike BST which have are ordered to a degree, heaps do not need to ordered as long as the root of every sub-tree is either the largest/smallest value. Any array can be transformed into a heap in O(n log n) time. It is worth nothing that heaps are used to implement priority queues. The primary uses of heaps are\n\n    extractMax/Min() - This removes the root value in O(log n) time.\n    peek() - returns the root of tree in O(1) time\n\nRead more below```' + 'https://en.wikipedia.org/wiki/Heap_(data_structure)'
        );
    },
};
