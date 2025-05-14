// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Profile picture upload
  const profilePic = document.querySelector(".profile-pic-upload");
  if (profilePic) {
    const fileInput = document.getElementById("profile-pic");
    profilePic.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleFileUpload);
  }

  // Dropdown menus
  setupDropdown('dropdown-button', 'dropdown-menu', 'selected-option');
  setupGenericDropdown(); // For the first button dropdown
  setupMobileMenu('menu-btn', 'menu');

  // Password fields
  setupPasswordField('password', 'togglePassword');
  setupPasswordField('confirmPassword', 'toggleConfirmPassword');
  
  // Password strength and matching
  setupPasswordValidation();

  // Social buttons
  setupSocialButtons();
});

// Helper functions
function handleFileUpload(e) {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      document.querySelector(".profile-pic-upload img").src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
}

// For the first button dropdown in your original code
function setupGenericDropdown() {
  document.querySelectorAll("button").forEach(button => {
    if (!button.id) { // Only target generic buttons without IDs
      button.addEventListener("click", function() {
        const dropdown = this.closest(".relative")?.querySelector(".absolute");
        if (dropdown) dropdown.classList.toggle("hidden");
      });
    }
  });
}

function setupDropdown(buttonId, menuId, optionId) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  const menu = document.getElementById(menuId);
  const selectedOption = document.getElementById(optionId);

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });

  // Option selection
  if (menu && selectedOption) {
    menu.querySelectorAll('[data-option]').forEach(option => {
      option.addEventListener('click', function() {
        selectedOption.innerText = this.getAttribute('data-option') || this.textContent;
        menu.classList.add('hidden');
      });
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (event) => {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.add('hidden');
    }
  });
}

function setupMobileMenu(buttonId, menuId) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  const menu = document.getElementById(menuId);
  
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  });

  document.addEventListener('click', (event) => {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
    }
  });
}

function setupPasswordField(inputId, toggleId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const toggle = document.getElementById(toggleId);
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
    }
  });
}

function setupPasswordValidation() {
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('confirmPassword');
  const matchText = document.getElementById('passwordMatch');
  
  if (passwordInput) {
    passwordInput.addEventListener('input', checkPasswordStrength);
  }
  
  if (confirmInput) {
    confirmInput.addEventListener('input', () => {
      if (passwordInput && matchText) {
        matchText.classList.toggle('hidden', passwordInput.value === confirmInput.value);
      }
    });
  }
}

function checkPasswordStrength() {
  const password = this.value;
  const strengthBar = document.getElementById('passwordStrength');
  const strengthText = document.getElementById('strengthText');
  
  if (!strengthBar || !strengthText) return;

  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  if (password.length === 0) {
    strengthBar.style.width = '0%';
    strengthText.textContent = '';
  } else {
    strengthBar.style.width = `${20 + (strength * 20)}%`;
    strengthBar.className = `password-strength ${
      strength <= 2 ? 'bg-red-500' : 
      strength <= 4 ? 'bg-yellow-500' : 'bg-green-500'
    } rounded-full h-1`;
    strengthText.textContent = strength <= 2 ? 'Weak' : strength <= 4 ? 'Medium' : 'Strong';
  }
}

function setupSocialButtons() {
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-2px)');
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
  });
}