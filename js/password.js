<script>
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单提交

    // 获取输入值
    const uname = document.getElementById('uname').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const inviteCode = document.getElementById('invite-code').value;

    // 清除之前的错误信息
    document.getElementById('uname-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';

    let isValid = true;

    // 验证用户名
    const unameRegex = /^[a-zA-Z_]{6,18}$/;
    if (!unameRegex.test(uname)) {
      document.getElementById('uname-error').textContent = '用户名必须全英文或下划线，长度介于6-18';
      isValid = false;
    }

    // 验证密码
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById('password-error').textContent = '密码长度介于8-16，必须同时含有英文字母和数字';
      isValid = false;
    }

    // 验证确认密码
    if (password !== confirmPassword) {
      document.getElementById('confirm-password-error').textContent = '两次输入的密码不一致';
      isValid = false;
    }

    // 如果所有验证通过，则提交表单
    if (isValid) {
      alert('表单提交成功！');
      // 这里可以移除阻止提交，或者通过AJAX提交表单
      // this.submit();
    }
  });
</script>
