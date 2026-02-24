## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById gets an element by referencing by its id, returns only one element
- getElementsByClass gets a list of elements by referencing by their class names, returns multiple elements if multiple elements are using
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

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
