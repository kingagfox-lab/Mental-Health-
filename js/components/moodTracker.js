
(function () {
  const moodScore = { "Very Low": 1, "Low": 2, "Okay": 3, "Good": 4, "Great": 5 };
  const moodColor = { 1: 'var(--very-low)', 2: 'var(--low)', 3: 'var(--okay)', 4: 'var(--good)', 5: 'var(--great)' };

  function getMoodLabel(score) {
    const keys = ["", "mood.anxious", "mood.low", "mood.okay", "mood.good", "mood.great"];
    const fallback = ["", "Anxious", "Low", "Okay", "Good", "Great"];
    if (window.i18n && keys[score]) {
      return window.i18n.t(keys[score]);
    }
    return fallback[score] || "Okay";
  }

  function demoWeek() {
    const daysEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const daysId = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Ming'];
    const isId = window.i18n && window.i18n.getLanguage() === 'id';
    const days = isId ? daysId : daysEn;
    const moods = [3, 3, 2, 4, 5, 4, 4];
    const energy = [55, 50, 40, 70, 85, 75, 68];
    return days.map((d, i) => ({ label: d, mood: moods[i], energy: energy[i] }));
  }
  function demoMonth() {
    return Array.from({ length: 30 }, (_, i) => ({
      label: (i + 1), mood: 2 + Math.round(Math.sin(i / 3) * 1.3 + Math.random() * 0.6 + 1),
      energy: 40 + Math.round(Math.sin(i / 4) * 20 + Math.random() * 15)
    })).map(d => ({ ...d, mood: Math.min(5, Math.max(1, d.mood)) }));
  }

  let currentRange = 'week';
  function renderMoodTracker() {
    const data = currentRange === 'week' ? demoWeek() : demoMonth();
    const svg = $('#mood-chart');
    if (!svg) return;
    const w = 620, h = 220, pad = 20;
    const stepX = (w - pad * 2) / (data.length - 1);
    const yFor = (v) => h - pad - ((v - 1) / 4) * (h - pad * 2);
    const yForEnergy = (v) => h - pad - (v / 100) * (h - pad * 2);

    let moodPath = '', energyPath = '';
    data.forEach((d, i) => {
      const x = pad + i * stepX;
      moodPath += (i === 0 ? 'M' : 'L') + x + ',' + yFor(d.mood) + ' ';
      energyPath += (i === 0 ? 'M' : 'L') + x + ',' + yForEnergy(d.energy) + ' ';
    });

    let dots = '';
    data.forEach((d, i) => {
      const x = pad + i * stepX;
      dots += `<circle cx="${x}" cy="${yFor(d.mood)}" r="4.5" fill="${moodColor[d.mood]}" stroke="var(--card)" stroke-width="2"/>`;
    });

    svg.innerHTML = `
    <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="var(--line)" stroke-width="1"/>
    <path d="${energyPath}" fill="none" stroke="var(--clay)" stroke-width="2" stroke-dasharray="4 4" opacity=".7"/>
    <path d="${moodPath}" fill="none" stroke="var(--forest)" stroke-width="2.5"/>
    ${dots}
  `;
    const isId = window.i18n && window.i18n.getLanguage() === 'id';
    $('#chart-title').textContent = currentRange === 'week'
      ? (isId ? "Suasana Hati Minggu Ini" : "This Week's Mood")
      : (isId ? "Suasana Hati Bulan Ini" : "This Month's Mood");

    const dayStr = isId ? 'Hari' : 'Day';
    $('#chart-labels').innerHTML = (currentRange === 'week' ? data.map(d => `<span>${d.label}</span>`).join('') : `<span>${dayStr} 1</span><span>${dayStr} 15</span><span>${dayStr} 30</span>`);

    const avg = Math.round(data.reduce((a, d) => a + d.mood, 0) / data.length);
    $('#stat-avg-mood').textContent = getMoodLabel(avg);
    const streak = store.get('checkins', []).length || 4;
    const streakDays = Math.min(streak, 30);
    $('#stat-streak').textContent = isId ? `${streakDays} hari` : `${streakDays} ${streakDays === 1 ? 'day' : 'days'}`;

    const trend = data[data.length - 1].energy - data[0].energy;
    if (isId) {
      $('#stat-energy').textContent = trend > 5 ? 'Meningkat' : trend < -5 ? 'Menurun' : 'Stabil';
      $('#stat-common').textContent = getMoodLabel(avg) === 'Sangat Baik' ? 'Gembira' : 'Tenang';
    } else {
      $('#stat-energy').textContent = trend > 5 ? 'Rising' : trend < -5 ? 'Dipping' : 'Steady';
      $('#stat-common').textContent = getMoodLabel(avg) === 'Great' ? 'Joyful' : 'Calm';
    }
  }
  $$('#mood .tab-btn').forEach(t => {
    t.addEventListener('click', () => {
      $$('#mood .tab-btn').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      currentRange = t.dataset.range;
      renderMoodTracker();
    });
  });
  window.MoodTracker = { render: renderMoodTracker };
  window.addEventListener('languageChanged', renderMoodTracker);
  renderMoodTracker();
})();

