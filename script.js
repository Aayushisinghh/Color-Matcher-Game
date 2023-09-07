const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink"];
let score = 0;
let gameStarted = false;
let interval;

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById("start-button").textContent = "Stop Game";
        interval = setInterval(changeColor, 1000);
    } else {
        clearInterval(interval);
        gameStarted = false;
        document.getElementById("start-button").textContent = "Start Game";
    }
}

function changeColor() {
    const colorName = colors[Math.floor(Math.random() * colors.length)];
    const colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = colorName.toLowerCase();
    document.getElementById("color-name").textContent = colorName;
}

function checkAnswer() {
    if (gameStarted) {
        const input = document.getElementById("color-input").value;
        const colorName = document.getElementById("color-name").textContent;
        if (input.toLowerCase() === colorName.toLowerCase()) {
            score++;
            document.getElementById("score").textContent = `Score: ${score}`;
            changeColor();
            document.getElementById("color-input").value = "";
        }
    }
}

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("color-input").addEventListener("input", checkAnswer);
