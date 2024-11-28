document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const signInBtn = document.getElementById("sign-in-btn");
    const signUpBtn = document.getElementById("sign-up-btn");
    const closeModalBtn = document.getElementById("close-modal");
    const signInForm = document.getElementById("sign-in-form");
    const signUpForm = document.getElementById("sign-up-form");

    signInBtn.addEventListener("click", function() {
        signUpForm.style.display = "none";
        signInForm.style.display = "block";
        modal.style.display = "block";
    });

    signUpBtn.addEventListener("click", function() {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
        signInForm.style.display = "none";
        signUpForm.style.display = "none";
    });

    // Close the modal if the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            signInForm.style.display = "none";
            signUpForm.style.display = "none";
        }
    };
});
