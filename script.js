
// THE FUTURE LAB
// Interactive features

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Welcome message
console.log("Welcome to The Future Lab.");

// Card reveal animation
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  observer.observe(card);
});
