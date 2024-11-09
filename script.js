document.addEventListener("DOMContentLoaded", (event) => {
  const hamburgerIcon = document.querySelector(
    ".header__hamburger-icon svg path"
  );
  const mobileNavContainer = document.querySelector(".mobile-nav");

  function handleHamburgerIconColor() {
    if (hamburgerIcon.getAttribute("fill") == "hsla(0, 0%, 100%)")
      hamburgerIcon.setAttribute("fill", "hsla(0, 0%, 100%, 0.500)");
    else hamburgerIcon.setAttribute("fill", "hsla(0, 0%, 100%)");
  }

  function handleClick() {
    handleHamburgerIconColor();
    mobileNavContainer.classList.toggle("active");
  }

  hamburgerIcon.parentElement.addEventListener("click", handleClick);
});
