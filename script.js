var circle = document.getElementById("circle");
document.body.addEventListener("mousemove", function(e) {
  circle.style.left = e.clientX + "px",
  circle.style.top = e.clientY + "px";
});

// const changeColor = () => {

//   const random = (Math.random() * 0xFFFFFF << 0).toString(16);
//   document.body.style.backgroundColor = "#" + random; 
//   document.body.style.color = "#" + random;
//   document.getElementById("circle").style.backgroundColor = "#" + random

// };


