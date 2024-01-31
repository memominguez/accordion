# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![FAQ Accordion](/Screenshot-2024-01-29.png)

### Links

- Solution URL: [Github repository](https://github.com/memominguez/accordion)
- Live Site URL: [Github page](https://memominguez.github.io/accordion/)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

The challenging feature is the script that sets the accordion's functionality.

The code below is an adaptation of some found in youtube tutorials.

```js
const accordionContent = document.querySelectorAll(".accordion-content");
let iconImage = document.querySelectorAll(".icon-image")

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");    

    let description = item.querySelector(".description");

    if (item.classList.contains("open")) { 
      iconImage[index].src = "./assets/images/icon-minus.svg"   
      description.style.height = `${description.scrollHeight}px`;     
      description.style.visibility = "visible"
    } else {  
      iconImage[index].src = "./assets/images/icon-plus.svg"   
      description.style.height = "0px";
      description.style.visibility = "hidden"
    }
    removeOpen(index);
  });
});

// Close those items not visited
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      des.style.visibility = "hidden";
      iconImage[index2].src = "./assets/images/icon-plus.svg"   
    }
  });
}

```


### Continued development

Finding solutions for web pages functionality is the way to continue developing our programming skills. 
So this small application was a good web development exercise.


### Useful resources

- [Video tutorial]( https://www.youtube.com/watch?v=B_wscu_ijwU) - This helped me in suggesting HTML structure and styling, and specially the script logic.


## Author

- Website - [Guillermo Dominguez](https://gdominguez-portfolio.netlify.app/)

- Frontend Mentor - [@memominguez](https://www.frontendmentor.io/profile/memominguez)



## Acknowledgments

Thanks to all those who share their knowledge, free of charge, through video tutorials. 
