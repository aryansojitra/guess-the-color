const NUMBER_OF_OPTIONS = 6;
const colorCodeContainer = document.getElementById("colorCode");
const optionsContainer = document.getElementById("optionContainer");
let score = 0;

function getRandomColor() {
  const randomValue = () => Math.floor(Math.random() * 256);
  return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function setColorOptions() {
  optionsContainer.innerHTML = "";

  const colors = [];
  for (let i = 0; i < NUMBER_OF_OPTIONS; i++) {
    colors.push(getRandomColor());
  }

  const correctIndex = Math.floor(Math.random() * NUMBER_OF_OPTIONS);
  const correctColor = colors[correctIndex];
  colorCodeContainer.textContent = correctColor;

  colors.forEach((color, index) => {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    colorDiv.setAttribute("data-color", color);
    colorDiv.addEventListener("click", () => handleColorClick(index === correctIndex));
    optionsContainer.appendChild(colorDiv);
  });
}

function handleColorClick(isCorrect) {
  if (isCorrect) {
    score++;
    alert("Correct! 🎉");
  } else {
    score = 0;
    alert("Wrong! Try again.");
  }
  updateScore();
  setColorOptions();
}

function updateScore() {
  document.getElementById("score").textContent = score;
}

// Initialize game on page load
window.onload = () => {
  score = 0;
  updateScore();
  setColorOptions();
};