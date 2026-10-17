(function () {
  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/&amp;/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 80);
  }

  function uniqueId(base, used) {
    var id = base || "section";
    var n = 2;
    var candidate = id;
    while (used[candidate] || document.getElementById(candidate)) {
      candidate = id + "-" + n;
      n += 1;
    }
    used[candidate] = true;
    return candidate;
  }

  function headingText(el) {
    return (el.textContent || "").replace(/\s+/g, " ").trim();
  }

  function collectHeadingItems(root) {
    var used = {};
    var items = [];
    root.querySelectorAll("h2, h3, h4").forEach(function (el) {
      var text = headingText(el);
      if (!text) return;
      if (!el.id) el.id = uniqueId(slugify(text), used);
      else used[el.id] = true;
      items.push({
        id: el.id,
        text: text,
        level: parseInt(el.tagName.charAt(1), 10),
      });
    });
    return items;
  }

  function shorten(text, maxLen) {
    if (text.length <= maxLen) return text;
    var cut = text.slice(0, maxLen - 1);
    var lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > maxLen * 0.55) cut = cut.slice(0, lastSpace);
    return cut.replace(/[.,;:!?–—-]+$/, "") + "…";
  }

  function collectQaItems(root) {
    var used = {};
    var items = [];
    root.querySelectorAll(".qa").forEach(function (qa, i) {
      var q = qa.querySelector(".qa-q p");
      if (!q) return;
      var text = headingText(q);
      if (!text) return;
      if (!qa.id) qa.id = uniqueId("q-" + (i + 1) + "-" + slugify(text), used);
      else used[qa.id] = true;
      items.push({
        id: qa.id,
        text: "Q" + (i + 1) + ". " + shorten(text, 72),
        fullText: text,
        level: 2,
      });
    });
    return items;
  }

  function normalizeLevels(items) {
    if (!items.length) return items;
    var min = items.reduce(function (m, it) {
      return Math.min(m, it.level);
    }, 6);
    return items.map(function (it) {
      return {
        id: it.id,
        text: it.text,
        fullText: it.fullText || it.text,
        depth: it.level - min,
      };
    });
  }

  function buildList(items) {
    var ul = document.createElement("ul");
    ul.className = "toc-list";

    items.forEach(function (it) {
      var li = document.createElement("li");
      li.className = "toc-item toc-depth-" + it.depth;
      var a = document.createElement("a");
      a.href = "#" + it.id;
      a.textContent = it.text;
      a.title = it.fullText || it.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    return ul;
  }

  function init() {
    var body = document.querySelector(".post-body");
    if (!body) return;

    var items = collectHeadingItems(body);
    if (!items.length) items = collectQaItems(body);
    items = normalizeLevels(items);
    if (items.length < 2) return;

    var nav = document.createElement("nav");
    nav.className = "toc";
    nav.setAttribute("aria-label", "Table of contents");

    var title = document.createElement("div");
    title.className = "toc-title";
    title.textContent = "Contents";
    nav.appendChild(title);
    nav.appendChild(buildList(items));

    body.parentNode.insertBefore(nav, body);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
