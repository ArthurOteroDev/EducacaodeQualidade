// js/cv-generator.js - Lógica do gerador de currículo

document.addEventListener('DOMContentLoaded', () => {
  // Mapeamento dos inputs aos elementos do preview
  const campos = [
    { inputId: 'cv-nome', previewId: 'preview-nome', defaultValue: 'Seu Nome Aqui' },
    { inputId: 'cv-cargo', previewId: 'preview-cargo', defaultValue: 'Seu Cargo / Título' },
    { inputId: 'cv-objetivo', previewId: 'preview-objetivo', defaultValue: 'Seu objetivo profissional aparecerá aqui conforme você preenche o formulário.' },
    { inputId: 'cv-formacao', previewId: 'preview-formacao', defaultValue: 'Sua formação acadêmica.' },
    { inputId: 'cv-experiencia', previewId: 'preview-experiencia', defaultValue: 'Sua última experiência profissional.' },
    { inputId: 'cv-cursos', previewId: 'preview-cursos', defaultValue: 'Seus cursos concluídos.' }
  ];

  // Adiciona evento de escuta em cada input para atualizar o preview instantaneamente
  campos.forEach(campo => {
    const inputEl = document.getElementById(campo.inputId);
    const previewEl = document.getElementById(campo.previewId);

    if (inputEl && previewEl) {
      inputEl.addEventListener('input', () => {
        previewEl.textContent = inputEl.value.trim() !== '' ? inputEl.value : campo.defaultValue;
      });
    }
  });

  // Atualização combinada dos dados de contato (E-mail, Telefone, Cidade)
  const emailInput = document.getElementById('cv-email');
  const telInput = document.getElementById('cv-telefone');
  const cidadeInput = document.getElementById('cv-cidade');
  const previewContato = document.getElementById('preview-contato');

  function atualizarContato() {
    if (!previewContato) return;
    
    const email = emailInput?.value.trim() || 'email@exemplo.com';
    const tel = telInput?.value.trim() || '(00) 00000-0000';
    const cidade = cidadeInput?.value.trim() || 'Cidade, UF';

    previewContato.textContent = `${email} | ${tel} | ${cidade}`;
  }

  [emailInput, telInput, cidadeInput].forEach(input => {
    if (input) {
      input.addEventListener('input', atualizarContato);
    }
  });

  // Botão de Imprimir / Baixar PDF
  const btnImprimir = document.getElementById('btn-imprimir-cv');
  if (btnImprimir) {
    btnImprimir.addEventListener('click', () => {
      window.print();
    });
  }
});