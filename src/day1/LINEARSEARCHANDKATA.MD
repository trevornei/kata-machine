# New Vocab
- Sparse arrays: Arrays that do NOT have contiguous indexes.
- Dynamic Array: is an array that can grow or shrink with out the need for MANUAL memory management.

# The A of algorithms: 

In JS, arrays are dynamic.
- JS Arrays are actually obects with special properties and their indeces are actually keys.
- Pretend that JS actually has array's in the ways that we are talking about. Convenience has its tradeoffs. 

.push() .pop() .shift() .unshift() and .splice() can run into performance issues.
- Array indeces are more similiar to acessing object properties.
- Array indeces are converted to 'strings' (this can cause performance issues.)

JS Arrays can hold elements of different types whereas other languages cannot.
JS Arrays can be sparse; The arays can have "empty spots" where the data is not contiguous. 

The dynamic nature of JS comes with a huge performance hit at scale.

Set of assumptions that we will work with. 

# Core Competency: Abstraction --> whiteboard visualization --> Code

We are going to start with the most simplest algorithm... Linear Search!

a[0 ---> n]
search(arr, v)
similar of indexOf() 

What is the O Notation of this algorithm?
<--- Review ---> 
1. Growth is respect to input.
2. Constants are dropped.
3. Worst case is usually the way we measure. 

Worst Case Scenario: This algorithm grows linearly through the array. 