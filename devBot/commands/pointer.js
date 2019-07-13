module.exports = {
    name: 'pointer',
    description: 'pointer!',
    execute(message, args) {
        message.channel.send(
            '```What data structure would you like?\n1. Linked List(!list)\n2. Binary Search Tree(!tree)\n3. Graph(!gr)\n4. Weighted Graphs(!wgr)```'
        );
    },
};
