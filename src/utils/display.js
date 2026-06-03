import { baseSpiritZhLabels } from "../data/cocktails.js";

export const roleLabels = {
  safe: "稳妥选择",
  stretch: "进阶选择",
  deep: "隐藏选择",
};

export const strengthLabels = {
  low: "低",
  medium: "中等",
  strong: "强",
};

export const bodyLabels = {
  light: "轻盈",
  medium: "中等",
  "medium-full": "中等偏饱满",
  full: "饱满",
};

export const textureLabels = {
  shaken: "摇和",
  stirred: "搅拌",
  fizzy: "气泡",
  creamy: "顺滑",
  "crushed ice": "碎冰",
  built: "杯中调和",
  blended: "搅打",
};

export const classicLevelLabels = {
  familiar: "耳熟能详",
  classic: "经典",
  "modern-classic": "现代经典",
  obscure: "小众经典",
};

export function roleLabel(role) {
  return roleLabels[role] || role;
}

export function baseSpiritLabel(baseSpirit) {
  return baseSpiritZhLabels[baseSpirit] || baseSpirit;
}

export function displayCocktailName(cocktail) {
  if (!cocktail?.chineseName || cocktail.chineseName === cocktail.name) {
    return cocktail?.name || "";
  }

  return `${cocktail.name} / ${cocktail.chineseName}`;
}

export function formatRecipeItem(item) {
  const amount = item.amount === undefined || item.amount === "" ? "" : String(item.amount);
  const unit = item.unit ? ` ${item.unit}` : "";
  return `${item.ingredient}${amount ? ` ${amount}${unit}` : ""}`;
}

export function formatList(values) {
  return values.filter(Boolean).join("、");
}

