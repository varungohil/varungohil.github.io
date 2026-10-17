(function () {
  var COPY_ICON =
    '<svg class="copy-code-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>' +
    "</svg>";
  var CHECK_ICON =
    '<svg class="copy-code-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>' +
    "</svg>";

  function getCodeText(pre) {
    var code = pre.querySelector("code");
    return (code || pre).textContent.replace(/\n$/, "");
  }

  function setIcon(btn, html, label) {
    btn.innerHTML = html;
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  function wrapPre(pre) {
    if (pre.closest(".code-block")) return;

    var wrap = document.createElement("div");
    wrap.className = "code-block";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-code-btn";
    setIcon(btn, COPY_ICON, "Copy code");
    wrap.appendChild(btn);

    btn.addEventListener("click", function () {
      var text = getCodeText(pre);
      var done = function () {
        setIcon(btn, CHECK_ICON, "Copied");
        btn.classList.add("is-copied");
        window.setTimeout(function () {
          setIcon(btn, COPY_ICON, "Copy code");
          btn.classList.remove("is-copied");
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text, done);
        });
      } else {
        fallbackCopy(text, done);
      }
    });
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      done();
    } catch (e) {
      /* ignore */
    }
    document.body.removeChild(ta);
  }

  function init() {
    var root = document.querySelector(".post-body") || document;
    root.querySelectorAll("pre").forEach(wrapPre);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
