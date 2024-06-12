
document.addEventListener("DOMContentLoaded", function() {
  // Удаление оверлея после загрузки страницы
  const overlay = document.querySelector('.transition-overlay');
  if (overlay) {
    overlay.addEventListener('animationend', function() {
      overlay.parentNode.removeChild(overlay);
    });
  }
});

