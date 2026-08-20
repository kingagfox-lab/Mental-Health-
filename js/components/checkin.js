
(function () {
  let ciState = { mood: null, influences: [], energy: 50, needs: [] };
  const steps = [1, 2, 3, 4];
  function showStep(n) {
    steps.forEach(s => $('#ci-step-' + s).classList.toggle('hidden', s !== n));
    $('#ci-result').classList.add('hidden');
  }
  $$('.mood-pill').forEach(p => {
    p.addEventListener('click', () => {
      $$('.mood-pill').forEach(x => x.classList.remove('selected'));
      p.classList.add('selected');
      ciState.mood = p.dataset.mood;
      const btn = $('#ci-next-1'); btn.disabled = false; btn.style.opacity = 1;
    });
  });
  $('#ci-next-1').addEventListener('click', () => showStep(2));
  $$('#influence-options .chip').forEach(c => {
    c.addEventListener('click', () => {
      c.classList.toggle('selected');
      const v = c.dataset.val;
      ciState.influences = c.classList.contains('selected') ? [...ciState.influences, v] : ciState.influences.filter(x => x !== v);
    });
  });
  $('#ci-next-2').addEventListener('click', () => showStep(3));
  $('#energy-slider').addEventListener('input', (e) => { ciState.energy = +e.target.value; $('#energy-value').textContent = e.target.value; });
  $('#ci-next-3').addEventListener('click', () => showStep(4));
  $$('#need-options .chip').forEach(c => {
    c.addEventListener('click', () => {
      c.classList.toggle('selected');
      const v = c.dataset.val;
      ciState.needs = c.classList.contains('selected') ? [...ciState.needs, v] : ciState.needs.filter(x => x !== v);
    });
  });
  $$('[data-back]').forEach(b => b.addEventListener('click', () => showStep(+b.dataset.back)));

  const supportiveMessages = [
    "Thanks for checking in with yourself. Taking a moment to notice how you feel is already a meaningful step.",
    "However today feels, you showed up for yourself — that matters more than it seems.",
    "Naming what's affecting you takes honesty. Be gentle with yourself for the rest of today.",
    "You don't need to have it all figured out. Noticing is enough for now.",
    "Small check-ins like this one add up to real self-understanding over time."
  ];

  $('#ci-submit').addEventListener('click', () => {
    const entry = { ...ciState, date: new Date().toISOString() };
    const history = store.get('checkins', []);
    history.push(entry);
    store.set('checkins', history);

    steps.forEach(s => $('#ci-step-' + s).classList.add('hidden'));
    $('#ci-result').classList.remove('hidden');
    $('#ci-message').textContent = supportiveMessages[Math.floor(Math.random() * supportiveMessages.length)];
    if (window.MoodTracker) window.MoodTracker.render();

  });
  $('#ci-restart').addEventListener('click', () => {
    ciState = { mood: null, influences: [], energy: 50, needs: [] };
    $$('.mood-pill, #influence-options .chip, #need-options .chip').forEach(x => x.classList.remove('selected'));
    $('#energy-slider').value = 50; $('#energy-value').textContent = 50;
    const btn = $('#ci-next-1'); btn.disabled = true; btn.style.opacity = .4;
    showStep(1);
  });
})();
