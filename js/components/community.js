
(function () {
  const testimonials = [
    { text: "Today I finally gave myself permission to slow down.", name: "Anonymous" },
    { text: "I appreciate the gentle reminders to be kind to myself as I learn healthier habits.", name: "Anonymous" },
    { text: "Writing every night has helped me understand what I actually feel instead of just reacting.", name: "Anonymous" },
    { text: "The breathing exercise talked me down during a genuinely hard week.", name: "Anonymous" },
    { text: "I like that nothing here tells me what's 'wrong' with me — it just helps me notice.", name: "Anonymous" },
  ];
  function renderTestimonials() {
    const track = $('#testimonial-track');
    track.innerHTML = testimonials.map(t => `
    <div class="card p-6 min-w-[260px] max-w-[280px] shrink-0" style="scroll-snap-align:start;">
      <i data-lucide="quote" class="w-5 h-5 mb-4" style="color:var(--sage);"></i>
      <p class="text-sm leading-relaxed mb-6">“${t.text}”</p>
      <div class="text-xs font-medium" style="color:var(--ink-soft);">— ${t.name}</div>
    </div>
  `).join('');
    lucide.createIcons();
  }
  renderTestimonials();
  $('#testi-next').addEventListener('click', () => $('#testimonial-track').scrollBy({ left: 290, behavior: 'smooth' }));
  $('#testi-prev').addEventListener('click', () => $('#testimonial-track').scrollBy({ left: -290, behavior: 'smooth' }));
})();
