// assign a variable (color) set it equal to a CSS selector.
const color = document.querySelector('p')

// create a function to input interactivity in this case the (onclick) property 
const bGcolorButton = () => {

// when styling in javascript you call the element.style.property   
    color.style.backgroundColor = 'red'
}
// when the <button> element detects a click event, the backgroundColor will change to (red)
    color.onclick = bGcolorButton