
(function () {
  const mgMessages = $('#mg-messages');
  function mgAdd(text, who) {
    if (!mgMessages) return;
    const bubble = document.createElement('div');
    bubble.className = who === 'user' ? 'self-end max-w-[80%] text-sm px-4 py-2.5 rounded-2xl rounded-br-sm' : 'self-start max-w-[85%] text-sm px-4 py-2.5 rounded-2xl rounded-bl-sm';
    bubble.style.background = who === 'user' ? 'var(--forest)' : 'var(--sage-pale)';
    bubble.style.color = who === 'user' ? 'var(--ivory)' : 'var(--ink)';
    bubble.textContent = text;
    mgMessages.appendChild(bubble);
    mgMessages.scrollTop = mgMessages.scrollHeight;
  }

  function initMindGuide() {
    if (!mgMessages) return;
    mgMessages.innerHTML = '';
    const isId = window.i18n && window.i18n.getLanguage() === 'id';
    const welcomeMsg = isId
      ? "Halo, saya MindGuide. Saya di sini untuk membantu Anda berefleksi — bukan untuk mendiagnosis atau menggantikan profesional. Apa yang ada di pikiran Anda?"
      : "Hi, I'm MindGuide. I'm here to help you reflect — not to diagnose or replace a professional. What's on your mind?";
    mgAdd(welcomeMsg, 'bot');
  }

  const crisisWords = ['suicide', 'kill myself', 'end my life', 'hurt myself', 'self harm', 'self-harm', 'want to die', 'bunuh diri', 'menyakiti diri'];
  const mgResponses = {
    en: {
      "i feel overwhelmed": "That sounds like a lot to carry. Try naming just one thing that feels most urgent right now — sometimes overwhelm shrinks once it has a shape. Would it help to write it down in your journal?",
      "i can't focus": "Scattered focus is often your mind asking for a smaller task. What's one tiny piece of what you're doing that you could start with for just five minutes?",
      "i feel lonely": "Loneliness is heavy, and it's brave to name it. Is there one person — even just a quick message — you could reach out to today? You don't have to explain everything, just say hi.",
      "i had a difficult day": "I'm sorry today was hard. Do you want to tell me a bit about it, or would it help more to just take a slow breath together first?",
      "help me reflect": "Let's start simple: what's one moment from today that stuck with you, good or hard?"
    },
    id: {
      "saya merasa kewalahan": "Itu terdengar cukup berat untuk ditanggung. Cobalah menamai satu hal yang paling mendesak saat ini — terkadang rasa kewalahan berkurang setelah kita mengenalinya. Apakah membantu jika menuliskannya di jurnal?",
      "saya tidak bisa fokus": "Pikiran yang terpecah sering kali adalah sinyal untuk mengambil tugas lebih kecil. Apa satu hal kecil yang bisa Anda kerjakan selama lima menit saja?",
      "saya merasa kesepian": "Rasa kesepian memang berat, dan berani untuk mengungkapkannya. Adakah satu orang yang bisa Anda sapa hari ini? Anda tidak perlu menjelaskan semuanya, cukup kirim pesan singkat.",
      "hari ini terasa berat": "Saya ikut prihatin hari ini terasa sulit. Apakah Anda ingin menceritakannya sedikit, atau lebih membantu jika kita tarik napas perlahan bersama?",
      "bantu saya berefleksi": "Mari mulai dari hal sederhana: apa satu momen dari hari ini yang paling berkesan bagi Anda, baik atau buruk?"
    }
  };

  const fallbacks = {
    en: [
      "Thank you for sharing that. Can you say more about what's underneath that feeling?",
      "That makes sense. What do you think you need most right now — rest, support, or a distraction?",
      "I hear you. Sometimes writing it out in your journal can help it feel less tangled — want to try?",
      "That sounds real. What's one small, kind thing you could do for yourself in the next hour?"
    ],
    id: [
      "Terima kasih sudah berbagi. Bisakah Anda menceritakan lebih banyak tentang apa yang mendasari perasaan itu?",
      "Itu sangat bisa dipahami. Menurut Anda apa yang paling Anda butuhkan saat ini — istirahat, dukungan, atau pengalihan?",
      "Saya mendengarkan. Terkadang menuliskannya di jurnal membantu pikiran terasa lebih terurai — ingin mencobanya?",
      "Itu terasa sangat nyata. Apa satu hal kecil yang baik yang bisa Anda lakukan untuk diri sendiri dalam satu jam ke depan?"
    ]
  };

  function mgRespond(text) {
    const lower = text.toLowerCase();
    const isId = window.i18n && window.i18n.getLanguage() === 'id';
    const lang = isId ? 'id' : 'en';

    if (crisisWords.some(w => lower.includes(w))) {
      const crisisMsg = isId
        ? "Saya sangat menghargai Anda telah berbagi. Namun ini di luar kapasitas saya sebagai alat refleksi — mohon hubungi orang terdekat yang Anda percaya, profesional kesehatan mental, atau layanan darurat lokal sekarang. Anda berhak mendapatkan bantuan nyata."
        : "I'm really glad you told me. This is more than I'm able to help with as a reflection tool — please reach out to a trusted adult, a mental health professional, or local emergency services right now. You deserve real support.";
      mgAdd(crisisMsg, 'bot');
      return;
    }
    const dict = mgResponses[lang];
    for (const key in dict) {
      if (lower.includes(key)) return mgAdd(dict[key], 'bot');
    }
    const fallbackList = fallbacks[lang];
    mgAdd(fallbackList[Math.floor(Math.random() * fallbackList.length)], 'bot');
  }

  function mgSend() {
    const input = $('#mg-input');
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;
    mgAdd(val, 'user');
    input.value = '';
    setTimeout(() => mgRespond(val), 450);
  }

  if ($('#mg-send')) $('#mg-send').addEventListener('click', mgSend);
  if ($('#mg-input')) $('#mg-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') mgSend(); });
  $$('#mg-quick .chip').forEach(c => c.addEventListener('click', () => {
    mgAdd(c.dataset.q, 'user');
    setTimeout(() => mgRespond(c.dataset.q), 400);
  }));

  window.addEventListener('languageChanged', initMindGuide);
  initMindGuide();
})();

