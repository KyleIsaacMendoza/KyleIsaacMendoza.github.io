# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![desktop POV](<assets/images/Screen Shot 2023-07-16 at 00.44.35.png>)
![mobile POV](<assets/images/Screen Shot 2023-07-16 at 00.47.10.png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- I create HTML, CSS First and make them responsive. Lastly create the script for validation and calculation of age.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to use Date() in JavaScript, getDate, getMonth(), getFullYear(). I also learn how to store a object inside a function and its key as parameters.

//Return an object
return {
dayResult: Math.abs(dayResult),
monthResult: Math.abs(monthResult),
yearResult: Math.abs(yearResult - 1),
};
//catch the obj
const result = calcAge(userBirthDay, userBirthMonth, userBirthYear, curr); //store the age as key:value pair

Also I learned how to use element.classList.add(className);
in javascript for my validation. instead of using element.style

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I'll make my code cleaner next time and Will code more efficient.

## Author

- Website - [Kyle Isaac Mendoza](/)
- Frontend Mentor - [@KyleIsaacMendoza](https://www.frontendmentor.io/profile/KyleIsaacMendoza)
