module.exports = {
    name: 'qu',
    description: 'qu!',
    execute(message, args) {
        message.channel.send(
            '```Queues are an Abstract Data Type(ADT)(For more information on ADTs use command !adt). Queues follow the First in First Out rule(FIFO). Queues can be implemented via array or linked list. The general functions of the queue are\n\n    Insert(Object x) - Inserts an object at the rear of our queue\n    Remove() - removes the object from the front of our queue\n    Peek() - Returns the object at the front.\n\nRead more below```' + 'https://en.wikipedia.org/wiki/Queue_(abstract_data_type)'
        );
    },
};
