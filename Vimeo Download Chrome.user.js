// ==UserScript==
// @name        Vimeo Download
// @namespace   sgrpwr
// @include     *://*.vimeo.com/video/*
// @version     1
// @grant       none
// ==/UserScript==

/*function afterLoad(){
	console.log("Hurray!! Frame loaded");
}

var frame_path = "/html/body/div[2]/div/div/div/section/div/div[1]/div/p/iframe"
var script_path = "/html/body/script[4]"

console.log("Starting UserScript");

var iframe = document.evaluate( frame_path ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
console.log("Searching Done")
if (iframe != null) {
  //var link = element.getAttribute("src");
  var text = iframe.contentDocument.body.innerHTML;
  console.log("Found Link: "+text);

  iframe.setAttribute("onload", "afterLoad()");

  var iFrameBody= iframe.contentDocument || iframe.contentWindow.document;
  content= iFrameBody.getElementsByTagName('body')[0].innerHTML;
  console.log("Content: "+content);
}
else{
	alert("Iframe not found");
}
*/
if (window.top == window.self)  //don't run on top window
    return;

var markup = document.documentElement.innerHTML;
console.log('running on a frame');
//console.log(markup);

script_path = "/html/body/script[2]";
var script = document.evaluate( script_path ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
script = script.innerHTML;
console.log('Here');
script = script.replace("(function(e,a){", "");


//Find JSON
var json = "";
var stack = 0;
var first = true;
var i;
for(i=0; i<script.length && (first || stack!==0); i++){
		var c = script.charAt(i);
		if(c == '{'){
			first = false;
			stack++;
		}
		else if(c == '}'){
			stack--;
		}

		if(stack===0 && first)
			continue;
		json += c;

}

//Parse JSON
var url = "Cannot Find";
var main = JSON.parse(json);
console.log("==> "+main.request.files.progressive);
var progressive = main.request.files.progressive;
console.log("==> Looking for 360p Quality...");
for (i in progressive){
	progress = progressive[i];
	if(progress.quality == "360p"){
		console.log("Hurray!! Link Found");
		url = progress.url;
		break;
	}
}
console.log("==> URL: "+url);


//Call parent function
var domain = "http://eclassesbyravindra.com";
var message = url;
console.log("Sending Message to parent...");
window.top.postMessage(message, '*');
console.log("Message Sent to parent");
