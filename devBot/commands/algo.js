module.exports = {
    name: 'algo',
    description: 'algo!',
    execute(message, args) {
        message.channel.send(
            '```!sort to bring up sorting algorithms \n!trav to bring up tree/graph traversal```'
        );
    },
};
