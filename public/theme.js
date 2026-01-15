(function () {
  const btn = document.getElementById("alterarTema");
  if (!btn) return;

  function aplicarTema(isDark) {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    btn.textContent = isDark ? "☀️" : "🌙";
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
  }

  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  aplicarTema(isDark);

  btn.addEventListener("click", function () {
    aplicarTema(!document.body.classList.contains("dark"));
  });
})();
