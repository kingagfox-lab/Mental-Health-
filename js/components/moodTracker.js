
(function () {
  const moodScore = { "Very Low": 1, "Low": 2, "Okay": 3, "Good": 4, "Great": 5 };
  const moodColor = { 1: 'var(--very-low)', 2: 'var(--low)', 3: 'var(--okay)', 4: 'var(--good)', 5: 'var(--great)' };
  const moodLabel = ["", "Very Low", "Low", "Okay", "Good", "Great"];

  function demoWeek() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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
    $('#chart-title').textContent = currentRange === 'week' ? "This Week's Mood" : "This Month's Mood";
    $('#chart-labels').innerHTML = (currentRange === 'week' ? data.map(d => `<span>${d.label}</span>`).join('') : `<span>Day 1</span><span>Day 15</span><span>Day 30</span>`);

    const avg = Math.round(data.reduce((a, d) => a + d.mood, 0) / data.length);
    $('#stat-avg-mood').textContent = moodLabel[avg];
    const streak = store.get('checkins', []).length || 4;
    $('#stat-streak').textContent = Math.min(streak, 30) + (streak === 1 ? ' day' : ' days');
    const trend = data[data.length - 1].energy - data[0].energy;
    $('#stat-energy').textContent = trend > 5 ? 'Rising' : trend < -5 ? 'Dipping' : 'Steady';
    $('#stat-common').textContent = moodLabel[Math.round(data.reduce((a, d) => a + d.mood, 0) / data.length)] === 'Great' ? 'Joyful' : 'Calm';
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
  renderMoodTracker();
})();
