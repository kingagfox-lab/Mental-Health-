
(function () {
  $('#menu-toggle').addEventListener('click', () => {
    $('#mobile-menu').classList.toggle('hidden');
  });
  $$('#mobile-menu a').forEach(a => a.addEventListener('click', () => $('#mobile-menu').classList.add('hidden')));
})();
