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
