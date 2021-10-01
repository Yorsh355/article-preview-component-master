const btnShow = document.querySelectorAll(".btn-show");
const overlay = document.querySelector(".overlay");

btnShow.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.classList.toggle("active");
  });
});
