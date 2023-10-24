const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const childs = document.querySelectorAll(".child");
const hidden = document.querySelectorAll(".hidden");

childs.forEach((el) => {
  observer.observe(el);
});
hidden.forEach((el) => {
  observer.observe(el);
});
