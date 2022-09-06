//js selectors
//ID returns one element
//let inputName = document.getElementById();
    //console.log(inputName);

//Class returns a collection of elements
let links = document.getElementsByClassName("link");
console.log(links);

for(let i=0; i<links.length; i++) {
links[i].setAttribute("target", "_blank");
links[i].style.display = "none";
}

//Tag returns a collection of elements

let inputs = document.getElementsByTagName("input");
console.log(inputs);

for(let i=0; i<inputs.length; i++) {
inputs[i].style.display = "none";
}

//query returns one element
let home = document.querySelector("nav a.link");
console.log(home);

//hiding the select using querySelector
    
let selectInput = document.querySelector("select#petService");
selectInput.style.display="none";





