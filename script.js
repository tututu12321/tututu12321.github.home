const toTopButton = document.getElementById("toTopButton");

if (toTopButton) {
  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
