(function () {
  var root = document.documentElement;
  var storageKey = "theme";

  function preferredTheme() {
    try {
      var stored = localStorage.getItem(storageKey);
      if (stored === "light" || stored === "dark") return stored;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#16181a" : "#ffffff");
    }
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
      btn.setAttribute(
        "title",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    });
  }

  function toggleTheme() {
    var next =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(storageKey, next);
    } catch (e) {}
    applyTheme(next);
  }

  applyTheme(preferredTheme());

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".theme-toggle");
    if (btn) {
      e.preventDefault();
      toggleTheme();
    }
  });

  try {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        try {
          if (localStorage.getItem(storageKey)) return;
        } catch (err) {}
        applyTheme(e.matches ? "dark" : "light");
      });
  } catch (e) {}
})();
