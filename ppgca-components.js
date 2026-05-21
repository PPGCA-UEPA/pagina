/* ═══════════════════════════════════════
   PPGCA/UEPA — Componentes Compartilhados
   ═══════════════════════════════════════ */

/* ─── HEADER ─── */
function renderHeader(paginaAtiva) {
  const menus = [
    {
      label: 'Institucional', id: 'institucional', href: 'institucional.html',
      sub: [
        { label: 'Apresentação', href: 'institucional.html' },
        { label: 'Histórico', href: 'institucional.html#historico' },
        { label: 'Missão, Visão e Valores', href: 'institucional.html#missao' },
        { label: 'Coordenação e Colegiado', href: 'institucional.html#coordenacao' },
        { label: 'Regimento e Normas', href: 'institucional.html#regimento' },
        { label: 'Calendário Acadêmico', href: 'institucional.html#calendario' },
        { label: 'Transparência', href: 'institucional.html#transparencia' },
      ]
    },
    {
      label: 'Ensino e Pesquisa', id: 'ensino', href: 'ensino-pesquisa.html',
      sub: [
        { label: 'Estrutura Acadêmica', href: 'ensino-pesquisa.html#estrutura' },
        { label: 'Linhas de Pesquisa', href: 'pesquisa.html' },
        { label: 'Disciplinas', href: 'ensino-pesquisa.html#disciplinas' },
        { label: 'Projetos de Pesquisa', href: 'projetos.html' },
        { label: 'Infraestrutura e Laboratórios', href: 'infraestrutura.html' },
      ]
    },
    {
      label: 'Produção Científica', id: 'producao', href: 'producao.html',
      sub: [
        { label: 'Artigos e Periódicos', href: 'producao.html#artigos' },
        { label: 'Dissertações e Teses', href: 'producao.html#dissertacoes' },
        { label: 'Livros e Capítulos',   href: 'producao.html#livros' },
      ]
    },
    {
      label: 'Extensão e Internacionalização', id: 'cooperacao', href: 'cooperacao.html',
      sub: [
        { label: 'Internacionalização', href: 'cooperacao.html#internacional' },
        { label: 'Cooperação Nacional', href: 'cooperacao.html#nacional' },
        { label: 'Inserção Social e Extensão', href: 'cooperacao.html#extensao' },
        { label: 'Eventos Científicos', href: 'cooperacao.html#eventos' },
      ]
    },
    {
      label: 'Pessoas', id: 'pessoas', href: 'docentes.html',
      sub: [
        { label: 'Corpo Docente', href: 'docentes.html' },
        { label: 'Discentes', href: 'discentes.html' },
        { label: 'Egressos', href: 'discentes.html#egressos' },
      ]
    },
    { label: 'Processo Seletivo', id: 'seletivo', href: 'seletivo.html', sub: [] },
    { label: 'Notícias', id: 'noticias', href: 'noticias.html', sub: [] },
  ];

  const html = `
    <div class="barra-acessibilidade">
      <div class="inner">
        <a href="#">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"/><path d="M12 7v8m-4-4h8"/></svg>
          Acessibilidade
        </a>
        <a href="#">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          Alto Contraste
        </a>
        <a href="#">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
          VLibras
        </a>
      </div>
    </div>
    <header>
      <div class="header-inner">
        <a href="index.html" class="logo-wrap">
          <img src="logo_UEPA.jpg" alt="Brasão UEPA" class="logo-uepa">
          <img src="Logo_ciencias_ambientais.jpg" alt="PPGCA UEPA" class="logo-ppgca">
        </a>
        <nav>
          <ul>
            ${menus.map(m => `
              <li class="${m.sub.length ? 'dropdown' : ''}">
                <a href="${m.href}" ${m.id === paginaAtiva ? 'class="ativo"' : ''}>
                  ${m.label} ${m.sub.length ? '<span class="chevron">▾</span>' : ''}
                </a>
                ${m.sub.length ? `
                  <div class="dropdown-menu">
                    ${m.sub.map(s => `<a href="${s.href}">${s.label}</a>`).join('')}
                  </div>` : ''}
              </li>`).join('')}
          </ul>
        </nav>
        <div class="header-actions">
          <button class="btn-busca" title="Buscar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <a href="#" class="btn-area-aluno">Portal do Aluno</a>
        </div>
      </div>
    </header>`;
  document.getElementById('site-header').innerHTML = html;
}

/* ─── FOOTER ─── */
function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <footer>
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logos">
            <img src="logo_UEPA.jpg" alt="UEPA" class="logo-f-uepa">
            <img src="Logo_ciencias_ambientais.jpg" alt="PPGCA" class="logo-f-ppgca">
          </div>
          <p>Formação qualificada e produção de conhecimento para a conservação e o desenvolvimento sustentável da Amazônia.</p>
          <div class="footer-social">
            <a href="#" title="Instagram">ig</a>
            <a href="#" title="Facebook">f</a>
            <a href="#" title="YouTube">▶</a>
            <a href="#" title="LinkedIn">in</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Contato</h4>
          <div class="info-item">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>
            (91) 3131-1914
          </div>
          <div class="info-item">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ppgca@uepa.br
          </div>
          <div class="info-item">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ppgca.secretaria@uepa.br
          </div>
        </div>
        <div class="footer-col">
          <h4>Endereço</h4>
          <div class="info-item">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Centro de Ciências Naturais e Tecnologia — CCNT<br>Tv. Enéas Pinheiro, 2626 - Marco<br>Belém - PA, 66095-100<br><br>Seg. a sexta: 08h às 17h</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>Acesso Rápido</h4>
          <ul>
            <li><a href="#">Portal da UEPA</a></li>
            <li><a href="#">CAPES</a></li>
            <li><a href="#">Plataforma Sucupira</a></li>
            <li><a href="#">SEI / UEPA</a></li>
            <li><a href="#">Lattes CNPq</a></li>
            <li><a href="#">Repositório UEPA</a></li>
            <li><a href="index.html">Mapa do Site</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 PPGCA/UEPA — Todos os direitos reservados.</span>
        <div class="footer-bottom-links">
          <a href="#">Mapa do Site</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Acessibilidade</a>
        </div>
      </div>
    </footer>`;
}

/* ─── ACCORDION ─── */
function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = btn.classList.contains('aberto');
      // fechar todos
      document.querySelectorAll('.accordion-btn').forEach(b => {
        b.classList.remove('aberto');
        b.nextElementSibling.classList.remove('aberto');
      });
      if (!isOpen) {
        btn.classList.add('aberto');
        content.classList.add('aberto');
      }
    });
  });
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof PAGINA_ATIVA !== 'undefined') renderHeader(PAGINA_ATIVA);
  renderFooter();
  initAccordion();
});
