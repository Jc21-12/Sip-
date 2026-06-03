import { baseSpiritFamilies, cocktails } from "../data/cocktails.js";

export const PICK_GROUPS = [
  { key: "safe", risk: "safe" },
  { key: "stretch", risk: "balanced" },
  { key: "deep", risk: "adventurous" },
];

const moodFlavorMap = {
  Refreshing: ["refreshing", "citrus", "bright", "fizzy", "light", "mint"],
  Boozy: ["boozy", "spirit-forward", "dry", "rich"],
  Bitter: ["bitter", "bittersweet", "aperitif", "dry"],
  Fruity: ["fruity", "tropical", "berry", "pineapple", "grapefruit", "orange", "peach", "apple"],
  Herbal: ["herbal", "botanical", "mint", "spicy", "complex", "anise", "bitter", "aperitif", "earthy"],
  Smoky: ["smoky", "earthy", "agave"],
  Creamy: ["creamy", "silky", "dessert", "coffee", "chocolate", "rich", "clean"],
};

const texturePreferenceMap = {
  "Short and spirit-forward": {
    textures: ["stirred", "built"],
    formats: ["short", "up", "rocks"],
    strengths: ["strong"],
    flavors: ["spirit-forward", "dry", "boozy", "rich"],
  },
  "Long and easy": {
    textures: ["fizzy", "built"],
    formats: ["long", "highball", "spritz"],
    bodies: ["light", "medium"],
    strengths: ["low", "medium"],
    flavors: ["refreshing", "light", "bright", "fizzy", "ginger", "grapefruit"],
  },
  "Fizzy and light": {
    textures: ["fizzy"],
    formats: ["highball", "spritz", "long"],
    bodies: ["light"],
    strengths: ["low"],
    flavors: ["fizzy", "light", "refreshing", "citrus"],
  },
  "Bright and sour": {
    textures: ["shaken"],
    categories: ["sour"],
    formats: ["up", "rocks"],
    flavors: ["citrus", "tart", "bright", "refreshing"],
  },
  "Icy and easy-drinking": {
    textures: ["crushed ice", "blended"],
    formats: ["tiki", "frozen", "rocks", "long"],
    bodies: ["light", "medium"],
    flavors: ["refreshing", "mint", "tropical", "citrus", "pineapple"],
  },
};

const strengthRank = { low: 1, medium: 2, strong: 3 };

export function getRecommendations(answers = {}) {
  const spiritLocked = Boolean(answers.spirit && answers.spirit !== "No preference");
  const scored = cocktails
    .map((cocktail) => ({
      cocktail,
      score: scoreCocktail(cocktail, answers),
      relevance: scoreRelevance(cocktail, answers),
      baseFit: getBaseFit(cocktail, answers.spirit),
    }))
    .sort(sortScored);

  const selectedIds = new Set();
  const baseCounts = new Map();
  const groups = PICK_GROUPS.map((group) => {
    const items = pickForRiskGroup(scored, group.risk, selectedIds, baseCounts, spiritLocked);
    return { ...group, items };
  });

  const flatCount = groups.reduce((count, group) => count + group.items.length, 0);
  if (flatCount < 9) {
    const allItems = groups.flatMap((group) => group.items);
    fillFallbackItems(scored, allItems, selectedIds, baseCounts, spiritLocked);

    return {
      groups: PICK_GROUPS.map((group, index) => ({
        ...group,
        items: allItems.slice(index * 3, index * 3 + 3),
      })),
    };
  }

  return { groups };
}

function pickForRiskGroup(scored, preferredRisk, selectedIds, baseCounts, spiritLocked) {
  const items = [];
  const baseTiers = spiritLocked ? ["family", "broad"] : ["open"];

  for (const tier of baseTiers) {
    const candidates = scored
      .filter((candidate) => isCandidateEligible(candidate, tier, selectedIds, baseCounts, spiritLocked))
      .map((candidate) => ({
        ...candidate,
        groupScore: candidate.score + riskFitBoost(candidate.cocktail.riskLevel, preferredRisk),
      }))
      .sort((a, b) => b.groupScore - a.groupScore || sortScored(a, b));

    for (const candidate of candidates) {
      if (items.length === 3) return items;
      if (!isCandidateEligible(candidate, tier, selectedIds, baseCounts, spiritLocked)) continue;
      addCandidate(candidate.cocktail, items, selectedIds, baseCounts);
    }

    if (items.length === 3) return items;
  }

  return items;
}

function isCandidateEligible(candidate, tier, selectedIds, baseCounts, spiritLocked) {
  if (selectedIds.has(candidate.cocktail.id)) return false;
  if (!spiritLocked && (baseCounts.get(candidate.cocktail.baseSpirit) || 0) >= 3) return false;
  if (tier === "exact") return candidate.baseFit === "exact";
  if (tier === "family") return candidate.baseFit === "exact" || candidate.baseFit === "family";
  return true;
}

function addCandidate(cocktail, items, selectedIds, baseCounts) {
  items.push(cocktail);
  selectedIds.add(cocktail.id);
  baseCounts.set(cocktail.baseSpirit, (baseCounts.get(cocktail.baseSpirit) || 0) + 1);
}

function fillFallbackItems(scored, allItems, selectedIds, baseCounts, spiritLocked) {
  for (const candidate of scored) {
    if (allItems.length === 9) break;
    if (selectedIds.has(candidate.cocktail.id)) continue;
    if (!spiritLocked && (baseCounts.get(candidate.cocktail.baseSpirit) || 0) >= 3) continue;
    allItems.push(candidate.cocktail);
    selectedIds.add(candidate.cocktail.id);
    baseCounts.set(candidate.cocktail.baseSpirit, (baseCounts.get(candidate.cocktail.baseSpirit) || 0) + 1);
  }
}

function sortScored(a, b) {
  return b.score - a.score || b.relevance - a.relevance || a.cocktail.name.localeCompare(b.cocktail.name);
}

function riskFitBoost(candidateRisk, preferredRisk) {
  if (preferredRisk === "safe") {
    if (candidateRisk === "safe") return 32;
    if (candidateRisk === "balanced") return 12;
    return -36;
  }

  if (preferredRisk === "balanced") {
    if (candidateRisk === "balanced") return 20;
    return 6;
  }

  if (candidateRisk === "adventurous") return 32;
  if (candidateRisk === "balanced") return 6;
  if (candidateRisk === "safe") return -8;
  return 0;
}

export function scoreCocktail(cocktail, answers = {}) {
  let score = scoreRelevance(cocktail, answers);

  if (answers.spirit && answers.spirit !== "No preference") {
    const baseFit = getBaseFit(cocktail, answers.spirit);
    if (baseFit === "exact") score += 42;
    if (baseFit === "family") score += 18;
    if (baseFit === "unrelated") score -= 42;
  }

  if (answers.adventure) {
    score += scoreAdventure(cocktail, answers.adventure);
  }

  if (cocktail.classicLevel === "familiar") score += 2;
  if (cocktail.classicLevel === "classic") score += 1;

  return score;
}

function scoreRelevance(cocktail, answers = {}) {
  let score = 0;

  if (answers.mood && answers.mood !== "Surprise me") {
    const wanted = moodFlavorMap[answers.mood] || [];
    score += wanted.filter((flavor) => cocktail.flavors.includes(flavor)).length * 12;
  }

  if (answers.strength && answers.strength !== "Doesn't matter") {
    const wantedStrength = answers.strength.toLowerCase();
    if (cocktail.strength === wantedStrength) {
      score += 17;
    } else if (
      strengthRank[cocktail.strength] &&
      strengthRank[wantedStrength] &&
      Math.abs(strengthRank[cocktail.strength] - strengthRank[wantedStrength]) === 1
    ) {
      score += 4;
    } else {
      score -= 8;
    }
  }

  if (answers.texture && answers.texture !== "Doesn't matter") {
    const pref = texturePreferenceMap[answers.texture];
    if (pref) {
      if (pref.textures?.includes(cocktail.texture)) score += 16;
      if (pref.formats?.includes(cocktail.format)) score += 9;
      if (pref.categories?.includes(cocktail.category)) score += 8;
      if (pref.bodies?.includes(cocktail.body)) score += 5;
      if (pref.strengths?.includes(cocktail.strength)) score += 5;
      score += (pref.flavors || []).filter((flavor) => cocktail.flavors.includes(flavor)).length * 5;
    }
  }

  return score;
}

function getBaseFit(cocktail, selectedSpirit) {
  if (!selectedSpirit || selectedSpirit === "No preference") return "open";
  if (cocktail.baseSpirit === selectedSpirit) return "exact";
  if (baseSpiritFamilies[selectedSpirit]?.includes(cocktail.baseSpirit)) return "family";
  return "unrelated";
}

function scoreAdventure(cocktail, preference) {
  if (preference === "Safe") {
    if (cocktail.riskLevel === "safe") return 8;
    if (cocktail.riskLevel === "balanced") return 2;
    return -10;
  }

  if (preference === "Balanced") {
    if (cocktail.riskLevel === "balanced") return 8;
    if (cocktail.riskLevel === "safe") return 3;
    return 1;
  }

  if (cocktail.riskLevel === "adventurous") return 8;
  if (cocktail.classicLevel === "obscure") return 5;
  if (cocktail.riskLevel === "balanced") return 4;
  return -2;
}
