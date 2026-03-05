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

  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");

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
    alert("Login is successful!");
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
//   შეავსეთ ფუნქცია კოდით რომელიც ამოწმებს
//   იუზერნეიმი და პაროლი რომ არ იყოს ცარიელი
//   ასევე, ბაზაში (database array ზემოთ მოცემული) გვაქვს თუ არა მომხმარებელი მსგავსი იუზერით და პაროლით
//   თუ მომხმარებელი მოიძებნა, დაბეჭდეთ "Login successful." ალერტით
//   თუ იუზერი ცარიელი დაბეჭდეთ "Username cannot be empty." p ელემენტზე
//   თუ პაროლი ცარიელი დაბეჭდეთ "Password cannot be empty." p ელემენტზე
// თუ მომხმარებელი არ მოიძებნა დაბეჭდეთ "Incorrect username or password." p ელემენტზე
