const button = document.querySelector("#startButton");
button.addEventListener("click", logIn);
function logIn() {
  window.location.href = "./home/home.html";
}

let instructBtn = document.querySelector("#instructions");

instructBtn.addEventListener("click", (e) => {
	alert("Welcome to Rock-Paper-Scissors! Have a good time :) ");
	alert("Please press the Rock, Paper, or Scissors button to begin.");
});
function play() {
  var audio = new Audio('./assets/rise-and-shine.mp3');
  audio.play();
}