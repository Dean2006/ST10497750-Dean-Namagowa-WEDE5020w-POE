//dark mode toggle

document.querySelector("#toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//contact form validation

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // block reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const messageType = document.getElementById("messageType").value;
    const message = document.getElementById("message").value.trim();
    let errors = [];

    // Strong email regex
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Name validation
    if (name.length < 5) {
      errors.push("Name must be at least 5 characters.");
    }

    // Email validation
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // Phone validation (optional)
    if (phone && !/^\d{10}$/.test(phone)) {
      errors.push("Phone number must be 10 digits.");
    }

    // Message type
    if (!messageType) {
      errors.push("Please select a message type.");
    }

    // Message content
    if (message.length < 10) {
      errors.push("Message must be at least 10 characters.");
    }

    // Show errors
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    // Success
    alert("Message sent successfully! We’ll contact you soon.");
    form.reset();
  });
}

//scroll reveal animation
const sections = document.querySelectorAll(".contact-info, .map-wrap");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

//navigation active link highlighting

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
