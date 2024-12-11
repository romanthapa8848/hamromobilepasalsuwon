// Add sticky class when the page is scrolled
window.onscroll = function () {
  addStickyClass();
  closeMenuOnScroll(); // Close the mobile menu if scrolling
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function addStickyClass() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Toggle the mobile menu
function toggleMenu() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// Close the mobile menu when a navigation link is clicked
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    var nav = document.querySelector("nav");
    nav.classList.remove("active"); // Remove 'active' class to hide the menu
  });
});

// Close the mobile menu when scrolling
function closeMenuOnScroll() {
  var nav = document.querySelector("nav");
  if (nav.classList.contains("active")) {
    nav.classList.remove("active"); // Remove 'active' class to hide the menu
  }
}
