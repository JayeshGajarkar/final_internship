const button = document.getElementById("btn");

const handleClick = (event: MouseEvent): void => {
    console.log("Button clicked!", event);
    alert("You clicked the button");
};

const handleHover = (event: MouseEvent): void => {
    console.log("Button hoverd!", event);
    button.style.backgroundColor='red';
};

button.addEventListener("click", handleClick);
button.addEventListener("mouseover", handleHover);


const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === "ArrowDown") {
        alert("Key down");
    }
};

const handleKeyUp = (event: KeyboardEvent): void => {
    if (event.key === "ArrowUp") {
        alert("Key Up");
    }
};

const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === "Enter") {
        alert("Enter key pressed");
    }
};


document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.addEventListener("keypress", handleKeyPress);
