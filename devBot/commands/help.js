module.exports = {
    name: 'help',
    description: 'help!',
    execute(message, args) {
        message.channel.send(
            '```!bot to bring up info about this bot\n!delete(integer 1 <= x <= 100) to delete last x messages \n!algo to bring up algorithm commands \n!ds to bring up data strucutre commands```'
        );
    },
};
