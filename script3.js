var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button = document.querySelector("button");

//body.style.background="red" this command is used to change the background to the specified color
//this function setGradient is used to set the gradient of the color given as input
function setGradient(){
	body.style.background="linear-gradient(to right,"+color1.value+", "+color2.value+")";

	css.textContent=body.style.background+";";
}

console.log(css);
console.log(color1);
console.log(color2);
//color entry by the user
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

//function that generates random colors-hexadecimal code
function randomColorGenerator() {
    var characters = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
    var randomColorArray = [];
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random()*characters.length);
        randomColorArray.push(characters[randomIndex])
    }
    return `#${randomColorArray.join("")}`;
}
//color changes in the document on clicking the random button
function setRandomGradient() {
  body.style.background ="linear-gradient(to right, " + randomColorGenerator()+", "+ randomColorGenerator();
  css.textContent = body.style.background + ";";
}
//event listener in DOM manupulatuion
 button.addEventListener("click", setRandomGradient);