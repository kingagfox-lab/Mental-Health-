
(function () {
  const journalPrompts = ["What has been on your mind lately?", "What made today a little better?", "What are you grateful for today?"];
  function seedJournal() {
    if (store.get('journal', null)) return;
    const seed = [
      { id: crypto.randomUUID(), date: new Date(Date.now() - 86400000 * 1).toISOString(), mood: 'Good', title: 'A quieter morning', content: 'I woke up earlier than usual and just sat with my tea for a while before checking my phone. It felt like I had more room to think.', tags: ['morning', 'calm'], fav: true },
      { id: crypto.randomUUID(), date: new Date(Date.now() - 86400000 * 3).toISOString(), mood: 'Okay', title: 'Trying to focus', content: "Work felt scattered today. I noticed I kept switching tasks without finishing any of them. Tomorrow I want to try one task at a time.", tags: ['work', 'focus'], fav: false },
      { id: crypto.randomUUID(), date: new Date(Date.now() - 86400000 * 6).toISOString(), mood: 'Great', title: 'Dinner with an old friend', content: 'We laughed so much it almost hurt. I forgot how good it feels to be fully present with someone who gets you.', tags: ['friends', 'gratitude'], fav: true }
    ];
    store.set('journal', seed);
  }
  seedJournal();

  function moodEmoji(m) { return { 'Very Low': '🌧️', 'Low': '🌥️', 'Okay': '⛅', 'Good': '🌤️', 'Great': '☀️' }[m] || '⛅'; }
  function fmtDate(iso) { return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); }

  function renderJournal() {
    const entries = store.get('journal', []);
    const q = ($('#journal-search').value || '').toLowerCase();
    const filterMood = $('#journal-filter').value;
    const filtered = entries
      .filter(e => filterMood === 'all' || e.mood === filterMood)
      .filter(e => !q || (e.title + e.content + (e.tags || []).join(' ')).toLowerCase().includes(q))
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    const list = $('#journal-list');
    list.innerHTML = '';
    $('#journal-empty').classList.toggle('hidden', filtered.length > 0);

    filtered.forEach(e => {
      const div = document.createElement('div');
      div.className = 'card card-lift p-5 flex flex-col';
      div.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <span class="text-xl">${moodEmoji(e.mood)}</span>
        <div class="flex items-center gap-2">
          <button class="fav-btn" data-id="${e.id}" aria-label="Favorite entry"><i data-lucide="star" class="w-4 h-4" style="color:${e.fav ? 'var(--clay)' : 'var(--line)'}; fill:${e.fav ? 'var(--clay)' : 'none'};"></i></button>
          <button class="del-btn" data-id="${e.id}" aria-label="Delete entry"><i data-lucide="trash-2" class="w-4 h-4" style="color:var(--ink-soft);"></i></button>
        </div>
      </div>
      <div class="text-[11px] mb-1.5" style="color:var(--ink-soft);">${fmtDate(e.date)}</div>
      <h4 class="serif text-lg mb-2">${e.title || 'Untitled entry'}</h4>
      <p class="text-sm leading-relaxed flex-1" style="color:var(--ink-soft);">${e.content.slice(0, 140)}${e.content.length > 140 ? '…' : ''}</p>
      ${(e.tags && e.tags.length) ? `<div class="flex flex-wrap gap-1.5 mt-3">${e.tags.map(t => `<span class="text-[10px] px-2 py-1 rounded-full" style="background:var(--sage-pale);">${t}</span>`).join('')}</div>` : ''}
    `;
      list.appendChild(div);
    });
    lucide.createIcons();

    $$('.fav-btn').forEach(b => b.addEventListener('click', () => {
      const arr = store.get('journal', []);
      const idx = arr.findIndex(x => x.id === b.dataset.id);
      if (idx > -1) { arr[idx].fav = !arr[idx].fav; store.set('journal', arr); renderJournal(); }
    }));
    $$('.del-btn').forEach(b => b.addEventListener('click', () => {
      let arr = store.get('journal', []);
      arr = arr.filter(x => x.id !== b.dataset.id);
      store.set('journal', arr); renderJournal();
    }));
  }
  renderJournal();
  $('#journal-search').addEventListener('input', renderJournal);
  $('#journal-filter').addEventListener('change', renderJournal);

  const journalModal = $('#journal-modal');
  let journalMood = null;
  function openJournalModal() {
    journalModal.classList.remove('hidden');
    $('#journal-title').value = ''; $('#journal-content').value = ''; $('#journal-tags').value = ''; $('#journal-prompt').value = '';
    journalMood = null;
    $$('#journal-mood-select .chip').forEach(c => c.classList.remove('selected'));
  }
  $('#new-entry-btn').addEventListener('click', openJournalModal);
  $('#journal-close').addEventListener('click', () => journalModal.classList.add('hidden'));
  $('#journal-cancel').addEventListener('click', () => journalModal.classList.add('hidden'));
  $$('#journal-mood-select .chip').forEach(c => {
    c.addEventListener('click', () => {
      $$('#journal-mood-select .chip').forEach(x => x.classList.remove('selected'));
      c.classList.add('selected'); journalMood = c.dataset.val;
    });
  });
  $('#journal-prompt').addEventListener('change', (e) => {
    if (e.target.value && !$('#journal-content').value) $('#journal-content').value = '';
    $('#journal-content').placeholder = e.target.value || 'Start writing…';
  });
  $('#journal-save').addEventListener('click', () => {
    const content = $('#journal-content').value.trim();
    if (!content) { $('#journal-content').focus(); return; }
    const entry = {
      id: crypto.randomUUID(), date: new Date().toISOString(),
      mood: journalMood || 'Okay',
      title: $('#journal-title').value.trim() || $('#journal-prompt').value || 'Untitled entry',
      content, tags: $('#journal-tags').value.split(',').map(t => t.trim()).filter(Boolean), fav: false
    };
    const arr = store.get('journal', []);
    arr.push(entry); store.set('journal', arr);
    journalModal.classList.add('hidden');
    renderJournal();
  });

  window.addEventListener('languageChanged', renderJournal);
})();

