
(function () {
  const onboarding = $('#onboarding');
  if (store.get('onboarded', false)) { onboarding.remove(); }
  $('#onboarding-skip').addEventListener('click', () => { store.set('onboarded', true); onboarding.remove(); });
  $$('#onboarding-options .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      store.set('onboarded', true);
      store.set('focus', btn.dataset.focus);
      onboarding.remove();
    });
  });
})();
