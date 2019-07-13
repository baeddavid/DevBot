module.exports = {
    name: 'hm',
    description: 'hm!',
    execute(message, args) {
        message.channel.send(
            '```HashMaps or HashTables are data structures that maps keys to values. The key is then converted into an integer which can be used to find the index. Generally the default HashMap or HashTable package is sufficient, however if you wish to create your own HashMap it is important to keep in mind to create a strong hashing function.\n\nPros:\n    O(1) search\n    O(1) deletion\n    O(1) search\nCons:\n    O(n) space complexity\n    Does not allow null values\n    *Only if you make your own* Risk of collisions degenerating search\n    to O(n)\n\n Read more below```' + 'https://www.geeksforgeeks.org/java-util-hashmap-in-java/'
        );
    },
};
