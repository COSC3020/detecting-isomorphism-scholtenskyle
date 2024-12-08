# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

There is always a n comparison, along with a $$2n^3$$ with a permutation matrix. It is then transposed which is $$n^2$$. All of this is done several times, with a value of n! for each possibility. This would make the final time complexity equal to $$O(n! * (n + n^2 + 2n^3))$$.

https://stackoverflow.com/questions/49799475/generating-permutation-matrices-of-a-2-dimensional-array-in-python

https://www.geeksforgeeks.org/print-all-permutation-of-array-using-javascript/

https://www.geeksforgeeks.org/transpose-a-two-dimensional-2d-array-in-javascript/

I used the sources above to understand how the algorithm was supposed to work, as well as some help from ChatGPT to figure out what was needed to perfrom these actions. I also based my test code on Powerfuljackell's test code.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
