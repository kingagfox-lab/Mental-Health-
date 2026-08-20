
(function () {
  const resources = [
    { title: 'Understanding Stress', desc: 'Learn simple ways to recognize stress and create space before reacting.', time: '4 min read', cat: 'Stress' },
    { title: "When Worry Won't Quiet Down", desc: 'A gentle look at anxious thoughts and how to notice them without judgment.', time: '6 min read', cat: 'Anxiety & Worry' },
    { title: 'Building a Wind-Down Routine', desc: 'Small changes to your evening that can support better sleep.', time: '5 min read', cat: 'Sleep' },
    { title: 'Regaining Focus, Gently', desc: 'Why focus slips and small structures that can help it return.', time: '5 min read', cat: 'Focus' },
    { title: 'Talking Back to Self-Doubt', desc: 'Everyday ways to notice and question the harshest inner voice.', time: '7 min read', cat: 'Confidence' },
    { title: 'Setting Boundaries Kindly', desc: 'How to protect your energy in relationships without guilt.', time: '6 min read', cat: 'Relationships' },
    { title: 'Surviving Exam Season', desc: 'Practical ways to pace yourself through high-pressure school stretches.', time: '4 min read', cat: 'School Stress' },
    { title: 'Naming What You Feel', desc: 'A short guide to building a richer emotional vocabulary.', time: '5 min read', cat: 'Emotional Regulation' },
    { title: 'The Physical Side of Stress', desc: 'How stress shows up in the body — and simple ways to release it.', time: '4 min read', cat: 'Stress' },
  ];
  let resourceFilter = 'All', resourceQuery = '';
  function renderResources() {
    const grid = $('#resource-grid');
    grid.innerHTML = '';
    const filtered = resources.filter(r => (resourceFilter === 'All' || r.cat === resourceFilter) && (!resourceQuery || (r.title + r.desc).toLowerCase().includes(resourceQuery)));
    filtered.forEach(r => {
      const div = document.createElement('div');
      div.className = 'card card-lift p-6';
      div.innerHTML = `
      <div class="eyebrow mb-3" style="font-size:.62rem;">${r.cat.toUpperCase()}</div>
      <h4 class="serif text-lg mb-2">${r.title}</h4>
      <p class="text-sm leading-relaxed mb-4" style="color:var(--ink-soft);">${r.desc}</p>
      <div class="flex items-center justify-between">
        <span class="text-[11px] flex items-center gap-1" style="color:var(--ink-soft);"><i data-lucide="clock" class="w-3 h-3"></i> ${r.time}</span>
        <span class="btn-ghost !text-xs">Read <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
      </div>
    `;
      grid.appendChild(div);
    });
    lucide.createIcons();
  }
  renderResources();
  $('#resource-search').addEventListener('input', (e) => { resourceQuery = e.target.value.toLowerCase(); renderResources(); });
  $$('#resource-filters .chip').forEach(c => {
    c.addEventListener('click', () => {
      $$('#resource-filters .chip').forEach(x => x.classList.remove('selected'));
      c.classList.add('selected'); resourceFilter = c.dataset.cat; renderResources();
    });
  });
})();
