import { cocktails } from "../data/cocktails.js";
import { getRecommendations } from "./recommendation.js";

const requiredFields = [
  "id",
  "name",
  "chineseName",
  "baseSpirit",
  "family",
  "category",
  "flavors",
  "flavorLabelsZh",
  "strength",
  "body",
  "texture",
  "format",
  "classicLevel",
  "riskLevel",
  "descriptionZh",
  "recipe",
  "methodZh",
  "glassware",
  "garnish",
  "bartenderPhraseZh",
  "similarDrinkIds",
];

const enumValues = {
  baseSpirit: [
    "amaro",
    "brandy",
    "cachaca",
    "champagne",
    "cognac",
    "gin",
    "liqueur",
    "mezcal",
    "mixed",
    "non-spirit",
    "pisco",
    "rum",
    "tequila",
    "vermouth",
    "vodka",
    "whiskey",
  ],
  strength: ["low", "medium", "strong"],
  body: ["light", "medium", "medium-full", "full"],
  texture: ["shaken", "stirred", "fizzy", "creamy", "crushed ice", "built", "blended"],
  format: ["short", "long", "up", "rocks", "highball", "frozen", "tiki", "spritz", "punch"],
  classicLevel: ["familiar", "classic", "modern-classic", "obscure"],
  riskLevel: ["safe", "balanced", "adventurous"],
};

export function validateCocktailData() {
  const issues = [];
  const ids = new Set();
  const names = new Set();
  const idPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  for (const cocktail of cocktails) {
    for (const field of requiredFields) {
      const value = cocktail[field];
      if (
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        issues.push(`${cocktail.id || cocktail.name}: missing ${field}`);
      }
    }

    if (!idPattern.test(cocktail.id)) issues.push(`${cocktail.id}: invalid id format`);
    if (ids.has(cocktail.id)) issues.push(`${cocktail.id}: duplicate id`);
    ids.add(cocktail.id);

    if (names.has(cocktail.name)) issues.push(`${cocktail.name}: duplicate name`);
    names.add(cocktail.name);

    for (const [field, validValues] of Object.entries(enumValues)) {
      if (!validValues.includes(cocktail[field])) {
        issues.push(`${cocktail.id}: invalid ${field} "${cocktail[field]}"`);
      }
    }

    for (const item of cocktail.recipe || []) {
      if (!item.ingredient || item.amount === undefined || item.unit === undefined) {
        issues.push(`${cocktail.id}: invalid recipe item`);
      }
    }
  }

  for (const cocktail of cocktails) {
    for (const similarId of cocktail.similarDrinkIds || []) {
      if (!ids.has(similarId)) {
        issues.push(`${cocktail.id}: missing similar drink ${similarId}`);
      }
    }
  }

  const sample = getRecommendations({
    mood: "Refreshing",
    strength: "Medium",
    spirit: "No preference",
    adventure: "Balanced",
    texture: "Bright and sour",
  });
  const recommendationIds = sample.groups.flatMap((group) => group.items.map((item) => item.id));
  if (recommendationIds.length !== 9) issues.push(`recommendations returned ${recommendationIds.length}, expected 9`);
  if (new Set(recommendationIds).size !== recommendationIds.length) {
    issues.push("recommendations include duplicate cocktails");
  }

  return {
    total: cocktails.length,
    issues,
  };
}
