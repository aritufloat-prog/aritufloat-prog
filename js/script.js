const PHASES = [
  {
    id: 1, name: "Fase 1 — Limpeza", sub: "Pré-operacional",
    xp: 100, cf: "invest", cfLabel: "Investimento",
    tasks: [
      { id: "1a", text: "Limpeza pesada interna — recepção, cozinha e banheiro" },
      { id: "1b", text: "Limpeza do forro PVC" },
      { id: "1c", text: "Roçagem geral do terreno" },
      { id: "1d", text: "Retirada de espécies de plantas e pedras" },
      { id: "1e", text: "Dedetização completa (terreno, forro e banheiro)" },
      { id: "1f", text: "Solicitar poda de árvores — execução na fase 3", urgent: true },
    ],
    rewards: ["Percepção visual melhorada", "Início do uso como depósito", "Armazenamento de itens da operação atual"],
    tip: "Com o espaço limpo você já usa como depósito para itens do flutuante Aritú — reduz custo logístico imediato."
  },
  {
    id: 2, name: "Fase 2 — Reparos", sub: "Segurança e controle",
    xp: 150, cf: "invest", cfLabel: "Investimento",
    tasks: [
      { id: "2a", text: "Substituição da porta de madeira" },
      { id: "2b", text: "Substituição de peças do forro PVC danificadas" },
      { id: "2c", text: "Reparo da porta de vidro da fachada" },
      { id: "2d", text: "Substituição da fechadura da porta de vidro" },
      { id: "2e", text: "Limpeza do ar-condicionado" },
      { id: "2f", text: "Instalação de câmeras de segurança" },
      { id: "2g", text: "Contratar elétrico/hidráulico para fase 3", urgent: true },
    ],
    rewards: ["Armazenamento de itens refrigerados e perecíveis", "Armazenamento de itens de médio valor", "Recepção básica habilitada"],
    tip: "Câmeras e fechadura nova permitem guardar itens de valor. O ar-condicionado limpo já habilita uma recepção mínima para clientes de roteiros."
  },
  {
    id: 3, name: "Fase 3 — Reforma construída", sub: "Abertura comercial",
    xp: 250, cf: "partial", cfLabel: "Receita parcial",
    tasks: [
      { id: "3a", text: "Correção e pintura de verniz na testeira" },
      { id: "3b", text: "Poda de árvores (já solicitada na fase 1)" },
      { id: "3c", text: "Correção de pontos elétricos da fachada" },
      { id: "3d", text: "Substituição de lâmpadas e suportes" },
      { id: "3e", text: "Instalação de pontos hidráulicos externos" },
      { id: "3f", text: "Instalação de pontos elétricos externos" },
      { id: "3g", text: "Recuperação do passeio principal de blocos" },
      { id: "3h", text: "Construção do passeio lateral" },
      { id: "3i", text: "Retirada das vistas de madeira das janelas" },
      { id: "3j", text: "Pintura de todas as paredes e pisos" },
      { id: "3k", text: "Caiação dos muros laterais" },
      { id: "3l", text: "Instalação de placa publicitária na fachada" },
    ],
    rewards: ["Vendas presenciais de roteiros iniciadas", "Recepção esteticamente apresentável", "Identidade visual visível na rua"],
    tip: "Marco de monetização: após pintura e placa, iniciar vendas presenciais de roteiros. Uma mesa já gera receita antes do bar estar pronto."
  },
  {
    id: 4, name: "Fase 4 — Área externa", sub: "Estética e estrutura",
    xp: 200, cf: "partial", cfLabel: "Receita parcial",
    tasks: [
      { id: "4a", text: "Nivelamento manual do terreno" },
      { id: "4b", text: "Aplicação de manta bídim" },
      { id: "4c", text: "Aplicação de brita" },
      { id: "4d", text: "Construção do painel/muro de telha de zinco (logo Aritú)" },
      { id: "4e", text: "Instalação da iluminação externa" },
      { id: "4f", text: "Instalação dos sidewalkers na fachada" },
    ],
    rewards: ["Espaço externo funcional e bonito", "Bar improvisado com tenda já possível", "Ambiente noturno com iluminação"],
    tip: "Com o piso de brita e iluminação, uma tenda simples com drinks já testa o produto e gera caixa antes da fase 5."
  },
  {
    id: 5, name: "Fase 5 — Construção do bar", sub: "Operação de receita",
    xp: 300, cf: "full", cfLabel: "Receita plena",
    tasks: [
      { id: "5a", text: "Execução da parte metálica base (estrutura)" },
      { id: "5b", text: "Instalação das colunas" },
      { id: "5c", text: "Estrutura de tabiques (revestimento em madeira)" },
      { id: "5d", text: "Instalação elétrica interna do bar" },
      { id: "5e", text: "Instalação hidráulica do bar" },
      { id: "5f", text: "Instalação de armários e prateleiras" },
      { id: "5g", text: "Envernização e acabamentos finais" },
    ],
    rewards: ["Bar plenamente operacional", "Início da venda de drinks e petiscos", "Principal gerador de caixa ativado"],
    tip: "Planejar armários, prateleiras e pontos elétrico/hidráulicos de forma definitiva antes de começar — evita retrabalho caro."
  },
  {
    id: 6, name: "Fase 6 — Mobiliário e decoração", sub: "Inauguração oficial",
    xp: 200, cf: "full", cfLabel: "Lounge completo",
    tasks: [
      { id: "6a", text: "Logo iluminado, decoração e leds no painel de zinco" },
      { id: "6b", text: "Pintura artística do muro lateral (arte amazônica/surf)" },
      { id: "6c", text: "Compra de mesas, cadeiras e ombrelones" },
      { id: "6d", text: "Revestimento do telhado com palha ou pintura marrom" },
      { id: "6e", text: "Placas decorativas temáticas" },
    ],
    rewards: ["Inauguração oficial do Aritú Base Lounge", "Identidade visual 100% implementada", "Experiência completa para o cliente"],
    tip: "Transformar a inauguração em evento para parceiros e influenciadores — gera visibilidade para o Lounge e para os passeios de flutuante ao mesmo tempo."
  },
];

const TOTAL_XP = PHASES.reduce((s,p) => s + p.xp, 0);
const TOTAL_TASKS = PHASES.reduce((s,p) => s + p.tasks.length, 0);

// ─── State ───────────────────────────────────────────────────────────────────
function loadDone() {
  try { return new Set(JSON.parse(localStorage.getItem('aritu_done') || '[]')); }
  catch { return new Set(); }
}
function saveDone(set) {
  try { localStorage.setItem('aritu_done', JSON.stringify([...set])); } catch {}
}

let done = loadDone();
let openPhase = null;

// ─── Render ──────────────────────────────────────────────────────────────────
function phaseComplete(p) { return p.tasks.every(t => done.has(t.id)); }
function phaseDoneCount(p) { return p.tasks.filter(t => done.has(t.id)).length; }

function cfClass(cf) {
  return cf === 'invest' ? 'pill-invest' : cf === 'partial' ? 'pill-partial' : 'pill-full';
}

function renderPhases() {
  const container = document.getElementById('phases-list');
  let prevUnlocked = true;

  container.innerHTML = PHASES.map((phase, idx) => {
    const locked   = !prevUnlocked;
    const complete = phaseComplete(phase);
    const doneN    = phaseDoneCount(phase);
    const pct      = Math.round((doneN / phase.tasks.length) * 100);
    const isOpen   = openPhase === phase.id;

    if (!complete) prevUnlocked = false;

    const cardClass = [
      'phase-card',
      complete ? 'complete' : (locked ? 'locked' : 'active'),
      isOpen ? 'open' : ''
    ].join(' ');

    const tasksHTML = phase.tasks.map(t => {
      const isDone = done.has(t.id);
      return `<div class="task-item ${isDone ? 'done' : ''}" onclick="toggleTask('${t.id}', ${phase.id}, event)">
        <div class="task-check">${isDone ? '✓' : ''}</div>
        <span class="task-text">${t.text}</span>
        ${t.urgent ? '<span class="urgent-tag">iniciar já</span>' : ''}
      </div>`;
    }).join('');

    const rewardsHTML = phase.rewards.map(r =>
      `<div class="reward-item">${r}</div>`
    ).join('');

    return `
    <div class="${cardClass}" id="phase-${phase.id}">
      <div class="phase-header" onclick="togglePhase(${phase.id})">
        <div class="phase-badge">${complete ? '✓' : phase.id}</div>
        <div class="phase-info">
          <div class="phase-name">${phase.name}</div>
          <div class="phase-sub">${phase.sub} · ${doneN}/${phase.tasks.length} tarefas</div>
        </div>
        <div class="phase-pills">
          <span class="pill pill-xp">+${phase.xp} XP</span>
          <span class="pill ${cfClass(phase.cf)}">${phase.cfLabel}</span>
        </div>
        <span class="chevron">▾</span>
      </div>
      <div class="phase-body">
        <div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div>
        <div class="sub-label">Tarefas</div>
        <div class="task-list">${tasksHTML}</div>
        <div class="sub-label" style="margin-top:1rem">Recompensas desbloqueadas</div>
        <div class="reward-box">${rewardsHTML}</div>
        <div class="sub-label" style="margin-top:1rem">Dica estratégica</div>
        <div class="tip-box"><strong>💡</strong> ${phase.tip}</div>
      </div>
    </div>`;
  }).join('');
}

function updateStats() {
  const doneCount = PHASES.reduce((s,p) => s + p.tasks.filter(t => done.has(t.id)).length, 0);
  const xp = PHASES.reduce((s,p) => {
    const n = p.tasks.filter(t => done.has(t.id)).length;
    return s + Math.round((n / p.tasks.length) * p.xp);
  }, 0);
  const pct = Math.round((doneCount / TOTAL_TASKS) * 100);

  let currentPhase = 1;
  for (let i = 0; i < PHASES.length; i++) {
    if (phaseComplete(PHASES[i])) currentPhase = Math.min(i + 2, PHASES.length);
  }

  document.getElementById('xp-num').textContent = xp;
  document.getElementById('tasks-num').textContent = doneCount;
  document.getElementById('phase-num').textContent = currentPhase;
  document.getElementById('pct-num').textContent = pct + '%';
  document.getElementById('global-progress').style.width = pct + '%';
}

function render() {
  renderPhases();
  updateStats();
}

// ─── Interactions ─────────────────────────────────────────────────────────────
function togglePhase(id) {
  openPhase = openPhase === id ? null : id;
  render();
  if (openPhase) {
    setTimeout(() => {
      const el = document.getElementById('phase-' + id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }
}

function toggleTask(tid, phaseId, e) {
  e.stopPropagation();
  const wasNew = !done.has(tid);
  if (done.has(tid)) done.delete(tid);
  else done.add(tid);
  saveDone(done);

  const phase = PHASES.find(p => p.id === phaseId);
  if (wasNew && phase && phaseComplete(phase)) {
    showToast(`🎉 Fase ${phaseId} completa! +${phase.xp} XP`);
  } else if (wasNew) {
    showToast(`✓ Tarefa concluída! +${Math.round(phase.xp / phase.tasks.length)} XP`);
  }

  openPhase = phaseId;
  render();
}

// Toast
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

function resetAll() {
  if (confirm('Zerar todo o progresso do plano?')) {
    done = new Set();
    saveDone(done);
    openPhase = null;
    render();
    showToast('Progresso zerado — bora começar! 🚀');
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.getElementById('reset-btn').addEventListener('click', resetAll);
render();
