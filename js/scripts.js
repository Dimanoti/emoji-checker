document.addEventListener('DOMContentLoaded', function() {
  var signInDialog = document.getElementById('signin-dialog');
  var signUpDialog = document.getElementById('signup-dialog');

  document.querySelector('.js-open-signin').addEventListener('click', function() {
    signInDialog.style.display = 'flex';
    signUpDialog.style.display = 'none';
  });

  document.querySelector('.js-open-signup').addEventListener('click', function() {
    signUpDialog.style.display = 'flex';
    signInDialog.style.display = 'none';
  });

  document.querySelectorAll('.js-close-dialog').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
      signInDialog.style.display = 'none';
      signUpDialog.style.display = 'none';
    });
  });

  document.querySelector('.js-open-signup-dialog').addEventListener('click', function() {
    signUpDialog.style.display = 'flex';
    signInDialog.style.display = 'none';
  });

  document.querySelector('.js-open-signin-dialog').addEventListener('click', function() {
    signInDialog.style.display = 'flex';
    signUpDialog.style.display = 'none';
  });
});
