
(function () {
  const defaultHabits = [
    { id: 'sleep', name: 'Sleep well', icon: 'moon' },
    { id: 'water', name: 'Drink water', icon: 'droplet' },
    { id: 'move', name: 'Move your body', icon: 'footprints' },
    { id: 'break', name: 'Take a break', icon: 'coffee' },
    { id: 'outside', name: 'Go outside', icon: 'sun' },
    { id: 'connect', name: 'Connect with someone', icon: 'message-circle' },
  ];
  function seedHabits() {
    if (store.get('habits', null)) return;
    store.set('habits', defaultHabits.map(h => ({ ...h, done: false, streak: Math.floor(Math.random() * 6) + 1 })));
  }
  seedHabits();
  function renderHabits() {
    const habits = store.get('habits', []);
    const grid = $('#habit-grid');
    grid.innerHTML = '';
    habits.forEach(h => {
      const div = document.createElement('div');
      div.className = 'card card-lift p-5 flex items-center gap-4';
      div.innerHTML = `
      <button class="w-11 h-11 rounded-full flex items-center justify-center shrink-0 habit-check" data-id="${h.id}"
        style="background:${h.done ? 'var(--forest)' : 'var(--sage-pale)'};">
        <i data-lucide="${h.done ? 'check' : h.icon}" class="w-5 h-5" style="color:${h.done ? 'var(--ivory)' : 'var(--forest)'};"></i>
      </button>
      <div class="flex-1">
        <div class="font-medium text-sm">${h.name}</div>
        <div class="text-[11px] flex items-center gap-1 mt-0.5" style="color:var(--ink-soft);"><i data-lucide="flame" class="w-3 h-3"></i> ${h.streak} day streak</div>
      </div>
      <button class="habit-del" data-id="${h.id}" aria-label="Remove habit"><i data-lucide="x" class="w-4 h-4" style="color:var(--ink-soft);"></i></button>
    `;
      grid.appendChild(div);
    });
    lucide.createIcons();

    const done = habits.filter(h => h.done).length, total = habits.length || 1;
    $('#habit-progress-text').textContent = `${done} / ${habits.length} habits completed`;
    $('#habit-ring-label').textContent = `${done}/${habits.length}`;
    const circumference = 169.6;
    $('#habit-ring').setAttribute('stroke-dashoffset', circumference - (done / total) * circumference);

    $$('.habit-check').forEach(b => b.addEventListener('click', () => {
      const arr = store.get('habits', []);
      const idx = arr.findIndex(x => x.id === b.dataset.id);
      if (idx > -1) { arr[idx].done = !arr[idx].done; arr[idx].streak = arr[idx].done ? arr[idx].streak + 1 : Math.max(0, arr[idx].streak - 1); store.set('habits', arr); renderHabits(); }
    }));
    $$('.habit-del').forEach(b => b.addEventListener('click', () => {
      let arr = store.get('habits', []);
      arr = arr.filter(x => x.id !== b.dataset.id);
      store.set('habits', arr); renderHabits();
    }));
  }
  renderHabits();
  $('#habit-add-btn').addEventListener('click', () => {
    const val = $('#habit-new-input').value.trim();
    if (!val) return;
    const arr = store.get('habits', []);
    arr.push({ id: crypto.randomUUID(), name: val, icon: 'sparkle', done: false, streak: 0 });
    store.set('habits', arr);
    $('#habit-new-input').value = '';
    renderHabits();
  });
  function renderHabitDashboardGreeting() { /* placeholder hook for future dashboard sync */ }
})();
