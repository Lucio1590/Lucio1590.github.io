
document.querySelector('.menu-toggle').addEventListener("click", function() {
  document.querySelector(".nav").classList.toggle("mobile-nav");
  this.classList.toggle("is-active");
});
document.querySelector('.nav').addEventListener("click", function() {
  document.querySelector(".nav").classList.toggle("mobile-nav");
  document.querySelector('.menu-toggle').classList.toggle("is-active");
});