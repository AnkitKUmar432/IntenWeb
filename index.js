document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.querySelector(".btn-nav:first-child");
  const signUpBtn = document.querySelector(".btn-nav:last-child");

  signInBtn.addEventListener("click", () => {
    alert("Sign In button clicked!");
    
  });

  signUpBtn.addEventListener("click", () => {
    alert("Sign Up button clicked!");
    
  });
});
