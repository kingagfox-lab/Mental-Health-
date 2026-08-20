
(function () {
  $('#export-data-link').addEventListener('click', (e) => {
    e.preventDefault();
    const data = { checkins: store.get('checkins', []), journal: store.get('journal', []), habits: store.get('habits', []) };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'mindspace-export.json'; a.click();
    URL.revokeObjectURL(url);
  });
  $('#delete-data-link').addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('This will permanently delete your local MindSpace data on this device. Continue?')) {
      ['checkins', 'journal', 'habits', 'onboarded', 'focus'].forEach(k => localStorage.removeItem('ms_' + k));
      location.reload();
    }
  });
})();
