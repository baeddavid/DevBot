module.exports = {
    name: 'list',
    description: 'list!',
    execute(message, args) {
        message.channel.send(
            '```A Linked List is a pointer based data structure, where each node contains a reference to the next node. There are two different types of Linked Lists.\n\n1.    Singularly Linked - contains a reference to the next node only\n2.    Doubly Linked - contains both a reference to the next node and previous node\n\n In addition lists, can be given additional properties to make them more versatile.\n    Circular List - The end of the list has a pointer to the start\n    Sorted List - Nodes are inserted in a sorted manner.(It is\n    important to note that this changes the insertion time from O(1)\n    to O(n))\nPros:\n    O(1) insertion and deletion\n    Easy to manipulate, any deletion or insertion does not need any\n    accomadating of the elements\n    Easiest of the pointer based data structures to visualize\nCons:\n    If you want to insert sorted it will take O(n) time\n    Search is O(n)\n    Manipulating pointers can become confusing if not used to it \nRead more below```' + 'https://www.geeksforgeeks.org/data-structures/linked-list/'
        );
    },
};
