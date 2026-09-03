const page = document.body.dataset.page;

document.querySelectorAll('[data-nav]').forEach(link => {
  if (link.dataset.nav === page) link.classList.add('is-current');
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.top-nav');

menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
});

document.querySelectorAll('.month-chip').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.month;
    document.querySelectorAll('.month-chip').forEach(chip => chip.classList.toggle('active', chip === button));
    document.querySelectorAll('.experience-month').forEach(section => {
      section.hidden = target !== 'all' && section.dataset.month !== target;
    });
  });
});

const params = new URLSearchParams(window.location.search);
const experienceTitle = document.getElementById('experience-title');
const experienceKicker = document.getElementById('experience-kicker');
const experienceSubtitle = document.getElementById('experience-subtitle');

const knownExperiences = {
  'Marzo-1': 'La Hora del Planeta',
  'Marzo-2': 'Cuaderno de Esperanza',
  'Marzo-3': 'Donaciones Patitas de Santa Eulalia'
};

if (experienceTitle) {
  const mes = params.get('mes') || 'Mes';
  const n = params.get('n') || '1';
  const key = `${mes}-${n}`;
  const knownTitle = knownExperiences[key];
  experienceKicker.textContent = `${mes.toUpperCase()} · EXPERIENCIA ${String(n).padStart(2, '0')}`;
  experienceTitle.innerHTML = knownTitle
    ? `${knownTitle}`
    : `Experiencia <span class="gradient-word">${String(n).padStart(2, '0')}.</span>`;
  experienceSubtitle.textContent = knownTitle
    ? 'Página preparada para incorporar la descripción, evidencias y reflexión de esta experiencia.'
    : `Plantilla de ${mes} preparada para completar con la experiencia real de Catalina.`;
  document.title = knownTitle ? `${knownTitle} · Catalina CAS` : `${mes} · Experiencia ${n} · Catalina CAS`;
}

const projectTitle = document.getElementById('project-title');
const projectKicker = document.getElementById('project-kicker');

if (projectTitle) {
  const n = params.get('n') || '1';
  projectKicker.textContent = `PROYECTO CAS · ${String(n).padStart(2, '0')}`;
  projectTitle.innerHTML = `Proyecto <span class="gradient-word">${String(n).padStart(2, '0')}.</span>`;
  document.title = `Proyecto ${n} · Catalina CAS`;
}
