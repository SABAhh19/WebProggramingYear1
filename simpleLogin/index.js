const database = [
  { username: "alice", password: "alice123" },
  { username: "bob", password: "bob123" },
  { username: "charlie", password: "charlie123" },
];

function LogIn(event) {
  // 1. Fix: preventDefault takes no arguments
  event.preventDefault();

  // 2. Get values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  // 3. Validation
  if (username == "") {
    errorMessage.textContent = "Username is empty";
    return;
  }
  if (password == "") {
    errorMessage.textContent = "Password is empty";
    return; // 4. Fix: Stop execution if password is empty
  }

  // 5. Fix: Correct logic to find the user in the database
  const user = database.find(function (e) {
    return e.username === username && e.password === password;
  });

  if (user) {
    alert("Login is successful");
  } else {
    errorMessage.textContent = "Incorrect username or password";
  }
}
//   შეავსეთ ფუნქცია კოდით რომელიც ამოწმებს
//   იუზერნეიმი და პაროლი რომ არ იყოს ცარიელი
//   ასევე, ბაზაში (database array ზემოთ მოცემული) გვაქვს თუ არა მომხმარებელი მსგავსი იუზერით და პაროლით
//   თუ მომხმარებელი მოიძებნა, დაბეჭდეთ "Login successful." ალერტით
//   თუ იუზერი ცარიელი დაბეჭდეთ "Username cannot be empty." p ელემენტზე
//   თუ პაროლი ცარიელი დაბეჭდეთ "Password cannot be empty." p ელემენტზე
// თუ მომხმარებელი არ მოიძებნა დაბეჭდეთ "Incorrect username or password." p ელემენტზე
