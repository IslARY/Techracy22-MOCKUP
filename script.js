gsap.registerPlugin(ScrollTrigger);
const miniNav = document.querySelector(".mini-nav");
let miniRect = miniNav.getBoundingClientRect();
let tl = gsap.timeline();
tl.to(".nav-bar",{
	scrollTrigger: {
		trigger: ".nav-container",
		start: "+=0",
		end: "130px",
		scrub: 1,
		//markers: false,
	},
	duration: 3,
	ease: "power2.out",
	scale: "0.7",
	y: "-100px",
	// x: `${miniRect.x - 100}px`,
	// y: `${miniRect.y }px`,
}).to(".mini-nav",{
	scrollTrigger: {
		trigger: "body",
		start: "100",
		end: "bottom",
		scrub: 1,
		//markers: true,
		toggleClass:{targets:'.mini-nav',className:'is-Scrolled'},
	},
})
