#write your js code here
let startingPage = document.getElementById("startingPage");
let crossBtn = document.getElementById("crossBtn");
let clickContainer = document.getElementById("clickContainer");

crossBtn.addEventListener("click", function() {
    startingPage.removeChild(clickContainer);
})
