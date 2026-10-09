document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const messageButton = document.getElementById("message-button");
  const profileMessage = document.getElementById("profile-message");
  const messages = [
    "Welcome to my digital resume. Thanks for stopping by.",
    "I believe every new skill begins with the courage to learn.",
    "I am growing my technology skills one step at a time."
  ];
  let messageIndex = 0;
  if (messageButton && profileMessage) {
    messageButton.addEventListener("click", () => {
      messageIndex = (messageIndex + 1) % messages.length;
      profileMessage.textContent = messages[messageIndex];
    });
  }

  const form = document.getElementById("contact-form");
  const formNote = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message-field").value.trim();

      if (!name || !email || !message) {
        if (formNote) formNote.textContent = "Please complete all fields before preparing your email.";
        return;
      }

      const subject = encodeURIComponent("Resume website message from " + name);
      const body = encodeURIComponent("From: " + name + "\nEmail: " + email + "\n\n" + message);
      if (formNote) formNote.textContent = "Opening your email app. Please review the message and send it there.";
      window.location.href = "mailto:cynthiasow898@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window && sections.length && links.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            const active = link.getAttribute("href") === "#" + entry.target.id;
            link.classList.toggle("active", active);
          });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
});
