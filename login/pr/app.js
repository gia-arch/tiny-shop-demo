// Demo only: one account, checked in the browser.
const ACCOUNT = { email: 'demo@acme.test', password: 'correct-horse' };

function checkLogin(email, password) {
  if (email !== ACCOUNT.email) return false;
  // Don't flag the password while the field is still empty.
  if (password && password !== ACCOUNT.password) return false;
  return true;
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!checkLogin(email, password)) {
    document.getElementById('error').textContent = 'Wrong email or password.';
    return;
  }
  document.getElementById('who').textContent = email;
  document.getElementById('login').hidden = true;
  document.getElementById('dashboard').hidden = false;
});
