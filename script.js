const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  menu.setAttribute("aria-expanded", nav.classList.toggle("open"));
});
nav.addEventListener("click", () => nav.classList.remove("open"));

document.getElementById("year").textContent = new Date().getFullYear();

// No backend on GitHub Pages, so the form opens the visitor's email client.
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:info@unidossystems.com?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
});
