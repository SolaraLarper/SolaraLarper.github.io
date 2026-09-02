// Tiny entrance animation — no framework required.
const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.animate(
      [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 500, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards" }
    );
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

cards.forEach(card => observer.observe(card));
