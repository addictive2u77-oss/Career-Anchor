import { useState } from "react";

const anchors = [
  { id: "TF", label: "전문/기능 역량", emoji: "🔬", color: "#6366f1" },
  { id: "GM", label: "관리 역량",      emoji: "🏛️", color: "#0ea5e9" },
  { id: "AU", label: "자율/독립",      emoji: "🦅", color: "#f59e0b" },
  { id: "SE", label: "안정/보장",      emoji: "⚓", color: "#10b981" },
  { id: "EC", label: "창업가적 창의성",emoji: "🚀", color: "#ef4444" },
  { id: "SV", label: "봉사/헌신",      emoji: "🌱", color: "#8b5cf6" },
  { id: "CH", label: "순수한 도전",    emoji: "⚡", color: "#f97316" },
  { id: "LS", label: "일-여가 조화",   emoji: "☯️", color: "#ec4899" },
];

/* ─── 파트 1: 기본 문항 40개 ─── */
const mainQuestions = [
  { id:1,  anchor:"TF", text:"나는 내 분야에서 최고 수준의 전문가가 되고 싶다." },
  { id:2,  anchor:"TF", text:"내가 탁월한 전문성을 발휘할 수 있는 일을 할 때 가장 보람을 느낀다." },
  { id:3,  anchor:"TF", text:"경영직보다는 내가 잘하는 전문 분야에서 계속 성장하는 것이 더 중요하다." },
  { id:4,  anchor:"TF", text:"전문 분야의 깊은 지식 없이 관리자가 되는 것은 의미 없다고 생각한다." },
  { id:5,  anchor:"TF", text:"나는 내 기술과 전문성을 활용할 수 있는 환경에서 일할 때 가장 동기부여가 된다." },
  { id:6,  anchor:"GM", text:"나는 조직을 이끌고 중요한 의사결정을 내리고 싶다." },
  { id:7,  anchor:"GM", text:"여러 부서를 통합하고 조율하는 역할이 나에게 잘 맞는다." },
  { id:8,  anchor:"GM", text:"나는 높은 직위와 그에 따르는 영향력을 추구한다." },
  { id:9,  anchor:"GM", text:"조직 전체의 성과에 대한 책임을 지는 것이 나를 동기부여한다." },
  { id:10, anchor:"GM", text:"나는 사람, 예산, 자원을 관리하는 역할을 선호한다." },
  { id:11, anchor:"AU", text:"나는 내 방식대로 일할 수 있는 자유가 가장 중요하다." },
  { id:12, anchor:"AU", text:"다른 사람의 규칙보다 내 기준에 따라 일하고 싶다." },
  { id:13, anchor:"AU", text:"나는 제약이 많은 조직보다 자율성이 보장되는 환경을 선호한다." },
  { id:14, anchor:"AU", text:"누군가의 지시를 받는 것보다 스스로 계획하고 실행하는 것을 선호한다." },
  { id:15, anchor:"AU", text:"나는 조직 내 규정이 나의 업무 방식을 제한할 때 스트레스를 받는다." },
  { id:16, anchor:"SE", text:"나는 장기적으로 안정적인 직업과 수입이 가장 중요하다." },
  { id:17, anchor:"SE", text:"불확실성보다 예측 가능하고 안정적인 환경이 나에게 맞는다." },
  { id:18, anchor:"SE", text:"복지와 고용 안정성이 보장된 조직에서 일하고 싶다." },
  { id:19, anchor:"SE", text:"나는 큰 위험을 감수하기보다 안정적인 경로를 선택하는 편이다." },
  { id:20, anchor:"SE", text:"미래에 대한 재정적 보장이 커리어 선택에서 가장 큰 요소 중 하나이다." },
  { id:21, anchor:"EC", text:"나는 새로운 사업이나 서비스를 직접 만들어내고 싶다." },
  { id:22, anchor:"EC", text:"나만의 아이디어로 무언가를 창조하는 것이 가장 큰 성취감을 준다." },
  { id:23, anchor:"EC", text:"나는 기존의 것을 개선하는 것보다 완전히 새로운 것을 시작하는 것을 좋아한다." },
  { id:24, anchor:"EC", text:"나는 언젠가 내 사업을 직접 운영하고 싶다." },
  { id:25, anchor:"EC", text:"재정적 위험을 감수하더라도 혁신적인 아이디어를 실현하고 싶다." },
  { id:26, anchor:"SV", text:"나는 사회나 타인의 삶을 개선하는 데 기여하는 일을 하고 싶다." },
  { id:27, anchor:"SV", text:"내 일이 세상에 긍정적인 변화를 만든다는 느낌이 중요하다." },
  { id:28, anchor:"SV", text:"나는 돈보다 의미 있는 일에 더 높은 가치를 둔다." },
  { id:29, anchor:"SV", text:"내가 믿는 가치와 일치하는 조직에서 일하는 것이 중요하다." },
  { id:30, anchor:"SV", text:"사람들을 돕고 지원하는 것이 나의 직업적 정체성의 핵심이다." },
  { id:31, anchor:"CH", text:"나는 어렵고 불가능해 보이는 도전을 해결하는 것 자체를 즐긴다." },
  { id:32, anchor:"CH", text:"나는 쉬운 일보다 극도로 어려운 문제를 맞닥뜨렸을 때 더 동기부여가 된다." },
  { id:33, anchor:"CH", text:"경쟁에서 이기거나 강력한 장애물을 극복하는 것이 나를 흥분시킨다." },
  { id:34, anchor:"CH", text:"나는 타인이 실패한 일을 성공시키는 데서 만족감을 얻는다." },
  { id:35, anchor:"CH", text:"일이 너무 쉬워지면 의욕이 떨어진다." },
  { id:36, anchor:"LS", text:"나는 일과 개인 삶의 균형이 잘 맞아야 진정한 성공이라 생각한다." },
  { id:37, anchor:"LS", text:"일 때문에 개인 시간, 가족, 건강을 희생하고 싶지 않다." },
  { id:38, anchor:"LS", text:"나는 유연한 근무 방식(재택, 탄력근무 등)이 매우 중요하다." },
  { id:39, anchor:"LS", text:"내 커리어는 삶 전체의 일부이며, 삶의 다른 부분들도 동등하게 중요하다." },
  { id:40, anchor:"LS", text:"나는 일 이외의 취미, 관계, 활동도 커리어만큼 소중히 여긴다." },
];

/* ─── 파트 2: 역문항 8개 (채점: 7 - 응답값) ─── */
const reverseQuestions = [
  { id:41, anchor:"TF", type:"reverse", text:"나는 전문성을 쌓는 것보다 빠른 승진과 직위 향상이 더 중요하다." },
  { id:42, anchor:"GM", type:"reverse", text:"나는 조직 전체를 관리하는 것보다 내가 잘하는 업무에만 집중하고 싶다." },
  { id:43, anchor:"AU", type:"reverse", text:"나는 명확한 지침과 절차가 있을 때 오히려 일하기 편하다." },
  { id:44, anchor:"SE", type:"reverse", text:"나는 안정성보다 새로운 가능성과 기회를 더 중요하게 여긴다." },
  { id:45, anchor:"EC", type:"reverse", text:"나는 새로운 것을 시작하기보다 잘 갖춰진 시스템 안에서 일하는 것이 더 맞는다." },
  { id:46, anchor:"SV", type:"reverse", text:"나는 사회적 의미보다 개인의 성취와 보상이 커리어에서 더 중요하다." },
  { id:47, anchor:"CH", type:"reverse", text:"나는 굳이 어려운 길을 택하기보다 효율적이고 검증된 방법을 선호한다." },
  { id:48, anchor:"LS", type:"reverse", text:"나는 일과 삶을 분리하기보다 일에 깊이 몰입하는 것이 자연스럽다." },
];

/* ─── 파트 3: 트레이드오프 12개 (선택 앵커 +4점) ─── */
const tradeoffQuestions = [
  { id:49, type:"tradeoff", anchorA:"TF", anchorB:"GM",
    textA:"한 분야의 최고 전문가로 평생 인정받는다",
    textB:"조직 전체를 이끄는 리더가 된다" },
  { id:50, type:"tradeoff", anchorA:"AU", anchorB:"SE",
    textA:"규칙은 없지만 수입이 불안정한 자유로운 일",
    textB:"자율성은 적지만 안정적이고 예측 가능한 일" },
  { id:51, type:"tradeoff", anchorA:"EC", anchorB:"SV",
    textA:"내 이름을 건 사업을 만들어낸다",
    textB:"사회에 실질적인 변화를 만드는 일을 한다" },
  { id:52, type:"tradeoff", anchorA:"CH", anchorB:"LS",
    textA:"극도로 어렵지만 성취감이 큰 도전적인 일",
    textB:"적당한 난이도지만 삶의 여유가 보장되는 일" },
  { id:53, type:"tradeoff", anchorA:"TF", anchorB:"SV",
    textA:"특정 분야에서 세계적 수준의 전문가가 된다",
    textB:"많은 사람의 삶에 직접적인 도움을 주는 일을 한다" },
  { id:54, type:"tradeoff", anchorA:"GM", anchorB:"AU",
    textA:"큰 조직의 리더가 되어 수백 명을 이끈다",
    textB:"혼자 또는 소수와 함께 내 방식대로 일한다" },
  { id:55, type:"tradeoff", anchorA:"SE", anchorB:"EC",
    textA:"30년간 안정적인 직장과 든든한 복지",
    textB:"불확실하지만 내가 만든 것으로 성공할 기회" },
  { id:56, type:"tradeoff", anchorA:"CH", anchorB:"TF",
    textA:"아무도 풀지 못한 문제를 해결하는 것",
    textB:"내 분야에서 가장 깊은 지식을 가진 사람이 되는 것" },
  { id:57, type:"tradeoff", anchorA:"LS", anchorB:"GM",
    textA:"퇴근 후 온전한 개인 시간과 가족과의 저녁",
    textB:"바쁘지만 더 높은 자리와 더 큰 영향력" },
  { id:58, type:"tradeoff", anchorA:"AU", anchorB:"EC",
    textA:"내 방식대로 자유롭게 일하는 환경",
    textB:"내가 직접 만든 제품이나 사업이 성장하는 것" },
  { id:59, type:"tradeoff", anchorA:"SV", anchorB:"SE",
    textA:"급여가 낮아도 사회적 가치가 명확한 일",
    textB:"가치는 명확하지 않아도 재정적으로 안정된 일" },
  { id:60, type:"tradeoff", anchorA:"CH", anchorB:"GM",
    textA:"업계에서 가장 어려운 프로젝트를 맡는 것",
    textB:"팀과 조직 전체의 성과를 책임지는 리더 역할" },
];

const allQuestions = [
  ...mainQuestions,
  { id:"t1", type:"transition", phase:2,
    title:"파트 2: 점검 문항",
    desc:"앞서 답하신 내용을 다른 각도에서 확인하는 문항입니다.\n평소 생각과 가장 가까운 숫자를 골라주세요." },
  ...reverseQuestions,
  { id:"t2", type:"transition", phase:3,
    title:"파트 3: 선택 문항",
    desc:"두 가지 상황 중 자신에게 더 가까운 것을 직접 선택해주세요.\n정답은 없으며, 솔직한 선택이 가장 정확한 결과를 만듭니다." },
  ...tradeoffQuestions,
];

const TOTAL_Q = 60;

const anchorDescriptions = {
  TF: {
    full: "전문/기능 역량 (Technical/Functional)",
    detail: "특정 분야에서 전문가로 인정받고 싶은 욕구가 강합니다. 관리직보다는 자신의 전문성을 깊이 발전시키는 것에서 큰 보람을 느끼며, 전문 분야에서 최고가 되는 것이 커리어의 핵심입니다.",
    tip: "전문성을 인정해 주는 조직, 지속적인 학습 기회, 전문가 경력 경로(Expert Track)가 있는 환경이 적합합니다.",
  },
  GM: {
    full: "관리 역량 (General Managerial)",
    detail: "조직을 이끌고 다양한 기능을 통합하며 전체적인 성과에 책임을 지는 것에서 동기를 얻습니다. 권한과 영향력, 높은 보상을 추구하며 리더십 발휘를 즐깁니다.",
    tip: "성장 가능성 있는 조직, 명확한 승진 경로, 리더십 개발 기회가 있는 환경을 찾아보세요.",
  },
  AU: {
    full: "자율/독립 (Autonomy/Independence)",
    detail: "자신만의 방식으로 일할 수 있는 자유를 가장 중요하게 여깁니다. 규칙과 제약보다는 자율성이 보장될 때 최고의 성과를 발휘합니다.",
    tip: "프리랜서, 컨설팅, 스타트업, 또는 자율적인 문화의 조직이 잘 맞습니다. 원격 근무 환경도 고려해보세요.",
  },
  SE: {
    full: "안정/보장 (Security/Stability)",
    detail: "장기적인 고용 보장과 안정적인 수입, 예측 가능한 환경을 추구합니다. 위험보다는 안전을 선호하며 일관성 있는 환경에서 높은 성과를 발휘합니다.",
    tip: "대기업, 공공기관, 안정적인 산업군, 강력한 복리후생 제도가 있는 조직을 알아보세요.",
  },
  EC: {
    full: "창업가적 창의성 (Entrepreneurial Creativity)",
    detail: "새로운 아이디어를 실현하고 무언가를 직접 만들어내는 것에서 큰 만족감을 얻습니다. 위험 감수도 마다하지 않으며 혁신과 창조가 핵심 동인입니다.",
    tip: "창업, 사내 벤처, 스타트업, 또는 새로운 프로젝트를 주도할 수 있는 환경에서 빛을 발합니다.",
  },
  SV: {
    full: "봉사/헌신 (Service/Dedication to a Cause)",
    detail: "사회적 가치 창출과 타인에 대한 기여가 커리어의 핵심입니다. 돈보다 의미 있는 일을 중시하며, 자신의 가치관과 일치하는 조직에서 일하는 것이 중요합니다.",
    tip: "비영리, 교육, 의료, 코칭, 사회적 기업 등 미션 중심의 조직이 잘 맞습니다.",
  },
  CH: {
    full: "순수한 도전 (Pure Challenge)",
    detail: "극도로 어렵고 복잡한 문제를 해결하는 것 자체가 동기의 원천입니다. 쉬운 과제보다 불가능해 보이는 도전에서 오히려 에너지를 얻습니다.",
    tip: "컨설팅, 경쟁이 치열한 분야, 턴어라운드 프로젝트, R&D 등 지속적인 도전이 있는 환경을 찾아보세요.",
  },
  LS: {
    full: "일-여가 조화 (Lifestyle Integration)",
    detail: "일과 삶의 균형이 성공의 기준입니다. 커리어는 삶의 일부이며, 개인적 시간·건강·가족 모두가 일만큼 중요합니다.",
    tip: "유연근무제, 재택근무, 자율적인 일정 관리가 가능한 환경을 우선시하세요.",
  },
};

export default function CareerAnchorDiagnostic() {
  const [step, setStep]         = useState("intro");
  const [current, setCurrent]   = useState(0);
  const [answers, setAnswers]   = useState({});
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [name, setName]         = useState("");

  const q = allQuestions[current];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / TOTAL_Q) * 100;

  function advance() {
    if (current + 1 < allQuestions.length) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnimating(false);
    } else {
      setStep("result");
      setAnimating(false);
    }
  }

  function handleScore(score) {
    if (animating) return;
    setSelected(score);
    setAnimating(true);
    setTimeout(() => {
      const actual = q.type === "reverse" ? 7 - score : score;
      setAnswers(prev => ({ ...prev, [q.id]: { anchor: q.anchor, score: actual } }));
      advance();
    }, 350);
  }

  function handleTradeoff(anchor) {
    if (animating) return;
    setSelected(anchor);
    setAnimating(true);
    setTimeout(() => {
      setAnswers(prev => ({ ...prev, [q.id]: { anchor, score: 4 } }));
      advance();
    }, 400);
  }

  function calcResults() {
    const scores = {};
    const maxScores = {};
    anchors.forEach(a => { scores[a.id] = 0; maxScores[a.id] = 0; });
    mainQuestions.forEach(q => { maxScores[q.anchor] += 6; });
    reverseQuestions.forEach(q => { maxScores[q.anchor] += 6; });
    tradeoffQuestions.forEach(q => {
      maxScores[q.anchorA] += 4;
      maxScores[q.anchorB] += 4;
    });
    Object.values(answers).forEach(({ anchor, score }) => { scores[anchor] += score; });
    return anchors
      .map(a => ({ ...a, score: scores[a.id], maxScore: maxScores[a.id],
        pct: Math.round((scores[a.id] / maxScores[a.id]) * 100) }))
      .sort((a, b) => b.score - a.score);
  }

  const results = step === "result" ? calcResults() : [];
  const top    = results[0];
  const second = results[1];

  function restart() {
    setStep("intro"); setCurrent(0);
    setAnswers({}); setSelected(null); setName("");
  }

  const isTransition = q?.type === "transition";
  const isTradeoff   = q?.type === "tradeoff";
  const isReverse    = q?.type === "reverse";
  const currentAnchor = q?.anchor ? anchors.find(a => a.id === q.anchor) : null;

  // 파트 구분
  let phase = 1;
  if (current >= 41 && current <= 48) phase = 2;
  else if (current >= 50) phase = 3;
  const phaseLabel = { 1:"파트 1 · 기본 문항", 2:"파트 2 · 점검 문항", 3:"파트 3 · 선택 문항" };

  const anchorOf = id => anchors.find(a => a.id === id);

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&family=Pretendard:wght@300;400;500;600;700&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    .wrap{min-height:100vh;background:#faf8f5;font-family:'Pretendard',sans-serif;
      display:flex;flex-direction:column;align-items:center;padding:0 16px 72px;}
    .bg1{position:fixed;top:-120px;right:-120px;width:500px;height:500px;border-radius:50%;
      background:radial-gradient(circle,rgba(99,102,241,.07) 0%,transparent 70%);pointer-events:none;}
    .bg2{position:fixed;bottom:-80px;left:-80px;width:350px;height:350px;border-radius:50%;
      background:radial-gradient(circle,rgba(139,92,246,.06) 0%,transparent 70%);pointer-events:none;}

    .hdr{width:100%;max-width:680px;padding:28px 0 12px;display:flex;align-items:center;gap:8px;}
    .brand{font-size:13px;font-weight:700;letter-spacing:.08em;color:#7c3aed;text-transform:uppercase;}
    .dot{width:4px;height:4px;border-radius:50%;background:#c4b5fd;}
    .brand-sub{font-size:13px;color:#78716c;}

    /* INTRO */
    .intro{width:100%;max-width:640px;padding:32px 0;animation:fu .6s ease;}
    .tag{display:inline-block;background:#ede9fe;color:#6d28d9;font-size:12px;font-weight:700;
      padding:5px 13px;border-radius:100px;margin-bottom:20px;}
    .intro h1{font-family:'Noto Serif KR',serif;font-size:30px;font-weight:700;color:#1c1917;
      line-height:1.4;margin-bottom:14px;}
    .intro p{font-size:15px;color:#57534e;line-height:1.8;margin-bottom:28px;}
    .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px;}
    .stat{background:white;border-radius:14px;padding:14px;text-align:center;
      border:1px solid #e8e4df;box-shadow:0 1px 4px rgba(0,0,0,.04);}
    .stat .n{font-size:22px;font-weight:700;color:#6d28d9;}
    .stat .l{font-size:12px;color:#78716c;margin-top:2px;}
    .parts{display:flex;flex-direction:column;gap:8px;margin-bottom:28px;}
    .part-row{display:flex;align-items:flex-start;gap:12px;background:white;border:1px solid #e8e4df;
      border-radius:12px;padding:14px 16px;}
    .part-num{font-size:11px;font-weight:700;color:#7c3aed;background:#ede9fe;
      padding:3px 9px;border-radius:100px;white-space:nowrap;margin-top:1px;}
    .part-desc{font-size:13px;color:#44403c;line-height:1.55;}
    .part-desc strong{color:#1c1917;}
    .name-lbl{display:block;font-size:14px;font-weight:600;color:#44403c;margin-bottom:7px;}
    .name-inp{width:100%;padding:12px 15px;border:1.5px solid #e7e5e4;border-radius:12px;
      font-size:15px;font-family:'Pretendard',sans-serif;color:#1c1917;background:white;
      outline:none;transition:border-color .2s;margin-bottom:24px;}
    .name-inp:focus{border-color:#7c3aed;}
    .btn{display:inline-flex;align-items:center;gap:8px;background:#6d28d9;color:white;
      border:none;border-radius:14px;padding:15px 30px;font-size:15px;font-weight:600;
      cursor:pointer;transition:all .2s;font-family:'Pretendard',sans-serif;
      box-shadow:0 4px 14px rgba(109,40,217,.3);}
    .btn:hover{background:#5b21b6;transform:translateY(-1px);}
    .btn-out{background:transparent;color:#7c3aed;border:1.5px solid #ddd6fe;box-shadow:none;}
    .btn-out:hover{background:#f5f3ff;transform:none;}

    /* SURVEY */
    .survey{width:100%;max-width:640px;padding:16px 0;}
    .prog-wrap{margin-bottom:22px;}
    .prog-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;}
    .prog-lbl{font-size:12px;color:#78716c;}
    .prog-cnt{font-size:12px;font-weight:700;color:#6d28d9;}
    .prog-bar{width:100%;height:6px;background:#ede9fe;border-radius:100px;overflow:hidden;}
    .prog-fill{height:100%;background:linear-gradient(90deg,#7c3aed,#a855f7);
      border-radius:100px;transition:width .5s ease;}

    .phase-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 11px;
      border-radius:100px;font-size:11px;font-weight:700;margin-bottom:16px;}
    .anchor-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 11px;
      border-radius:100px;font-size:11px;font-weight:600;margin-bottom:14px;}

    .q-card{background:white;border-radius:20px;padding:28px 26px;margin-bottom:22px;
      border:1px solid #e8e4df;box-shadow:0 2px 12px rgba(0,0,0,.05);animation:fu .35s ease;}
    .q-num{font-size:11px;color:#a8a29e;margin-bottom:10px;font-weight:500;}
    .q-text{font-size:18px;font-weight:600;color:#1c1917;line-height:1.6;
      font-family:'Noto Serif KR',serif;}

    .scale-labels{display:flex;justify-content:space-between;font-size:11px;color:#a8a29e;
      margin-bottom:9px;}
    .scale-btns{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;}
    .scale-btn{aspect-ratio:1;border-radius:11px;border:2px solid #e7e5e4;background:white;
      font-size:15px;font-weight:700;color:#44403c;cursor:pointer;transition:all .18s;
      display:flex;align-items:center;justify-content:center;}
    .scale-btn:hover{border-color:#7c3aed;color:#6d28d9;transform:scale(1.06);}
    .scale-btn.sel{background:#6d28d9;border-color:#6d28d9;color:white;transform:scale(1.09);}
    .scale-hint{text-align:center;margin-top:12px;font-size:12px;color:#b8b0a8;}

    /* 전환 카드 */
    .tr-card{background:linear-gradient(135deg,#f5f3ff,#ede9fe);border-radius:20px;
      padding:36px 28px;text-align:center;border:1px solid #ddd6fe;margin-bottom:24px;
      animation:fu .4s ease;}
    .tr-icon{font-size:36px;margin-bottom:14px;}
    .tr-title{font-family:'Noto Serif KR',serif;font-size:20px;font-weight:700;
      color:#4c1d95;margin-bottom:10px;}
    .tr-desc{font-size:14px;color:#6d28d9;line-height:1.7;white-space:pre-line;margin-bottom:24px;}

    /* 트레이드오프 */
    .to-title{font-size:12px;font-weight:700;color:#78716c;text-align:center;
      letter-spacing:.05em;margin-bottom:14px;text-transform:uppercase;}
    .to-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:10px;}
    .to-card{background:white;border:2px solid #e7e5e4;border-radius:18px;padding:22px 16px;
      cursor:pointer;transition:all .2s;text-align:center;}
    .to-card:hover{border-color:#7c3aed;transform:translateY(-2px);
      box-shadow:0 6px 20px rgba(109,40,217,.12);}
    .to-card.sel{background:#6d28d9;border-color:#6d28d9;transform:scale(1.03);}
    .to-emoji{font-size:28px;margin-bottom:10px;}
    .to-text{font-size:14px;font-weight:600;color:#1c1917;line-height:1.5;}
    .to-card.sel .to-text{color:white;}
    .to-vs{text-align:center;font-size:12px;color:#a8a29e;font-weight:600;}

    /* RESULT */
    .result{width:100%;max-width:680px;padding:16px 0;animation:fu .6s ease;}
    .hero{background:linear-gradient(135deg,#4c1d95,#6d28d9,#7c3aed);
      border-radius:24px;padding:32px;color:white;margin-bottom:20px;position:relative;overflow:hidden;}
    .hero::before{content:'';position:absolute;top:-40px;right:-40px;
      width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.06);}
    .hero-greet{font-size:13px;opacity:.75;margin-bottom:6px;}
    .hero-name{font-family:'Noto Serif KR',serif;font-size:26px;font-weight:700;margin-bottom:5px;}
    .hero-sub{font-size:14px;opacity:.85;line-height:1.5;}
    .sec{margin-bottom:18px;}
    .sec-title{font-size:12px;font-weight:700;color:#44403c;letter-spacing:.05em;
      text-transform:uppercase;margin-bottom:10px;}
    .bar-card{background:white;border-radius:16px;padding:20px 22px;
      border:1px solid #e8e4df;box-shadow:0 1px 6px rgba(0,0,0,.04);}
    .bar-row{margin-bottom:13px;}
    .bar-row:last-child{margin-bottom:0;}
    .bar-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}
    .bar-lbl{font-size:13px;font-weight:600;color:#1c1917;}
    .bar-pct{font-size:13px;color:#78716c;}
    .bar-track{height:8px;background:#f3f0f0;border-radius:100px;overflow:hidden;}
    .bar-fill{height:100%;border-radius:100px;transition:width 1s ease;}
    .d-card{background:white;border-radius:16px;padding:22px;
      border:1px solid #e8e4df;margin-bottom:10px;box-shadow:0 1px 6px rgba(0,0,0,.04);}
    .d-tag{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;
      margin-bottom:9px;display:flex;align-items:center;gap:6px;}
    .d-txt{font-size:14px;color:#57534e;line-height:1.7;}
    .tip-card{background:#f5f3ff;border-radius:16px;padding:20px 22px;border:1px solid #ddd6fe;}
    .tip-title{font-size:13px;font-weight:700;color:#5b21b6;margin-bottom:6px;}
    .tip-txt{font-size:14px;color:#6d28d9;line-height:1.65;}
    .restart{text-align:center;margin-top:28px;}

    @keyframes fu{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
    @media(max-width:480px){
      .intro h1{font-size:24px;}
      .to-cards{grid-template-columns:1fr;}
      .hero-name{font-size:22px;}
      .scale-btns{gap:5px;}
      .q-text{font-size:16px;}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="wrap">
        <div className="bg1"/><div className="bg2"/>

        <div className="hdr">
          <span className="brand">Purple Lab</span>
          <div className="dot"/>
          <span className="brand-sub">커리어 앵커 진단</span>
        </div>

        {/* ── INTRO ── */}
        {step === "intro" && (
          <div className="intro">
            <div className="tag">Career Anchor Diagnostic · Edgar Schein</div>
            <h1>나의 커리어를<br/>움직이는 핵심은 무엇인가?</h1>
            <p>에드가 샤인(Edgar Schein)의 커리어 앵커 이론을 기반으로,<br/>
              절대 포기할 수 없는 커리어의 핵심 가치를 8가지로 진단합니다.</p>

            <div className="stats">
              <div className="stat"><div className="n">60</div><div className="l">총 문항</div></div>
              <div className="stat"><div className="n">8가지</div><div className="l">앵커 유형</div></div>
              <div className="stat"><div className="n">~15분</div><div className="l">소요 시간</div></div>
            </div>

            <div className="parts">
              <div className="part-row">
                <span className="part-num">파트 1</span>
                <span className="part-desc"><strong>기본 문항 40개</strong> — 각 앵커에 대해 1~6점으로 응답</span>
              </div>
              <div className="part-row">
                <span className="part-num">파트 2</span>
                <span className="part-desc"><strong>점검 문항 8개</strong> — 역방향 문항으로 응답 신뢰도 점검</span>
              </div>
              <div className="part-row">
                <span className="part-num">파트 3</span>
                <span className="part-desc"><strong>선택 문항 12개</strong> — 두 가지 가치 중 하나를 직접 선택</span>
              </div>
            </div>

            <label className="name-lbl">이름 (선택)</label>
            <input className="name-inp" placeholder="홍길동" value={name}
              onChange={e => setName(e.target.value)}/>
            <button className="btn" onClick={() => setStep("survey")}>진단 시작하기 →</button>
          </div>
        )}

        {/* ── SURVEY ── */}
        {step === "survey" && q && (
          <div className="survey">
            <div className="prog-wrap">
              <div className="prog-top">
                <span className="prog-lbl">{!isTransition && phaseLabel[phase]}</span>
                <span className="prog-cnt">{answeredCount} / {TOTAL_Q}</span>
              </div>
              <div className="prog-bar">
                <div className="prog-fill" style={{ width:`${progress}%` }}/>
              </div>
            </div>

            {/* 전환 카드 */}
            {isTransition && (
              <div className="tr-card">
                <div className="tr-icon">{q.phase === 2 ? "🔍" : "⚖️"}</div>
                <div className="tr-title">{q.title}</div>
                <div className="tr-desc">{q.desc}</div>
                <button className="btn" onClick={advance}>계속하기 →</button>
              </div>
            )}

            {/* 일반 / 역문항 */}
            {!isTransition && !isTradeoff && (
              <>
                {phase === 1 && currentAnchor && (
                  <div className="anchor-badge"
                    style={{ background: currentAnchor.color+"18", color: currentAnchor.color }}>
                    {currentAnchor.emoji} {currentAnchor.label}
                  </div>
                )}
                {phase === 2 && (
                  <div className="phase-badge" style={{ background:"#fef3c7", color:"#92400e" }}>
                    🔍 점검 문항
                  </div>
                )}
                <div className="q-card">
                  <div className="q-num">문항 {answeredCount + 1}</div>
                  <div className="q-text">{q.text}</div>
                </div>
                <div className="scale-labels">
                  <span>전혀 그렇지 않다</span><span>매우 그렇다</span>
                </div>
                <div className="scale-btns">
                  {[1,2,3,4,5,6].map(s => (
                    <button key={s}
                      className={`scale-btn${selected === s ? " sel" : ""}`}
                      onClick={() => handleScore(s)}>{s}</button>
                  ))}
                </div>
                <div className="scale-hint">숫자가 클수록 더 동의하는 정도입니다</div>
              </>
            )}

            {/* 트레이드오프 */}
            {isTradeoff && (
              <>
                <div className="phase-badge" style={{ background:"#fff7ed", color:"#c2410c" }}>
                  ⚖️ 선택 문항
                </div>
                <div className="q-card">
                  <div className="q-num">문항 {answeredCount + 1}</div>
                  <div className="q-text" style={{ fontSize:"16px" }}>
                    두 가지 중 나에게 더 중요한 것은?
                  </div>
                </div>
                <div className="to-cards">
                  {[
                    { anchor: q.anchorA, text: q.textA },
                    { anchor: q.anchorB, text: q.textB },
                  ].map(opt => {
                    const a = anchorOf(opt.anchor);
                    return (
                      <div key={opt.anchor}
                        className={`to-card${selected === opt.anchor ? " sel" : ""}`}
                        onClick={() => handleTradeoff(opt.anchor)}>
                        <div className="to-emoji">{a.emoji}</div>
                        <div className="to-text">{opt.text}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="to-vs">둘 중 하나만 선택해주세요</div>
              </>
            )}
          </div>
        )}

        {/* ── RESULT ── */}
        {step === "result" && results.length > 0 && (
          <div className="result">
            <div className="hero">
              <div className="hero-greet">{name ? `${name}님의 커리어 앵커` : "나의 커리어 앵커"}</div>
              <div className="hero-name">{top.emoji} {top.label}</div>
              <div className="hero-sub">{anchorDescriptions[top.id].full}</div>
            </div>

            <div className="sec">
              <div className="sec-title">앵커별 점수</div>
              <div className="bar-card">
                {results.map(r => (
                  <div className="bar-row" key={r.id}>
                    <div className="bar-top">
                      <span className="bar-lbl">{r.emoji} {r.label}</span>
                      <span className="bar-pct">{r.pct}%</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width:`${r.pct}%`, background:r.color }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sec">
              <div className="sec-title">주요 앵커 해석</div>
              <div className="d-card">
                <div className="d-tag" style={{ color:top.color }}>
                  {top.emoji} 1순위: {top.label}
                </div>
                <div className="d-txt">{anchorDescriptions[top.id].detail}</div>
              </div>
              {second && (
                <div className="d-card">
                  <div className="d-tag" style={{ color:second.color }}>
                    {second.emoji} 2순위: {second.label}
                  </div>
                  <div className="d-txt">{anchorDescriptions[second.id].detail}</div>
                </div>
              )}
            </div>

            <div className="sec">
              <div className="sec-title">커리어 방향 제안</div>
              <div className="tip-card">
                <div className="tip-title">💡 {top.label} 앵커를 가진 당신에게</div>
                <div className="tip-txt">{anchorDescriptions[top.id].tip}</div>
              </div>
            </div>

            <div className="restart">
              <button className="btn btn-out" onClick={restart}>↩ 다시 진단하기</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
