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
	// percentPosition: true,
	itemSelector: ".case-item"
	// masonry: {
	//   columnWidth: ".case-item",
	//   isFitWidth: true
	// }
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

const displayStickyHeader = () => {
	const headerEle = document.querySelector("header");
	window.addEventListener("scroll", function(event) {
		if (window.pageYOffset > 500) {
			if (!headerEle.classList.contains("sticky")) {
				headerEle.classList.add("sticky");
			}
		} else {
			headerEle.classList.remove("sticky");
		}
	});

	// Hide header when clicking page content area
	// window.addEventListener("click", function(event) {
	//   if (event.clientY > 100) {
	//     if (headerEle.classList.contains("sticky")) {
	//       headerEle.classList.remove("sticky");
	//     }
	//   }
	// });
};

const updateScrollBtnPosition = function() {
	const scrollBtn = document.querySelector(".scrollToTop");

	scrollBtn.style.display = "none";
	window.addEventListener("scroll", function(event) {
		event.preventDefault();

		// show button only when it's top is below the App title
		if (this.scrollY > 120) {
			scrollBtn.style.display = "block";
		} else {
			scrollBtn.style.display = "none";
		}
	});

	// This is commented because SmoothScroll lib is used to do this job
	// let page go top when user clicked this button
	// scrollBtn.addEventListener("click", e => {
	//   e.preventDefault();
	//   window.scrollTo(0, 0, "smooth");
	// });
};

const displayMobileMenu = () => {
	const menuBtnEle = document.querySelector("#menu-btn");
	const headerEle = document.querySelector("header");

	menuBtnEle.addEventListener("click", e => {
		e.target.classList.toggle("burger-button");
		e.target.classList.toggle("burger-close");

		headerEle.classList.toggle("open-menu");
	});

	window.addEventListener("click", e => {
		const headerNavEle = document.querySelector("nav");
		const top = headerNavEle.getBoundingClientRect().top;
		const bottom = headerNavEle.getBoundingClientRect().bottom;
		const left = headerNavEle.getBoundingClientRect().left;
		const right = headerNavEle.getBoundingClientRect().right;

		if (
			e.clientX < left ||
			e.clientX > right ||
			e.clientY < top ||
			e.clientY > bottom
		) {
			menuBtnEle.classList.add("burger-button");
			menuBtnEle.classList.remove("burger-close");

			if (headerEle.classList.contains("open-menu")) {
				headerEle.classList.remove("open-menu");
			}
		}
	});
};

displayStickyHeader();
updateScrollBtnPosition();
displayMobileMenu();

// Animations by ScrollReaval
const scrollOption = {
	delay: 300,
	distance: "50px",
	duration: 500,
	easing: "ease-in-out",
	origin: "bottom"
};

ScrollReveal().reveal(".feature", { ...scrollOption, interval: 350 });
ScrollReveal().reveal(".service-item", { ...scrollOption, interval: 350 });
ScrollReveal().reveal(".team-member", { ...scrollOption, interval: 350 });

const dataSectionEle = document.querySelector(".data-section");
ScrollReveal().reveal(".data-section", {
	beforeReveal: () => {
		anime({
			targets: ".data-piece .piece-num",
			innerHTML: el => {
				return [0, el.innerHTML];
			},
			duration: 2000,
			round: 1, // increase by an integer number
			easing: "easeInExpo"
		});

		dataSectionEle.style.backgroundPosition = `center calc(50% - ${dataSectionEle.getBoundingClientRect()
			.bottom / 5})px`;
	}
});

window.addEventListener("scroll", () => {
	const top = dataSectionEle.getBoundingClientRect().top;
	const bottom = dataSectionEle.getBoundingClientRect().bottom;

	// check element positin visible in browser or not
	if (bottom >= 0 && top <= window.innerHeight) {
		dataSectionEle.style.backgroundPosition = `center calc(50% - ${bottom /
			5})px)`;
	}
});

// Use SmoothScroll lib to generate a scroll effection when clicking anchors
const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]', {
	header: "header",
	offset: 20 // set the value to header/nav's height when header is not shown
});

const exploreBtnEles = document.querySelectorAll(".explore-btn");
exploreBtnEles.forEach(exploreBtnEle => {
	exploreBtnEle.addEventListener("click", () => {
		scroll.animateScroll(document.querySelector("#about"));
	});
});
