
(function () {
  $('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    $('#contact-confirm').classList.remove('hidden');
    setTimeout(() => $('#contact-confirm').classList.add('hidden'), 4000);
  });
})();
