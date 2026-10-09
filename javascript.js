// Interactive message and email hand-off for the resume page.
document.addEventListener('DOMContentLoaded', () => {
  const messageButton = document.getElementById('message-button');
  const profileMessage = document.getElementById('profile-message');
  if (messageButton && profileMessage) {
    messageButton.addEventListener('click', () => {
      profileMessage.textContent = 'Thank you for taking the time to view my resume!';
      messageButton.textContent = 'Message shown ✓';
    });
  }

  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message-field').value.trim();
      const subject = encodeURIComponent(`Resume website message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`);
      if (note) note.textContent = 'Opening your email application…';
      window.location.href = `mailto:cynthiasow898@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
