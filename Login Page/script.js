document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation (you can replace this with real authentication logic)
  if (email && password) {
    // Redirect to a new page after successful login
    window.location.href = "../dashboard.html"; // Replace with your actual page
  } else {
    alert("Please enter both email and password.");
  }
});
