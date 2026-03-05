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

function fetch(username, password, age, email, male) {
  if (male) {
    gender = "male";
  } else {
    gender = "female";
  }
  console.log(
    username + " " + password + " " + age + " " + email + " " + gender,
  );
}
