(() => {
  const menu = document.getElementById('menu');
  const burger = document.getElementById('burger');
  if (!menu || !burger) return;

  const mq = window.matchMedia('(max-width: 640px)');
  const links = menu.querySelectorAll('a');

  const open = () => {
    menu.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  };

  const close = () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    menu.classList.contains('open') ? close() : open();
  });

  links.forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', () => { if (!mq.matches) close(); });
})();