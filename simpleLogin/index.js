const database = [
  { username: "alice", password: "alice123" },
  { username: "bob", password: "bob123" },
  { username: "charlie", password: "charlie123" },
];

function LogIn(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");
  const successMessage = document.getElementById("success-message");

  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");
  successMessage.textContent = "";
  successMessage.classList.remove("visible");

  if (username.length < 4) {
    showError("Username must be at least 4 characters");
    return;
  }

  if (password.length < 6) {
    showError("Password must be at least 6 characters");
    return;
  }

  if (username === "") {
    showError("Username is empty");
    return;
  }
  if (password === "") {
    showError("Password is empty");
    return;
  }

  const user = database.find(
    (e) => e.username === username && e.password === password,
  );

  if (user) {
    showSuccess("Everything is correct");
    document.querySelector("form").reset();
  } else {
    showError("Incorrect username or password");
  }
}

function showError(msg) {
  const el = document.getElementById("error-message");
  el.textContent = msg;
  el.classList.add("visible");
}

function showSuccess(msg) {
  const el = document.getElementById("success-message");
  el.textContent = msg;
  el.classList.add("visible");
}

function showSuccess(msg) {
  const el = document.getElementById("success-message");
  el.textContent = msg;
  el.classList.add("visible");
}
