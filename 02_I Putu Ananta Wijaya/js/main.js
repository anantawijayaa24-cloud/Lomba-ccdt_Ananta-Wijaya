const html = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");
const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");

function applyTheme(dark) {
    html.classList.toggle("dark", dark);
    if (iconSun) iconSun.classList.toggle("hidden", !dark);
    if (iconMoon) iconMoon.classList.toggle("hidden", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
}

const stored = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(stored ? stored === "dark" : prefersDark);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        const isDark = html.classList.contains("dark");
        applyTheme(!isDark);
    });
}

if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800, // Durasi animasi dalam milidetik
        once: true     // Animasi hanya jalan 1 kali saat di-scroll
    });
}

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");

menuToggle.addEventListener("click", () => { 
  const isHidden = mobileMenu.classList.toggle("hidden"); 
  iconMenu.classList.toggle("hidden", !isHidden);
  iconClose.classList.toggle("hidden", isHidden); 
});
mobileMenu.querySelectorAll("a").forEach((link) => { 
  link.addEventListener("click", () => { 
    mobileMenu.classList.add("hidden"); 
    iconMenu.classList.remove("hidden"); 
    iconClose.classList.add("hidden");
  });
});