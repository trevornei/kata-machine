Date: 12/05/2023

The Primeagen Teaches ---> The last Algorithms Course You Will Ever Need

This Course Goes Over:
- Algorithms that come up in interviews.
- Foundations
- Algorithms that have principles that come up in many other algorithms.

Array's are the simples data structure.

We will go over time & space complexity.

Why teach in TS? --> It is easy and many people know it. 

Why is TS bad for teaching data structures algorithms?
1. There is no way to truely uniquely identify objects in a map() that you create.


### Big O Time Complexity

What is big O Notation?
Big O --> A way to identify your algorithms time and or memory requirements as the input grows.
O(n) --> Algorithm grows linnearly with input.

EX: function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

What is the simplest way to identify complexity?
Psssssst! Look for Looooooooops 🔂


