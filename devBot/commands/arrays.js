module.exports = {
    name: 'arrays',
    description: 'arrays!',
    execute(message, args) {
        message.channel.send(
            '```What data structure would you like?\n1. Array List(!al)\n2. HashMap(!hm)\n3. Stack(!st)\n4. Queue(!qu)\n5. Heap(!hp)```'
        );
    },
};
