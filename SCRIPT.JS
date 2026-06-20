// ===== SMOOTH SCROLL NAV =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// ===== HERO BUTTON ACTION =====
const btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// ===== CONTACT FORM SIMPLE ALERT =====
const form = document.querySelector(".contact form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully! 🚀 I will contact you soon.");
    form.reset();
  });
}

// ===== SMALL ANIMATION ON SCROLL =====
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.5s ease";
    }
  });
});