module.exports = {
    name: 'al',
    description: 'al!',
    execute(message, args) {
        message.channel.send(
            '```Array Lists are dynamically sized arrays and an Abstract Data Type(ADT)(For more information on ADTs use command !adt). They are not present in JS as arrays in JS are by defualt dynamically sized. Array Lists are simply arrays that will (generally) double their memory size when the array is full.\n\nPros:\n    O(1) Insertion\n    O(1) Deletion\n    They can hold objects, not just primitive data types\n    You can traverse it forwards or backwards using an iterator\nCons:\n    O(n) to double the array\n    If something is deleted, the list must be shifted to accomodate\n    this change.\n    Stored sequentially in memory.(Large Array Lists will take large\n    contigous blocks of memory)\n\n Read more below```' + 'https://www.geeksforgeeks.org/arraylist-in-java/'
        );
    },
};
