What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANS----> The main difference is their selection method.
for getElementByID,it selects only one element based on its unique id...
for getElementsByClass,it selects elements based on their class attribute, giving all elements that were named by a specified class name.
for querySelector,it selects the first element of which CSS selector we call like tag name, ID, class, or a combination.
for querySelectorAll, it selects all elements that match a specified CSS selector

2:How do you create and insert a new element into the DOM?

ANS---------> We can use the document.createElement() method to create a new HTML element.We will have to write the tag name that we want to create inside this brackets as string.The structure ====>

                                const newElement = document.createElement('div');
                                const newSection = document.createElement('section')

Inserting Element-------> After creating an element we need to attach the element to an parent element that exist already in the DOM.

Common methods for this:
appendChild(): We can do this by appendChild().
Structure===>
const parentContainer = document.getElementById('container-parent');
parentContainer.appendChild(newElement);

3:What is event bubbling and how does it work?

ANS--------------->Event bubbling means when you click (or trigger an event) on a child element, the event doesn’t stop there — it also moves up to its parent, then the parent’s parent, and so on, until it reaches the very top.

Example:
If you click a button inside a div, the button’s click event happens first, then the div’s click event also happens, then the body’s, then the document’s.So it’s like a bubble rising upward through the DOM tree.

How Event Bubbling Works------->

Event Happens – You click on an element.

Target Reacts First – The event runs on that element.

Bubble Up – After that, the event automatically moves up to the element’s parent.

Parents React Too – If the parent has an event handler, it will also run. Then it keeps going up to the grandparent, and so on.

Stops at the Top – The event continues until it reaches the very top (document) or until it’s stopped by code (event.stopPropagation()).

4:What is event Delegation and why is it useful??

ANS------------>Event delegation is a way to use fewer event listeners by attaching a single listener to a parent element instead of every child element.

Because of event bubbling, when a child element is clicked, the event travels up to the parent. The parent’s event listener can then check which child was clicked and respond.

This makes your code Faster

5:What is the difference between preventDefault() and stopPropagation() methods?

ANS----------->preventDefault()

It stops the browser’s default behavior for an event.

Example:

Clicking on a button inside a form usually refreshes the page.

If you call event.preventDefault(), it will stop the refresh and the code will work good.

stopPropagation()

It stops the event from bubbling up or doing down.

The default browser behavior still happens, but the event won’t trigger handlers on parent elements.
