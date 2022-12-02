const navbarToggler = document.querySelector(".header-nav .nav-btn");
const navbarMenuCheckbox = document.querySelector(".my_menu_input");
const navbarLinks = document.querySelectorAll(".menu-list--item__link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", navbarLinkClick);
});

function navbarLinkClick(event) {
  if (navbarMenuCheckbox.checked) {
    // Close navbarMenu in smaller screens
    navbarToggler.click();
  }
}

// Sticky the header by scrolling
const headerNav = document.querySelector(".header-nav");
const sticky = headerNav.offsetTop;
window.addEventListener("scroll", stickyHeader);

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    headerNav.classList.add("sticky");
  } else {
    headerNav.classList.remove("sticky");
  }
}

// smooth scroll
const links = document.querySelectorAll("a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  if (this.getAttribute("href").includes("#")) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// form | set value to date input
document.querySelector("[name='setDate']").valueAsDate = new Date();
