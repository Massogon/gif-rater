//added login validation

// Client-side validation function for passwords
const validatePassword = (password) => {
  const errors = [];

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter.');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character.');
  }
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }
  return errors;
};

// Handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();


  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json(); // Parse JSON response

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/gifrater');
    } else {
      alert(response.statusText);
      // Display specific error message from server
      alert(result.message || 'Login failed. Please try again.');
    }
  }
};

// Handle signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  const passwordErrors = validatePassword(password);

  if (passwordErrors.length > 0) {
    // Display client-side validation errors
    alert(passwordErrors.join('\n'));
    return;
  }

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json(); // Parse JSON response

    if (response.ok) {
      // Redirect if successful
      document.location.replace('/gifrater');
    } else {
      alert(result.message || 'Registration failed. Please try again.');
    }
  }
};

// Update password requirements message dynamically
const passwordInput = document.querySelector('#password-signup');
const passwordRequirements = document.querySelector('#password-requirements');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const errors = validatePassword(password);

  if (errors.length > 0) {
    passwordRequirements.innerHTML = errors.join('<br>');
    passwordRequirements.style.color = 'red';
  } else {
    passwordRequirements.innerHTML = 'Password meets all requirements.';
    passwordRequirements.style.color = 'green';
  }
});

// Attach event listeners
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);