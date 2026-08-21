
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
    $('#breath-text').textContent = window.i18n ? window.i18n.t('breath.ready') : 'Ready?';
    $('#breath-timer').textContent = '';
    const beginText = window.i18n ? window.i18n.t('breath.begin') : 'Begin';
    $('#breath-toggle').innerHTML = `${beginText} <i data-lucide="play" class="w-3.5 h-3.5"></i>`;
    if (window.lucide) lucide.createIcons();
  }
  function breathCycle() {
    if (!breathing) return;
    const phases = [
      { key: 'breath.inhale', fallback: 'Inhale', scale: 1.35, dur: 4000 },
      { key: 'breath.hold', fallback: 'Hold', scale: 1.35, dur: 2000 },
      { key: 'breath.exhale', fallback: 'Exhale', scale: 1, dur: 4000 },
      { key: 'breath.rest', fallback: 'Rest', scale: 1, dur: 1500 },
    ];
    let i = 0;
    function next() {
      if (!breathing) return;
      const p = phases[i % phases.length];
      $('#breath-text').textContent = window.i18n ? window.i18n.t(p.key) : p.fallback;
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
      const pauseText = window.i18n ? window.i18n.t('breath.pause') : 'Pause';
      $('#breath-toggle').innerHTML = `${pauseText} <i data-lucide="pause" class="w-3.5 h-3.5"></i>`;
      if (window.lucide) lucide.createIcons();
      breathCycle();
      breathTimer = setInterval(() => {
        breathElapsed++;
        const remaining = Math.max(0, breathSeconds - breathElapsed);
        const m = Math.floor(remaining / 60), s = remaining % 60;
        const timeStr = `${m}:${s.toString().padStart(2, '0')}`;
        const remText = window.i18n ? window.i18n.t('breath.remaining', { time: timeStr }) : `${timeStr} remaining`;
        $('#breath-timer').textContent = remText;
        if (remaining <= 0) {
          breathing = false; clearInterval(breathTimer); clearTimeout(breathPhaseTimer);
          $('#breath-text').textContent = window.i18n ? window.i18n.t('breath.done') : 'Well done.';
          $('#breath-circle').style.transform = 'scale(1)';
          const beginAgainText = window.i18n ? window.i18n.t('breath.beginAgain') : 'Begin Again';
          $('#breath-toggle').innerHTML = `${beginAgainText} <i data-lucide="play" class="w-3.5 h-3.5"></i>`;
          if (window.lucide) lucide.createIcons();
        }
      }, 1000);
    } else {
      clearInterval(breathTimer); clearTimeout(breathPhaseTimer);
      const resumeText = window.i18n ? window.i18n.t('breath.resume') : 'Resume';
      $('#breath-toggle').innerHTML = `${resumeText} <i data-lucide="play" class="w-3.5 h-3.5"></i>`;
      if (window.lucide) lucide.createIcons();
    }
  });
  let soundOn = false;
  $('#breath-sound').addEventListener('click', function () {
    soundOn = !soundOn;
    this.innerHTML = `<i data-lucide="${soundOn ? 'volume-2' : 'volume-x'}" class="w-4 h-4"></i>`;
    if (window.lucide) lucide.createIcons();
  });
  window.addEventListener('languageChanged', resetBreath);
  resetBreath();
})();

