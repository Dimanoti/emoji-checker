document.addEventListener('DOMContentLoaded', function() {
  const unameInput = document.getElementById('uname');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const unameError = document.getElementById('uname-error');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');
  const signupForm = document.getElementById('signup-form');

  const validateUsername = (value) => {
    const regex = /^[a-zA-Z_]{6,18}$/;
    if (!regex.test(value)) {
      unameError.textContent = '用户名必须全英文或下划线，长度介于6-18';
      unameError.style.display = 'block';
      return false;
    } else {
      unameError.style.display = 'none';
      return true;
    }
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if (!regex.test(value)) {
      passwordError.textContent = '密码长度介于8-16，必须同时含有英文字母和数字';
      passwordError.style.display = 'block';
      return false;
    } else {
      passwordError.style.display = 'none';
      return true;
    }
  };

  const validateConfirmPassword = (value) => {
    if (value !== passwordInput.value) {
      confirmPasswordError.textContent = '两次输入的密码不一致';
      confirmPasswordError.style.display = 'block';
      return false;
    } else {
      confirmPasswordError.style.display = 'none';
      return true;
    }
  };

  unameInput.addEventListener('input', () => {
    validateUsername(unameInput.value);
  });

  passwordInput.addEventListener('input', () => {
    validatePassword(passwordInput.value);
    validateConfirmPassword(confirmPasswordInput.value); // Also validate confirm password when password changes
  });

  confirmPasswordInput.addEventListener('input', () => {
    validateConfirmPassword(confirmPasswordInput.value);
  });

  signupForm.addEventListener('submit', (event) => {
    if (!validateUsername(unameInput.value) || !validatePassword(passwordInput.value) || !validateConfirmPassword(confirmPasswordInput.value)) {
      event.preventDefault(); // Prevent form submission if validation fails
      alert('请检查输入内容，并修正错误');
    }
  });
});
