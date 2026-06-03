const flavorZh = {
  refreshing: "清爽",
  citrus: "柑橘",
  bright: "明亮",
  fizzy: "气泡",
  light: "轻盈",
  mint: "薄荷",
  bitter: "偏苦",
  bittersweet: "苦甜",
  herbal: "草本",
  botanical: "植物香气",
  "spirit-forward": "酒感直接",
  boozy: "酒感强",
  dry: "偏干",
  rich: "浓郁",
  sweet: "微甜",
  tart: "酸爽",
  fruity: "果味",
  tropical: "热带水果",
  pineapple: "菠萝",
  grapefruit: "葡萄柚",
  passionfruit: "百香果",
  cucumber: "黄瓜",
  apricot: "杏桃",
  coconut: "椰子",
  grape: "葡萄",
  clean: "干净",
  orange: "橙香",
  berry: "莓果",
  floral: "花香",
  smoky: "烟熏",
  earthy: "土壤感",
  agave: "龙舌兰风味",
  spicy: "辛香",
  ginger: "姜味",
  honey: "蜂蜜",
  nutty: "坚果",
  almond: "杏仁",
  coffee: "咖啡",
  chocolate: "巧克力",
  creamy: "顺滑",
  dessert: "甜点感",
  savory: "咸鲜",
  saline: "盐感",
  winey: "葡萄酒感",
  anise: "茴香",
  cola: "可乐",
  apple: "苹果",
  peach: "桃子",
  tea: "茶感",
  cooling: "清凉",
  elegant: "优雅",
  malty: "麦芽感",
  silky: "丝滑",
  simple: "直接",
  warming: "温暖",
  complex: "层次丰富",
  aperitif: "开胃酒风格",
};

const baseSpiritZh = {
  gin: "金酒",
  whiskey: "威士忌",
  rum: "朗姆",
  cachaca: "卡沙萨 Cachaça",
  tequila: "龙舌兰",
  mezcal: "梅斯卡尔",
  vodka: "伏特加",
  brandy: "白兰地",
  cognac: "干邑",
  pisco: "皮斯科",
  champagne: "香槟/起泡酒",
  vermouth: "味美思",
  amaro: "阿玛罗",
  liqueur: "利口酒",
  mixed: "混合基酒",
  "non-spirit": "低酒精",
};

export const baseSpiritFamilies = {
  mezcal: ["mezcal", "tequila"],
  tequila: ["tequila", "mezcal"],
  cachaca: ["cachaca", "rum"],
  rum: ["rum", "cachaca"],
  cognac: ["cognac", "brandy"],
  brandy: ["brandy", "cognac", "pisco"],
  pisco: ["pisco", "brandy"],
  whiskey: ["whiskey"],
  gin: ["gin"],
  vodka: ["vodka"],
  amaro: ["amaro", "vermouth", "liqueur"],
  vermouth: ["vermouth", "amaro", "champagne"],
  champagne: ["champagne", "vermouth"],
  liqueur: ["liqueur", "amaro"],
  mixed: ["mixed"],
  "non-spirit": ["non-spirit"],
};

const categoryZh = {
  aperitif: "开胃型",
  classic: "经典短饮",
  dessert: "甜点型",
  fizz: "菲士长饮",
  highball: "高球长饮",
  "modern-classic": "现代经典",
  punch: "潘趣型",
  savory: "咸鲜型",
  shaken: "摇和型",
  sour: "酸甜型",
  sparkling: "起泡酒型",
  spritz: "Spritz 气泡型",
  stirred: "搅拌型",
  tiki: "热带风格",
  tropical: "热带水果型",
};

const formatDefaults = {
  short: { glassware: "Rocks 杯", method: "加冰调和或摇和后，过滤入合适杯型。" },
  long: { glassware: "Highball 杯", method: "杯中加冰，加入主要材料，补足气泡或延展材料后轻搅。" },
  up: { glassware: "Coupe 杯", method: "加冰充分处理，过滤入冰镇 coupe 杯。" },
  rocks: { glassware: "Rocks 杯", method: "加冰处理后，倒入或过滤入装冰的 rocks 杯。" },
  highball: { glassware: "Highball 杯", method: "杯中加冰，加入材料后轻搅，保持清爽延展感。" },
  frozen: { glassware: "Hurricane 杯", method: "与碎冰或冰块搅打至顺滑，倒入杯中。" },
  tiki: { glassware: "Tiki 杯", method: "加冰摇和，倒入装碎冰的杯中，保持饱满的热带层次。" },
  spritz: { glassware: "Wine 杯", method: "杯中加冰，加入材料和起泡酒或苏打水，轻轻搅拌。" },
  punch: { glassware: "Punch 杯", method: "加冰摇和或直接调和，倒入装冰杯中。" },
};

const textureMethod = {
  shaken: "加冰摇和，过滤入合适杯型。",
  stirred: "加冰搅拌至充分冰镇，过滤入合适杯型。",
  fizzy: "杯中加冰，加入基底材料，补足气泡材料后轻搅。",
  creamy: "加冰充分摇和，过滤入冰镇杯中。",
  "crushed ice": "加冰摇和后倒入碎冰杯中，或直接 swizzle 至冰霜感。",
  built: "直接在杯中加冰调和，轻搅即可。",
  blended: "与冰块搅打至顺滑，倒入杯中。",
};

const garnishDefaults = {
  gin: "柠檬皮",
  whiskey: "橙皮",
  rum: "青柠片",
  cachaca: "青柠片",
  tequila: "青柠片",
  mezcal: "葡萄柚皮",
  vodka: "柠檬皮",
  brandy: "橙皮",
  cognac: "橙皮",
  pisco: "苦精点缀",
  champagne: "柠檬皮",
  vermouth: "橙片",
  amaro: "橙片",
  liqueur: "薄荷叶",
  mixed: "柑橘皮",
  "non-spirit": "橙片",
};

const R = (ingredient, amount, unit = "ml") => ({ ingredient, amount, unit });
const Top = (ingredient) => ({ ingredient, amount: "top", unit: "" });
const Dash = (ingredient, amount = 2) => ({ ingredient, amount, unit: amount === 1 ? "dash" : "dashes" });
const Leaf = (ingredient, amount) => ({ ingredient, amount, unit: "leaves" });
const Whole = (ingredient, amount = 1) => ({ ingredient, amount, unit: "whole" });
const Wedge = (ingredient, amount = 1) => ({ ingredient, amount, unit: "wedge" });

const D = (
  id,
  name,
  chineseName,
  baseSpirit,
  category,
  family,
  flavors,
  strength,
  body,
  texture,
  format,
  classicLevel,
  riskLevel,
  recipe,
  options = {}
) => ({
  id,
  name,
  chineseName,
  baseSpirit,
  category,
  family,
  flavors,
  strength,
  body,
  texture,
  format,
  classicLevel,
  riskLevel,
  recipe,
  ...options,
});

const rawCocktails = [
  D("martini", "Martini", "马天尼", "gin", "stirred", "martini", ["dry", "spirit-forward", "botanical"], "strong", "medium", "stirred", "up", "familiar", "safe", [R("Gin", 60), R("Dry vermouth", 10), Dash("Orange bitters", 1)], { garnish: "柠檬皮或橄榄" }),
  D("dirty-martini", "Dirty Martini", "脏马天尼", "gin", "stirred", "martini", ["dry", "savory", "saline", "spirit-forward"], "strong", "medium", "stirred", "up", "familiar", "balanced", [R("Gin", 60), R("Dry vermouth", 10), R("Olive brine", 10)], { garnish: "橄榄" }),
  D("gibson", "Gibson", "吉布森", "gin", "stirred", "martini", ["dry", "savory", "botanical", "spirit-forward"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("Gin", 60), R("Dry vermouth", 10)], { garnish: "鸡尾洋葱" }),
  D("vesper", "Vesper", "维斯帕", "gin", "stirred", "martini", ["dry", "spirit-forward", "bright"], "strong", "medium", "shaken", "up", "classic", "adventurous", [R("Gin", 45), R("Vodka", 15), R("Lillet Blanc", 7.5)], { garnish: "柠檬皮" }),
  D("tuxedo-no-2", "Tuxedo No. 2", "塔克西多二号", "gin", "stirred", "martini", ["dry", "anise", "herbal", "spirit-forward"], "strong", "medium", "stirred", "up", "obscure", "adventurous", [R("Gin", 45), R("Dry vermouth", 45), R("Maraschino liqueur", 5), R("Absinthe", 2.5), Dash("Orange bitters", 2)], { garnish: "樱桃或柠檬皮" }),
  D("martinez", "Martinez", "马丁内斯", "gin", "stirred", "martini", ["rich", "herbal", "sweet", "spirit-forward"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("Old Tom gin", 45), R("Sweet vermouth", 45), R("Maraschino liqueur", 7.5), Dash("Orange bitters", 2)]),
  D("hanky-panky", "Hanky Panky", "Hanky Panky", "gin", "stirred", "amaro", ["bitter", "herbal", "spirit-forward", "complex"], "strong", "medium", "stirred", "up", "obscure", "adventurous", [R("Gin", 45), R("Sweet vermouth", 45), R("Fernet-Branca", 7.5)]),
  D("bijou", "Bijou", "宝石", "gin", "stirred", "herbal", ["herbal", "rich", "sweet", "complex"], "strong", "full", "stirred", "up", "obscure", "adventurous", [R("Gin", 30), R("Sweet vermouth", 30), R("Green Chartreuse", 30), Dash("Orange bitters", 1)]),
  D("negroni", "Negroni", "尼格罗尼", "gin", "aperitif", "bitter aperitif", ["bitter", "herbal", "bittersweet", "aperitif"], "strong", "medium-full", "stirred", "rocks", "familiar", "safe", [R("Gin", 30), R("Campari", 30), R("Sweet vermouth", 30)], { garnish: "橙皮" }),
  D("white-negroni", "White Negroni", "白尼格罗尼", "gin", "aperitif", "bitter aperitif", ["bitter", "dry", "herbal", "aperitif"], "strong", "medium", "stirred", "rocks", "classic", "balanced", [R("Gin", 45), R("Suze", 22.5), R("Lillet Blanc", 22.5)]),
  D("gin-campari-sour", "Gin Campari Sour", "金巴利金酒酸", "gin", "sour", "bitter sour", ["bitter", "citrus", "bright", "tart"], "medium", "medium", "shaken", "up", "modern-classic", "balanced", [R("Gin", 45), R("Campari", 22.5), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), Whole("Egg white")]),
  D("last-word", "Last Word", "最后之语", "gin", "sour", "equal parts", ["herbal", "citrus", "tart", "complex"], "medium", "medium", "shaken", "up", "classic", "adventurous", [R("Gin", 22.5), R("Green Chartreuse", 22.5), R("Maraschino liqueur", 22.5), R("Fresh lime juice", 22.5)]),
  D("aviation", "Aviation", "飞行", "gin", "sour", "floral sour", ["floral", "citrus", "fruity", "bright"], "medium", "light", "shaken", "up", "classic", "balanced", [R("Gin", 45), R("Fresh lemon juice", 15), R("Maraschino liqueur", 15), R("Creme de violette", 5)], { garnish: "樱桃" }),
  D("gimlet", "Gimlet", "金蕾", "gin", "sour", "sour", ["citrus", "tart", "refreshing", "bright"], "medium", "light", "shaken", "up", "classic", "safe", [R("Gin", 60), R("Fresh lime juice", 22.5), R("Simple syrup", 15)]),
  D("southside", "Southside", "南区", "gin", "sour", "mint sour", ["mint", "citrus", "refreshing", "herbal"], "medium", "light", "shaken", "up", "classic", "balanced", [R("Gin", 60), R("Fresh lime juice", 22.5), R("Simple syrup", 15), Leaf("Mint", 8)], { garnish: "薄荷叶" }),
  D("bees-knees", "Bee's Knees", "蜜蜂膝", "gin", "sour", "sour", ["citrus", "honey", "bright", "refreshing"], "medium", "light", "shaken", "up", "classic", "safe", [R("Gin", 60), R("Fresh lemon juice", 22.5), R("Honey syrup", 22.5)]),
  D("clover-club", "Clover Club", "三叶草俱乐部", "gin", "sour", "berry sour", ["berry", "citrus", "creamy", "bright"], "medium", "medium", "shaken", "up", "classic", "safe", [R("Gin", 45), R("Fresh lemon juice", 22.5), R("Raspberry syrup", 15), Whole("Egg white")]),
  D("bramble", "Bramble", "荆棘", "gin", "sour", "berry sour", ["berry", "citrus", "refreshing", "fruity"], "medium", "medium", "crushed ice", "rocks", "modern-classic", "safe", [R("Gin", 45), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), R("Creme de mure", 15)], { glassware: "Rocks 杯", garnish: "黑莓和柠檬片" }),
  D("basil-smash", "Gin Basil Smash", "金酒罗勒 Smash", "gin", "sour", "herbal sour", ["herbal", "citrus", "refreshing", "bright"], "medium", "medium", "shaken", "rocks", "modern-classic", "balanced", [R("Gin", 60), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), Leaf("Basil", 10)], { garnish: "罗勒叶" }),
  D("tom-collins", "Tom Collins", "汤姆柯林斯", "gin", "highball", "collins", ["citrus", "fizzy", "refreshing", "light"], "low", "light", "fizzy", "highball", "familiar", "safe", [R("Gin", 45), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), Top("Soda water")], { garnish: "柠檬片和樱桃" }),
  D("gin-fizz", "Gin Fizz", "金菲士", "gin", "fizz", "fizz", ["citrus", "fizzy", "refreshing", "light"], "low", "light", "fizzy", "long", "classic", "safe", [R("Gin", 45), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), Top("Soda water")]),
  D("silver-fizz", "Silver Fizz", "银菲士", "gin", "fizz", "fizz", ["citrus", "fizzy", "creamy", "bright"], "low", "medium", "fizzy", "long", "classic", "balanced", [R("Gin", 45), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), Whole("Egg white"), Top("Soda water")]),
  D("ramos-gin-fizz", "Ramos Gin Fizz", "拉莫斯金菲士", "gin", "fizz", "creamy fizz", ["creamy", "citrus", "floral", "fizzy"], "low", "full", "creamy", "long", "classic", "adventurous", [R("Gin", 45), R("Fresh lemon juice", 15), R("Fresh lime juice", 15), R("Simple syrup", 22.5), R("Cream", 30), Whole("Egg white"), R("Orange flower water", 2, "dashes"), Top("Soda water")], { glassware: "Collins 杯" }),
  D("gin-rickey", "Gin Rickey", "金酒瑞奇", "gin", "highball", "rickey", ["citrus", "fizzy", "dry", "refreshing"], "low", "light", "fizzy", "highball", "classic", "safe", [R("Gin", 60), R("Fresh lime juice", 15), Top("Soda water")]),
  D("corpse-reviver-no-2", "Corpse Reviver No. 2", "醒尸二号", "gin", "sour", "reviver", ["citrus", "anise", "bright", "complex"], "medium", "medium", "shaken", "up", "classic", "adventurous", [R("Gin", 22.5), R("Cointreau", 22.5), R("Lillet Blanc", 22.5), R("Fresh lemon juice", 22.5), R("Absinthe", 2.5)]),
  D("singapore-sling", "Singapore Sling", "新加坡司令", "gin", "tropical", "sling", ["fruity", "pineapple", "herbal", "refreshing"], "medium", "medium-full", "shaken", "long", "familiar", "balanced", [R("Gin", 30), R("Cherry Heering", 15), R("Cointreau", 7.5), R("Benedictine", 7.5), R("Pineapple juice", 120), R("Fresh lime juice", 15), R("Grenadine", 10), Dash("Angostura bitters", 1)]),
  D("monkey-gland", "Monkey Gland", "猴腺", "gin", "shaken", "classic sour", ["orange", "anise", "fruity", "bright"], "medium", "medium", "shaken", "up", "obscure", "adventurous", [R("Gin", 45), R("Orange juice", 45), R("Grenadine", 5), R("Absinthe", 2.5)]),
  D("casino", "Casino", "卡西诺", "gin", "sour", "classic sour", ["citrus", "fruity", "dry", "bright"], "medium", "medium", "shaken", "up", "obscure", "balanced", [R("Old Tom gin", 45), R("Maraschino liqueur", 7.5), R("Fresh lemon juice", 7.5), Dash("Orange bitters", 2)]),
  D("twentieth-century", "20th Century", "二十世纪", "gin", "sour", "liqueur sour", ["citrus", "chocolate", "floral", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Gin", 45), R("Lillet Blanc", 22.5), R("White creme de cacao", 22.5), R("Fresh lemon juice", 22.5)]),
  D("alaska", "Alaska", "阿拉斯加", "gin", "stirred", "herbal", ["herbal", "dry", "spirit-forward", "complex"], "strong", "medium", "stirred", "up", "obscure", "adventurous", [R("Gin", 60), R("Yellow Chartreuse", 22.5), Dash("Orange bitters", 1)]),
  D("saturn", "Saturn", "土星", "gin", "tiki", "tiki", ["tropical", "citrus", "almond", "passionfruit"], "medium", "medium", "blended", "tiki", "modern-classic", "adventurous", [R("Gin", 45), R("Passion fruit syrup", 15), R("Orgeat", 15), R("Falernum", 7.5), R("Fresh lemon juice", 22.5)], { garnish: "柠檬皮和樱桃" }),
  D("archangel", "Archangel", "大天使", "gin", "aperitif", "bitter aperitif", ["bitter", "citrus", "cucumber", "botanical"], "medium", "medium", "stirred", "rocks", "modern-classic", "balanced", [R("Gin", 60), R("Aperol", 22.5), R("Cucumber slices", 3, "slices")], { garnish: "黄瓜片" }),
  D("pink-gin", "Pink Gin", "粉红金酒", "gin", "stirred", "bitters", ["dry", "spirit-forward", "spicy", "bitter"], "strong", "light", "built", "short", "classic", "adventurous", [R("Gin", 60), Dash("Angostura bitters", 4)], { glassware: "Cocktail 杯", garnish: "无装饰" }),

  D("old-fashioned", "Old Fashioned", "古典鸡尾酒", "whiskey", "stirred", "old fashioned", ["spirit-forward", "rich", "bittersweet", "spicy"], "strong", "medium", "built", "rocks", "familiar", "safe", [R("Bourbon or rye whiskey", 60), R("Simple syrup", 7.5), Dash("Angostura bitters", 2)], { garnish: "橙皮" }),
  D("manhattan", "Manhattan", "曼哈顿", "whiskey", "stirred", "manhattan", ["spirit-forward", "rich", "sweet", "spicy"], "strong", "medium-full", "stirred", "up", "familiar", "safe", [R("Rye whiskey", 60), R("Sweet vermouth", 30), Dash("Angostura bitters", 2)], { garnish: "酒浸樱桃" }),
  D("perfect-manhattan", "Perfect Manhattan", "完美曼哈顿", "whiskey", "stirred", "manhattan", ["spirit-forward", "dry", "rich", "winey"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("Rye whiskey", 60), R("Sweet vermouth", 15), R("Dry vermouth", 15), Dash("Angostura bitters", 2)]),
  D("dry-manhattan", "Dry Manhattan", "干曼哈顿", "whiskey", "stirred", "manhattan", ["dry", "spirit-forward", "herbal", "winey"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("Rye whiskey", 60), R("Dry vermouth", 30), Dash("Orange bitters", 2)], { garnish: "柠檬皮" }),
  D("rob-roy", "Rob Roy", "罗布罗伊", "whiskey", "stirred", "manhattan", ["rich", "spirit-forward", "sweet", "smoky"], "strong", "medium-full", "stirred", "up", "classic", "safe", [R("Scotch whisky", 60), R("Sweet vermouth", 30), Dash("Angostura bitters", 2)]),
  D("black-manhattan", "Black Manhattan", "黑曼哈顿", "whiskey", "stirred", "amaro", ["bitter", "rich", "herbal", "spirit-forward"], "strong", "medium-full", "stirred", "up", "modern-classic", "balanced", [R("Rye whiskey", 60), R("Averna", 30), Dash("Angostura bitters", 1), Dash("Orange bitters", 1)]),
  D("brooklyn", "Brooklyn", "布鲁克林", "whiskey", "stirred", "manhattan", ["dry", "spirit-forward", "fruity", "complex"], "strong", "medium", "stirred", "up", "classic", "adventurous", [R("Rye whiskey", 60), R("Dry vermouth", 22.5), R("Maraschino liqueur", 7.5), R("Amer Picon", 7.5)]),
  D("vieux-carre", "Vieux Carre", "老广场", "whiskey", "stirred", "new orleans", ["rich", "herbal", "spirit-forward", "complex"], "strong", "full", "stirred", "rocks", "classic", "adventurous", [R("Rye whiskey", 22.5), R("Cognac", 22.5), R("Sweet vermouth", 22.5), R("Benedictine", 7.5), Dash("Peychaud's bitters", 2), Dash("Angostura bitters", 2)]),
  D("sazerac", "Sazerac", "萨泽拉克", "whiskey", "stirred", "new orleans", ["spirit-forward", "anise", "dry", "spicy"], "strong", "medium", "built", "rocks", "classic", "balanced", [R("Rye whiskey", 60), R("Simple syrup", 7.5), Dash("Peychaud's bitters", 3), R("Absinthe rinse", 2.5)], { garnish: "柠檬皮" }),
  D("whiskey-sour", "Whiskey Sour", "威士忌酸", "whiskey", "sour", "sour", ["citrus", "tart", "rich", "bright"], "medium", "medium", "shaken", "rocks", "familiar", "safe", [R("Bourbon whiskey", 60), R("Fresh lemon juice", 22.5), R("Simple syrup", 22.5), Whole("Egg white")]),
  D("new-york-sour", "New York Sour", "纽约酸", "whiskey", "sour", "sour", ["citrus", "winey", "rich", "bright"], "medium", "medium-full", "shaken", "rocks", "classic", "balanced", [R("Bourbon whiskey", 60), R("Fresh lemon juice", 22.5), R("Simple syrup", 22.5), R("Red wine float", 15)]),
  D("gold-rush", "Gold Rush", "淘金热", "whiskey", "sour", "sour", ["citrus", "honey", "bright", "rich"], "medium", "medium", "shaken", "rocks", "classic", "safe", [R("Bourbon whiskey", 60), R("Fresh lemon juice", 22.5), R("Honey syrup", 22.5)]),
  D("penicillin", "Penicillin", "盘尼西林", "whiskey", "sour", "sour", ["smoky", "ginger", "honey", "citrus"], "medium", "medium", "shaken", "rocks", "modern-classic", "adventurous", [R("Blended Scotch", 60), R("Fresh lemon juice", 22.5), R("Honey-ginger syrup", 22.5), R("Peated Scotch float", 7.5)]),
  D("paper-plane", "Paper Plane", "纸飞机", "whiskey", "modern-classic", "equal parts", ["bittersweet", "citrus", "bright", "fruity"], "medium", "medium", "shaken", "up", "modern-classic", "balanced", [R("Bourbon whiskey", 22.5), R("Aperol", 22.5), R("Amaro Nonino", 22.5), R("Fresh lemon juice", 22.5)]),
  D("boulevardier", "Boulevardier", "布瓦迪耶", "whiskey", "aperitif", "bitter aperitif", ["bitter", "rich", "bittersweet", "spirit-forward"], "strong", "full", "stirred", "rocks", "classic", "balanced", [R("Bourbon or rye whiskey", 45), R("Campari", 30), R("Sweet vermouth", 30)]),
  D("old-pal", "Old Pal", "老朋友", "whiskey", "aperitif", "bitter aperitif", ["bitter", "dry", "spirit-forward", "aperitif"], "strong", "medium", "stirred", "up", "classic", "adventurous", [R("Rye whiskey", 45), R("Campari", 22.5), R("Dry vermouth", 22.5)]),
  D("rusty-nail", "Rusty Nail", "生锈钉", "whiskey", "stirred", "liqueur", ["rich", "honey", "spirit-forward", "sweet"], "strong", "medium-full", "built", "rocks", "classic", "safe", [R("Scotch whisky", 60), R("Drambuie", 22.5)], { garnish: "柠檬皮" }),
  D("blood-and-sand", "Blood and Sand", "血与沙", "whiskey", "shaken", "classic", ["fruity", "orange", "rich", "smoky"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Scotch whisky", 22.5), R("Cherry Heering", 22.5), R("Sweet vermouth", 22.5), R("Orange juice", 22.5)]),
  D("brown-derby", "Brown Derby", "棕色德比", "whiskey", "sour", "sour", ["grapefruit", "honey", "bright", "rich"], "medium", "medium", "shaken", "up", "classic", "safe", [R("Bourbon whiskey", 45), R("Fresh grapefruit juice", 30), R("Honey syrup", 15)]),
  D("ward-eight", "Ward Eight", "第八区", "whiskey", "sour", "sour", ["citrus", "fruity", "bright", "tart"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Rye whiskey", 60), R("Fresh lemon juice", 15), R("Fresh orange juice", 15), R("Grenadine", 15)]),
  D("mint-julep", "Mint Julep", "薄荷朱利普", "whiskey", "classic", "julep", ["mint", "refreshing", "spirit-forward", "sweet"], "strong", "medium", "crushed ice", "rocks", "familiar", "safe", [R("Bourbon whiskey", 60), R("Simple syrup", 10), Leaf("Mint", 10)], { glassware: "Julep 杯", garnish: "薄荷枝" }),
  D("whiskey-smash", "Whiskey Smash", "威士忌 Smash", "whiskey", "sour", "smash", ["mint", "citrus", "refreshing", "rich"], "medium", "medium", "shaken", "rocks", "classic", "safe", [R("Bourbon whiskey", 60), R("Fresh lemon wedges", 3, "wedges"), R("Simple syrup", 15), Leaf("Mint", 8)]),
  D("revolver", "Revolver", "左轮", "whiskey", "modern-classic", "stirred", ["coffee", "rich", "spirit-forward", "orange"], "strong", "medium-full", "stirred", "up", "modern-classic", "balanced", [R("Bourbon whiskey", 60), R("Coffee liqueur", 15), Dash("Orange bitters", 2)]),
  D("toronto", "Toronto", "多伦多", "whiskey", "stirred", "amaro", ["bitter", "herbal", "spirit-forward", "rich"], "strong", "medium", "stirred", "up", "classic", "adventurous", [R("Rye whiskey", 60), R("Fernet-Branca", 7.5), R("Simple syrup", 7.5), Dash("Angostura bitters", 2)]),
  D("remember-the-maine", "Remember the Maine", "记住缅因号", "whiskey", "stirred", "manhattan", ["rich", "anise", "fruity", "spirit-forward"], "strong", "medium-full", "stirred", "up", "classic", "adventurous", [R("Rye whiskey", 60), R("Sweet vermouth", 22.5), R("Cherry Heering", 7.5), R("Absinthe", 2.5)]),
  D("scofflaw", "Scofflaw", "违法者", "whiskey", "sour", "classic", ["citrus", "dry", "fruity", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Rye whiskey", 45), R("Dry vermouth", 30), R("Fresh lemon juice", 15), R("Grenadine", 15), Dash("Orange bitters", 2)]),
  D("irish-coffee", "Irish Coffee", "爱尔兰咖啡", "whiskey", "dessert", "coffee", ["coffee", "creamy", "rich", "sweet"], "low", "full", "creamy", "long", "familiar", "safe", [R("Irish whiskey", 45), R("Hot coffee", 120), R("Demerara syrup", 15), R("Lightly whipped cream", 30)]),
  D("hot-toddy", "Hot Toddy", "热托蒂", "whiskey", "classic", "hot drink", ["honey", "citrus", "spicy", "warming"], "low", "light", "built", "long", "classic", "safe", [R("Whiskey", 45), R("Fresh lemon juice", 15), R("Honey", 15), R("Hot water", 120)]),
  D("godfather", "Godfather", "教父", "whiskey", "stirred", "liqueur", ["nutty", "sweet", "spirit-forward", "rich"], "strong", "medium", "built", "rocks", "classic", "safe", [R("Scotch whisky", 45), R("Amaretto", 22.5)]),
  D("derby", "Derby", "德比", "whiskey", "sour", "classic", ["citrus", "orange", "bright", "rich"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Bourbon whiskey", 45), R("Sweet vermouth", 15), R("Orange curacao", 15), R("Fresh lime juice", 15)], { descriptionZh: "Derby 有多个版本，这里采用威士忌、柑橘和橙香构成的酸甜型短饮；明亮但保留威士忌骨架。" }),
  D("liberal", "Liberal", "自由派", "whiskey", "stirred", "manhattan", ["bitter", "dry", "spirit-forward", "complex"], "strong", "medium", "stirred", "up", "obscure", "adventurous", [R("Rye whiskey", 45), R("Sweet vermouth", 15), R("Amer Picon", 15), Dash("Orange bitters", 1)]),
  D("lions-tail", "Lion's Tail", "狮尾", "whiskey", "sour", "spiced sour", ["spicy", "citrus", "rich", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Bourbon whiskey", 60), R("Allspice dram", 15), R("Fresh lime juice", 22.5), R("Simple syrup", 7.5), Dash("Angostura bitters", 2)]),
  D("improved-whiskey-cocktail", "Improved Whiskey Cocktail", "改良威士忌鸡尾酒", "whiskey", "stirred", "old fashioned", ["spirit-forward", "anise", "sweet", "complex"], "strong", "medium", "stirred", "rocks", "obscure", "adventurous", [R("Rye whiskey", 60), R("Simple syrup", 7.5), R("Maraschino liqueur", 5), R("Absinthe", 2.5), Dash("Angostura bitters", 2)]),
  D("stone-fence", "Stone Fence", "石篱", "whiskey", "highball", "highball", ["apple", "refreshing", "fizzy", "spirit-forward"], "medium", "light", "built", "highball", "classic", "safe", [R("Whiskey", 45), Top("Hard cider")]),

  D("daiquiri", "Daiquiri", "代基里", "rum", "sour", "sour", ["citrus", "tart", "refreshing", "bright"], "medium", "light", "shaken", "up", "familiar", "safe", [R("White rum", 60), R("Fresh lime juice", 22.5), R("Simple syrup", 15)]),
  D("hemingway-daiquiri", "Hemingway Daiquiri", "海明威代基里", "rum", "sour", "daiquiri", ["grapefruit", "citrus", "dry", "bright"], "medium", "light", "shaken", "up", "classic", "balanced", [R("White rum", 60), R("Fresh lime juice", 15), R("Fresh grapefruit juice", 15), R("Maraschino liqueur", 15)]),
  D("floridita-daiquiri", "Floridita Daiquiri", "佛罗里达代基里", "rum", "sour", "daiquiri", ["citrus", "fruity", "bright", "refreshing"], "medium", "light", "blended", "frozen", "classic", "balanced", [R("White rum", 60), R("Fresh lime juice", 22.5), R("Maraschino liqueur", 7.5), R("Simple syrup", 10)]),
  D("mai-tai", "Mai Tai", "迈泰", "rum", "tiki", "tiki", ["tropical", "citrus", "almond", "rich"], "medium", "full", "shaken", "tiki", "familiar", "balanced", [R("Aged rum", 60), R("Orange curacao", 15), R("Orgeat", 15), R("Fresh lime juice", 30), R("Simple syrup", 7.5)]),
  D("mojito", "Mojito", "莫吉托", "rum", "highball", "highball", ["mint", "citrus", "fizzy", "refreshing"], "low", "light", "fizzy", "highball", "familiar", "safe", [R("White rum", 45), R("Fresh lime juice", 22.5), R("Simple syrup", 15), Leaf("Mint", 10), Top("Soda water")]),
  D("dark-n-stormy", "Dark 'n' Stormy", "黑暗风暴", "rum", "highball", "highball", ["ginger", "fizzy", "refreshing", "spicy"], "low", "medium", "fizzy", "highball", "familiar", "safe", [R("Dark rum", 60), Top("Ginger beer"), R("Fresh lime juice", 10)]),
  D("jungle-bird", "Jungle Bird", "丛林鸟", "rum", "tiki", "bitter tiki", ["bitter", "tropical", "pineapple", "bittersweet"], "medium", "medium", "shaken", "rocks", "classic", "adventurous", [R("Dark rum", 45), R("Campari", 22.5), R("Pineapple juice", 45), R("Fresh lime juice", 15), R("Simple syrup", 15)]),
  D("queens-park-swizzle", "Queens Park Swizzle", "女王公园冰摇", "rum", "tropical", "swizzle", ["mint", "citrus", "refreshing", "spicy"], "medium", "medium", "crushed ice", "long", "obscure", "balanced", [R("Aged rum", 60), R("Fresh lime juice", 22.5), R("Simple syrup", 15), Leaf("Mint", 10), Dash("Angostura bitters", 4)]),
  D("planters-punch", "Planter's Punch", "种植园潘趣", "rum", "punch", "punch", ["tropical", "citrus", "spicy", "refreshing"], "medium", "medium-full", "shaken", "punch", "classic", "safe", [R("Dark rum", 60), R("Fresh lime juice", 22.5), R("Simple syrup", 15), Dash("Angostura bitters", 3)]),
  D("ti-punch", "Ti' Punch", "提潘趣", "rum", "classic", "ti punch", ["citrus", "spirit-forward", "earthy", "bright"], "strong", "light", "built", "short", "classic", "adventurous", [R("Rhum agricole", 60), R("Cane syrup", 7.5), Wedge("Lime")]),
  D("el-presidente", "El Presidente", "总统", "rum", "stirred", "classic", ["dry", "orange", "spirit-forward", "winey"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("White rum", 45), R("Dry vermouth", 22.5), R("Orange curacao", 15), R("Grenadine", 5)]),
  D("mary-pickford", "Mary Pickford", "玛丽皮克福德", "rum", "shaken", "classic", ["pineapple", "fruity", "sweet", "bright"], "medium", "medium", "shaken", "up", "classic", "safe", [R("White rum", 45), R("Pineapple juice", 45), R("Maraschino liqueur", 7.5), R("Grenadine", 7.5)]),
  D("hotel-nacional", "Hotel Nacional", "国家酒店", "rum", "tropical", "classic", ["pineapple", "apricot", "citrus", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("White rum", 45), R("Apricot liqueur", 15), R("Pineapple juice", 30), R("Fresh lime juice", 15), R("Simple syrup", 7.5)]),
  D("pina-colada", "Pina Colada", "椰林飘香", "rum", "tropical", "creamy tropical", ["pineapple", "creamy", "tropical", "sweet"], "low", "full", "blended", "frozen", "familiar", "safe", [R("White rum", 45), R("Pineapple juice", 90), R("Cream of coconut", 30), R("Fresh lime juice", 15)], { garnish: "菠萝角" }),
  D("painkiller", "Painkiller", "止痛药", "rum", "tiki", "creamy tropical", ["pineapple", "orange", "creamy", "tropical"], "medium", "full", "shaken", "tiki", "modern-classic", "safe", [R("Pusser's rum", 60), R("Pineapple juice", 90), R("Orange juice", 30), R("Cream of coconut", 30)], { garnish: "肉豆蔻" }),
  D("zombie", "Zombie", "僵尸", "rum", "tiki", "tiki", ["tropical", "spicy", "citrus", "complex"], "strong", "full", "shaken", "tiki", "classic", "adventurous", [R("Jamaican rum", 45), R("Puerto Rican rum", 45), R("Demerara rum", 30), R("Fresh lime juice", 22.5), R("Grapefruit juice", 15), R("Cinnamon syrup", 15), R("Falernum", 7.5), R("Grenadine", 5), Dash("Absinthe", 1)]),
  D("navy-grog", "Navy Grog", "海军格罗格", "rum", "tiki", "tiki", ["citrus", "honey", "tropical", "spirit-forward"], "strong", "medium-full", "shaken", "tiki", "classic", "adventurous", [R("Light rum", 30), R("Dark rum", 30), R("Demerara rum", 30), R("Fresh lime juice", 22.5), R("Grapefruit juice", 22.5), R("Honey syrup", 22.5)]),
  D("fog-cutter", "Fog Cutter", "破雾者", "rum", "tiki", "tiki", ["citrus", "almond", "rich", "complex"], "strong", "full", "shaken", "tiki", "classic", "adventurous", [R("Light rum", 45), R("Brandy", 30), R("Gin", 15), R("Orange juice", 45), R("Fresh lemon juice", 30), R("Orgeat", 15), R("Sherry float", 15)], { baseSpirit: "mixed" }),
  D("scorpion", "Scorpion", "蝎子", "rum", "tiki", "tiki", ["citrus", "almond", "tropical", "rich"], "medium", "full", "shaken", "tiki", "classic", "balanced", [R("Light rum", 60), R("Brandy", 30), R("Orange juice", 60), R("Fresh lemon juice", 30), R("Orgeat", 22.5)]),
  D("three-dots-and-a-dash", "Three Dots and a Dash", "三点一横", "rum", "tiki", "tiki", ["spicy", "citrus", "honey", "tropical"], "strong", "full", "shaken", "tiki", "classic", "adventurous", [R("Aged rum", 45), R("Demerara rum", 15), R("Falernum", 15), R("Allspice dram", 7.5), R("Fresh lime juice", 22.5), R("Orange juice", 15), R("Honey syrup", 15), Dash("Angostura bitters", 2)]),
  D("jet-pilot", "Jet Pilot", "喷气飞行员", "rum", "tiki", "tiki", ["spicy", "citrus", "anise", "tropical"], "strong", "full", "blended", "tiki", "classic", "adventurous", [R("Dark Jamaican rum", 30), R("Gold rum", 22.5), R("Demerara rum", 22.5), R("Grapefruit juice", 22.5), R("Fresh lime juice", 15), R("Cinnamon syrup", 15), R("Falernum", 15), Dash("Absinthe", 1)]),
  D("test-pilot", "Test Pilot", "试飞员", "rum", "tiki", "tiki", ["spicy", "anise", "citrus", "complex"], "strong", "full", "blended", "tiki", "classic", "adventurous", [R("Dark rum", 45), R("Light rum", 22.5), R("Cointreau", 15), R("Falernum", 15), R("Fresh lime juice", 15), Dash("Angostura bitters", 2), Dash("Absinthe", 1)]),
  D("missionarys-downfall", "Missionary's Downfall", "传教士之败", "rum", "tiki", "tiki", ["mint", "pineapple", "honey", "refreshing"], "low", "light", "blended", "frozen", "classic", "balanced", [R("Light rum", 45), R("Peach brandy", 15), R("Pineapple juice", 45), R("Fresh lime juice", 15), R("Honey syrup", 15), Leaf("Mint", 10)]),
  D("cobras-fang", "Cobra's Fang", "眼镜蛇之牙", "rum", "tiki", "tiki", ["citrus", "spicy", "tropical", "anise"], "strong", "full", "shaken", "tiki", "classic", "adventurous", [R("Demerara rum", 60), R("Fresh lime juice", 15), R("Orange juice", 15), R("Passion fruit syrup", 15), R("Falernum", 15), Dash("Angostura bitters", 2), Dash("Absinthe", 1)]),
  D("ancient-mariner", "Ancient Mariner", "古代水手", "rum", "tiki", "tiki", ["grapefruit", "spicy", "tropical", "rich"], "medium", "full", "shaken", "tiki", "modern-classic", "balanced", [R("Demerara rum", 30), R("Dark Jamaican rum", 30), R("Fresh lime juice", 22.5), R("Grapefruit juice", 22.5), R("Simple syrup", 15), R("Allspice dram", 7.5)]),
  D("grog", "Grog", "格罗格", "rum", "classic", "grog", ["citrus", "spirit-forward", "refreshing", "simple"], "medium", "light", "built", "rocks", "classic", "safe", [R("Rum", 60), R("Fresh lime juice", 15), R("Demerara syrup", 15), R("Water", 30)]),
  D("corn-n-oil", "Corn 'n' Oil", "玉米与油", "rum", "classic", "rum old fashioned", ["rich", "spicy", "citrus", "spirit-forward"], "strong", "medium-full", "built", "rocks", "classic", "balanced", [R("Aged Barbados rum", 60), R("Falernum", 15), Dash("Angostura bitters", 2), Wedge("Lime")]),
  D("hurricane", "Hurricane", "飓风", "rum", "tropical", "tropical", ["passionfruit", "citrus", "tropical", "sweet"], "medium", "full", "shaken", "long", "familiar", "safe", [R("Light rum", 45), R("Dark rum", 45), R("Passion fruit syrup", 30), R("Fresh lemon juice", 30)]),
  D("yellow-bird", "Yellow Bird", "黄鸟", "rum", "tropical", "tropical", ["citrus", "orange", "tropical", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("White rum", 45), R("Galliano", 15), R("Triple sec", 15), R("Fresh lime juice", 15)]),
  D("cable-car", "Cable Car", "缆车", "rum", "sour", "modern sour", ["citrus", "orange", "spicy", "bright"], "medium", "medium", "shaken", "up", "modern-classic", "safe", [R("Spiced rum", 45), R("Orange curacao", 22.5), R("Fresh lemon juice", 22.5), R("Simple syrup", 10)], { garnish: "糖边和橙皮" }),
  D("rum-old-fashioned", "Rum Old Fashioned", "朗姆古典", "rum", "stirred", "old fashioned", ["rich", "spirit-forward", "bittersweet", "tropical"], "strong", "medium-full", "built", "rocks", "modern-classic", "safe", [R("Aged rum", 60), R("Demerara syrup", 7.5), Dash("Angostura bitters", 2), Dash("Orange bitters", 1)]),
  D("barracuda", "Barracuda", "梭鱼", "rum", "sparkling", "tropical sparkling", ["pineapple", "fizzy", "tropical", "bright"], "medium", "medium", "shaken", "long", "classic", "balanced", [R("Gold rum", 45), R("Galliano", 15), R("Pineapple juice", 60), R("Fresh lime juice", 15), Top("Sparkling wine")]),
  D("knickerbocker", "Knickerbocker", "尼克博克", "rum", "sour", "classic sour", ["berry", "citrus", "refreshing", "fruity"], "medium", "medium", "shaken", "rocks", "classic", "balanced", [R("Raspberry syrup", 15), R("Rum", 60), R("Orange curacao", 15), R("Fresh lime juice", 22.5)]),
  D("trade-winds", "Trade Winds", "信风", "rum", "tiki", "creamy tropical", ["apricot", "coconut", "citrus", "tropical"], "medium", "full", "blended", "tiki", "classic", "balanced", [R("Light rum", 45), R("Apricot liqueur", 30), R("Fresh lemon juice", 30), R("Cream of coconut", 30)]),
  D("old-cuban", "Old Cuban", "老古巴", "rum", "sparkling", "sparkling sour", ["mint", "citrus", "fizzy", "rich"], "medium", "medium", "shaken", "up", "modern-classic", "balanced", [R("Aged rum", 45), R("Fresh lime juice", 22.5), R("Simple syrup", 15), Leaf("Mint", 8), Dash("Angostura bitters", 2), Top("Champagne")]),
  D("airmail", "Airmail", "航空邮件", "rum", "sparkling", "sparkling sour", ["honey", "citrus", "fizzy", "bright"], "medium", "light", "shaken", "up", "classic", "safe", [R("Gold rum", 45), R("Fresh lime juice", 22.5), R("Honey syrup", 15), Top("Champagne")]),
  D("suffering-bastard", "Suffering Bastard", "受难者", "mixed", "highball", "ginger highball", ["ginger", "citrus", "refreshing", "spirit-forward"], "medium", "medium", "fizzy", "highball", "classic", "balanced", [R("Gin", 30), R("Brandy", 30), R("Fresh lime juice", 15), Dash("Angostura bitters", 2), Top("Ginger beer")], { descriptionZh: "一杯历史悠久的姜汁高球类饮品，也常被纳入热带吧台语境；金酒与白兰地并用，清爽但有骨架。" }),
  D("blue-hawaii", "Blue Hawaii", "蓝色夏威夷", "mixed", "tropical", "tropical", ["tropical", "pineapple", "citrus", "sweet"], "medium", "medium", "shaken", "long", "familiar", "safe", [R("Light rum", 30), R("Vodka", 30), R("Blue curacao", 15), R("Pineapple juice", 90), R("Sweet and sour mix", 30)]),

  D("margarita", "Margarita", "玛格丽塔", "tequila", "sour", "daisy", ["citrus", "tart", "agave", "bright"], "medium", "light", "shaken", "up", "familiar", "safe", [R("Tequila", 45), R("Cointreau", 22.5), R("Fresh lime juice", 22.5)], { garnish: "盐边或青柠片" }),
  D("tommys-margarita", "Tommy's Margarita", "汤米式玛格丽塔", "tequila", "sour", "daisy", ["citrus", "agave", "bright", "refreshing"], "medium", "light", "shaken", "rocks", "classic", "safe", [R("Tequila blanco", 60), R("Fresh lime juice", 30), R("Agave syrup", 15)]),
  D("paloma", "Paloma", "帕洛玛", "tequila", "highball", "highball", ["grapefruit", "fizzy", "citrus", "refreshing"], "low", "light", "fizzy", "highball", "familiar", "safe", [R("Tequila", 45), R("Fresh lime juice", 15), Top("Grapefruit soda")]),
  D("siesta", "Siesta", "午睡", "tequila", "sour", "bitter sour", ["grapefruit", "bitter", "citrus", "bright"], "medium", "light", "shaken", "up", "modern-classic", "balanced", [R("Tequila blanco", 45), R("Campari", 15), R("Fresh lime juice", 15), R("Fresh grapefruit juice", 15), R("Simple syrup", 15)]),
  D("tequila-sunrise", "Tequila Sunrise", "龙舌兰日出", "tequila", "highball", "highball", ["orange", "fruity", "sweet", "refreshing"], "low", "light", "built", "highball", "familiar", "safe", [R("Tequila", 45), R("Orange juice", 90), R("Grenadine", 15)], { garnish: "橙片和樱桃" }),
  D("el-diablo", "El Diablo", "恶魔", "tequila", "highball", "highball", ["berry", "ginger", "citrus", "refreshing"], "low", "medium", "fizzy", "highball", "classic", "balanced", [R("Tequila", 45), R("Creme de cassis", 15), R("Fresh lime juice", 15), Top("Ginger beer")]),
  D("mexican-firing-squad", "Mexican Firing Squad", "墨西哥行刑队", "tequila", "sour", "classic sour", ["citrus", "spicy", "fruity", "bright"], "medium", "medium", "shaken", "rocks", "classic", "balanced", [R("Tequila", 60), R("Fresh lime juice", 22.5), R("Grenadine", 15), Dash("Angostura bitters", 4)]),
  D("matador", "Matador", "斗牛士", "tequila", "tropical", "sour", ["pineapple", "citrus", "agave", "bright"], "medium", "medium", "shaken", "rocks", "classic", "safe", [R("Tequila", 45), R("Pineapple juice", 60), R("Fresh lime juice", 15)]),
  D("ranch-water", "Ranch Water", "牧场水", "tequila", "highball", "highball", ["citrus", "fizzy", "refreshing", "light"], "low", "light", "fizzy", "highball", "modern-classic", "safe", [R("Tequila", 45), R("Fresh lime juice", 15), Top("Sparkling mineral water")]),
  D("rosita", "Rosita", "罗西塔", "tequila", "aperitif", "bitter aperitif", ["bitter", "agave", "dry", "complex"], "strong", "medium", "stirred", "rocks", "classic", "adventurous", [R("Tequila", 45), R("Campari", 15), R("Sweet vermouth", 15), R("Dry vermouth", 15), Dash("Angostura bitters", 1)]),
  D("tequila-old-fashioned", "Tequila Old Fashioned", "龙舌兰古典", "tequila", "stirred", "old fashioned", ["agave", "spirit-forward", "bittersweet", "rich"], "strong", "medium", "built", "rocks", "modern-classic", "safe", [R("Reposado tequila", 60), R("Agave syrup", 7.5), Dash("Angostura bitters", 2)]),
  D("tequila-sour", "Tequila Sour", "龙舌兰酸", "tequila", "sour", "sour", ["citrus", "agave", "bright", "creamy"], "medium", "medium", "shaken", "rocks", "classic", "safe", [R("Tequila", 60), R("Fresh lemon juice", 22.5), R("Simple syrup", 22.5), Whole("Egg white")]),
  D("cantarito", "Cantarito", "陶罐帕洛玛", "tequila", "highball", "highball", ["grapefruit", "orange", "fizzy", "refreshing"], "low", "light", "fizzy", "highball", "classic", "safe", [R("Tequila", 45), R("Fresh lime juice", 15), R("Fresh orange juice", 30), R("Fresh grapefruit juice", 45), Top("Grapefruit soda")]),
  D("batanga", "Batanga", "巴坦加", "tequila", "highball", "highball", ["cola", "citrus", "refreshing", "agave"], "low", "light", "built", "highball", "classic", "safe", [R("Tequila", 45), R("Fresh lime juice", 15), Top("Cola")]),
  D("la-perla", "La Perla", "珍珠", "tequila", "stirred", "agave stirred", ["agave", "winey", "dry", "fruity"], "strong", "medium", "stirred", "up", "modern-classic", "balanced", [R("Reposado tequila", 45), R("Manzanilla sherry", 45), R("Pear liqueur", 22.5)]),
  D("brave-bull", "Brave Bull", "勇牛", "tequila", "stirred", "liqueur", ["coffee", "agave", "rich", "sweet"], "strong", "medium", "built", "rocks", "classic", "safe", [R("Tequila", 45), R("Coffee liqueur", 22.5)]),
  D("oaxacan-old-fashioned", "Oaxacan Old Fashioned", "瓦哈卡古典", "mezcal", "stirred", "old fashioned", ["smoky", "agave", "spirit-forward", "rich"], "strong", "medium", "built", "rocks", "modern-classic", "balanced", [R("Reposado tequila", 45), R("Mezcal", 15), R("Agave syrup", 7.5), Dash("Angostura bitters", 2)]),
  D("naked-and-famous", "Naked and Famous", "裸与成名", "mezcal", "modern-classic", "equal parts", ["smoky", "bittersweet", "citrus", "herbal"], "medium", "medium", "shaken", "up", "modern-classic", "adventurous", [R("Mezcal", 22.5), R("Aperol", 22.5), R("Yellow Chartreuse", 22.5), R("Fresh lime juice", 22.5)]),
  D("division-bell", "Division Bell", "分界钟", "mezcal", "modern-classic", "sour", ["smoky", "fruity", "citrus", "bittersweet"], "medium", "medium", "shaken", "up", "modern-classic", "adventurous", [R("Mezcal", 30), R("Aperol", 22.5), R("Maraschino liqueur", 15), R("Fresh lime juice", 22.5)]),
  D("mezcal-margarita", "Mezcal Margarita", "梅斯卡尔玛格丽塔", "mezcal", "sour", "daisy", ["smoky", "citrus", "agave", "bright"], "medium", "light", "shaken", "rocks", "modern-classic", "balanced", [R("Mezcal", 45), R("Cointreau", 22.5), R("Fresh lime juice", 22.5), R("Agave syrup", 7.5)]),
  D("mezcal-negroni", "Mezcal Negroni", "梅斯卡尔尼格罗尼", "mezcal", "aperitif", "bitter aperitif", ["smoky", "bitter", "herbal", "spirit-forward"], "strong", "medium-full", "stirred", "rocks", "modern-classic", "adventurous", [R("Mezcal", 30), R("Campari", 30), R("Sweet vermouth", 30)]),
  D("ultima-palabra", "Ultima Palabra", "最后一句", "mezcal", "sour", "equal parts", ["smoky", "herbal", "citrus", "complex"], "medium", "medium", "shaken", "up", "modern-classic", "adventurous", [R("Mezcal", 22.5), R("Green Chartreuse", 22.5), R("Maraschino liqueur", 22.5), R("Fresh lime juice", 22.5)]),
  D("mezcal-mule", "Mezcal Mule", "梅斯卡尔骡子", "mezcal", "highball", "highball", ["smoky", "ginger", "citrus", "refreshing"], "low", "medium", "fizzy", "highball", "modern-classic", "balanced", [R("Mezcal", 45), R("Fresh lime juice", 15), Top("Ginger beer")]),
  D("mezcal-sour", "Mezcal Sour", "梅斯卡尔酸", "mezcal", "sour", "sour", ["smoky", "citrus", "bright", "creamy"], "medium", "medium", "shaken", "rocks", "modern-classic", "balanced", [R("Mezcal", 60), R("Fresh lemon juice", 22.5), R("Agave syrup", 22.5), Whole("Egg white")]),

  D("espresso-martini", "Espresso Martini", "浓缩咖啡马天尼", "vodka", "modern-classic", "coffee", ["coffee", "creamy", "rich", "dessert"], "medium", "full", "shaken", "up", "familiar", "safe", [R("Vodka", 45), R("Coffee liqueur", 20), R("Fresh espresso", 30), R("Simple syrup", 10)], { garnish: "咖啡豆" }),
  D("cosmopolitan", "Cosmopolitan", "大都会", "vodka", "sour", "modern sour", ["berry", "citrus", "tart", "bright"], "medium", "light", "shaken", "up", "familiar", "safe", [R("Vodka citron", 45), R("Cointreau", 15), R("Fresh lime juice", 15), R("Cranberry juice", 30)]),
  D("moscow-mule", "Moscow Mule", "莫斯科骡子", "vodka", "highball", "mule", ["ginger", "citrus", "fizzy", "refreshing"], "low", "light", "fizzy", "highball", "familiar", "safe", [R("Vodka", 45), R("Fresh lime juice", 15), Top("Ginger beer")], { glassware: "铜杯或 highball 杯" }),
  D("vodka-martini", "Vodka Martini", "伏特加马天尼", "vodka", "stirred", "martini", ["dry", "spirit-forward", "clean"], "strong", "light", "stirred", "up", "familiar", "safe", [R("Vodka", 60), R("Dry vermouth", 10)], { garnish: "柠檬皮或橄榄" }),
  D("black-russian", "Black Russian", "黑俄罗斯", "vodka", "stirred", "coffee", ["coffee", "rich", "sweet", "spirit-forward"], "strong", "medium", "built", "rocks", "classic", "safe", [R("Vodka", 45), R("Coffee liqueur", 22.5)]),
  D("white-russian", "White Russian", "白俄罗斯", "vodka", "dessert", "coffee", ["coffee", "creamy", "rich", "sweet"], "medium", "full", "built", "rocks", "classic", "safe", [R("Vodka", 45), R("Coffee liqueur", 22.5), R("Cream", 30)]),
  D("sea-breeze", "Sea Breeze", "海风", "vodka", "highball", "juice highball", ["grapefruit", "berry", "refreshing", "fruity"], "low", "light", "built", "highball", "classic", "safe", [R("Vodka", 45), R("Cranberry juice", 90), R("Grapefruit juice", 45)]),
  D("greyhound", "Greyhound", "灰狗", "vodka", "highball", "juice highball", ["grapefruit", "refreshing", "bright", "light"], "low", "light", "built", "highball", "classic", "safe", [R("Vodka", 45), Top("Grapefruit juice")]),
  D("salty-dog", "Salty Dog", "咸狗", "vodka", "highball", "juice highball", ["grapefruit", "saline", "refreshing", "bright"], "low", "light", "built", "highball", "classic", "safe", [R("Vodka", 45), Top("Grapefruit juice")], { garnish: "盐边" }),
  D("screwdriver", "Screwdriver", "螺丝刀", "vodka", "highball", "juice highball", ["orange", "refreshing", "fruity", "light"], "low", "light", "built", "highball", "familiar", "safe", [R("Vodka", 45), Top("Orange juice")]),
  D("harvey-wallbanger", "Harvey Wallbanger", "哈维撞墙", "vodka", "highball", "juice highball", ["orange", "herbal", "sweet", "fruity"], "low", "light", "built", "highball", "classic", "safe", [R("Vodka", 45), R("Orange juice", 90), R("Galliano float", 15)]),
  D("bloody-mary", "Bloody Mary", "血腥玛丽", "vodka", "savory", "savory", ["savory", "spicy", "citrus", "refreshing"], "low", "medium-full", "built", "highball", "familiar", "balanced", [R("Vodka", 45), R("Tomato juice", 90), R("Fresh lemon juice", 15), R("Worcestershire sauce", 2, "dashes"), R("Hot sauce", 2, "dashes")], { garnish: "芹菜或柠檬片" }),
  D("caipiroska", "Caipiroska", "伏特加凯匹林纳", "vodka", "sour", "muddled sour", ["citrus", "refreshing", "bright", "sweet"], "medium", "light", "built", "rocks", "modern-classic", "safe", [R("Vodka", 60), Wedge("Lime", 4), R("Sugar", 2, "tsp")]),
  D("lemon-drop", "Lemon Drop", "柠檬糖", "vodka", "sour", "modern sour", ["citrus", "sweet", "bright", "tart"], "medium", "light", "shaken", "up", "modern-classic", "safe", [R("Vodka", 45), R("Cointreau", 15), R("Fresh lemon juice", 22.5), R("Simple syrup", 15)], { garnish: "糖边和柠檬皮" }),
  D("french-martini", "French Martini", "法式马天尼", "vodka", "modern-classic", "fruit sour", ["pineapple", "berry", "fruity", "silky"], "medium", "medium", "shaken", "up", "modern-classic", "safe", [R("Vodka", 45), R("Chambord", 15), R("Pineapple juice", 45)]),
  D("apple-martini", "Apple Martini", "苹果马天尼", "vodka", "modern-classic", "fruit sour", ["apple", "tart", "bright", "fruity"], "medium", "light", "shaken", "up", "familiar", "safe", [R("Vodka", 45), R("Apple schnapps", 22.5), R("Fresh lemon juice", 15), R("Simple syrup", 7.5)]),
  D("bay-breeze", "Bay Breeze", "海湾微风", "vodka", "highball", "juice highball", ["pineapple", "berry", "fruity", "refreshing"], "low", "light", "built", "highball", "classic", "safe", [R("Vodka", 45), R("Cranberry juice", 90), R("Pineapple juice", 45)]),
  D("vodka-gimlet", "Vodka Gimlet", "伏特加金蕾", "vodka", "sour", "sour", ["citrus", "tart", "clean", "bright"], "medium", "light", "shaken", "up", "classic", "safe", [R("Vodka", 60), R("Fresh lime juice", 22.5), R("Simple syrup", 15)]),
  D("kamikaze", "Kamikaze", "神风", "vodka", "sour", "sour", ["citrus", "tart", "bright", "clean"], "medium", "light", "shaken", "up", "classic", "balanced", [R("Vodka", 30), R("Triple sec", 30), R("Fresh lime juice", 30)]),

  D("sidecar", "Sidecar", "边车", "cognac", "sour", "sour", ["citrus", "tart", "rich", "bright"], "medium", "medium", "shaken", "up", "classic", "safe", [R("Cognac", 45), R("Cointreau", 22.5), R("Fresh lemon juice", 22.5)], { garnish: "橙皮或糖边" }),
  D("brandy-crusta", "Brandy Crusta", "白兰地克鲁斯塔", "brandy", "sour", "classic sour", ["citrus", "dry", "rich", "complex"], "medium", "medium", "shaken", "up", "obscure", "adventurous", [R("Cognac", 60), R("Curacao", 7.5), R("Maraschino liqueur", 7.5), R("Fresh lemon juice", 15), R("Simple syrup", 7.5), Dash("Angostura bitters", 2)], { garnish: "糖边和长柠檬皮" }),
  D("brandy-alexander", "Brandy Alexander", "白兰地亚历山大", "brandy", "dessert", "creamy", ["creamy", "chocolate", "rich", "dessert"], "medium", "full", "creamy", "up", "classic", "safe", [R("Cognac", 30), R("Dark creme de cacao", 30), R("Cream", 30)], { garnish: "肉豆蔻" }),
  D("stinger", "Stinger", "毒刺", "brandy", "stirred", "liqueur", ["mint", "sweet", "spirit-forward", "cooling"], "strong", "medium", "stirred", "rocks", "classic", "balanced", [R("Cognac", 60), R("White creme de menthe", 22.5)]),
  D("metropolitan", "Metropolitan", "大都会白兰地", "brandy", "stirred", "manhattan", ["rich", "sweet", "spirit-forward", "spicy"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("Brandy", 45), R("Sweet vermouth", 30), R("Simple syrup", 5), Dash("Angostura bitters", 2)]),
  D("japanese-cocktail", "Japanese Cocktail", "日本鸡尾酒", "cognac", "stirred", "classic", ["nutty", "rich", "spirit-forward", "sweet"], "strong", "medium", "stirred", "up", "obscure", "adventurous", [R("Cognac", 60), R("Orgeat", 15), Dash("Angostura bitters", 2)]),
  D("corpse-reviver-no-1", "Corpse Reviver No. 1", "醒尸一号", "brandy", "stirred", "reviver", ["rich", "apple", "winey", "spirit-forward"], "strong", "medium-full", "stirred", "up", "classic", "adventurous", [R("Cognac", 45), R("Calvados", 22.5), R("Sweet vermouth", 22.5)]),
  D("between-the-sheets", "Between the Sheets", "床第之间", "mixed", "sour", "sour", ["citrus", "rich", "bright", "spirit-forward"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Cognac", 30), R("Light rum", 30), R("Cointreau", 30), R("Fresh lemon juice", 22.5)]),
  D("french-connection", "French Connection", "法国连线", "cognac", "stirred", "liqueur", ["nutty", "rich", "spirit-forward", "sweet"], "strong", "medium", "built", "rocks", "classic", "safe", [R("Cognac", 45), R("Amaretto", 22.5)]),
  D("jack-rose", "Jack Rose", "杰克玫瑰", "brandy", "sour", "applejack sour", ["apple", "citrus", "fruity", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Applejack", 60), R("Fresh lemon juice", 22.5), R("Grenadine", 15)]),
  D("pisco-sour", "Pisco Sour", "皮斯科酸", "pisco", "sour", "sour", ["citrus", "creamy", "bright", "tart"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Pisco", 60), R("Fresh lime juice", 30), R("Simple syrup", 22.5), Whole("Egg white")], { garnish: "苦精点缀" }),
  D("chilcano", "Chilcano", "奇尔卡诺", "pisco", "highball", "highball", ["ginger", "citrus", "fizzy", "refreshing"], "low", "light", "fizzy", "highball", "classic", "safe", [R("Pisco", 45), R("Fresh lime juice", 15), Top("Ginger ale")]),
  D("pisco-punch", "Pisco Punch", "皮斯科潘趣", "pisco", "punch", "punch", ["pineapple", "citrus", "fruity", "bright"], "medium", "medium", "shaken", "punch", "classic", "balanced", [R("Pisco", 60), R("Pineapple syrup", 30), R("Fresh lemon juice", 22.5), R("Water", 30)]),
  D("algarrobina", "Algarrobina", "阿尔加罗比纳", "pisco", "dessert", "creamy", ["creamy", "spicy", "dessert", "rich"], "medium", "full", "creamy", "up", "classic", "adventurous", [R("Pisco", 45), R("Algarrobina syrup", 30), R("Evaporated milk", 30), R("Simple syrup", 15), Whole("Egg yolk")], { garnish: "肉桂粉" }),
  D("el-capitan", "El Capitan", "船长", "pisco", "stirred", "manhattan", ["winey", "spirit-forward", "rich", "herbal"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("Pisco", 45), R("Sweet vermouth", 45), Dash("Angostura bitters", 2)]),
  D("cognac-french-75", "Cognac French 75", "干邑法兰西 75", "cognac", "sparkling", "sparkling sour", ["citrus", "fizzy", "rich", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Cognac", 30), R("Fresh lemon juice", 15), R("Simple syrup", 15), Top("Champagne")]),
  D("horses-neck", "Horse's Neck", "马颈", "brandy", "highball", "highball", ["ginger", "fizzy", "refreshing", "spirit-forward"], "low", "light", "built", "highball", "classic", "safe", [R("Brandy", 45), Top("Ginger ale"), Dash("Angostura bitters", 2)], { garnish: "长柠檬皮" }),
  D("widows-kiss", "Widow's Kiss", "寡妇之吻", "brandy", "stirred", "herbal", ["herbal", "apple", "rich", "complex"], "strong", "full", "stirred", "up", "obscure", "adventurous", [R("Calvados", 45), R("Yellow Chartreuse", 22.5), R("Benedictine", 22.5), Dash("Angostura bitters", 2)]),
  D("honeymoon", "Honeymoon", "蜜月", "brandy", "sour", "apple brandy sour", ["apple", "citrus", "herbal", "bright"], "medium", "medium", "shaken", "up", "classic", "balanced", [R("Apple brandy", 60), R("Benedictine", 15), R("Orange curacao", 15), R("Fresh lemon juice", 15)]),
  D("star-cocktail", "Star Cocktail", "星星鸡尾酒", "brandy", "stirred", "manhattan", ["apple", "winey", "rich", "spirit-forward"], "strong", "medium", "stirred", "up", "classic", "balanced", [R("Apple brandy", 45), R("Sweet vermouth", 45), Dash("Angostura bitters", 2)]),
  D("brandy-sour", "Brandy Sour", "白兰地酸", "brandy", "sour", "sour", ["citrus", "rich", "bright", "tart"], "medium", "medium", "shaken", "rocks", "classic", "safe", [R("Brandy", 60), R("Fresh lemon juice", 22.5), R("Simple syrup", 22.5), Dash("Angostura bitters", 2)]),
  D("champs-elysees", "Champs-Elysees", "香榭丽舍", "cognac", "sour", "herbal sour", ["herbal", "citrus", "rich", "complex"], "medium", "medium", "shaken", "up", "classic", "adventurous", [R("Cognac", 45), R("Green Chartreuse", 15), R("Fresh lemon juice", 22.5), R("Simple syrup", 7.5), Dash("Angostura bitters", 2)]),
  D("chicago", "Chicago", "芝加哥", "brandy", "sparkling", "sparkling classic", ["rich", "fizzy", "bittersweet", "spirit-forward"], "medium", "medium", "stirred", "up", "classic", "balanced", [R("Brandy", 45), R("Triple sec", 5), Dash("Angostura bitters", 2), Top("Champagne")]),
  D("east-india-cocktail", "East India Cocktail", "东印度鸡尾酒", "brandy", "stirred", "classic", ["pineapple", "orange", "rich", "spirit-forward"], "strong", "medium", "shaken", "up", "classic", "balanced", [R("Cognac", 60), R("Pineapple syrup", 15), R("Orange curacao", 7.5), Dash("Angostura bitters", 2)]),
  D("porto-flip", "Porto Flip", "波特 Flip", "brandy", "dessert", "flip", ["winey", "creamy", "rich", "dessert"], "medium", "full", "creamy", "up", "classic", "adventurous", [R("Brandy", 15), R("Ruby port", 45), Whole("Egg yolk"), R("Simple syrup", 7.5)], { garnish: "肉豆蔻" }),

  D("americano", "Americano", "美式开胃酒", "amaro", "aperitif", "bitter aperitif", ["bitter", "fizzy", "light", "aperitif"], "low", "light", "fizzy", "highball", "classic", "safe", [R("Campari", 45), R("Sweet vermouth", 45), Top("Soda water")], { garnish: "橙片" }),
  D("aperol-spritz", "Aperol Spritz", "阿佩罗气泡酒", "amaro", "spritz", "spritz", ["bittersweet", "orange", "fizzy", "light"], "low", "light", "fizzy", "spritz", "familiar", "safe", [R("Aperol", 60), R("Prosecco", 90), R("Soda water", 30)], { garnish: "橙片" }),
  D("campari-soda", "Campari Soda", "金巴利苏打", "amaro", "aperitif", "highball", ["bitter", "fizzy", "dry", "refreshing"], "low", "light", "fizzy", "highball", "classic", "safe", [R("Campari", 60), Top("Soda water")], { garnish: "橙片" }),
  D("negroni-sbagliato", "Negroni Sbagliato", "错版尼格罗尼", "amaro", "spritz", "bitter aperitif", ["bitter", "fizzy", "winey", "aperitif"], "low", "medium", "fizzy", "spritz", "classic", "safe", [R("Campari", 30), R("Sweet vermouth", 30), Top("Prosecco")], { garnish: "橙片" }),
  D("hugo-spritz", "Hugo Spritz", "雨果 Spritz", "liqueur", "spritz", "spritz", ["floral", "mint", "fizzy", "light"], "low", "light", "fizzy", "spritz", "modern-classic", "safe", [R("Elderflower liqueur", 30), R("Prosecco", 90), R("Soda water", 30), Leaf("Mint", 6)]),
  D("cynar-spritz", "Cynar Spritz", "西娜尔 Spritz", "amaro", "spritz", "spritz", ["bitter", "herbal", "fizzy", "earthy"], "low", "medium", "fizzy", "spritz", "modern-classic", "balanced", [R("Cynar", 60), R("Prosecco", 90), R("Soda water", 30)], { garnish: "橙片" }),
  D("kir", "Kir", "基尔", "champagne", "aperitif", "wine cocktail", ["berry", "winey", "light", "fruity"], "low", "light", "built", "long", "classic", "safe", [R("Creme de cassis", 15), Top("Dry white wine")]),
  D("kir-royale", "Kir Royale", "皇家基尔", "champagne", "sparkling", "wine cocktail", ["berry", "fizzy", "light", "elegant"], "low", "light", "fizzy", "spritz", "classic", "safe", [R("Creme de cassis", 15), Top("Champagne")]),
  D("bellini", "Bellini", "贝里尼", "champagne", "sparkling", "sparkling", ["peach", "fizzy", "light", "fruity"], "low", "light", "fizzy", "spritz", "familiar", "safe", [R("White peach puree", 45), Top("Prosecco")]),
  D("mimosa", "Mimosa", "含羞草", "champagne", "sparkling", "sparkling", ["orange", "fizzy", "light", "refreshing"], "low", "light", "fizzy", "spritz", "familiar", "safe", [R("Orange juice", 60), Top("Champagne")]),
  D("champagne-cocktail", "Champagne Cocktail", "香槟鸡尾酒", "champagne", "sparkling", "sparkling", ["fizzy", "bittersweet", "elegant", "light"], "low", "light", "fizzy", "up", "classic", "safe", [R("Sugar cube", 1, "whole"), Dash("Angostura bitters", 2), Top("Champagne"), R("Cognac", 10)], { garnish: "柠檬皮" }),
  D("black-velvet", "Black Velvet", "黑天鹅绒", "champagne", "sparkling", "beer cocktail", ["fizzy", "rich", "dry", "malty"], "low", "medium", "built", "long", "classic", "balanced", [R("Stout", 90), R("Champagne", 90)]),
  D("death-in-the-afternoon", "Death in the Afternoon", "午后之死", "champagne", "sparkling", "sparkling", ["anise", "fizzy", "dry", "herbal"], "medium", "light", "built", "up", "classic", "adventurous", [R("Absinthe", 30), Top("Champagne")]),
  D("adonis", "Adonis", "阿多尼斯", "vermouth", "aperitif", "sherry vermouth", ["winey", "dry", "nutty", "light"], "low", "light", "stirred", "up", "classic", "balanced", [R("Fino sherry", 45), R("Sweet vermouth", 45), Dash("Orange bitters", 2)]),
  D("bamboo", "Bamboo", "竹子", "vermouth", "aperitif", "sherry vermouth", ["dry", "winey", "nutty", "light"], "low", "light", "stirred", "up", "classic", "balanced", [R("Fino sherry", 45), R("Dry vermouth", 45), Dash("Orange bitters", 2), Dash("Angostura bitters", 1)]),
  D("sherry-cobbler", "Sherry Cobbler", "雪莉 Cobbler", "vermouth", "aperitif", "cobbler", ["winey", "orange", "refreshing", "light"], "low", "light", "crushed ice", "long", "classic", "safe", [R("Amontillado sherry", 90), R("Simple syrup", 15), R("Orange wheels", 2, "slices")], { garnish: "时令水果" }),
  D("garibaldi", "Garibaldi", "加里波第", "amaro", "aperitif", "highball", ["bitter", "orange", "refreshing", "light"], "low", "light", "built", "highball", "classic", "safe", [R("Campari", 45), Top("Fresh orange juice")], { garnish: "橙片" }),
  D("fernet-con-coca", "Fernet con Coca", "菲奈特可乐", "amaro", "highball", "highball", ["bitter", "cola", "herbal", "fizzy"], "low", "medium", "built", "highball", "modern-classic", "adventurous", [R("Fernet-Branca", 45), Top("Cola")]),
  D("amaro-sour", "Amaro Sour", "阿玛罗酸", "amaro", "sour", "sour", ["bitter", "herbal", "citrus", "creamy"], "medium", "medium", "shaken", "up", "modern-classic", "balanced", [R("Amaro", 60), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), Whole("Egg white")]),
  D("amaretto-sour", "Amaretto Sour", "杏仁利口酒酸", "liqueur", "sour", "sour", ["almond", "citrus", "sweet", "creamy"], "low", "medium", "shaken", "rocks", "familiar", "safe", [R("Amaretto", 45), R("Bourbon whiskey", 22.5), R("Fresh lemon juice", 30), R("Simple syrup", 7.5), Whole("Egg white")]),
  D("golden-cadillac", "Golden Cadillac", "金色凯迪拉克", "liqueur", "dessert", "creamy", ["creamy", "chocolate", "herbal", "dessert"], "low", "full", "creamy", "up", "classic", "safe", [R("Galliano", 30), R("White creme de cacao", 30), R("Cream", 30)], { garnish: "肉豆蔻" }),
  D("grasshopper", "Grasshopper", "蚱蜢", "liqueur", "dessert", "creamy", ["mint", "chocolate", "creamy", "dessert"], "low", "full", "creamy", "up", "classic", "safe", [R("Creme de menthe", 30), R("Creme de cacao", 30), R("Cream", 30)], { garnish: "薄荷叶或巧克力碎" }),
  D("alexander", "Alexander", "亚历山大", "liqueur", "dessert", "creamy", ["creamy", "chocolate", "botanical", "dessert"], "medium", "full", "creamy", "up", "classic", "balanced", [R("Gin", 30), R("White creme de cacao", 30), R("Cream", 30)], { garnish: "肉豆蔻" }),
  D("ports-of-call", "Port of Call", "停靠港", "amaro", "modern-classic", "amaro sour", ["bitter", "ginger", "citrus", "refreshing"], "medium", "medium", "shaken", "rocks", "modern-classic", "balanced", [R("Averna", 45), R("Fresh lemon juice", 22.5), R("Ginger syrup", 15), R("Apple brandy", 15)]),
  D("paper-cup", "Paper Cup", "纸杯", "amaro", "sour", "amaro sour", ["bitter", "citrus", "bright", "herbal"], "medium", "medium", "shaken", "up", "obscure", "adventurous", [R("Aperol", 30), R("Amaro", 30), R("Fresh lemon juice", 22.5), R("Simple syrup", 15)], { descriptionZh: "一杯较小众的现代阿玛罗酸，偏苦、明亮、草本感明显，适合想试一点 bartender 世界里冷门方向的时候。" }),
  D("bicicletta", "Bicicletta", "自行车", "amaro", "spritz", "spritz", ["bitter", "winey", "fizzy", "light"], "low", "light", "fizzy", "spritz", "classic", "safe", [R("Campari", 45), R("Dry white wine", 90), Top("Soda water")]),
  D("chrysanthemum", "Chrysanthemum", "菊花", "vermouth", "aperitif", "vermouth", ["dry", "herbal", "anise", "winey"], "low", "light", "stirred", "up", "classic", "adventurous", [R("Dry vermouth", 60), R("Benedictine", 22.5), R("Absinthe", 2.5)]),
  D("coronation", "Coronation", "加冕", "vermouth", "aperitif", "sherry vermouth", ["dry", "nutty", "fruity", "winey"], "low", "light", "stirred", "up", "classic", "adventurous", [R("Fino sherry", 45), R("Dry vermouth", 45), R("Maraschino liqueur", 5), Dash("Orange bitters", 2)]),
  D("duke-on-sunday", "Duke on Sunday", "周日公爵", "vermouth", "spritz", "low abv", ["citrus", "winey", "fizzy", "light"], "low", "light", "fizzy", "spritz", "modern-classic", "safe", [R("Lillet Blanc", 60), R("Fresh grapefruit juice", 30), Top("Soda water")]),
  D("queen-mary", "Queen Mary", "玛丽女王", "champagne", "sparkling", "sparkling", ["berry", "fizzy", "light", "elegant"], "low", "light", "built", "up", "classic", "safe", [R("Creme de cassis", 15), R("Brandy", 15), Top("Champagne")]),
  D("rossini", "Rossini", "罗西尼", "champagne", "sparkling", "sparkling", ["berry", "fizzy", "fruity", "light"], "low", "light", "fizzy", "spritz", "classic", "safe", [R("Strawberry puree", 45), Top("Prosecco")]),
  D("puccini", "Puccini", "普契尼", "champagne", "sparkling", "sparkling", ["orange", "fizzy", "fruity", "light"], "low", "light", "fizzy", "spritz", "classic", "safe", [R("Mandarin orange juice", 45), Top("Prosecco")]),
  D("cardinale", "Cardinale", "红衣主教", "gin", "aperitif", "bitter aperitif", ["bitter", "dry", "spirit-forward", "herbal"], "strong", "medium", "stirred", "rocks", "classic", "adventurous", [R("Gin", 45), R("Campari", 22.5), R("Dry vermouth", 22.5)]),
  D("enzoni", "Enzoni", "恩佐尼", "gin", "modern-classic", "bitter sour", ["bitter", "grape", "citrus", "refreshing"], "medium", "medium", "shaken", "rocks", "modern-classic", "balanced", [R("Gin", 30), R("Campari", 30), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), R("Green grapes", 5, "whole")], { garnish: "葡萄" }),
  D("caipirinha", "Caipirinha", "凯匹林纳", "cachaca", "sour", "cane-spirit sour", ["citrus", "earthy", "refreshing", "bright"], "medium", "light", "built", "rocks", "familiar", "safe", [R("Cachaça", 60), Wedge("Lime", 4), R("Sugar", 2, "tsp")]),
  D("rabo-de-galo", "Rabo de Galo", "公鸡尾", "cachaca", "stirred", "bitter aperitif", ["bitter", "earthy", "herbal", "spirit-forward"], "strong", "medium", "stirred", "rocks", "obscure", "adventurous", [R("Cachaça", 45), R("Sweet vermouth", 30), R("Cynar", 15)]),
  D("batida", "Batida", "巴蒂达", "cachaca", "tropical", "creamy tropical", ["tropical", "creamy", "citrus", "sweet"], "medium", "full", "shaken", "rocks", "classic", "balanced", [R("Cachaça", 60), R("Passion fruit juice", 45), R("Coconut milk", 30), R("Simple syrup", 15)]),
  D("cachaca-sour", "Cachaça Sour", "卡沙萨酸", "cachaca", "sour", "sour", ["citrus", "tart", "refreshing", "bright"], "medium", "medium", "shaken", "rocks", "obscure", "balanced", [R("Cachaça", 60), R("Fresh lime juice", 22.5), R("Simple syrup", 22.5), Whole("Egg white")], { garnish: "苦精点缀或青柠片" }),
  D("cachaca-collins", "Cachaça Collins", "卡沙萨柯林斯", "cachaca", "highball", "collins", ["citrus", "refreshing", "fizzy", "bright"], "medium", "light", "fizzy", "highball", "obscure", "balanced", [R("Cachaça", 60), R("Fresh lemon juice", 22.5), R("Simple syrup", 15), Top("Soda water")], { glassware: "Highball 杯", garnish: "柠檬片", methodZh: "将卡沙萨、柠檬汁和糖浆加冰摇和，倒入装冰 highball 杯，补满苏打水后轻搅。" }),
  D("cachaca-mule", "Cachaça Mule", "卡沙萨骡子", "cachaca", "highball", "mule", ["ginger", "citrus", "refreshing", "fizzy"], "low", "light", "fizzy", "highball", "modern-classic", "safe", [R("Cachaça", 45), R("Fresh lime juice", 15), Top("Ginger beer")], { glassware: "铜杯或 highball 杯", garnish: "青柠片" }),
  D("cachaca-old-fashioned", "Cachaça Old Fashioned", "卡沙萨古典", "cachaca", "stirred", "old fashioned", ["earthy", "spirit-forward", "bittersweet", "rich"], "strong", "medium", "built", "rocks", "modern-classic", "balanced", [R("Cachaça", 60), R("Demerara syrup", 7.5), Dash("Angostura bitters", 2), Dash("Orange bitters", 1)], { garnish: "橙皮" }),
  D("cachaca-negroni", "Cachaça Negroni", "卡沙萨尼格罗尼", "cachaca", "aperitif", "bitter aperitif", ["bitter", "herbal", "earthy", "spirit-forward"], "strong", "medium-full", "stirred", "rocks", "modern-classic", "adventurous", [R("Cachaça", 30), R("Campari", 30), R("Sweet vermouth", 30)], { garnish: "橙皮" }),
  D("cachaca-spritz", "Cachaça Spritz", "卡沙萨 Spritz", "cachaca", "spritz", "spritz", ["citrus", "fizzy", "refreshing", "light"], "low", "light", "fizzy", "spritz", "obscure", "balanced", [R("Cachaça", 45), R("Aperol", 30), R("Fresh lime juice", 15), Top("Sparkling wine")], { glassware: "Wine 杯", garnish: "橙片或青柠片" }),
  D("batida-de-coco", "Batida de Coco", "椰子巴蒂达", "cachaca", "tropical", "creamy tropical", ["coconut", "creamy", "tropical", "sweet"], "medium", "full", "creamy", "rocks", "classic", "balanced", [R("Cachaça", 60), R("Coconut milk", 45), R("Condensed milk", 30), R("Fresh lime juice", 10)], { garnish: "肉豆蔻或椰丝", methodZh: "加冰充分摇和，过滤入装冰 rocks 杯；也可以按巴西酒吧常见做法轻微搅打，做成更顺滑的版本。" }),
  D("batida-de-maracuja", "Batida de Maracujá", "百香果巴蒂达", "cachaca", "tropical", "creamy tropical", ["passionfruit", "tropical", "creamy", "citrus"], "medium", "full", "creamy", "rocks", "classic", "balanced", [R("Cachaça", 60), R("Passion fruit juice", 60), R("Condensed milk", 25), R("Fresh lime juice", 10)], { garnish: "百香果或青柠片", methodZh: "加冰充分摇和，过滤入装冰 rocks 杯；不同地区甜度差异较大，可按口味调整炼乳比例。" }),
  D("macunaima", "Macunaíma", "马库奈玛", "cachaca", "sour", "bitter sour", ["bitter", "herbal", "citrus", "earthy"], "medium", "medium", "shaken", "up", "modern-classic", "adventurous", [R("Cachaça", 45), R("Fernet-Branca", 15), R("Fresh lime juice", 22.5), R("Simple syrup", 15)], { garnish: "无装饰或青柠皮", descriptionZh: "一杯巴西现代经典方向的卡沙萨酸，Fernet 带来草本苦味，青柠让结构保持明亮。" }),
  D("quentao", "Quentão", "昆唐", "cachaca", "classic", "hot drink", ["ginger", "spicy", "warming", "citrus"], "low", "medium", "built", "long", "obscure", "adventurous", [R("Cachaça", 45), R("Ginger syrup", 20), R("Fresh lime juice", 10), R("Hot water", 90), Dash("Aromatic bitters", 2)], { glassware: "耐热杯", garnish: "肉桂或青柠片", methodZh: "在耐热杯中加入卡沙萨、姜糖浆、青柠汁和热水，轻轻搅拌。Quentão 地区版本很多，这里采用适合吧台执行的简化热饮结构。", bartenderPhraseZh: "我想要一杯以卡沙萨为基底、带姜味和辛香、温暖但不要太甜的热饮。" }),
];

const curatedSimilarDrinkIds = {
  "mai-tai": ["daiquiri", "navy-grog", "zombie", "jet-pilot", "three-dots-and-a-dash"],
  "suffering-bastard": ["dark-n-stormy", "horses-neck", "moscow-mule", "mezcal-mule", "chilcano"],
  "brandy-crusta": ["sidecar", "brandy-sour", "champs-elysees", "east-india-cocktail"],
  "japanese-cocktail": ["french-connection", "east-india-cocktail", "champs-elysees", "metropolitan"],
  "pisco-sour": ["brandy-sour", "whiskey-sour", "sidecar", "daiquiri", "tequila-sour"],
  "honeymoon": ["jack-rose", "sidecar", "champs-elysees", "brandy-crusta", "star-cocktail"],
  "champs-elysees": ["sidecar", "brandy-crusta", "last-word", "bijou", "honeymoon"],
  "death-in-the-afternoon": ["champagne-cocktail", "chrysanthemum", "queen-mary", "kir-royale"],
  "caipirinha": ["cachaca-sour", "macunaima", "ti-punch", "daiquiri", "cachaca-collins"],
  "batida": ["batida-de-coco", "batida-de-maracuja", "pina-colada", "painkiller", "trade-winds"],
  "rabo-de-galo": ["cachaca-negroni", "negroni", "boulevardier", "toronto", "rosita"],
  "cachaca-sour": ["caipirinha", "macunaima", "daiquiri", "brandy-sour", "cachaca-collins"],
  "cachaca-collins": ["caipirinha", "cachaca-mule", "tom-collins", "gin-fizz", "daiquiri"],
  "cachaca-mule": ["cachaca-collins", "moscow-mule", "mezcal-mule", "dark-n-stormy", "caipirinha"],
  "cachaca-old-fashioned": ["cachaca-negroni", "rabo-de-galo", "rum-old-fashioned", "tequila-old-fashioned", "old-fashioned"],
  "cachaca-negroni": ["rabo-de-galo", "negroni", "boulevardier", "mezcal-negroni", "cachaca-old-fashioned"],
  "cachaca-spritz": ["cachaca-collins", "aperol-spritz", "cynar-spritz", "bicicletta", "caipirinha"],
  "batida-de-coco": ["batida", "batida-de-maracuja", "pina-colada", "painkiller", "grasshopper"],
  "batida-de-maracuja": ["batida", "batida-de-coco", "pina-colada", "trade-winds", "hurricane"],
  "macunaima": ["cachaca-sour", "caipirinha", "paper-cup", "amaro-sour", "last-word"],
  "quentao": ["hot-toddy", "irish-coffee", "gold-rush", "cachaca-mule"],
  "hot-toddy": ["gold-rush", "whiskey-smash", "lions-tail", "penicillin"],
  "irish-coffee": ["white-russian", "black-russian", "espresso-martini", "brandy-alexander", "alexander"],
  "blue-hawaii": ["pina-colada", "painkiller", "hurricane", "mai-tai"],
  "ports-of-call": ["amaro-sour", "paper-cup", "paper-plane", "cynar-spritz"],
  "corn-n-oil": ["rum-old-fashioned", "ti-punch", "el-presidente", "old-fashioned"],
  "black-velvet": ["champagne-cocktail", "queen-mary", "kir-royale", "chicago"],
  "bloody-mary": ["salty-dog", "moscow-mule", "suffering-bastard", "horses-neck"],
  "white-russian": ["black-russian", "espresso-martini", "brandy-alexander", "grasshopper"],
  "apple-martini": ["cosmopolitan", "french-martini", "lemon-drop", "vodka-gimlet"],
  "espresso-martini": ["black-russian", "white-russian", "irish-coffee", "revolver"],
  "la-perla": ["tequila-old-fashioned", "rosita", "oaxacan-old-fashioned", "tequila-sour"],
  "mary-pickford": ["hotel-nacional", "floridita-daiquiri", "daiquiri", "barracuda"],
};

function makeDescription(drink) {
  const labels = drink.flavorLabelsZh.slice(0, 3).join("、");
  const base = baseSpiritZh[drink.baseSpirit] || drink.baseSpirit;
  const style = categoryZh[drink.category] || "经典";
  const tone = {
    safe: "方向清晰、容易接受",
    balanced: "熟悉中带一点探索",
    adventurous: "更有个性，也更适合想试新东西的时候",
  }[drink.riskLevel];

  return `一杯以${base}为主要线索的${style}鸡尾酒，风味偏${labels}，整体${tone}。`;
}

function makeBartenderPhrase(drink) {
  const base = baseSpiritZh[drink.baseSpirit] || drink.baseSpirit;
  const labels = [
    ...new Set(
      drink.flavorLabelsZh.filter((label) => !["微甜", "层次丰富"].includes(label))
    ),
  ].slice(0, 4);
  const strength = {
    low: "酒感偏低",
    medium: "酒感中等",
    strong: "酒体偏强",
  }[drink.strength];
  const parts = [...labels];
  if (strength && !parts.includes(strength)) parts.push(strength);

  return `我想要一杯以${base}为基底、${parts.join("、")}的鸡尾酒。`;
}

function inferGlassware(drink) {
  if (drink.glassware) return drink.glassware;
  if (drink.format && formatDefaults[drink.format]) return formatDefaults[drink.format].glassware;
  if (drink.texture === "stirred") return "Coupe 杯或 rocks 杯";
  if (drink.texture === "fizzy") return "Highball 杯";
  return "Coupe 杯";
}

function inferMethod(drink) {
  if (drink.methodZh) return drink.methodZh;
  if (drink.format && formatDefaults[drink.format]) return formatDefaults[drink.format].method;
  return textureMethod[drink.texture] || "按经典做法加冰调和，过滤或倒入合适杯型。";
}

function normalizeCocktail(drink) {
  const flavorLabelsZh = drink.flavorLabelsZh || drink.flavors.map((tag) => flavorZh[tag] || tag);

  return {
    id: drink.id,
    name: drink.name,
    chineseName: drink.chineseName || drink.name,
    baseSpirit: drink.baseSpirit,
    family: drink.family,
    category: drink.category,
    flavors: drink.flavors,
    flavorLabelsZh,
    strength: drink.strength,
    body: drink.body,
    texture: drink.texture,
    format: drink.format,
    classicLevel: drink.classicLevel,
    riskLevel: drink.riskLevel,
    descriptionZh: drink.descriptionZh || makeDescription({ ...drink, flavorLabelsZh }),
    recipe: drink.recipe,
    methodZh: inferMethod(drink),
    glassware: inferGlassware(drink),
    garnish: drink.garnish || garnishDefaults[drink.baseSpirit] || "柑橘皮",
    bartenderPhraseZh: drink.bartenderPhraseZh || makeBartenderPhrase({ ...drink, flavorLabelsZh }),
    similarDrinkIds: drink.similarDrinkIds || curatedSimilarDrinkIds[drink.id] || [],
  };
}

function hydrateSimilarDrinks(drinks) {
  const ids = new Set(drinks.map((drink) => drink.id));

  return drinks.map((drink) => {
    const curated = (drink.similarDrinkIds || [])
      .filter((id) => id !== drink.id && ids.has(id))
      .slice(0, 5);
    const ranked = drinks
      .filter((candidate) => candidate.id !== drink.id && !curated.includes(candidate.id))
      .map((candidate) => {
        let score = 0;
        if (candidate.family === drink.family) score += 8;
        if (candidate.category === drink.category) score += 4;
        if (candidate.baseSpirit === drink.baseSpirit) {
          score += 6;
        } else if (baseSpiritFamilies[drink.baseSpirit]?.includes(candidate.baseSpirit)) {
          score += 3;
        }
        if (candidate.texture === drink.texture) score += 2;
        if (candidate.format === drink.format) score += 2;
        if (candidate.strength === drink.strength) score += 1;
        score += candidate.flavors.filter((tag) => drink.flavors.includes(tag)).length * 2;
        return { id: candidate.id, score };
      })
      .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
      .slice(0, Math.max(0, 4 - curated.length))
      .map((item) => item.id);

    return { ...drink, similarDrinkIds: [...curated, ...ranked] };
  });
}

export const cocktails = hydrateSimilarDrinks(rawCocktails.map(normalizeCocktail));
export const cocktailsById = Object.fromEntries(cocktails.map((cocktail) => [cocktail.id, cocktail]));
export const baseSpiritZhLabels = baseSpiritZh;
export const flavorZhLabels = flavorZh;
