// const btn = document.getElementById("btn");
// const box = document.getElementById("container");

// btn.addEventListener("click", function () {
//   box.classList.add("show");
// });

// btn.addEventListener("click", function () {
//   box.classList.remove("show");
// });

// const parentbox = document.querySelector(".container");
// const littlebox = document.createElement("div");
// const img = document.createElement("img");
// const link = document.createElement("a");
// littlebox.setAttribute("");
// littlebox.setAttribute("");
// littlebox.classList.add(".little-box");
// parentbox.appendChild(littlebox);
// const body = document.body;

const box = document.querySelector("body");
for (let i = 0; i < 7; i++) {
  const box1 = document.createElement("div");
  box.appendChild(box1);
  box1.style.height = "400px";
  box1.style.width = "400px";
  if ([i] % 2 == 0) {
    box1.style.background = "red";
    box1.textContent = [i];
  } else {
    box1.style.background = "blue";
  }
}
