document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // form ko refresh hone se roke

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    alert("✅ Form submitted successfully!");
    // Aap yahan actual submit code laga sakte hain (backend ya database ke liye)
  } else {
    alert("❌ Password and Confirm Password do not match!");
  }
});