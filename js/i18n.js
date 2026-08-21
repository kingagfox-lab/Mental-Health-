(function () {
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.checkin': 'Check-In',
      'nav.journal': 'Journal',
      'nav.mood': 'Mood',
      'nav.habits': 'Habits',
      'nav.resources': 'Resources',
      'nav.community': 'Community',
      'nav.startCheckin': 'Start Check-In',

      'onboarding.eyebrow': 'WELCOME',
      'onboarding.title': 'Welcome to <span class="serif-italic">MindSpace.</span>',
      'onboarding.subtitle': 'What would you like to focus on today? This just helps us shape your space — nothing is shared, and you can change it anytime.',
      'onboarding.opt1': 'Understanding my feelings',
      'onboarding.opt2': 'Building better habits',
      'onboarding.opt3': 'Journaling',
      'onboarding.opt4': 'Managing stress',
      'onboarding.opt5': 'Just exploring',
      'onboarding.skip': 'Skip for now →',

      'hero.tag': 'MENTAL WELLNESS • DAILY REFLECTION',
      'hero.title': 'Understand Your Mind.<br class="hidden sm:block"> Take Care of <span class="serif-italic">Yourself.</span>',
      'hero.subtitle': 'A private space to check in with yourself, reflect on your thoughts, and build healthier everyday habits.',
      'hero.startBtn': 'Start Your Check-In',
      'hero.exploreBtn': 'Explore MindSpace',

      'about.eyebrow': 'ABOUT MINDSPACE',
      'about.title': 'Your Space to Feel, Reflect, <span class="serif-italic">and Grow</span>',
      'about.subtitle': 'We make everyday mental wellness accessible — a calm, private place to notice how you feel and take small, honest steps toward feeling better.',
      'about.stat1Num': '93%',
      'about.stat1Title': 'Feel More Mentally <span class="serif-italic">Clear</span>',
      'about.stat1Desc': 'Most people say daily writing helps organize thoughts.',
      'about.stat2Num': '4.8/5',
      'about.stat2Title': 'Average User Peace Score',
      'about.stat2Desc': 'Rated by users who reflect at least twice a week.',
      'about.stat3Num': '100%',
      'about.stat3Title': 'Private & Device-Only',
      'about.stat3Desc': 'Your reflections never leave your web browser.',

      'checkin.eyebrow': 'DAILY CHECK-IN',
      'checkin.title': 'Daily Check-In',
      'checkin.subtitle': 'Take a quiet minute to pause, tune into how you are feeling, and log what is on your mind.',
      'checkin.step1Title': 'How are you feeling right now?',
      'checkin.step2Title': 'What is influencing your mood today?',
      'checkin.step2Sub': 'Select all that apply',
      'checkin.step3Title': 'How is your energy level?',
      'checkin.step4Title': 'What do you need most right now?',
      'checkin.step4Sub': 'Choose up to two options',
      'checkin.btnNext': 'Continue',
      'checkin.btnBack': 'Back',
      'checkin.btnSubmit': 'Complete Check-In',
      'checkin.resultTitle': 'Check-In Complete',
      'checkin.restartBtn': 'Check In Again',

      'mood.great': 'Great',
      'mood.good': 'Good',
      'mood.okay': 'Okay',
      'mood.low': 'Low',
      'mood.anxious': 'Anxious',

      'influence.work': 'Work & Studies',
      'influence.sleep': 'Sleep & Rest',
      'influence.relationships': 'Relationships',
      'influence.health': 'Physical Health',
      'influence.weather': 'Weather',
      'influence.news': 'News & Media',
      'influence.finances': 'Finances',
      'influence.unknown': 'Not Sure',

      'need.rest': 'Rest & Relaxation',
      'need.movement': 'Movement / Exercise',
      'need.connection': 'Connection with others',
      'need.quiet': 'Quiet & Solo Time',
      'need.focus': 'Focus / Accomplishment',
      'need.kindness': 'Self-kindness',

      'moodLog.eyebrow': 'MOOD HISTORY',
      'moodLog.title': 'Your Mood Journey',
      'moodLog.subtitle': 'Track your emotional patterns over time to gain deeper self-awareness.',
      'moodLog.recentTitle': 'Recent Check-Ins',
      'moodLog.empty': 'No check-in entries recorded yet. Complete your first check-in above!',

      'habits.eyebrow': 'DAILY HABITS',
      'habits.title': 'Habit Tracker',
      'habits.subtitle': 'Nurture positive routines that support your everyday mental balance.',
      'habits.addPlaceholder': 'Add a custom habit...',
      'habits.addBtn': 'Add Habit',
      'habits.streak': '{n} day streak',
      'habits.progress': '{done} / {total} habits completed today',
      'habits.sleep': 'Sleep well',
      'habits.water': 'Drink water',
      'habits.move': 'Move your body',
      'habits.break': 'Take a break',
      'habits.outside': 'Go outside',
      'habits.connect': 'Connect with someone',

      'breath.eyebrow': 'MINDFULNESS',
      'breath.title': 'Breathing Space',
      'breath.subtitle': 'Follow the rhythmic breathing circle to relax your body and quiet your mind.',
      'breath.ready': 'Ready?',
      'breath.inhale': 'Inhale',
      'breath.hold': 'Hold',
      'breath.exhale': 'Exhale',
      'breath.rest': 'Rest',
      'breath.done': 'Well done.',
      'breath.begin': 'Begin',
      'breath.pause': 'Pause',
      'breath.resume': 'Resume',
      'breath.beginAgain': 'Begin Again',
      'breath.remaining': '{time} remaining',
      'breath.1min': '1 Min',
      'breath.2min': '2 Min',
      'breath.3min': '3 Min',

      'journal.eyebrow': 'JOURNAL',
      'journal.title': 'Private Reflection Journal',
      'journal.subtitle': 'Write down your thoughts, unload worries, or capture moments of gratitude.',
      'journal.newBtn': 'New Entry',
      'journal.promptBtn': 'Get Prompt',
      'journal.placeholder': 'Start writing your thoughts here...',
      'journal.saveBtn': 'Save Entry',
      'journal.savedTitle': 'Your Saved Entries',
      'journal.empty': 'No journal entries yet. Click "New Entry" to write your first reflection.',
      'journal.prompt1': 'What is one thing that brought you a moment of comfort today?',
      'journal.prompt2': 'If you could offer yourself one gentle reminder right now, what would it be?',
      'journal.prompt3': 'What is currently consuming most of your mental energy, and can you let part of it go?',
      'journal.prompt4': 'Name three small things you are grateful for in this exact moment.',

      'resources.eyebrow': 'RESOURCES',
      'resources.title': 'Mindfulness & Guidance',
      'resources.subtitle': 'Articles and simple techniques designed to help you navigate everyday emotions.',
      'resources.tabAll': 'All',
      'resources.tabStress': 'Stress Relief',
      'resources.tabSleep': 'Sleep & Rest',
      'resources.tabSelfCare': 'Self Care',

      'community.eyebrow': 'COMMUNITY',
      'community.title': 'Shared Encouragement',
      'community.subtitle': 'Anonymous words of wisdom and encouragement from fellow MindSpace members.',
      'community.sharePlaceholder': 'Share a gentle message of support or reflection...',
      'community.postBtn': 'Post Message',

      'contact.eyebrow': 'GET IN TOUCH',
      'contact.title': 'Share Your Thoughts',
      'contact.subtitle': 'Have feedback or a suggestion for MindSpace? We would love to hear from you.',
      'contact.firstName': 'First Name',
      'contact.firstNamePh': 'Your first name',
      'contact.lastName': 'Last Name',
      'contact.lastNamePh': 'Your last name',
      'contact.email': 'Email Address',
      'contact.emailPh': 'you@email.com',
      'contact.message': 'What would you like to share?',
      'contact.messagePh': 'Your message…',
      'contact.submitBtn': 'Submit',
      'contact.confirm': 'Thank you — this is a demo form, no data was sent.',

      'footer.slogan': 'Make space for your mind.',
      'footer.explore': 'EXPLORE',
      'footer.legal': 'LEGAL',
      'footer.yourSpace': 'YOUR SPACE',
      'footer.exportData': 'Export My Data',
      'footer.deleteData': 'Delete My Data',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      'footer.disclaimer': 'MindSpace is a wellness and reflection tool. It does not provide medical diagnosis or replace professional mental health care. If you are in crisis, please contact local emergency services or a trusted professional.',
      'footer.copyright': '© 2026 MindSpace. Prototype build.'
    },
    id: {
      'nav.home': 'Beranda',
      'nav.checkin': 'Presensi Diri',
      'nav.journal': 'Jurnal',
      'nav.mood': 'Suasana Hati',
      'nav.habits': 'Kebiasaan',
      'nav.resources': 'Sumber Daya',
      'nav.community': 'Komunitas',
      'nav.startCheckin': 'Mulai Presensi',

      'onboarding.eyebrow': 'SELAMAT DATANG',
      'onboarding.title': 'Selamat datang di <span class="serif-italic">MindSpace.</span>',
      'onboarding.subtitle': 'Apa yang ingin Anda fokuskan hari ini? Ini membantu kami menyesuaikan ruang Anda — tidak ada yang dibagikan, dan Anda bisa mengubahnya kapan saja.',
      'onboarding.opt1': 'Memahami perasaan saya',
      'onboarding.opt2': 'Membangun kebiasaan lebih baik',
      'onboarding.opt3': 'Menulis jurnal',
      'onboarding.opt4': 'Mengelola stres',
      'onboarding.opt5': 'Hanya menjelajah',
      'onboarding.skip': 'Lewati untuk sekarang →',

      'hero.tag': 'KESEHATAN MENTAL • REFLEKSI HARIAN',
      'hero.title': 'Pahami Pikiran Anda.<br class="hidden sm:block"> Merawat Diri <span class="serif-italic">Anda.</span>',
      'hero.subtitle': 'Ruang pribadi untuk memeriksa diri Anda, merenungkan pikiran Anda, dan membangun kebiasaan harian yang lebih sehat.',
      'hero.startBtn': 'Mulai Presensi Diri',
      'hero.exploreBtn': 'Jelajahi MindSpace',

      'about.eyebrow': 'TENTANG MINDSPACE',
      'about.title': 'Ruang Anda untuk Merasakan, Merenung, <span class="serif-italic">dan Tumbuh</span>',
      'about.subtitle': 'Kami membuat kesejahteraan mental harian mudah diakses — tempat tenang dan pribadi untuk menyadari perasaan Anda dan mengambil langkah kecil menuju kondisi yang lebih baik.',
      'about.stat1Num': '93%',
      'about.stat1Title': 'Merasa Pikiran Lebih <span class="serif-italic">Jernih</span>',
      'about.stat1Desc': 'Sebagian besar orang menyatakan menulis harian membantu merapikan pikiran.',
      'about.stat2Num': '4.8/5',
      'about.stat2Title': 'Skor Ketenangan Pengguna',
      'about.stat2Desc': 'Dinilai oleh pengguna yang berefleksi setidaknya dua kali seminggu.',
      'about.stat3Num': '100%',
      'about.stat3Title': 'Pribadi & Hanya di Perangkat',
      'about.stat3Desc': 'Refleksi Anda tidak pernah meninggalkan peramban web Anda.',

      'checkin.eyebrow': 'PRESENSI HARIAN',
      'checkin.title': 'Presensi Harian',
      'checkin.subtitle': 'Luangkan semenit untuk berhenti sejenak, merasakan kondisi Anda, dan mencatat apa yang ada di pikiran.',
      'checkin.step1Title': 'Bagaimana perasaan Anda saat ini?',
      'checkin.step2Title': 'Apa yang memengaruhi suasana hati Anda hari ini?',
      'checkin.step2Sub': 'Pilih semua yang sesuai',
      'checkin.step3Title': 'Bagaimana tingkat energi Anda?',
      'checkin.step4Title': 'Apa yang paling Anda butuhkan saat ini?',
      'checkin.step4Sub': 'Pilih hingga dua pilihan',
      'checkin.btnNext': 'Lanjutkan',
      'checkin.btnBack': 'Kembali',
      'checkin.btnSubmit': 'Selesaikan Presensi',
      'checkin.resultTitle': 'Presensi Selesai',
      'checkin.restartBtn': 'Presensi Lagi',

      'mood.great': 'Sangat Baik',
      'mood.good': 'Baik',
      'mood.okay': 'Biasa Saja',
      'mood.low': 'Kurang Baik',
      'mood.anxious': 'Cemas',

      'influence.work': 'Pekerjaan & Studi',
      'influence.sleep': 'Tidur & Istirahat',
      'influence.relationships': 'Hubungan',
      'influence.health': 'Kesehatan Fisik',
      'influence.weather': 'Cuaca',
      'influence.news': 'Berita & Media',
      'influence.finances': 'Keuangan',
      'influence.unknown': 'Tidak Yakin',

      'need.rest': 'Istirahat & Relaksasi',
      'need.movement': 'Olahraga / Gerak Fisik',
      'need.connection': 'Terhubung dengan Orang Lain',
      'need.quiet': 'Ketenangan & Waktu Sendiri',
      'need.focus': 'Fokus / Pencapaian',
      'need.kindness': 'Kelembutan Pada Diri',

      'moodLog.eyebrow': 'RIWAYAT SUASANA HATI',
      'moodLog.title': 'Perjalanan Suasana Hati Anda',
      'moodLog.subtitle': 'Lacak pola emosional Anda dari waktu ke waktu untuk mendapatkan kesadaran diri yang lebih dalam.',
      'moodLog.recentTitle': 'Presensi Terakhir',
      'moodLog.empty': 'Belum ada catatan presensi. Selesaikan presensi pertama Anda di atas!',

      'habits.eyebrow': 'KEBIASAAN HARIAN',
      'habits.title': 'Pelacak Kebiasaan',
      'habits.subtitle': 'Bina rutinitas positif yang mendukung keseimbangan mental Anda setiap hari.',
      'habits.addPlaceholder': 'Tambah kebiasaan kustom...',
      'habits.addBtn': 'Tambah Kebiasaan',
      'habits.streak': 'streak {n} hari',
      'habits.progress': '{done} / {total} kebiasaan selesai hari ini',
      'habits.sleep': 'Tidur nyenyak',
      'habits.water': 'Minum air putih',
      'habits.move': 'Bergerak aktif',
      'habits.break': 'Istirahat sejenak',
      'habits.outside': 'Keluar ruangan',
      'habits.connect': 'Sapa orang terdekat',

      'breath.eyebrow': 'KESADARAN DIRI',
      'breath.title': 'Ruang Napas',
      'breath.subtitle': 'Ikuti lingkaran pernapasan berirama untuk merilekskan tubuh dan menenangkan pikiran Anda.',
      'breath.ready': 'Siap?',
      'breath.inhale': 'Tarik Napas',
      'breath.hold': 'Tahan',
      'breath.exhale': 'Hembuskan',
      'breath.rest': 'Istirahat',
      'breath.done': 'Bagus sekali.',
      'breath.begin': 'Mulai',
      'breath.pause': 'Jeda',
      'breath.resume': 'Lanjutkan',
      'breath.beginAgain': 'Mulai Lagi',
      'breath.remaining': 'sisa {time}',
      'breath.1min': '1 Menit',
      'breath.2min': '2 Menit',
      'breath.3min': '3 Menit',

      'journal.eyebrow': 'JURNAL',
      'journal.title': 'Jurnal Refleksi Pribadi',
      'journal.subtitle': 'Tuliskan pikiran Anda, curahkan kecemasan, atau abadikan momen rasa syukur.',
      'journal.newBtn': 'Entri Baru',
      'journal.promptBtn': 'Dapat Pertanyaan Pemantik',
      'journal.placeholder': 'Mulai tuliskan pikiran Anda di sini...',
      'journal.saveBtn': 'Simpan Entri',
      'journal.savedTitle': 'Entri Tersimpan Anda',
      'journal.empty': 'Belum ada entri jurnal. Klik "Entri Baru" untuk menulis refleksi pertama Anda.',
      'journal.prompt1': 'Apa satu hal yang memberi Anda rasa nyaman hari ini?',
      'journal.prompt2': 'Jika Anda bisa memberikan satu pesan lembut untuk diri sendiri sekarang, apa yang ingin Anda katakan?',
      'journal.prompt3': 'Apa yang paling menyita energi pikiran Anda saat ini, dan bisakah Anda melepaskan sebagian darinya?',
      'journal.prompt4': 'Sebutkan tiga hal kecil yang Anda syukuri pada saat ini juga.',

      'resources.eyebrow': 'SUMBER DAYA',
      'resources.title': 'Panduan & Kesadaran Diri',
      'resources.subtitle': 'Artikel dan teknik sederhana yang dirancang untuk membantu Anda mengelola emosi harian.',
      'resources.tabAll': 'Semua',
      'resources.tabStress': 'Redakan Stres',
      'resources.tabSleep': 'Tidur & Istirahat',
      'resources.tabSelfCare': 'Merawat Diri',

      'community.eyebrow': 'KOMUNITAS',
      'community.title': 'Dukungan Bersama',
      'community.subtitle': 'Pesan dukungan dan refleksi anonim dari sesama anggota MindSpace.',
      'community.sharePlaceholder': 'Bagikan pesan dukungan atau refleksi hangat...',
      'community.postBtn': 'Kirim Pesan',

      'contact.eyebrow': 'HUBUNGI KAMI',
      'contact.title': 'Bagikan Pikiran Anda',
      'contact.subtitle': 'Punya masukan atau saran untuk MindSpace? Kami senang mendengar dari Anda.',
      'contact.firstName': 'Nama Depan',
      'contact.firstNamePh': 'Nama depan Anda',
      'contact.lastName': 'Nama Belakang',
      'contact.lastNamePh': 'Nama belakang Anda',
      'contact.email': 'Alamat Email',
      'contact.emailPh': 'anda@email.com',
      'contact.message': 'Apa yang ingin Anda bagikan?',
      'contact.messagePh': 'Pesan Anda…',
      'contact.submitBtn': 'Kirim',
      'contact.confirm': 'Terima kasih — ini adalah formulir demo, tidak ada data yang dikirim.',

      'footer.slogan': 'Luangkan ruang untuk pikiran Anda.',
      'footer.explore': 'JELAJAHI',
      'footer.legal': 'HUKUM',
      'footer.yourSpace': 'RUANG ANDA',
      'footer.exportData': 'Ekspor Data Saya',
      'footer.deleteData': 'Hapus Data Saya',
      'footer.privacy': 'Kebijakan Privasi',
      'footer.terms': 'Syarat Penggunaan',
      'footer.disclaimer': 'MindSpace adalah alat kesejahteraan dan refleksi. Ini tidak menyediakan diagnosis medis atau menggantikan perawatan kesehatan mental profesional. Jika Anda dalam krisis, hubungi layanan darurat lokal atau profesional terpercaya.',
      'footer.copyright': '© 2026 MindSpace. Versi prototipe.'
    }
  };

  let currentLang = typeof store !== 'undefined' ? store.get('lang', 'en') : 'en';

  function t(key, params = {}) {
    let str = (translations[currentLang] && translations[currentLang][key]) || (translations.en && translations.en[key]) || key;
    if (typeof str === 'string') {
      Object.keys(params).forEach(p => {
        str = str.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
      });
    }
    return str;
  }

  function setLanguage(lang) {
    if (!['en', 'id'].includes(lang)) lang = 'en';
    currentLang = lang;
    if (typeof store !== 'undefined') {
      store.set('lang', lang);
    }
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.innerHTML = t(key);
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (key) {
        el.placeholder = t(key);
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('bg-[var(--forest)]', 'text-[var(--ivory)]', 'font-semibold');
        btn.classList.remove('opacity-60', 'hover:opacity-100');
      } else {
        btn.classList.remove('bg-[var(--forest)]', 'text-[var(--ivory)]', 'font-semibold');
        btn.classList.add('opacity-60', 'hover:opacity-100');
      }
    });

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function getLanguage() {
    return currentLang;
  }

  window.i18n = {
    t,
    setLanguage,
    getLanguage,
    translations
  };

  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
  });
})();
