function Click() {
  const element = document.querySelector("p");
  const input = document.querySelector("input");

  if (isNaN(input.value)) {
    element.textContent = "this is not a number";
  } else if (input.value >= 1 && input.value <= 10) {
    element.textContent = input.value;
  } else {
    element.innerHTML = "too much";
  }

  element.style.background = "blue";
  element.style.border = "2px solid black";
}
