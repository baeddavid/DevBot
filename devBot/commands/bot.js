module.exports = {
    name: 'bot',
    description: 'bot!',
    execute(message, args) {
        message.channel.send(
            'Hello! My name is DevBot! I am a bot made to help users keep track of Data Structures and Algorithms with convenient commands. I was made using discord.js and discord.commando. I am an open source project so feel free to make changes to my code in bot-dev section! You can find my github link https://github.com/eyybaebae/DevBot'
        );
    },
};
