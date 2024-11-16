const btn = document.querySelector(".navbar-toggler");
const open = document.querySelector(".navbar-toggler-icon");
const close = document.querySelector(".btn-close");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
});

// Function to highlight the active link based on scroll position
window.addEventListener("scroll", () => {
  let currentSection = "";
  const sections = document.querySelectorAll("section"); // Adjust if you use different tags or IDs for sections

  // Determine which section is currently in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Update the active class on nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});
