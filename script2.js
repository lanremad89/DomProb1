/* create a function 'mySnacks' and connect this function to the onchange 
event on your corresponding html. Set your variable 'snacks' to equal the
mySelect id. The id mySelect is enclosed by the element select in the html
document. The 'value' dot operator references the dropdown list. The demo
id references the text that will show what the user chose. */
const mySnacks = () => {
    const snacks = document.getElementById("mySelect")

// items inside the select element
    const items = document.getElementById("mySelect").length            
    console.log(items)

// selected dropdown option
const selected = snacks.options[snacks.selectedIndex].value;
    let stringOptions = "";

    for (let i = 0; i < snacks.length; i++) {
        stringOptions = stringOptions + snacks.options[i].text + ", "
    }
    document.getElementById("demo").innerHTML = stringOptions;
  }