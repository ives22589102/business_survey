// ══════════════════════════════════════════
//  DATA — 題目資料
// ══════════════════════════════════════════

const QUESTIONS = [
  {
    category: "資料與分析",
    text: "貴公司目前在資料收集與分析方面，處於何種狀態？",
    options: [
      { text: "資料已數位化並有基礎分析工具，但缺乏預測性洞察，難以主動發現問題或機會", score: 3 },
      { text: "僅依賴人工記錄與經驗判斷，缺乏系統性資料，難以進行有效分析",              score: 1 },
      { text: "已有數位化資料庫，但資料來源分散，即時性與整合性不足，難以形成全面洞察",    score: 2 },
      { text: "有部分資料系統化，但分析能力有限，決策仍偏重個人經驗而非數據",             score: 2 },
    ],
  },
  {
    category: "流程自動化",
    text: "貴公司在日常業務流程中，自動化程度如何？",
    options: [
      { text: "大多數流程仍為人工操作，幾乎沒有自動化工具",       score: 1 },
      { text: "部分重複性任務已導入自動化，但核心流程仍依賴人工",  score: 2 },
      { text: "多數流程已自動化，並有系統串接整合",               score: 3 },
      { text: "全面自動化並持續以 AI 優化流程與例外處理",          score: 4 },
    ],
  },
  {
    category: "AI 應用現況",
    text: "目前貴公司在哪些領域已實際導入 AI 技術？",
    options: [
      { text: "尚未導入任何 AI 相關工具或技術",                            score: 1 },
      { text: "僅使用一般 SaaS 工具（如 ChatGPT），未進行客製化整合",        score: 2 },
      { text: "已在特定業務（如客服、行銷、品管）導入 AI 解決方案",           score: 3 },
      { text: "AI 全面融入核心業務，包含預測模型、智慧排程等深度應用",         score: 4 },
    ],
  },
  {
    category: "組織數位能力",
    text: "貴公司員工對於數位工具與新技術的接受與應用能力？",
    options: [
      { text: "大多數員工抗拒新工具，數位轉型阻力大",           score: 1 },
      { text: "部分員工願意學習，但整體數位素養仍偏低",          score: 2 },
      { text: "多數員工能熟練使用數位工具，並有專責數位推動團隊", score: 3 },
      { text: "全員具備高度數位素養，並主動驅動創新應用",        score: 4 },
    ],
  },
  {
    category: "決策機制",
    text: "貴公司在做重要商業決策時，主要依據是？",
    options: [
      { text: "主要依靠管理階層的直覺與過去經驗",                   score: 1 },
      { text: "參考部分歷史報表，但資料往往不夠即時或完整",           score: 2 },
      { text: "有固定的 KPI 儀表板，但缺乏預測性分析支援",            score: 3 },
      { text: "透過即時數據與 AI 預測模型輔助決策，做到數據驅動管理",  score: 4 },
    ],
  },
  {
    category: "供應鏈與運營",
    text: "貴公司在供應鏈管理與生產運營方面，目前挑戰為？",
    options: [
      { text: "庫存與排程完全依賴人工，常有缺料或過剩問題",           score: 1 },
      { text: "有基本 ERP 系統，但無法做到動態預測與彈性調整",         score: 2 },
      { text: "具備一定的預測能力，但仍有較大改善空間",               score: 3 },
      { text: "已導入 AI 驅動的供應鏈優化，可動態應對市場波動",        score: 4 },
    ],
  },
  {
    category: "客戶體驗",
    text: "貴公司在提升客戶體驗與服務個人化方面的現況？",
    options: [
      { text: "服務標準化，幾乎無法針對客戶個別需求調整",            score: 1 },
      { text: "有基本的客戶分群，但個人化程度有限",                  score: 2 },
      { text: "透過 CRM 系統進行客戶管理，部分場景已個人化",           score: 3 },
      { text: "全方位個人化服務，AI 主動預測客戶需求並提供推薦",        score: 4 },
    ],
  },
  {
    category: "轉型意願與資源",
    text: "貴公司對於 AI 轉型的預算投入與高層支持程度？",
    options: [
      { text: "目前無明確預算規劃，高層尚未將 AI 列為優先議題",        score: 1 },
      { text: "有初步討論，但尚未落實預算或成立專責推動小組",          score: 2 },
      { text: "已有明確預算規劃，並成立跨部門推動團隊",               score: 3 },
      { text: "高層全力支持，AI 轉型為公司年度核心策略之一",           score: 4 },
    ],
  },
];

// 面向分組（用於結果頁長條圖）
const DIMENSIONS = [
  { name: "資料與決策",   qIndexes: [0, 4] },
  { name: "流程與自動化", qIndexes: [1, 5] },
  { name: "AI 應用深度",  qIndexes: [2] },
  { name: "組織能力",     qIndexes: [3, 7] },
  { name: "客戶體驗",     qIndexes: [6] },
];

// 分數等級定義
const LEVELS = [
  {
    min: 8, max: 13,
    name: "基礎級 Starter-level",
    title: "AI 轉型潛力待開發",
    desc: "貴公司目前在數位化與 AI 應用方面仍處於起步階段，多數業務流程依賴人工與經驗判斷，缺乏系統性資料支撐與自動化工具。然而，這也代表轉型空間相當巨大，只要踏出第一步，即可快速看見成效。",
    suggest: "建議從基礎數位化切入，優先建立資料收集機制與流程標準化。可考慮導入輕量 SaaS 工具，以低成本快速驗證智慧化效益，再逐步擴展至核心業務。",
  },
  {
    min: 14, max: 20,
    name: "發展級 Growing-level",
    title: "數位基礎已具備，等待全面整合",
    desc: "貴公司已累積一定的數位基礎，部分流程有工具支撐，員工也開始接觸新技術。但各系統之間的整合度不足，資料孤島現象明顯，AI 的應用尚停留在點狀導入，尚未形成系統性優勢。",
    suggest: "建議重點投資在系統整合與資料治理，打通各部門資料流。同時選定 1-2 個高影響力場景（如預測性維護、客服 AI）進行深度 POC 驗證，快速積累成功案例。",
  },
  {
    min: 21, max: 27,
    name: "進階級 Advanced-level",
    title: "智慧轉型已啟動，深化應用是關鍵",
    desc: "貴公司已具備一定的數位化基礎，但在數據整合、流程優化或市場應變方面仍有進步空間。這表示公司導入智慧化解決方案的必要性高，能進一步深化營運效率與決策品質。透過智慧化，您將能打破現有瓶頸，實現更深層次的價值創造。",
    suggest: "建議進一步探索 AIoT 與大數據分析的應用，例如導入預測性維護、供應鏈優化、智慧決策輔助系統等，以提升整體營運的智慧化水平。可考慮與專業的 AIoT 或 SI 廠商合作，共同規劃進階解決方案。",
  },
  {
    min: 28, max: 32,
    name: "領導級 Leader-level",
    title: "AI 驅動企業，引領產業變革",
    desc: "貴公司在 AI 智慧轉型方面已達到領先水準，具備完整的數位生態與高度自動化的核心業務。數據驅動決策已成為企業 DNA 的一部分，AI 應用廣泛且深入。",
    suggest: "建議持續探索生成式 AI、自主 AI Agent 等前沿技術，打造差異化競爭優勢。同時可考慮將內部最佳實踐外化，透過 AI 賦能生態系夥伴，強化整體產業鏈競爭力。",
  },
];

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let currentQ = 0;
let answers  = new Array(QUESTIONS.length).fill(null);

// ══════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function startQuiz() {
  currentQ = 0;
  answers   = new Array(QUESTIONS.length).fill(null);
  renderQ();
  showScreen('quiz');
}

function renderQ() {
  const q = QUESTIONS[currentQ];
  const total = QUESTIONS.length;

  // 更新進度條
  document.getElementById('progressFill').style.width =
    `${((currentQ) / total) * 100}%`;

  document.getElementById('qCounter').textContent =
    `問題 ${currentQ + 1} / ${total}`;
  document.getElementById('qCategory').textContent = q.category;
  document.getElementById('qText').textContent = q.text;

  // 渲染選項
  const ol = document.getElementById('optionsList');
  ol.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[currentQ] === i ? ' selected' : '');
    btn.innerHTML = `<span class="option-dot"></span><span>${opt.text}</span>`;
    btn.onclick = () => selectOption(i);
    ol.appendChild(btn);
  });

  // 導航按鈕
  document.getElementById('btnPrev').disabled = currentQ === 0;
  updateNextBtn();

  // 重新觸發動畫
  const card = document.getElementById('qCard');
  card.classList.remove('fade-up');
  void card.offsetWidth;
  card.classList.add('fade-up');
}

function selectOption(i) {
  answers[currentQ] = i;
  document.querySelectorAll('.option-btn').forEach((b, idx) => {
    b.classList.toggle('selected', idx === i);
  });
  updateNextBtn();
}

function updateNextBtn() {
  const last = currentQ === QUESTIONS.length - 1;
  const btn  = document.getElementById('btnNext');
  btn.textContent = last ? '查看結果 ✓' : '下一題 →';
  btn.disabled    = answers[currentQ] === null;
}

function nextQ() {
  if (answers[currentQ] === null) return;
  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQ();
  } else {
    showResult();
  }
}

function prevQ() {
  if (currentQ > 0) { currentQ--; renderQ(); }
}

function showResult() {
  // 計算總分
  const total = answers.reduce((sum, ans, qi) => {
    if (ans === null) return sum;
    return sum + QUESTIONS[qi].options[ans].score;
  }, 0);

  // 找對應等級
  const level = LEVELS.find(l => total >= l.min && total <= l.max) || LEVELS[LEVELS.length - 1];

  document.getElementById('scoreNum').textContent   = total;
  document.getElementById('levelBadge').textContent  = level.name;
  document.getElementById('resultTitle').textContent = level.title;
  document.getElementById('resultDesc').textContent  = level.desc;
  document.getElementById('resultSuggest').textContent = level.suggest;

  // 面向長條圖
  const maxPerDim = 4;
  const barsEl = document.getElementById('dimBars');
  barsEl.innerHTML = '';
  DIMENSIONS.forEach(dim => {
    const earned = dim.qIndexes.reduce((s, qi) => {
      if (answers[qi] === null) return s;
      return s + QUESTIONS[qi].options[answers[qi]].score;
    }, 0);
    const maxEarned = dim.qIndexes.length * maxPerDim;
    const pct = Math.round((earned / maxEarned) * 100);

    barsEl.innerHTML += `
      <div class="dim-item">
        <div class="dim-label-row"><span>${dim.name}</span><span>${pct}%</span></div>
        <div class="dim-bar-bg">
          <div class="dim-bar-fill" style="width:0%" data-pct="${pct}"></div>
        </div>
      </div>`;
  });

  showScreen('result');

  // 動畫長條圖（等待繪製後）
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.dim-bar-fill').forEach(el => {
        el.style.width = el.dataset.pct + '%';
      });
    });
  });
}

function restart() {
  showScreen('hero');
}
