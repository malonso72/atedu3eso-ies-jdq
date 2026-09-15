(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
    if (!slides.length) return;
    var idx = 0;

    var controls = document.createElement("div");
    controls.className = "nav-controls";
    controls.innerHTML =
      '<button class="nav-btn" id="p-prev" aria-label="Anterior">&#8592;</button>' +
      '<span class="nav-count" id="p-count"></span>' +
      '<button class="nav-btn" id="p-next" aria-label="Siguiente">&#8594;</button>';
    document.body.appendChild(controls);

    var countEl = document.getElementById("p-count");
    var prevBtn = document.getElementById("p-prev");
    var nextBtn = document.getElementById("p-next");

    function show(i) {
      if (i < 0) i = 0;
      if (i > slides.length - 1) i = slides.length - 1;
      slides[idx].classList.remove("active");
      idx = i;
      slides[idx].classList.add("active");
      countEl.textContent = (idx + 1) + " / " + slides.length;
      history.replaceState(null, "", "#s" + (idx + 1));
    }

    prevBtn.addEventListener("click", function () { show(idx - 1); });
    nextBtn.addEventListener("click", function () { show(idx + 1); });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { show(idx + 1); e.preventDefault(); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { show(idx - 1); e.preventDefault(); }
      if (e.key === "Home") { show(0); e.preventDefault(); }
      if (e.key === "End") { show(slides.length - 1); e.preventDefault(); }
    });

    document.addEventListener("click", function (e) {
      if (e.target.closest(".nav-controls") || e.target.closest("a")) return;
      show(idx + 1);
    });

    var startAt = 0;
    if (location.hash && /^#s\d+$/.test(location.hash)) {
      startAt = parseInt(location.hash.slice(2), 10) - 1;
    }
    show(startAt);

    // "Volver a la web": si venimos de la misma web en esta pestaña, volvemos
    // a la página de trimestre exacta desde la que se abrió; si no (enlace
    // directo, pestaña nueva...), usamos el enlace de respaldo a portada.
    var homeLink = document.querySelector(".home-link");
    if (homeLink) {
      homeLink.addEventListener("click", function (e) {
        if (window.history.length > 1 && document.referrer && document.referrer.indexOf(location.host) !== -1) {
          e.preventDefault();
          history.back();
        }
      });
    }
  });
})();
