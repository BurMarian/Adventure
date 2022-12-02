// duraction of animation
document.documentElement.style.setProperty("--animate-duration", "1.5s");

// animation of section title
const sectionTitles = document.querySelectorAll(".section-title");
sectionTitles.forEach((el) => {
  el.classList.add("animate__animated", "animate__rubberBand", "animate__fast");
});

// animation of modal card title
const modalCardTitle = document.querySelectorAll(".modal-card--header > h1");
modalCardTitle.forEach((el) => {
  el.classList.add("animate__animated", "animate__rubberBand", "animate__fast");
});

// observe for elements which have class animate__animated
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationName = "";
    } else {
      entry.target.style.animationName = "none";
    }
  });
});

const elements = document.querySelectorAll(".animate__animated");
elements.forEach((el) => observer.observe(el));
