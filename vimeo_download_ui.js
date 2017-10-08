// ==UserScript==
// @name        Vimeo Download Button
// @namespace   sgrpwr
// @description Download GATE Lectures
// @include     http://eclassesbyravindra.com/mod/page/view.php?*
// @version     1
// @grant       none
// ==/UserScript==

console.log("Parent Executing...");

var url="http://google.com/"
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
  a.setAttribute("download", "");
  
  var btn_text = document.createTextNode("Download");
  a.appendChild(btn_text);
  
  
  /*var btn = document.createElement("input");
  btn.setAttribute("value", "Download");
  btn.setAttribute("style", "padding:10px 20px 10px 20px;");
  btn.setAttribute("type", "submit");
  btn.setAttribute("href", url);
  btn.setAttribute("download", "Sagar's File");
  btn.setAttribute("onclick", "onUrlFound('Something')");*/
  body.insertBefore(a, body.childNodes[0]);
  console.log("Download Button Ready...");
}