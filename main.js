const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

document.querySelector("#year").textContent = new Date().getFullYear();

/*
  PERSONALIZE BEFORE PUBLISHING:
  1. Add your professional email below.
  2. Add your LinkedIn profile URL if you want it displayed.
  3. Only list skills and projects you can confidently discuss in an interview.
*/
const CONTACT_EMAIL = ""; // Example: "your.name@example.com"
const LINKEDIN_URL = "";  // Example: "https://www.linkedin.com/in/your-profile/"

const contactButton = document.querySelector("#copy-email");
const contactHint = document.querySelector("#contact-hint");

if (contactButton) {
  if (CONTACT_EMAIL) {
    contactButton.dataset.email = CONTACT_EMAIL;
    contactButton.innerHTML = 'Email me <span>↗</span>';
    contactButton.addEventListener("click", () => {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    });
    if (contactHint) contactHint.textContent = "Use the email button to get in touch.";
  } else {
    contactButton.addEventListener("click", () => {
      if (contactHint) contactHint.textContent = "Open assets/js/main.js and add your professional email to CONTACT_EMAIL before publishing.";
    });
  }
}

// LINKEDIN_URL is intentionally not shown until a real profile URL is added.
