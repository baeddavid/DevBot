module.exports = {
    name: 'qs',
    description: 'qs!',
    execute(message, args) {
        message.channel.send(
            "```Quick sort is a sorting algorithm that has an average time complexity of O(n log n). Although it has a worst time complexity of O(n^2) we can virtually ensure that it will never sort worst case, with either three median quick sort or randomized quick sort. Quick sort is a divide and conquer sorting algorithm that uses the partition algorithm to sort. \nThe partition algorithm goes as such \n\n partition(arr, left, right)\n   int j = left - 1\n   int pivot = arr[right]\n   for(int i = left; i < right; i++)\n        if(arr[i] <= pivot\n            j = j + 1\n            swap(arr[i], arr[j])\n   swap(arr[j + 1], arr[right])\n   return j + 1```" +
            "```This partitions the array around the last element in the array, so that all elements A[left...pivot] are less than or equal to it and A[pivot + 1... right] will be greater than the pivot. \nWe make the recursive calls in sort to actually sort the array.\n\n sort(arr, left, right)\n   if(left < right)\n     int pivot = partition(arr, left, right)\n     sort(arr, left, pivot - 1)\n     sort(arr, pivot + 1, right)```" +
            "```The randomized quick sort, simply shuffles the array, before conducting the partition. However, due to the nature of randomness, it is highly advised that you perform the three median quick sort instead. In the three median quick sort, you take the first, middle, and last element, and then sort them so that the median is the last index of the array and then begin partitioning. It is reccomended that you understand the recurrence relation for quick sort as well.  Read more on this here```" + "https://stackoverflow.com/questions/7559608/median-of-three-values-strategy"
        );
    },
};
