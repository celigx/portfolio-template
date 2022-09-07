const toggleNavbar = () => {
  const links = document.querySelector(".links-container");
  links.classList.toggle("show");

  // Hide mobile nav overflow on click
  const body = document.querySelector("body");
  body.classList.toggle("no-scroll");
};
