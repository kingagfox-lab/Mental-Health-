
(function () {
  const mgMessages = $('#mg-messages');
  function mgAdd(text, who) {
    const bubble = document.createElement('div');
    bubble.className = who === 'user' ? 'self-end max-w-[80%] text-sm px-4 py-2.5 rounded-2xl rounded-br-sm' : 'self-start max-w-[85%] text-sm px-4 py-2.5 rounded-2xl rounded-bl-sm';
    bubble.style.background = who === 'user' ? 'var(--forest)' : 'var(--sage-pale)';
    bubble.style.color = who === 'user' ? 'var(--ivory)' : 'var(--ink)';
    bubble.textContent = text;
    mgMessages.appendChild(bubble);
    mgMessages.scrollTop = mgMessages.scrollHeight;
  }
  mgAdd("Hi, I'm MindGuide. I'm here to help you reflect — not to diagnose or replace a professional. What's on your mind?", 'bot');

  const crisisWords = ['suicide', 'kill myself', 'end my life', 'hurt myself', 'self harm', 'self-harm', 'want to die'];
  const mgResponses = {
    "i feel overwhelmed": "That sounds like a lot to carry. Try naming just one thing that feels most urgent right now — sometimes overwhelm shrinks once it has a shape. Would it help to write it down in your journal?",
    "i can't focus": "Scattered focus is often your mind asking for a smaller task. What's one tiny piece of what you're doing that you could start with for just five minutes?",
    "i feel lonely": "Loneliness is heavy, and it's brave to name it. Is there one person — even just a quick message — you could reach out to today? You don't have to explain everything, just say hi.",
    "i had a difficult day": "I'm sorry today was hard. Do you want to tell me a bit about it, or would it help more to just take a slow breath together first?",
    "help me reflect": "Let's start simple: what's one moment from today that stuck with you, good or hard?"
  };
  function mgRespond(text) {
    const lower = text.toLowerCase();
    if (crisisWords.some(w => lower.includes(w))) {
      mgAdd("I'm really glad you told me. This is more than I'm able to help with as a reflection tool — please reach out to a trusted adult, a mental health professional, or local emergency services right now. You deserve real support. Would you like me to show you the Support Center?", 'bot');
      return;
    }
    for (const key in mgResponses) { if (lower.includes(key)) return mgAdd(mgResponses[key], 'bot'); }
    const fallback = [
      "Thank you for sharing that. Can you say more about what's underneath that feeling?",
      "That makes sense. What do you think you need most right now — rest, support, or a distraction?",
      "I hear you. Sometimes writing it out in your journal can help it feel less tangled — want to try?",
      "That sounds real. What's one small, kind thing you could do for yourself in the next hour?"
    ];
    mgAdd(fallback[Math.floor(Math.random() * fallback.length)], 'bot');
  }
  function mgSend() {
    const val = $('#mg-input').value.trim();
    if (!val) return;
    mgAdd(val, 'user');
    $('#mg-input').value = '';
    setTimeout(() => mgRespond(val), 450);
  }
  $('#mg-send').addEventListener('click', mgSend);
  $('#mg-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') mgSend(); });
  $$('#mg-quick .chip').forEach(c => c.addEventListener('click', () => { mgAdd(c.dataset.q, 'user'); setTimeout(() => mgRespond(c.dataset.q), 400); }));
})();
