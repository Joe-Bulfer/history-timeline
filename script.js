function getText(id){
	var svgTextElement = document.getElementById(id);
	return svgTextElement.textContent;
}



/*
 so far I have added IDs to rects in inkscape and adding description. If actual visible text on SVG of is "Lisp Machine" id of rect should be "lisp-machine" words seperated with a dash

 EXAMPLE
let javascriptDesc = getText("javascript")
console.log(javascript) 
  javascript is a scripting language for the web .......
*/

let sideView = document.getElementById("sideView")

function swapSideView(id){
	var svgText = document.getElementById(id).textContent;
	sideView.innerHTML = svgText; 
}

//swapSideView("javascript")//this works

//document.getElementById("docker").addEventListener("click", () => swapSideView("docker"));

function swapEvent(el){
    document.getElementById(el).addEventListener("click", () => swapSideView(el));
}

let events = ["alan-turing","van-nuemann-model","eniac","multics","unix","c","lisp-machine","gnu","debian","red-hat","java","javascript","rest-and-web-standardization","go","docker","kubernetes"]

events.forEach((event) => swapEvent(event)); 
