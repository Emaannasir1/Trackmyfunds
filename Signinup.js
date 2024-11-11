function togglePassword() {
    const passwordField = document.getElementById("password");
    const passwordToggle = document.querySelector(".toggle-password");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      passwordToggle.textContent = "🙈";
    } else {
      passwordField.type = "password";
      passwordToggle.textContent = "👁️";
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login button clicked!");
  });
  // Toggle password visibility
document.querySelectorAll(".toggle-password").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling;
      if (input.type === "password") {
        input.type = "text";
        toggle.textContent = "🙈";
      } else {
        input.type = "password";
        toggle.textContent = "👁️";
      }
    });
  });
  
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign-up form submitted successfully!");
  });
  