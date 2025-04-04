// This script is optional and allows smooth scrolling on click for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {  
    history.back();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section");
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach((el) => observer.observe(el));
  });

