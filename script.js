// ================= CONTROLE DO MENU MOBILE =================
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navList');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navList.classList.toggle('open');

  // Boquear acroll quando menu aberto
  document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

//fechar menu ao clicar em links
document.querySelectorAll('.navList a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.addEventListener.remove('bx-x');
    navList.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
});

// Fechar menu ao rolar
window.addEventListener('scroll', () => {
  if (navList.classList.contains('open')) {
    menuIcon.classList.remove('bx-x');
    navList.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
});