module.exports = {
    name: 'is',
    description: 'is!',
    execute(message, args) {
        message.channel.send(
            "```Insertion Sort is a sorting algorithm that has a worst time complexity of O(n^2). This is because it must iterate through the entire array for each element to find the correct order. Pseudo-code is as follows\n\nInsertionSort(arr)\n  for(int i = 0; i < arr.length; i++)\n    int key = arr[i]\n    int j = i - 1\n    while(j >= 0 && arr[j] > key)\n      arr[j+ 1] = arr[j]\n      j = j - 1\n    arr[j+ 1] = key```" +
            "```Although insertion sort has a worst case of O(n^2), it solves almost sorted arrays relatively quickly, since it needs to make few adjustments in the second loop. It should be noted that insertion sort can also be used to sort linked lists. Read more below```" +"https://www.geeksforgeeks.org/insertion-sort/" 
        );
    },
};
