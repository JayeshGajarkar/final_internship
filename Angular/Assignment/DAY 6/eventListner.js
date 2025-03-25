"use strict";
var button = document.getElementById("btn");
var handleClick = function (event) {
    console.log("Button clicked!", event);
    alert("You clicked the button");
};
var handleHover = function (event) {
    console.log("Button hoverd!", event);
    button.style.backgroundColor = 'red';
};
button.addEventListener("click", handleClick);
button.addEventListener("mouseover", handleHover);
var handleKeyDown = function (event) {
    if (event.key === "ArrowDown") {
        alert("Key down");
    }
};
var handleKeyUp = function (event) {
    if (event.key === "ArrowUp") {
        alert("Key Up");
    }
};
var handleKeyPress = function (event) {
    if (event.key === "Enter") {
        alert("Enter key pressed");
    }
};
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.addEventListener("keypress", handleKeyPress);
