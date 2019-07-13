module.exports = {
    name: 'ds',
    description: 'ds!',
    execute(message, args) {
        message.channel.send(
            '```!arrays to bring up array based DS\'s \n!pointer to bring up pointer based DS\'s```'
        );
    },
};
