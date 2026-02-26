document.querySelector("form").addEventListener("submit", function (e) {
  const form = document.querySelector("form").elements;
  fetch(
    form.username.value,
    form.password.value,
    form.age.value,
    form.email.value,
    form.male.value,
  );
  e.preventDefault();
});

function fetch(userName, password, age, email, male) {
  let gender;
  if (male) {
    gender = "male";
  } else {
    gender = "female";
  }
  console.log(
    userName + " " + password + " " + age + " " + email + " " + gender,
  );
}
