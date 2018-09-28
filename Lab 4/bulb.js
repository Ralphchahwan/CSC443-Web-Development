alert("scubscbnscsc");


var bulb = document.querySelector("#bulb");



bulb.addEventListener("click",function(){

  if(bulb.src.includes("on.jpg")){
  bulb.src="off.png";
}
else {
  bulb.src="on.jpg";
}
});
