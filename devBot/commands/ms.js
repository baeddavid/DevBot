module.exports = {
    name: 'ms',
    description: 'ms!',
    execute(message, args) {
        message.channel.send(
            "```Merge Sort is a divide and conquer algorithm that sorts in O(n log n) time. It has a space comeplexity of O(n), because it must split the array into two halves at each recursive step. The merge function runs in O(n) time and divides and merges an array. The pseudo-code for merge sort is as follows \n\nmerge(arr, left, middle, right)\n   int[] L = new int[m - l + 1]\n   int[] R = new int[r - m]\n\n   fill both arrays with elements from the original array.\n\n   int i = 0\n   int j = 0\n   int k = left\n\n   while(i < L.length && j < R.length)\n      if(L[i] <= R[j])\n         arr[k++] = L[i++];\n      else\n         arr[k++] = R[j++]\n\n   Fill in the rest of the array with the remaining elements from\n   either L or R```" +
            "```We sort the array through a recursive call to the sort function\n   sort(arr, left, right)\n   if(left < right)\n      int middle = (left + right) / 2\n      sort(arr,left,middle)\n      sort(arr,middle + 1, right)\n      merge(arr,left,middle,right)```" + "```It should be noted that merge sort can also be used for Linked Lists. Merge sort is an efficient sorting algorithm assuming that we are not concerned with space or a stable sort. It is reccomended that you understand the recurrence relation for merge sort as well. Read more below```" + "https://softwareengineering.stackexchange.com/questions/324593/recursion-in-merge-sort-algorithm-how-is-it-obvious-to-use-this-type-of-recursi"
        );
    },
};
