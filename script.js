
// ================== ANIMAÇÃO DA SEÇÃO "SOBRE MIM" ==================
// Seleciona a seção "Sobre Mim"
const aboutSection = document.querySelector('.about');

// Função para verificar se a seção está visível na tela
function checkAboutVisibility() {
  const rect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Verifica se a seção está dentro da área visível da tela
  if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
    aboutSection.classList.add('visible'); // Adiciona a classe "visible"
    window.removeEventListener('scroll', checkAboutVisibility); // Remove o listener após a animação
  }
}

// Adiciona um listener para o evento de scroll
window.addEventListener('scroll', checkAboutVisibility);

// Verifica a visibilidade ao carregar a página (caso a seção já esteja visível)
checkAboutVisibility();
