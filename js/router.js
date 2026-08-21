
(function () {

  const validPages = ['home', 'checkin', 'journal', 'mood', 'habits', 'resources', 'community'];

  function currentPage() {
    const hash = (location.hash || '#home').replace('#', '').toLowerCase();
    return validPages.includes(hash) ? hash : 'home';
  }

  function navigate() {
    const page = currentPage();

    $$('.page').forEach(p => {
      const isActive = p.dataset.page === page;
      p.classList.toggle('active', isActive);
    });

    $$('.nav-link').forEach(link => {
      const href = (link.getAttribute('href') || '').replace('#', '');
      link.classList.toggle('active', href === page);
    });

    window.scrollTo({ top: 0, behavior: 'instant' });

    requestAnimationFrame(() => {
      const activePage = $(`.page[data-page="${page}"]`);
      if (activePage) {
        $$('.fade-up:not(.in)', activePage).forEach(el => {
          el.classList.add('in');
        });
      }
    });
  }

  window.addEventListener('hashchange', navigate);

  navigate();

  window.Router = { navigate };

})();
