// function grade(event) {
//   event.preventDefault();

//   const forms = document.querySelector("form");
//   const name = forms.name.value.trim();
//   const mathInput = forms.mathGrade.value;
//   const englishInput = forms.englishGrade.value;
//   const grade1 = Number(mathInput);
//   const grade2 = Number(englishInput);
//   const resultPara = document.getElementById("result");
//   const errorPara = document.getElementById("error-message");

//   errorPara.textContent = "";
//   errorPara.classList.remove("show");
//   resultPara.textContent = "";

//   if (name === "") {
//     errorPara.textContent = "Please enter your name.";
//     errorPara.classList.add("show");
//     return;
//   }

//   if (mathInput === "" && englishInput === "") {
//     errorPara.textContent = "Please enter both Math and English grades.";
//     errorPara.classList.add("show");
//     return;
//   }

//   if (
//     (mathInput === "" && englishInput !== "") ||
//     (mathInput !== "" && englishInput === "")
//   ) {
//     errorPara.textContent = "Please fill out BOTH grade fields.";
//     errorPara.classList.add("show");
//     return;
//   }

//   if (isNaN(grade1) || isNaN(grade2)) {
//     errorPara.textContent = "Please enter valid numbers for grades.";
//     errorPara.classList.add("show");
//     return;
//   }

//   if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100) {
//     errorPara.textContent = "Grades must be between 0 and 100.";
//     errorPara.classList.add("show");
//     return;
//   }

//   const average = (grade1 + grade2) / 2;
//   resultPara.textContent = `Average Grade: ${average}`;
// }
