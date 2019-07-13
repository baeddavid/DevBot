module.exports = {
    name: 'kb',
    description: 'kb!',
    execute(message, args) {
        let  i = Math.floor(Math.random() * 101) + 40;
        message.channel.send(
            'http://kshow123.net/show/knowing-brother/episode-' + i + '.html'
        );
    },
};
