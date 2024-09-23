let totalButton = document.querySelectorAll("button").length;

// Adding event listener for click on each button
for (let i = 0; i < totalButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonText = this.innerText; 
    triggerSound(buttonText); 
    buttonAnimation(buttonText); 
  });
}

// Adding event listener for keyboard
document.addEventListener("keydown", function (event) {
  let keyPressed = event.key.toLowerCase(); 
  triggerSound(keyPressed); 
  buttonAnimation(keyPressed); 
});

// Function to play sound based on input
function triggerSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("No sound for this key");
  }
}

// Function to add animation to the button
function buttonAnimation(key) {
  let activeBtn = document.querySelector("." + key); 
  if (activeBtn) { 
    activeBtn.style.backgroundColor = "red"; 
    activeBtn.style.color = "yellow";
    activeBtn.classList.add("pressed"); 
    setTimeout(function () {
      activeBtn.style.backgroundColor = ""; 
      activeBtn.style.color = ""; 
      activeBtn.classList.remove("pressed"); 
    }, 2000);
  }
}