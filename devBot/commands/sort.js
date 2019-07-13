module.exports = {
    name: 'sort',
    description: 'sort!',
    execute(message, args) {
        message.channel.send(
            '```What sorting algorithm would you like? \na. Quick Sort(!qs) \nb. Merge Sort(!ms) \nc. Insertion Sort(!is)```'
        );
    },
};
