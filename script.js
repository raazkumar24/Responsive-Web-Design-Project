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

//active links
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', function() {
//       document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
//       this.classList.add('active');
//     });
//   });

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

const projectRow = document.querySelector(".col");
const dots = document.querySelectorAll(".dot");
const projects = document.querySelectorAll(".project-box");
const projectWidth = projects[0].offsetWidth + 20; // Project width + gap

document.querySelector(".left-arrow").addEventListener("click", () => {
  projectRow.scrollBy({ left: -projectWidth, behavior: "smooth" });
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  projectRow.scrollBy({ left: projectWidth, behavior: "smooth" });
});

// Update active dot based on the current scroll position
projectRow.addEventListener("scroll", () => {
  const scrollLeft = projectRow.scrollLeft;
  const projectIndex = Math.round(scrollLeft / projectWidth);

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === projectIndex);
  });
});
