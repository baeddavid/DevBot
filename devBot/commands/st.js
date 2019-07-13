module.exports = {
    name: 'st',
    description: 'st!',
    execute(message, args) {
        message.channel.send(
            '```Stacks are an Abstract Data Type(ADT)(For more information on ADTs use command !adt). Stacks follow the First In Last Out (FILO) rule. They can be implemented through a variety of methods, however the way it was implemented is not important for the user. Stacks are used in a variety of important functions such as Minimum Spanning Tree and Depth First Search. Stacks have a few basic functions.\n\n    Push(Object x) - This pushes an object into our stack.\n    Pop() - This removes an object from the top of our stack.\n    Peek() - This will return the top object ready to be popped\n\nRead more below```' + 'https://en.wikipedia.org/wiki/Stack_(abstract_data_type)'
        );
    },
};
