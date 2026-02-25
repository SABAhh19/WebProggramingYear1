const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultParapara = document.getElementById("result");
function plus() {
  const v1 = +num1Input.value;
  const v2 = +num2Input.value;
  resultParapara.innerHTML = v1 + v2;
}
