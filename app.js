const controls = document.querySelectorAll(".input");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");

let mathExp = "";

function deleteSymbol() {
  setMathExp(mathExp.slice(0, mathExp.length - 1));
}

function setMathExp(exp) {
  mathExp = exp;
  display.value = exp;
}

function appendMathExp(exp) {
  mathExp += exp;
  display.value = exp;
}

function handleButtonCLick(e) {
  mathExp += e.target.innerHTML;
  display.value = mathExp;
}

function handleEquals(e) {
  setMathExp(eval(mathExp).toString());
}

function handleKeyPress(e) {
  console.log(e.key);
  switch (e.key) {
    case "*":
      setMathExp(mathExp + "*");
      break;
    case "-":
      setMathExp(mathExp + "-");
      break;
    case "+":
      setMathExp(mathExp + "+");
      break;
    case "/":
      setMathExp(mathExp + "/");
      break;
    case "Backspace":
      deleteSymbol();
      break;
    case " ":
      return;
    case "Enter":
      handleEquals(null);
      break;
    case "(":
      setMathExp(mathExp + "(");
      break;
    case ")":
      setMathExp(mathExp + ")");
      break;
    case ".":
      setMathExp(mathExp + ".");
      break;
    default:
      break;
  }

  if (e.key >= 0 && e.key <= 9) {
    setMathExp((mathExp += e.key));
  }
}

controls.forEach(control => {
  control.addEventListener("click", handleButtonCLick);
});

equals.addEventListener("click", handleEquals);

clear.addEventListener("click", () => {
  mathExp = "";
  display.value = mathExp;
});

del.addEventListener("click", () => {
  deleteSymbol();
});

document.addEventListener("keydown", handleKeyPress);
