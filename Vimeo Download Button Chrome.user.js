// ==UserScript==
// @name        Vimeo Download Button
// @namespace   sgrpwr
// @description Download Lectures
// @include     http://*.com/mod/page/view.php?*
// @version     1
// @grant       none
// ==/UserScript==

console.log("Parent Executing...");

var url="http://google.com/";
//alert(call("Hi Saggar"));

var body = document.body;
var input = document.createElement("input");

input.setAttribute("type", "button");
input.setAttribute("Nothing", "Nothing");
//body.appendChild(input);

//Add Button


//Add Java Script
var script = document.createElement("script");
var listner_code = "";

var func_code = "function onUrlFound(url){ alert(\"Hello Sagar\"); }";
var script_text = document.createTextNode(listner_code);
script.appendChild(script_text);
var head = document.head;
head.appendChild(script);

console.log(head);
console.log(script);
console.log(listner_code);


console.log("Parent Execution Ended...");

var org_url = "Not known";
window.addEventListener('message', function(event){
  console.log("Event Received: "+event.data);
  if(event.data == "{\"event\":\"ready\"}") return;

  var link = event.data;
  org_url = link;
  createButton(link, "Saar");
});


function createButton(url, name){
  console.log("Creating Button...");
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "Sagar File.mp4");

  var btn_text = document.createTextNode("Download");
  a.appendChild(btn_text);

  body.insertBefore(a, body.childNodes[0]);
  console.log("Download Button Ready...");
}
