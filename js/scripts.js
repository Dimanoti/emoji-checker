// Get the modal
var signInModal = document.getElementById("signInModal");
var signUpModal = document.getElementById("signUpModal");

// Get the button that opens the modal

// Function to open the Sign In Modal
function openModal(modalId) {
  if (modalId === 'signIn') {
    signInModal.style.display = "block";
  } else if (modalId === 'signUp') {
    signUpModal.style.display = "block";
  }
}

// Function to close the modal
function closeModal(modalId) {
  if (modalId === 'signInModal') {
    signInModal.style.display = "none";
  } else if (modalId === 'signUpModal') {
    signUpModal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signInModal || event.target == signUpModal) {
    signInModal.style.display = "none";
    signUpModal.style.display = "none";
  }
}
