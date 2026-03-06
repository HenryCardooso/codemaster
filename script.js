
// ================== Animação do Título ==================
// Seleciona o elemento do título e define variáveis para a animção
const titleElement = document.querySelector('#name');
const text = "CODEMASTER";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// Função para animar o texto do título (digitação e apagamento)
function animateText() {
    if (isTyping) {
        if (index < text.length) {
            titleElement.textContent = text.slice(0, index + 1); // Adiciona uma letra ao título
            index++;
        } else {
            isTyping = false; // Alterna para o modo de apagamento
        }
    } else {
      if (index > 1) {
            titleElement.textContent = text.slice(0, index - 1); // Remove uma letra do título
            index--;
      } else {
          isTyping = true; // Alterna para o modo de digitação
          // Alterna a cor do texto entre branco/preto e laranja
          currentColor = currentColor === (document.documentElement.classList.contains('light') ? 'black' : '#fff') ? '#C94C16' : (document.documentElement.classList.contains('light') ? 'black' : '#fff'); 
          titleElement.style.color = currentColor;
      }
    }
    setTimeout(animateText, 300); // Define um intervalo para a próxima animação
}

// Função para atualizar a cor do texto do título com base no tema
function updateTextColor() {
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

// Inicia a animação do título ao carregar a página
document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();
