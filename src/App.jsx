import { useEffect, useMemo, useState } from "react";
import { cocktails, cocktailsById } from "./data/cocktails.js";
import {
  baseSpiritLabel,
  bodyLabels,
  classicLevelLabels,
  displayCocktailName,
  formatList,
  formatRecipeItem,
  roleLabel,
  strengthLabels,
  textureLabels,
} from "./utils/display.js";
import { getRecommendations } from "./utils/recommendation.js";

const QUESTIONS = [
  {
    id: "mood",
    prompt: "你现在想喝什么感觉？",
    options: [
      { label: "清爽", value: "Refreshing" },
      { label: "酒感强", value: "Boozy" },
      { label: "偏苦", value: "Bitter" },
      { label: "果味", value: "Fruity" },
      { label: "草本", value: "Herbal" },
      { label: "烟熏", value: "Smoky" },
      { label: "顺滑", value: "Creamy" },
      { label: "随便推荐", value: "Surprise me" },
    ],
  },
  {
    id: "strength",
    prompt: "你想要多强的酒精感？",
    options: [
      { label: "低", value: "Low" },
      { label: "中等", value: "Medium" },
      { label: "强", value: "Strong" },
      { label: "都可以", value: "Doesn't matter" },
    ],
  },
  {
    id: "spirit",
    prompt: "你有偏好的基酒吗？",
    options: [
      { label: "金酒 Gin", value: "gin" },
      { label: "威士忌 Whiskey", value: "whiskey" },
      { label: "朗姆 Rum", value: "rum" },
      { label: "卡沙萨 Cachaça", value: "cachaca" },
      { label: "龙舌兰 Tequila", value: "tequila" },
      { label: "梅斯卡尔 Mezcal", value: "mezcal" },
      { label: "伏特加 Vodka", value: "vodka" },
      { label: "白兰地 Brandy", value: "brandy" },
      { label: "没有偏好", value: "No preference" },
    ],
  },
  {
    id: "adventure",
    prompt: "你今天想探索到什么程度？",
    options: [
      { label: "稳妥", value: "Safe" },
      { label: "平衡", value: "Balanced" },
      { label: "大胆尝试", value: "Adventurous" },
    ],
  },
  {
    id: "texture",
    prompt: "你想要哪种喝法？",
    options: [
      { label: "短饮，酒感集中", value: "Short and spirit-forward" },
      { label: "长饮，轻松慢喝", value: "Long and easy" },
      { label: "气泡，清爽轻盈", value: "Fizzy and light" },
      { label: "酸甜，入口明亮", value: "Bright and sour" },
      { label: "冰爽，适合大口喝", value: "Icy and easy-drinking" },
      { label: "都可以", value: "Doesn't matter" },
    ],
  },
];

function App() {
  const [screen, setScreen] = useState("landing");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultState, setResultState] = useState({ groups: [] });
  const [detailStack, setDetailStack] = useState([]);
  const [likedIds, setLikedIds] = useStoredIds("sip-compass-liked");
  const [dislikedIds, setDislikedIds] = useStoredIds("sip-compass-disliked");

  const currentDetail = detailStack.at(-1);
  const likedCocktails = useMemo(
    () => cocktails.filter((cocktail) => likedIds.includes(cocktail.id)),
    [likedIds]
  );
  const dislikedCocktails = useMemo(
    () => cocktails.filter((cocktail) => dislikedIds.includes(cocktail.id)),
    [dislikedIds]
  );

  const startQuiz = () => {
    setAnswers({});
    setQuestionIndex(0);
    setDetailStack([]);
    setScreen("quiz");
  };

  const handleAnswer = (questionId, value) => {
    const nextAnswers = { ...answers, [questionId]: value };
    setAnswers(nextAnswers);

    if (questionIndex < QUESTIONS.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    setResultState(getRecommendations(nextAnswers));
    setScreen("results");
  };

  const goBackQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex((current) => current - 1);
    }
  };

  const openDetail = (cocktail, role = "", source = "results") => {
    setDetailStack([{ cocktail, role, source }]);
    setScreen("detail");
  };

  const openSimilarDetail = (cocktail) => {
    setDetailStack((current) => [...current, { cocktail, role: "", source: "similar" }]);
    setScreen("detail");
  };

  const goBackFromDetail = () => {
    if (detailStack.length > 1) {
      setDetailStack((current) => current.slice(0, -1));
      return;
    }

    setScreen(currentDetail?.source === "saved" ? "saved" : "results");
  };

  const handleLike = (cocktailId) => {
    setLikedIds((current) =>
      current.includes(cocktailId)
        ? current.filter((id) => id !== cocktailId)
        : [...current, cocktailId]
    );
    setDislikedIds((current) => current.filter((id) => id !== cocktailId));
  };

  const handleDislike = (cocktailId) => {
    setDislikedIds((current) =>
      current.includes(cocktailId)
        ? current.filter((id) => id !== cocktailId)
        : [...current, cocktailId]
    );
    setLikedIds((current) => current.filter((id) => id !== cocktailId));
  };

  const goToDiscover = () => {
    setDetailStack([]);
    setScreen(resultState.groups.length > 0 ? "results" : "landing");
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app-shell">
        <header className="top-bar" aria-label="微醺指南顶部导航">
          <button className="brand-button" onClick={goToDiscover} type="button">
            <span className="brand-mark">微</span>
            <span>微醺指南</span>
          </button>
          <button className="ghost-button compact" onClick={startQuiz} type="button">
            重新选择
          </button>
        </header>

        <main className="screen-frame">
          {screen === "landing" && <LandingScreen onStart={startQuiz} />}

          {screen === "quiz" && (
            <QuestionCard
              answers={answers}
              onAnswer={handleAnswer}
              onBack={goBackQuestion}
              question={QUESTIONS[questionIndex]}
              questionIndex={questionIndex}
              totalQuestions={QUESTIONS.length}
            />
          )}

          {screen === "results" && (
            <ResultsScreen
              groups={resultState.groups}
              onOpenDetail={openDetail}
              onRestart={startQuiz}
            />
          )}

          {screen === "detail" && currentDetail && (
            <CocktailDetail
              detailState={currentDetail}
              hasPreviousDetail={detailStack.length > 1}
              isDisliked={dislikedIds.includes(currentDetail.cocktail.id)}
              isLiked={likedIds.includes(currentDetail.cocktail.id)}
              onBack={goBackFromDetail}
              onDislike={() => handleDislike(currentDetail.cocktail.id)}
              onLike={() => handleLike(currentDetail.cocktail.id)}
              onOpenSimilar={openSimilarDetail}
            />
          )}

          {screen === "saved" && (
            <SavedScreen
              dislikedCocktails={dislikedCocktails}
              likedCocktails={likedCocktails}
              onClear={() => {
                setLikedIds([]);
                setDislikedIds([]);
              }}
              onOpenDetail={(cocktail) => openDetail(cocktail, "", "saved")}
            />
          )}
        </main>

        <BottomNavigation
          activeScreen={screen}
          onDiscover={goToDiscover}
          onSaved={() => {
            setDetailStack([]);
            setScreen("saved");
          }}
        />
      </div>
    </>
  );
}

function LandingScreen({ onStart }) {
  return (
    <section className="landing-screen">
      <div className="eyebrow">引导式品饮工具</div>
      <div className="hero-card">
        <div className="glass-visual" aria-hidden="true">
          <span className="glass-rim" />
          <span className="glass-bowl" />
          <span className="glass-stem" />
        </div>
        <h1>微醺指南</h1>
        <p className="subtitle">找到你真正想喝的那杯鸡尾酒</p>
        <p>
          回答 5 个问题，我们会给你三种经典鸡尾酒方向：稳妥选择、进阶选择、隐藏选择。
        </p>
        <button className="primary-button" onClick={onStart} type="button">
          开始选择
        </button>
        <div className="mini-grid" aria-label="推荐类型说明">
          <InfoCard title="稳妥选择" copy="更容易接受，适合第一次尝试。" />
          <InfoCard title="进阶选择" copy="保留熟悉感，但带一点探索。" />
          <InfoCard title="隐藏选择" copy="更冷门，适合想试新东西的时候。" variant="deep" />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ copy, title, variant = "" }) {
  return (
    <article className={`mini-card ${variant ? `${variant}-mini` : ""}`}>
      <h2>{title}</h2>
      <p>{copy}</p>
    </article>
  );
}

function QuestionCard({
  answers,
  onAnswer,
  onBack,
  question,
  questionIndex,
  totalQuestions,
}) {
  return (
    <section className="quiz-screen">
      <ProgressIndicator current={questionIndex + 1} total={totalQuestions} />
      <div className="question-card">
        {questionIndex > 0 && (
          <button className="back-question-button" onClick={onBack} type="button">
            ← 返回上一题
          </button>
        )}
        <span className="question-kicker">
          第 {questionIndex + 1} / {totalQuestions} 题
        </span>
        <h2>{question.prompt}</h2>
        <div className="option-stack">
          {question.options.map((option) => (
            <button
              className={
                answers[question.id] === option.value ? "option-card selected" : "option-card"
              }
              key={option.value}
              onClick={() => onAnswer(question.id, option.value)}
              type="button"
            >
              <span>{option.label}</span>
              <span className="option-dot" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressIndicator({ current, total }) {
  return (
    <div className="progress-wrap" aria-label={`第 ${current} / ${total} 题`}>
      <div className="progress-copy">
        <span>进度</span>
        <span>
          {current}/{total}
        </span>
      </div>
      <div className="progress-track">
        <span className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
      </div>
    </div>
  );
}

function ResultsScreen({ groups, onOpenDetail, onRestart }) {
  const resultCount = groups.flatMap((group) => group.items).length;
  const hasResults = resultCount === 9;

  if (resultCount === 0) {
    return (
      <section className="results-screen">
        <div className="screen-heading">
          <span className="eyebrow">还没有推荐</span>
          <h1>还没有生成推荐</h1>
          <p>请先完成一次口味选择，我们会为你整理三组鸡尾酒方向。</p>
        </div>

        <button className="primary-button full-width" onClick={onRestart} type="button">
          开始选择
        </button>
      </section>
    );
  }

  return (
    <section className="results-screen">
      <div className="screen-heading">
        <span className="eyebrow">可以点单了</span>
        <h1>你的鸡尾酒方向</h1>
        <p>每个方向给你 3 个选择：可以直接点单，也可以作为和 bartender 沟通口味的起点。</p>
      </div>

      {!hasResults && (
        <div className="notice-card">没有找到完整匹配，已优先补入可靠的经典款。</div>
      )}

      <div className="group-stack">
        {groups.map((group) => (
          <section className="result-group" key={group.key}>
            <div className="group-heading">
              <span className={`role-pill ${group.key}`}>{roleLabel(group.key)}</span>
              <span>{group.items.length} 杯</span>
            </div>
            <div className="recommendation-stack">
              {group.items.map((cocktail) => (
                <RecommendationCard
                  cocktail={cocktail}
                  key={`${group.key}-${cocktail.id}`}
                  onOpenDetail={() => onOpenDetail(cocktail, group.key, "results")}
                  role={group.key}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <button className="secondary-button full-width" onClick={onRestart} type="button">
        重新选择
      </button>
    </section>
  );
}

function RecommendationCard({ cocktail, onOpenDetail, role }) {
  return (
    <article className={`recommendation-card ${role}-card`}>
      <div className="role-row">
        <span className={`role-pill ${role}`}>{roleLabel(role)}</span>
        <span className="strength-label">{strengthLabels[cocktail.strength]}</span>
      </div>
      <CocktailTitle cocktail={cocktail} level="card" />
      <p className="taste-summary">{summarizeTaste(cocktail)}</p>
      <div className="tag-row">
        {cocktail.flavorLabelsZh.slice(0, 3).map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <dl className="facts-grid">
        <div>
          <dt>基酒</dt>
          <dd>{baseSpiritLabel(cocktail.baseSpirit)}</dd>
        </div>
        <div>
          <dt>酒精感</dt>
          <dd>{strengthLabels[cocktail.strength]}</dd>
        </div>
      </dl>
      <button className="primary-button" onClick={onOpenDetail} type="button">
        查看详情
      </button>
    </article>
  );
}

function CocktailDetail({
  detailState,
  hasPreviousDetail,
  isDisliked,
  isLiked,
  onBack,
  onDislike,
  onLike,
  onOpenSimilar,
}) {
  const { cocktail, role, source } = detailState;
  const similarCocktails = cocktail.similarDrinkIds
    .map((id) => cocktailsById[id])
    .filter(Boolean);

  return (
    <section className="detail-screen">
      <article className="detail-card">
        {role && <span className={`role-pill ${role}`}>{roleLabel(role)}</span>}
        {hasPreviousDetail && (
          <button className="back-question-button" onClick={onBack} type="button">
            ← 返回上一页
          </button>
        )}
        <CocktailTitle cocktail={cocktail} level="detail" />
        <p className="detail-description">{cocktail.descriptionZh}</p>

        <dl className="detail-list">
          <InfoFact label="风味画像" value={formatList(cocktail.flavorLabelsZh.slice(0, 5))} />
          <InfoFact label="基酒" value={baseSpiritLabel(cocktail.baseSpirit)} />
          <InfoFact label="酒精感" value={strengthLabels[cocktail.strength]} />
          <InfoFact label="口感" value={textureLabels[cocktail.texture]} />
          <InfoFact label="酒体" value={bodyLabels[cocktail.body]} />
          <InfoFact label="经典程度" value={classicLevelLabels[cocktail.classicLevel]} />
        </dl>

        <RecipeSection cocktail={cocktail} />

        <div className="order-card">
          <span>直接点单</span>
          <p>{displayCocktailName(cocktail)}</p>
        </div>

        <div className="bartender-card">
          <span>或者你可以这样告诉 bartender</span>
          <p>{cocktail.bartenderPhraseZh}</p>
        </div>

        <div className="similar-block">
          <span>类似酒款</span>
          <div className="tag-row">
            {similarCocktails.map((similar) => (
              <button
                className="similar-chip"
                key={similar.id}
                onClick={() => onOpenSimilar(similar)}
                type="button"
              >
                {displayCocktailName(similar)}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-actions">
          <button className="secondary-button full-width" onClick={onBack} type="button">
            {hasPreviousDetail ? "返回上一页" : source === "saved" ? "返回已保存" : "返回推荐"}
          </button>
          <div className="decision-grid">
            <button
              className={isLiked ? "decision-button liked active" : "decision-button liked"}
              onClick={onLike}
              type="button"
            >
              {isLiked ? "已喜欢" : "我喜欢这杯"}
            </button>
            <button
              className={
                isDisliked ? "decision-button disliked active" : "decision-button disliked"
              }
              onClick={onDislike}
              type="button"
            >
              {isDisliked ? "已标记不适合" : "不适合我"}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

function InfoFact({ label, value }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function CocktailTitle({ cocktail, level }) {
  const Heading = level === "detail" ? "h1" : "h2";
  const showChinese = cocktail.chineseName && cocktail.chineseName !== cocktail.name;

  return (
    <div className={`cocktail-title ${level}`}>
      <Heading>{cocktail.name}</Heading>
      {showChinese && <span>{cocktail.chineseName}</span>}
    </div>
  );
}

function RecipeSection({ cocktail }) {
  return (
    <section className="recipe-card">
      <h2>参考标准配方</h2>
      <ul>
        {cocktail.recipe.map((item) => (
          <li key={`${item.ingredient}-${item.amount}-${item.unit}`}>{formatRecipeItem(item)}</li>
        ))}
      </ul>
      <RecipeMeta label="做法" value={cocktail.methodZh} />
      <RecipeMeta label="杯型" value={cocktail.glassware} compact />
      <RecipeMeta label="装饰" value={cocktail.garnish} compact />
    </section>
  );
}

function RecipeMeta({ compact = false, label, value }) {
  return (
    <div className={compact ? "recipe-meta compact-meta" : "recipe-meta"}>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}

function SavedScreen({
  dislikedCocktails,
  likedCocktails,
  onClear,
  onOpenDetail,
}) {
  const hasSaved = likedCocktails.length > 0 || dislikedCocktails.length > 0;

  return (
    <section className="saved-screen">
      <div className="screen-heading">
        <span className="eyebrow">你的口味线索</span>
        <h1>已保存</h1>
        <p>记录你喜欢和不喜欢的酒款，让下一次选择更准确。</p>
      </div>

      {!hasSaved && (
        <div className="empty-card">标记喜欢或不喜欢后，刷新页面也会保留在这里。</div>
      )}

      {likedCocktails.length > 0 && (
        <SavedSection cocktails={likedCocktails} label="喜欢" onOpenDetail={onOpenDetail} />
      )}

      {dislikedCocktails.length > 0 && (
        <SavedSection cocktails={dislikedCocktails} label="不喜欢" onOpenDetail={onOpenDetail} />
      )}

      {hasSaved && (
        <button className="ghost-button danger full-width" onClick={onClear} type="button">
          清空记录
        </button>
      )}
    </section>
  );
}

function SavedSection({ cocktails: savedCocktails, label, onOpenDetail }) {
  return (
    <div className="saved-section">
      <h2>{label}</h2>
      <div className="saved-stack">
        {savedCocktails.map((cocktail) => (
          <button
            className="saved-row"
            key={cocktail.id}
            onClick={() => onOpenDetail(cocktail)}
            type="button"
          >
            <span>
              <strong>{cocktail.name}</strong>
              {cocktail.chineseName !== cocktail.name && <small>{cocktail.chineseName}</small>}
              <small>{summarizeTaste(cocktail)}</small>
            </span>
            <span>{baseSpiritLabel(cocktail.baseSpirit)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function BottomNavigation({ activeScreen, onDiscover, onSaved }) {
  return (
    <nav className="bottom-nav" aria-label="主要导航">
      <button
        className={activeScreen === "saved" ? "" : "active"}
        onClick={onDiscover}
        type="button"
      >
        <span>探索</span>
      </button>
      <button
        className={activeScreen === "saved" ? "active" : ""}
        onClick={onSaved}
        type="button"
      >
        <span>已保存</span>
      </button>
    </nav>
  );
}

function useStoredIds(key) {
  const [ids, setIds] = useState(() => {
    if (typeof window === "undefined") return [];

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(ids));
  }, [ids, key]);

  return [ids, setIds];
}

function summarizeTaste(cocktail) {
  return `${cocktail.flavorLabelsZh.slice(0, 3).join("、")}，${textureLabels[cocktail.texture]}口感。`;
}

const styles = `
:root {
  color-scheme: light;
  font-family:
    Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", ui-sans-serif,
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f6f0e6;
  color: #221a14;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at top left, rgba(201, 213, 195, 0.78), transparent 23rem),
    radial-gradient(circle at bottom right, rgba(122, 46, 42, 0.12), transparent 24rem),
    linear-gradient(135deg, #f7f2ea 0%, #f6f0e6 55%, #f3ebdd 100%);
}

button { font: inherit; }

.app-shell {
  width: 100%;
  max-width: 660px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px 14px 92px;
  position: relative;
}

.top-bar {
  align-items: center;
  background: transparent;
  border-bottom: 1px solid rgba(201, 187, 170, 0.22);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin: 0 0 12px;
  padding: 6px 0 10px;
  position: sticky;
  top: 0;
  z-index: 3;
  backdrop-filter: blur(10px);
}

.brand-button {
  align-items: center;
  background: transparent;
  border: 0;
  color: #221a14;
  display: inline-flex;
  gap: 10px;
  min-height: 42px;
  padding: 0;
}

.brand-mark {
  align-items: center;
  background: #2f3a2e;
  border-radius: 8px;
  color: #f7f2ea;
  display: inline-flex;
  font-size: 0.92rem;
  font-weight: 900;
  height: 34px;
  justify-content: center;
  width: 34px;
}

.screen-frame { animation: fadeIn 220ms ease-out; }

.landing-screen,
.quiz-screen,
.results-screen,
.detail-screen,
.saved-screen,
.group-stack,
.recommendation-stack,
.saved-stack {
  display: grid;
  gap: 16px;
}

.hero-card,
.question-card,
.recommendation-card,
.detail-card,
.empty-card,
.notice-card,
.result-group {
  background: rgba(247, 242, 234, 0.92);
  border: 1px solid #d8ccbc;
  border-radius: 8px;
  box-shadow: 0 18px 42px rgba(48, 38, 31, 0.08);
}

.hero-card {
  min-height: calc(100vh - 220px);
  padding: 32px 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
}

.glass-visual {
  height: 172px;
  left: 50%;
  opacity: 0.96;
  position: absolute;
  top: 38px;
  transform: translateX(-50%);
  width: 150px;
}

.glass-rim,
.glass-bowl,
.glass-stem {
  display: block;
  position: absolute;
}

.glass-rim {
  border: 2px solid rgba(47, 58, 46, 0.48);
  border-radius: 50%;
  height: 22px;
  left: 15px;
  top: 0;
  width: 120px;
}

.glass-bowl {
  background:
    linear-gradient(180deg, rgba(216, 224, 210, 0.86), rgba(201, 213, 195, 0.46)),
    linear-gradient(135deg, transparent 0 50%, rgba(122, 46, 42, 0.13) 50% 54%, transparent 54%);
  border: 2px solid rgba(47, 58, 46, 0.34);
  border-radius: 6px 6px 44px 44px;
  clip-path: polygon(8% 0, 92% 0, 62% 74%, 54% 100%, 46% 100%, 38% 74%);
  height: 116px;
  left: 12px;
  top: 10px;
  width: 126px;
}

.glass-stem {
  background: rgba(47, 58, 46, 0.44);
  bottom: 0;
  height: 58px;
  left: 72px;
  width: 3px;
}

.glass-stem::after {
  background: rgba(47, 58, 46, 0.36);
  border-radius: 50%;
  bottom: 0;
  content: "";
  height: 4px;
  left: -34px;
  position: absolute;
  width: 72px;
}

h1, h2, p { margin: 0; }

h1 {
  color: #221a14;
  font-size: clamp(2.4rem, 10vw, 4.2rem);
  line-height: 0.96;
  max-width: 10ch;
}

h2 {
  color: #221a14;
  font-size: 1.45rem;
  line-height: 1.12;
}

p {
  color: #5d5147;
  line-height: 1.58;
}

.subtitle {
  color: #2f3a2e;
  font-size: 1.1rem;
  font-weight: 800;
  margin-top: 14px;
}

.hero-card p:not(.subtitle) { margin-top: 14px; }

.eyebrow,
.question-kicker {
  color: #7a2e2a;
  font-size: 0.78rem;
  font-weight: 900;
}

.primary-button,
.secondary-button,
.ghost-button,
.decision-button {
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 850;
  justify-content: center;
  min-height: 50px;
  padding: 0 18px;
  transition: border-color 160ms ease, background 160ms ease, color 160ms ease, transform 160ms ease;
}

.primary-button {
  background: #2f3a2e;
  border: 1px solid #354536;
  color: #f7f2ea;
  margin-top: 20px;
  width: 100%;
}

.secondary-button {
  background: rgba(247, 242, 234, 0.72);
  border: 1px solid #3f513d;
  color: #2f3a2e;
}

.ghost-button {
  background: rgba(247, 242, 234, 0.42);
  border: 1px solid rgba(63, 81, 61, 0.42);
  color: #2f3a2e;
}

.ghost-button.compact {
  background: rgba(247, 242, 234, 0.36);
  min-height: 38px;
  padding: 0 12px;
}

.ghost-button.danger {
  border-color: rgba(122, 46, 42, 0.42);
  color: #7a2e2a;
}

.primary-button:active,
.secondary-button:active,
.ghost-button:active,
.option-card:active,
.decision-button:active,
.saved-row:active,
.similar-chip:active {
  transform: translateY(1px);
}

.full-width { width: 100%; }

.mini-grid {
  display: grid;
  gap: 9px;
  grid-template-columns: 1fr;
  margin-top: 18px;
}

.mini-card {
  background: rgba(228, 232, 221, 0.66);
  border: 1px solid #c9d5c3;
  border-radius: 8px;
  display: grid;
  gap: 4px;
  padding: 12px;
}

.mini-card h2 {
  color: #2f3a2e;
  font-size: 0.95rem;
}

.mini-card p {
  color: #5d5147;
  font-size: 0.86rem;
  line-height: 1.45;
}

.mini-card.deep-mini {
  border-color: rgba(122, 46, 42, 0.3);
}

.mini-card.deep-mini h2 { color: #7a2e2a; }

.progress-wrap {
  display: grid;
  gap: 8px;
}

.progress-copy {
  color: #6d6258;
  display: flex;
  font-size: 0.82rem;
  justify-content: space-between;
}

.progress-track {
  background: #d8ccbc;
  border-radius: 99px;
  height: 8px;
  overflow: hidden;
}

.progress-fill {
  background: #354536;
  border-radius: inherit;
  display: block;
  height: 100%;
}

.question-card {
  background: #e4e8dd;
  display: grid;
  gap: 18px;
  padding: 22px;
}

.back-question-button {
  align-items: center;
  background: transparent;
  border: 0;
  color: #2f3a2e;
  cursor: pointer;
  display: inline-flex;
  font-weight: 850;
  justify-self: start;
  min-height: 34px;
  padding: 0;
}

.option-stack {
  display: grid;
  gap: 10px;
}

.option-card {
  align-items: center;
  background: rgba(247, 242, 234, 0.78);
  border: 1px solid #c9bbaa;
  border-radius: 8px;
  color: #221a14;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  min-height: 54px;
  padding: 0 14px 0 16px;
  text-align: left;
}

.option-card:hover { background: #d8e0d2; }

.option-card.selected {
  background: #2f3a2e;
  border-color: #2f3a2e;
  color: #f7f2ea;
}

.option-dot {
  border: 1px solid rgba(47, 58, 46, 0.42);
  border-radius: 50%;
  height: 18px;
  width: 18px;
}

.option-card.selected .option-dot {
  background: #f7f2ea;
  border-color: #f7f2ea;
  box-shadow: inset 0 0 0 4px #2f3a2e;
}

.screen-heading {
  display: grid;
  gap: 10px;
  padding-top: 6px;
}

.screen-heading h1 {
  font-size: 2.2rem;
  max-width: 12ch;
}

.result-group {
  display: grid;
  gap: 12px;
  padding: 14px;
}

.group-heading,
.role-row {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.group-heading > span:last-child {
  color: #6d6258;
  font-size: 0.82rem;
  font-weight: 850;
}

.recommendation-card {
  display: grid;
  gap: 14px;
  padding: 16px;
}

.recommendation-card.safe-card {
  background: #d8e0d2;
  border-color: #c9d5c3;
}

.recommendation-card.stretch-card {
  background: #f7f2ea;
  border-color: rgba(63, 81, 61, 0.52);
}

.recommendation-card.deep-card {
  background: #f7f2ea;
  border-color: rgba(122, 46, 42, 0.36);
  box-shadow: inset 4px 0 0 rgba(122, 46, 42, 0.84), 0 18px 42px rgba(48, 38, 31, 0.08);
}

.role-pill,
.strength-label {
  border-radius: 999px;
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 900;
  min-height: 28px;
  padding: 7px 10px;
}

.role-pill.safe {
  background: #2f3a2e;
  color: #f7f2ea;
}

.role-pill.stretch {
  background: #e4e8dd;
  color: #354536;
}

.role-pill.deep {
  background: #7a2e2a;
  color: #f7f2ea;
}

.strength-label {
  background: rgba(47, 58, 46, 0.08);
  color: #354536;
}

.cocktail-title {
  display: grid;
  gap: 5px;
}

.cocktail-title h1,
.cocktail-title h2 {
  color: #221a14;
  max-width: none;
  overflow-wrap: anywhere;
}

.cocktail-title.detail h1 {
  font-size: clamp(2.1rem, 9vw, 3.5rem);
}

.cocktail-title span {
  color: #7a2e2a;
  font-size: 0.98rem;
  font-weight: 850;
}

.taste-summary,
.detail-description {
  color: #4f463d;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag,
.similar-chip {
  background: rgba(216, 224, 210, 0.64);
  border: 1px solid #c9d5c3;
  border-radius: 999px;
  color: #30261f;
  font-size: 0.78rem;
  font-weight: 760;
  padding: 7px 10px;
}

.similar-chip {
  cursor: pointer;
}

.facts-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
}

.facts-grid div,
.detail-list div {
  background: rgba(246, 240, 230, 0.72);
  border: 1px solid #d8ccbc;
  border-radius: 8px;
  padding: 12px;
}

dt {
  color: #6d6258;
  font-size: 0.74rem;
  font-weight: 900;
}

dd {
  color: #221a14;
  font-weight: 800;
  line-height: 1.42;
  margin: 5px 0 0;
}

.notice-card,
.empty-card {
  color: #30261f;
  line-height: 1.45;
  padding: 16px;
}

.detail-card {
  display: grid;
  gap: 16px;
  padding: 20px;
}

.detail-list {
  display: grid;
  gap: 9px;
  margin: 0;
}

.recipe-card,
.bartender-card,
.order-card {
  border-radius: 8px;
  display: grid;
  gap: 11px;
  padding: 16px;
}

.recipe-card {
  background: #e4e8dd;
  border: 1px solid #c9d5c3;
}

.recipe-card h2 { font-size: 1rem; }

.recipe-card ul {
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.recipe-card li {
  background: rgba(247, 242, 234, 0.72);
  border: 1px solid rgba(201, 187, 170, 0.72);
  border-radius: 8px;
  color: #30261f;
  line-height: 1.35;
  padding: 10px 12px;
  overflow-wrap: anywhere;
}

.recipe-meta {
  display: grid;
  gap: 5px;
}

.recipe-meta span,
.bartender-card span,
.order-card span,
.similar-block span {
  color: #7a2e2a;
  font-size: 0.74rem;
  font-weight: 900;
}

.recipe-meta p,
.bartender-card p,
.order-card p {
  color: #221a14;
}

.compact-meta {
  background: rgba(247, 242, 234, 0.54);
  border: 1px solid rgba(201, 187, 170, 0.68);
  border-radius: 8px;
  padding: 11px 12px;
}

.order-card {
  background: #2f3a2e;
  border: 1px solid #354536;
}

.order-card span,
.order-card p {
  color: #f7f2ea;
}

.order-card p {
  font-size: 1.08rem;
  font-weight: 900;
}

.bartender-card {
  background: #f3ebdd;
  border: 1px solid #d8ccbc;
}

.bartender-card p {
  font-size: 1rem;
  font-weight: 760;
}

.similar-block,
.detail-actions {
  display: grid;
  gap: 10px;
}

.decision-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
}

.decision-button {
  background: rgba(247, 242, 234, 0.72);
  border: 1px solid #c9bbaa;
  color: #2f3a2e;
}

.decision-button.liked.active {
  background: #d8e0d2;
  border-color: #3f513d;
}

.decision-button.disliked.active {
  background: rgba(122, 46, 42, 0.11);
  border-color: #7a2e2a;
  color: #7a2e2a;
}

.saved-section {
  display: grid;
  gap: 10px;
}

.saved-section h2 {
  color: #221a14;
  font-size: 1rem;
}

.saved-row {
  align-items: center;
  background: rgba(247, 242, 234, 0.9);
  border: 1px solid #d8ccbc;
  border-radius: 8px;
  color: #221a14;
  cursor: pointer;
  display: flex;
  gap: 14px;
  justify-content: space-between;
  min-height: 78px;
  padding: 12px;
  text-align: left;
  width: 100%;
}

.saved-row strong,
.saved-row small {
  display: block;
}

.saved-row small {
  color: #6d6258;
  line-height: 1.35;
  margin-top: 4px;
}

.saved-row > span:last-child {
  color: #354536;
  flex: 0 0 auto;
  font-size: 0.76rem;
  font-weight: 900;
  max-width: 112px;
  text-align: right;
}

.bottom-nav {
  background: rgba(247, 242, 234, 0.94);
  border: 1px solid #d8ccbc;
  border-radius: 8px;
  bottom: 14px;
  box-shadow: 0 18px 42px rgba(48, 38, 31, 0.16);
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  left: 14px;
  margin: 0 auto;
  max-width: 632px;
  padding: 8px;
  position: fixed;
  right: 14px;
  z-index: 4;
}

.bottom-nav button {
  background: transparent;
  border: 0;
  border-radius: 8px;
  color: #6d6258;
  cursor: pointer;
  font-weight: 900;
  min-height: 48px;
}

.bottom-nav button.active {
  background: #2f3a2e;
  color: #f7f2ea;
}

@media (min-width: 620px) {
  .app-shell { padding-top: 14px; }
  .hero-card {
    min-height: 620px;
    padding: 38px 30px 30px;
  }
  .mini-grid { grid-template-columns: repeat(3, 1fr); }
  .decision-grid { grid-template-columns: 1fr 1fr; }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

export default App;
