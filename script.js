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
