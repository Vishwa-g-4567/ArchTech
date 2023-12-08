const moveTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y >= 500) {
    moveTop.classList.add("active");
  } else {
    moveTop.classList.remove("active");
  }
});

const btnshow = document.querySelector(".btn-show");
const navbar = document.querySelector(".navbar");

btnshow.addEventListener("click", () => {
  navbar.classList.toggle("open");
  btnshow.classList.toggle("open");
});
