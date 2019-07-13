module.exports = {
    name: 'tree',
    description: 'tree!',
    execute(message, args) {
        message.channel.send(
            '```A Binary Search Tree is a pointer based data structure where every node has a reference to a left child and right child. It is ordered so that if a node has a smaller value than the root or parent node, it is a left child. If the node has a greater value than it is a right child. This gives binary search trees excellent search times. For the purposes of simplicity all pros and cons given will be for a Red-Back Tree.\n\nPros\n    O(h) Search time where h is the height of the tree. A BST with n\n    nodes has a minimum of log n levels so it reduces to O(log n)\n\n    We can find the minimum and maximum element of a BST in O(h) again\n    as the largest and smallest elements can be found by traversing\n    either only down the right child or the left child.\n\n    Insertion and Deletion are both O(h)\n\nCons\n    The deletion method can be confusing to implement\n\n    A BST on its own is quite inefficient. This is because in the\n    worst case there are only left childs or right childs which\n    effectively creates a linked list.\n\n    We can remedy this by creating a balanced BST, where the tree\n    guarantees O(h) performance.\n\n    The issue with such a tree is that it much more difficult to\n    implement\n\nRead more below```' + 'https://en.wikipedia.org/wiki/Binary_search_tree#Insertion' + '\nhttps://www.cs.auckland.ac.nz/software/AlgAnim/red_black.html'
        );
    },
};
