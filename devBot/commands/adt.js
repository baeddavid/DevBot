module.exports = {
    name: 'adt',
    description: 'adt!',
    execute(message, args) {
        message.channel.send(
            '```Abstract Data Types(ADT) is a term to describe a data structure where the implementation is not important for the user to know. Put simply, the user does not care if a list, stack, or queue is implemented via array or linked list. As long as the functions such as push() or remove() work there is no point of worrying. A more indepth explanation can be found below\n\n```' + 'https://www.geeksforgeeks.org/abstract-data-types/'
        );
    },
};
