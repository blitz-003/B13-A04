## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById gets an element by referencing by its id, returns only one element, returns live dynamic version of the element which reflects change in the DOM
- getElementsByClass gets a list of elements by referencing by their class names, returns multiple elements if multiple elements are using, returns live dynamic version of the elements which reflects change in the DOM
- querySelector can get an element by its id or its class, if there is multiple element, returns the first one
- querySelectorAll can get a list of elements using [.classname]

### 2. How do you create and insert a new element into the DOM?

- There are multiple ways.
- One is const div = document.createElement("div"); then adding classes to it. then appending to the body
- Create a div. Then use innerHTML and `` to insert arbitrary amount of

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is the phenomena where any event that happens to an element also affects its parent

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a phenomena in which a parent is being able to understand where the event is coming from one of its child.
For example, a div has three child elements which has click function. Now if there is a listener on the parent div, and a child element
is clicked, due to event bubbling the parent gets access to the event and thereby knowing from which its child element the event came from
It is useful because instead of attaching multiple event listeners to the child elements, only one event listerne can be attached to the parent
div to identify the source of event

### 5. What is the difference between preventDefault() and stopPropagation() methods?

prenetDefault() stops the inherited behavior of an element. For example clicking a link
stopPropagation() is a function that stops bubbling of an element to its parent
