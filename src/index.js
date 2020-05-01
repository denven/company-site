// For homepage slides

// new Glide('.glide').mount();   // equivalent to the following 2 lines
const glide = new Glide(".glide");

// Add animation effect for each glide slide's caption
glide.on(["mount.after", "run.after"], () => {
  glide.on("run.before", () => {
    document
      .querySelectorAll(".slide-caption > *")
      .forEach(el => (el.style.opacity = 0));
  });

  const captionsEl = document.querySelectorAll(".slide-caption");
  const caption = captionsEl[glide.index];
  anime({
    targets: caption.children, // 3 elements: h1/h3/button
    opacity: [0, 1],
    duration: 1000, // total duration of all animations
    easing: "linear",
    delay: anime.stagger(400, { start: 300 }), // intervals, show up one by one
    translateY: [anime.stagger([40, 10]), 0]
  });
});

glide.mount();

// For Products Sectino Images filter & sort layouts
const isotope = new Isotope(".cases", {
  layoutMode: "fitRows",
  itemSelector: ".case-item"
});

const filterBtns = document.querySelector(".filter-btns");
filterBtns.addEventListener("click", e => {
  const filterOption = e.target.getAttribute("data-filter");
  if (filterOption) {
    document
      .querySelectorAll(".filter-btn.active")
      .forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    isotope.arrange({ filter: filterOption });
  }
});
