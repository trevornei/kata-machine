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
- Arrays are FIXED SIZE.
- This means that you cannot grow array's.
- Technically there are no: 
    - insertAt() 
    - push()
    - pop()
    - Additionally: you can write these methods() and fn()'s, it's just that their names are slightly misleading.
- An array is a contiguous memory space that contains a certain number of bytes.
- Byte is a unit of memory that is eight binary digits long.
[0, 1, 2, 3, 4, 5]

Memory is WHAT you tell the compiler to interpret it as...
[For example: the computer can interpret index 0 as 32bit, index: 5 === 64bit, ... ,]

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

Going back to why this is not an array. const a = []
Array's have special operations that you can perfom on an array that you can not perform on other data types. 

It looks like one - but it's principly not one. 

Arrays: 
- Get back an index.
- Insertion at a specific index.
- Deletion at a specific index.

Insertion: 
- insertion is not insertion, it's over-writing at a specific index.

Deletion: 
- Technically, you cannot delete something.
- One of the ways we can 'delete' an index value is setting it to... DRUM ROLL... [14714] ---> [0]

There it is
Get
insertion
deletion

BACK TO BIG O

What is the big(O) getting an index out of an array[];

constant time = O(1)
Definition: if the runtime of the algorithm does NOT depend on the data size of the input.
Example: if you DO know the location of the index of the data you want to get.

linear time = O(n)
Definition: if the runtime execution is said to grow linearly, based on the data size of the input.
There is a direct and proportional relationship to the size of the input and the time it takes to execute that input.
Example: A simple loop over an array that the runtime grows proportionally to the number of indeces in the array.

### End of Arrays & Data Structures.

### Start of Arrays Q&A:
Traditonal Arrays: (Static Arrays & Trad)
There are no array methods.
Very old school languages - THERE IS NOT EVEN A .LENGTH (((WHOAAAAA)))
Instead you would have to pass the length PUS a pointer to the begining of your array.

C Programs: any entry point is the above.

# Time Stamp: 56 seconds.

### Array's Q&A 

In JS and Java there is a literal array underneath the hood... but it's very underneath the hood.

How big is the array? How big is the buffer size? 
Everytime you use the .push() or .pop() methods - JS automatically adds 5 units for you to use.
--> Here's the thing. This is NOT performant.

# Off by one Algorithm
# IC --> You have to ask yourself IS my data set ordered?

- If your array is ordered, you do not need to from index 0 and validate if [0] === i;
- INSTEAD --> you can optimize you algorithm. 

This provides the opportunity to optimize WHERE you are performing you Linear Search alogrithm. 
Example: 

[Skip 10% , Check and skip 10% incrementally, Oooops too far go back & linear Search <---]
What is the worst possible case of this algorithm?
- Go all the way to the end of the array without finding the element.
- What is the run time?
    1. 10 operations of jumping?
    2. Now what are we looking at???
    2.(.5) O(10 + 1N)

    ### Remember what rule number TWO was? IGNORE CONSTANTS!!!
    This is now converted to
    - 2. O(N) 
    - 3. In theory, this is the same as linear search.

    What is a different way to jump? 

    [alsdjfals dfa, lasjdfl ajsdf asdf, lasjdfaklsdfjalsdf, alsdflajsdfl ajsdf]
    1. Check if the middle value is === v? 0( 1/2N )
    2. Keep halfing N until the condition is met.
    3. EX: 1/2N, N/4, N/8, N/16, ect...

    IF THE INPUTS ARE HALF AT EACH STEP...
    It is either O(LogN) || O(NLogN)
    Above Looking at a value and dividing it in half.

# Video: Pseudo Code Binary Search
do {
    search(arr, low, high, needle) {
        if (value is truthy ) {
            return true
        } else if (value > m) {
            // Adjust the low end and put it infront of the midpoint.
            lo = m + 1;
        } else {
            hi = m
        }
    }
} while (lo < hi) 
return false


### From: https://www.youtube.com/watch?v=KXJSjte_OAI
### Title: How Binary Search Makes Computers Much, Much Faster
There are only two ways for a computer to do a seach
1. Linearly through the data 
2. Binary Search

- You can only do a binary search on data that is ordered.
With 11 cards, binary search does not make much of a difference.
With 100,000,000 pieces of data it is Crazy fast. 

A Clustered index is list that is in alphabetical order.
"As with all things in computer science, there is a tradoff between space and time."
