
(function () {
  let breathTimer = null, breathPhaseTimer = null, breathSeconds = 60, breathElapsed = 0, breathing = false;
  $$('#breath-duration .tab-btn').forEach(t => {
    t.addEventListener('click', () => {
      $$('#breath-duration .tab-btn').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      breathSeconds = +t.dataset.min * 60;
      resetBreath();
    });
  });
  function resetBreath() {
    breathing = false; breathElapsed = 0;
    clearInterval(breathTimer); clearTimeout(breathPhaseTimer);
    $('#breath-circle').style.transform = 'scale(1)';
    $('#breath-text').textContent = 'Ready?';
    $('#breath-timer').textContent = '';
    $('#breath-toggle').innerHTML = 'Begin <i data-lucide="play" class="w-3.5 h-3.5"></i>';
    lucide.createIcons();
  }
  function breathCycle() {
    if (!breathing) return;
    const phases = [
      { label: 'Inhale', scale: 1.35, dur: 4000 },
      { label: 'Hold', scale: 1.35, dur: 2000 },
      { label: 'Exhale', scale: 1, dur: 4000 },
      { label: 'Rest', scale: 1, dur: 1500 },
    ];
    let i = 0;
    function next() {
      if (!breathing) return;
      const p = phases[i % phases.length];
      $('#breath-text').textContent = p.label;
      $('#breath-circle').style.transform = `scale(${p.scale})`;
      $('#breath-circle').style.transitionDuration = (p.dur / 1000) + 's';
      i++;
      breathPhaseTimer = setTimeout(next, p.dur);
    }
    next();
  }
  $('#breath-toggle').addEventListener('click', () => {
    breathing = !breathing;
    if (breathing) {
      $('#breath-toggle').innerHTML = 'Pause <i data-lucide="pause" class="w-3.5 h-3.5"></i>';
      lucide.createIcons();
      breathCycle();
      breathTimer = setInterval(() => {
        breathElapsed++;
        const remaining = Math.max(0, breathSeconds - breathElapsed);
        const m = Math.floor(remaining / 60), s = remaining % 60;
        $('#breath-timer').textContent = `${m}:${s.toString().padStart(2, '0')} remaining`;
        if (remaining <= 0) { breathing = false; clearInterval(breathTimer); clearTimeout(breathPhaseTimer); $('#breath-text').textContent = 'Well done.'; $('#breath-circle').style.transform = 'scale(1)'; $('#breath-toggle').innerHTML = 'Begin Again <i data-lucide="play" class="w-3.5 h-3.5"></i>'; lucide.createIcons(); }
      }, 1000);
    } else {
      clearInterval(breathTimer); clearTimeout(breathPhaseTimer);
      $('#breath-toggle').innerHTML = 'Resume <i data-lucide="play" class="w-3.5 h-3.5"></i>';
      lucide.createIcons();
    }
  });
  let soundOn = false;
  $('#breath-sound').addEventListener('click', function () {
    soundOn = !soundOn;
    this.innerHTML = `<i data-lucide="${soundOn ? 'volume-2' : 'volume-x'}" class="w-4 h-4"></i>`;
    lucide.createIcons();
  });
  resetBreath();
})();
