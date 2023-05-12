const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Assume username and password are stored in a database or file
  const storedUsername = "user";
  const storedPassword = "pass";

  if (username === storedUsername && password === storedPassword) {
    window.location.href = "/employedetails.html";
  } else {
    alert("Invalid username or password.");
  }
});
