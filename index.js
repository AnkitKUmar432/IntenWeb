
document.addEventListener("DOMContentLoaded", () => {
  const authModal = document.getElementById("authModal");
  const closeModal = document.getElementById("closeModal");
  const btnSignIn = document.querySelectorAll(".btn-nav")[0];
  const btnSignUp = document.querySelectorAll(".btn-nav")[1];

  const showLoginBtn = document.getElementById("showLogin");
  const showSignupBtn = document.getElementById("showSignup");

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const showBtn1 = document.getElementById('heroBtn1');
  const showBtn2 = document.getElementById('heroBtn2');

  showBtn1.addEventListener('mouseover', () => {
    showBtn1.classList.add('active');
    showBtn2.classList.remove('active');
  });

  showBtn2.addEventListener('mouseover', () => {
    showBtn2.classList.add('active');
    showBtn1.classList.remove('active');
  });

  btnSignIn.addEventListener("click", () => {
    authModal.classList.remove("hidden");
    showLoginBtn.classList.add("active");
    showSignupBtn.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  });

  // Open modal in signup mode
  btnSignUp.addEventListener("click", () => {
    authModal.classList.remove("hidden");
    showSignupBtn.classList.add("active");
    showLoginBtn.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    authModal.classList.add("hidden");
  });

  // Switch Tabs
  showLoginBtn.addEventListener("click", () => {
    showLoginBtn.classList.add("active");
    showSignupBtn.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  });

  showSignupBtn.addEventListener("click", () => {
    showSignupBtn.classList.add("active");
    showLoginBtn.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });

  // btn-hero1
  // // Optional form submissions
  // loginForm.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     alert("Login submitted!");
  //     authModal.classList.add("hidden");
  // });

  // signupForm.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     alert("Signup submitted!");
  //     authModal.classList.add("hidden");
  // });.
  // Handle Login Form Submit
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = loginForm.querySelector("input[type='text']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        alert("✅ Login successful!");
        authModal.classList.add("hidden");
      } else {
        alert("❌ Login failed: " + data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("⚠️ Something went wrong. Try again.");
    }
  });

  // Handle Signup Form Submit
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = signupForm.querySelector("input[placeholder='Full Name']").value;
    const email = signupForm.querySelector("input[type='email']").value;
    const password = signupForm.querySelector("input[type='password']").value;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (response.ok) {
        alert("✅ Signup successful!");
        authModal.classList.add("hidden");
      } else {
        alert("❌ Signup failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("⚠️ Something went wrong during signup.");
    }
  });

});
