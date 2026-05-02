(function () {
  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add("active");
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("active");
  };

  // abrir modal (delegation)
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-modal-target]");
    if (trigger) {
      const selector = trigger.getAttribute("data-modal-target");
      const modal = document.querySelector(selector);
      openModal(modal);
    }
  });

  // fechar modal (botão)
  document.addEventListener("click", (e) => {
    const closeBtn = e.target.closest("[data-modal-close]");
    if (closeBtn) {
      const modal = closeBtn.closest(".modal");
      closeModal(modal);
    }
  });

  // fechar clicando fora
  document.addEventListener("click", (e) => {
    const modal = e.target.classList.contains("modal") ? e.target : null;
    if (modal) {
      closeModal(modal);
    }
  });

  // fechar com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.active").forEach(closeModal);
    }
  });
})();