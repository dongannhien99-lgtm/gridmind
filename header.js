(function () {
  var burger = document.querySelector("#header .da-burger");
  var panel = document.getElementById("da-nav-programs");
  if (!burger || !panel) return;

  function setOpen(open) {
    panel.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  }

  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(burger.getAttribute("aria-expanded") !== "true");
  });

  panel.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && !burger.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  // "Unsere Programme" dropdown — hover/focus is handled in CSS;
  // click toggles it for touch + keyboard users.
  var dropdown = panel.querySelector(".da-nav-dropdown");
  var trigger = dropdown && dropdown.querySelector(".da-nav-dropdown-trigger");
  if (dropdown && trigger) {
    function setDropdownOpen(open) {
      dropdown.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    }

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      setDropdownOpen(!dropdown.classList.contains("is-open"));
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) setDropdownOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setDropdownOpen(false);
    });
  }
})();