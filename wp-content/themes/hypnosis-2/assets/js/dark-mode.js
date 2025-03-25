/* скрипт для темного режима*/

const toggleSwitch = document.querySelector('.theme-switch');

if (localStorage.theme) {
  toggleSwitch.checked = localStorage.theme === "dark";
}

function switchTheme(e) {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.theme = theme;
}

toggleSwitch.addEventListener("change", switchTheme);
