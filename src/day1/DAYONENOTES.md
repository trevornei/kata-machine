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
12/07/23

OR ---> where does the alogrithm loop over the input?

# Basic concepts of Big(O)
1. Growth is respect to input.
2. Drop contstants (Theoretically they do not matter.)
    - We are intersted in the upper bound of the algorithm (growth)
    - The constant eventually becomes irrelevant. 
3. We generally check for the worst case scenario (measurement of run-time). 

Look for loops
Growth with respect to input.


What big O notation is this alogrithm? === O(Nˆ2) 
NOTE: option + I === ˆ

What's the running time
If the previous was O(N), what's this?
22
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

How O(Nˆ2) works: 
Take the following:

N = 1, O(10N) = 10, O(N^2) = 1


N = 5, O(10N) = 50, O(N^2) = 25


N = 100, O(10N) = 1,000, O(N^2) = 10,000 // 10x bigger


N = 1000, O(10N) = 10,000, O(N^2) = 1,000,000 // 100x bigger


N = 10000, O(10N) = 100,000, O(N^2) = 100,000,000 // 1000x bigger

# A counter intuitive assumption: O(N) vs. O(nˆ2)
There are sometimes where O(nˆ2) is faster than O(n) with respect to smaller inputs.

We are not worried about exact time! Not exact cpu units nor exact time. Just an estimate.

O(N^2)
I can think of this similarly to calculating the area of a square. Or can think in terms of a graph.
Checking every value x and y axis. 
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += charCode;
        }
    }

    return sum;
}

O(N^3)
I can conceptualize this as similar to matrix multiplication.
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += charCode;
            }
        }
    }
    return sum;
}

O(N log N) is done with Quick Sort Algorithms

O(log N)

## Arrays as a Data Structure:

if const array = []; !== array THEN WHAT IS IT???

What is an array? 
- An array is a contiguous memory space that contains a certain number of bytes.
- Byte is a unit of memory that is eight binary digits long.
[0, 1, 2, 3, 4, 5]

Memory is WHAT you tell the compiler to interpret it as...
For example: the computer can interpret index 0 as 32bit, index: 5 === 64bit, ... ,]

Ex: int[3]
I have three ints, that are in CONTIGUOUS space, 

a = int[3]

a[0]
Telling the computer: 
1. Go to the memory address of a.
2. Multiply the offset of zero by how big my type is 

# Lets talk about walking memory bits in an array.
Array's are contiguous bits of data strung together. ["back", "to", "Back]
Each memory address has a unique location.

In the context of this course: Array is not a list.