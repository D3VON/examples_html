/**
 * Created by devonmcb on 1/23/16.
 */

var c6=document.getElementById("layer6");
var ctx6=c6.getContext("2d");
ctx6.fillStyle="#FF0000";
ctx6.beginPath();
ctx6.arc(25,25,24,0,Math.PI*2,true);
ctx6.closePath();
ctx6.fill();

var c8=document.getElementById("layer8");
var ctx8=c8.getContext("2d");
ctx8.fillStyle = "#000";
ctx8.fillStyle="#fff";
ctx8.fillRect(15,0,20,20);

var c7=document.getElementById("layer7");
var ctx7=c7.getContext("2d");
ctx7.fillStyle="#fff";
ctx7.beginPath();
ctx7.arc(25,25,21,0,Math.PI*2,true);
ctx7.closePath();
ctx7.fill();
ctx7.fillStyle = "#000";
ctx7.font ="8pt Calibri";
ctx7.fillText("Loading", 6, 28);