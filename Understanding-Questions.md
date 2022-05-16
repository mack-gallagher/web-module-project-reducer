 Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 

1. The onclick event listener attached to the button runs the dispatch function.
2. The dispatch function passes the type of action we want to perform, plus our current state to our reducer function
3. Our reducer function modifies our state according to the type of action we want to perform and hands us back our new, modified state
4. If state has changed and a component is drinking from state, React re-renders the page.


* TotalDisplay shows the total plus 1.
