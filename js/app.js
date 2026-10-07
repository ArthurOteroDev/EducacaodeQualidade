// js/app.js - Interações gerais do site

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Envio do Formulário de Feedback/Depoimento
  const feedbackNome = document.getElementById('feedback-nome');
  const feedbackMensagem = document.getElementById('feedback-mensagem');
  const btnEnviarFeedback = document.querySelector('#comunidade button');

  if (btnEnviarFeedback) {
    btnEnviarFeedback.addEventListener('click', (e) => {
      e.preventDefault();

      const nome = feedbackNome ? feedbackNome.value.trim() : '';
      const mensagem = feedbackMensagem ? feedbackMensagem.value.trim() : '';

      if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
        return;
      }

      alert(`Obrigado pelo seu depoimento, ${nome}! Ele foi enviado com sucesso.`);

      // Limpa os campos após o envio
      if (feedbackNome) feedbackNome.value = '';
      if (feedbackMensagem) feedbackMensagem.value = '';
    });
  }

  // 2. Rolagem suave para os links do menu interno
  const menuLinks = document.querySelectorAll('header nav a[href^="#"]');
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});