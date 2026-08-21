
(function () {
  $('#menu-toggle').addEventListener('click', () => {
    $('#mobile-menu').classList.toggle('hidden');
  });
  $$('#mobile-menu a').forEach(a => a.addEventListener('click', () => $('#mobile-menu').classList.add('hidden')));

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      const lang = btn.getAttribute('data-lang');
      if (lang && window.i18n) {
        window.i18n.setLanguage(lang);
      }
    }
  });
})();

