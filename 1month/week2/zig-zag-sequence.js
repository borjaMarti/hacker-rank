// Zig Zag Sequence

// Given an array of n distinct integers, transform the array into a zig zag
// sequence by permuting the array elements. A sequence will be called a zig zag
// sequence if the first k elements in the sequence are in increasing order and
// the last elements are in decreasing order, where k = (n + 1) / 2. You need to
// find the lexicographically smallest zig zag sequence of the given array.

// Note: You can modify at most three lines in the given code. You cannot add or
// remove lines of code.

// NOTE FROM ME: The challenge wasn't doable (the code was missing) in
// JavaScript, so I switched to Python 3 to solve it.

// def findZigZagSequence(a, n):
//     a.sort()
//     mid = int((n + 1)/2) - 1 // Originally mid = int((n + 1)/2)
//     a[mid], a[n-1] = a[n-1], a[mid]

//     st = mid + 1
//     ed = n - 2 // Originally ed = n - 1
//     while(st <= ed):
//         a[st], a[ed] = a[ed], a[st]
//         st = st + 1
//         ed = ed - 1 // Originally ed = ed + 1

//     for i in range (n):
//         if i == n-1:
//             print(a[i])
//         else:
//             print(a[i], end = ' ')
//     return
