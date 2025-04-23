// 1. Button Click - Change Text
document.getElementById('btnChangeText').addEventListener('click', () => {
  document.getElementById('btnChangeText').textContent = 'Text Changed!';
  document.getElementById('btnChangeText').style.backgroundColor = '#28a745';
});

// 2. Hover Effect - Change Button Color
document.getElementById('btnHoverEffect').addEventListener('mouseover', () => {
  document.getElementById('btnHoverEffect').style.backgroundColor = '#17a2b8';
});
document.getElementById('btnHoverEffect').addEventListener('mouseout', () => {
  document.getElementById('btnHoverEffect').style.backgroundColor = '#007BFF';
});

// 3. Keypress Detection
document.getElementById('keypressInput').addEventListener('keyup', (event) => {
  const message = document.getElementById('keypressMessage');
  if (event.key === 'Enter') {
    message.textContent = 'You pressed Enter!';
  } else {
    message.textContent = `You typed: ${event.target.value}`;
  }
});

// 4. Accordion Style Content
const accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// 5. Image Gallery - Click to Enlarge Image
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    alert('You clicked on an image!');
  });
});

// 6. Form Validation
document.getElementById('registrationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (username.length < 5) {
    formMessage.textContent = 'Username must be at least 5 characters.';
    return;
  }

  if (!email.includes('@')) {
    formMessage.textContent = 'Please enter a valid email.';
    return;
  }

  if (password.length < 8) {
    formMessage.textContent = 'Password must be at least 8 characters.';
    return;
  }

  formMessage.textContent = 'Form submitted successfully!';
  formMessage.style.color = 'green';
});

  