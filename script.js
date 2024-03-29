
/* just mostly for testing/exirimenting
function getText(id){
	var svgTextElement = document.getElementById(id);
	return svgTextElement.textContent;
}
*/



/*
 so far I have added IDs to rects in inkscape and added description. If actual visible text on SVG is "Lisp Machine" id of rect should be "lisp-machine" words seperated with a dash

 EXAMPLE
let javascriptDesc = getText("javascript") //arg is id of rect
console.log(javascriptDesc) 
  javascript is a scripting language for the web .......
*/

// just a div for now
let sideView = document.getElementById("sideView")

function swapSideView(id){
	var svgText = document.getElementById(id).textContent;
	sideView.innerHTML = svgText; 
}

//swapSideView("javascript")//this works

//document.getElementById("docker").addEventListener("click", () => swapSideView("docker"));

function addSwapEvent(el){
    document.getElementById(el).addEventListener("click", () => swapSideView(el));
}

// make sure these match up with id's in inkscape or manually check rects
let events = ["alan-turing","van-nuemann-model","eniac","multics","unix","c","lisp-machine","gnu","debian","red-hat","java","javascript","rest-and-web-standardization","go","docker","kubernetes"]

events.forEach((event) => addSwapEvent(event)); 
/* currently the text element gets in the way so you have to click on the outer parts of the rect*/
