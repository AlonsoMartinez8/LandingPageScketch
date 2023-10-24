const btnTheme = document.getElementById("theme");
const iconTheme = document.getElementById("theme-icon");
const moon = '<i class="ri-contrast-2-line"></i>';
const sun = '<i class="ri-sun-line"></i>';

iconTheme.innerHTML = moon;
document.body.classList.add("light-theme");

function toggleTheme() {
  if (iconTheme.innerHTML == moon) {
    iconTheme.innerHTML = "";
    iconTheme.innerHTML = sun;
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    iconTheme.innerHTML = "";
    iconTheme.innerHTML = moon;
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
}

btnTheme.addEventListener("click", () => {
  toggleTheme();
});
