import type { Article, Recipe, Video } from '@/types';

export const articles: Article[] = [
  {
    slug: 'alpilles',
    title: 'The Beauty of Les Alpilles',
    excerpt:
      'The rugged charm of the Alpilles mountains, the olive groves, and the hidden villages that make Provence so magical.',
    content: `<p>Welcome to the countryside. In this first article, I'll take you through the rugged charm of the Alpilles mountains, the olive groves, and the hidden villages that make Provence so magical.</p>
<p>The Alpilles are a small limestone range that rise from the Crau plain like the spine of some ancient beast. They are not tall mountains — the highest point barely reaches 498 metres — but their presence is enormous. The white rock glares in the summer heat, and in winter they take on a pewter colour that makes the whole landscape look like an old engraving.</p>
<h2>The Olive Groves</h2>
<p>What makes the Alpilles special is not the rock but what grows around it. Ancient olive trees, twisted by centuries of mistral wind, cling to the hillsides. Some of these trees are over a thousand years old. They were here before the Crusaders passed through, before the Popes fled to Avignon, before everything we call history in this region.</p>
<p>In autumn, the olives ripen from green to black, and the harvest begins. Families come together to beat the branches with long poles, catching the fruit in nets spread below. The oil pressed from Alpilles olives has a distinctive peppery bite that catches the back of the throat — the hallmark of great Provençal olive oil.</p>
<h2>The Hidden Villages</h2>
<p>Les Baux-de-Provence clings to the cliffs of the Alpilles like an eagle's nest. In the Middle Ages it was a powerful lordship, home to troubadours and poets. Now it is a village of honey-coloured stone and breathtaking views. Come in September, before the crowds thin out completely, and you can still feel the weight of history in the narrow streets.</p>`,
    image: '/images/hero-alpilles.jpg',
    date: '2025-03-15',
    category: 'Provence',
    marcelTip: 'The best time to visit Les Alpilles is early morning, before the heat and the tourists arrive. Bring good shoes and a flask of something cold.',
    marcelType: 'default',
  },
  {
    slug: 'springtime-in-provence',
    title: 'Springtime in Provence: A New Beginning',
    excerpt:
      'As the chill of winter fades, Provence awakens once more — wildflowers, birdsong, and the first work in the potager.',
    content: `<p>As the chill of winter fades, Provence awakens once more. The plane trees unfurl their fresh green leaves, and wildflowers sprinkle vibrant colors across the countryside. The air is filled with birdsong, and the world feels reborn — a beautiful reminder that life always returns.</p>
<p>With spring also comes a lot of hard work. It is time to prepare the potager for the new growing season. Last Saturday, we visited the local market to select young plants for our garden. This year, we're planting tomatoes, aubergines, peppers, chillis, and an abundance of salads.</p>
<h2>The Potager</h2>
<p>A Provençal potager is not just a vegetable garden. It is a statement of intent. You are saying: I belong here. I will tend this soil. I will eat what this ground gives me. There is something deeply satisfying about pulling a tomato from a plant you have watered every day since May.</p>
<p>We'll use the 1st of May, a public holiday in France, to get everything into the ground and officially start our new season. We look forward to homegrown tomatoes and crisp salads under the Provençal sun!</p>`,
    image: '/images/hero-spring.jpg',
    date: '2025-04-29',
    category: 'Provence',
    marcelTip: 'Plant your tomatoes after the Ice Saints — les Saints de Glace — in mid-May. The old farmers are right about this. Do not rush the tomatoes.',
    marcelType: 'gardener',
  },
  {
    slug: 'petanque',
    title: 'Pétanque: The Soul of the Village Square',
    excerpt: 'In the shade of the plane trees, on a dusty court, pétanque continues as it has for generations — unhurried, argumentative, and deeply French.',
    content: `<p>Every village in Provence has a terrain de pétanque. It is usually in the shade of a row of plane trees, on bare, packed earth, somewhere near the bar. On summer evenings, you will find men of all ages here — though increasingly women too — playing the game that has defined French rural leisure for more than a century.</p>
<p>Pétanque looks deceptively simple. Each player throws metal boules — heavy, satisfying spheres that clank together with a sound unlike any other — trying to land them as close as possible to the cochonnet, a small wooden jack. The team whose boules are closest when all have been thrown scores points. First to thirteen wins.</p>
<img src="/images/petanque-1.jpg" alt="Pétanque in Provence" style="width:100%;border-radius:2px;margin:2rem 0;" />
<h2>A Brief History</h2>
<p>The game was formalised in La Ciotat, near Marseille, in 1907. Legend has it that a player with rheumatism could no longer take the running steps that the earlier game required, so the rules were adapted to allow throwing from a stationary position — les pieds tanqués, feet planted. From that adaptation, the name pétanque was born.</p>
<p>But the roots go deeper. Boule games have been played across the Mediterranean since Greek and Roman times. The Provençal version simply refined and codified what rural communities had been doing for centuries — throwing things at other things, arguing about how close they were.</p>
<h2>The Ritual</h2>
<p>To watch a game of pétanque properly, you must understand that the game is as much about conversation as it is about boules. Every throw is debated. Every measurement is contested. The <em>baguette</em> — a small metal ruler used to settle disputes about distances — is produced with great ceremony and no small amount of theatre.</p>
<p>The best players have a repertoire of shots. The <em>pointer</em> rolls the boule gently towards the cochonnet. The <em>tirer</em> — or <em>shooter</em> — throws hard to knock an opponent's boule away. A perfectly executed shot that sends an opponent's boule flying while leaving your own in its place is called a <em>carreau</em>, and it is greeted with the kind of applause normally reserved for great sporting moments.</p>
<img src="/images/petanque-2.jpg" alt="Pétanque players in the village square" style="width:100%;border-radius:2px;margin:2rem 0;" />
<h2>Come and Play</h2>
<p>If you are in Provence and want to join a game, the etiquette is simple: watch for a few minutes, ask politely if you may join, and accept whatever side they put you on. Bring something to drink, because the game will last as long as the light holds. And do not argue too much about distances — that privilege is earned over years.</p>`,
    image: '/images/petanque-1.jpg',
    date: '2026-02-20',
    category: 'Traditions',
    marcelTip: 'Stand still when you throw. Les pieds tanqués — both feet on the ground. Move your feet and everyone will notice, and nobody will let you forget it.',
    marcelType: 'petanque',
  },
  {
    slug: 'wild-boar-hunting-season',
    title: 'Wild Boar Season in the Var',
    excerpt:
      'When September arrives, the hunters emerge. The sanglier season in the Var is a serious business — and a serious pleasure.',
    content: `<p>There is a particular quality to a September morning in the Var. The air is still warm from summer but carries a hint of something different — a dryness, a crispness that puts the dogs on edge. The hunters notice it too. The season is beginning.</p>
<p>Wild boar — sanglier — are the great quarry of the Provençal hunter. They are intelligent, powerful, and destructive. Farmers curse them for uprooting fields overnight. Hunters revere them for exactly the same qualities. There is nothing easy about a boar hunt.</p>
<h2>La Battue</h2>
<p>The traditional hunt is the battue — a driven hunt where beaters move through the garrigue pushing the game towards waiting hunters. Every village in the Var has its own société de chasse, its hunting society, with strict rules about membership, territory, and conduct.</p>
<p>The hunt begins before dawn. Strong coffee is poured into thermoses. The dogs — Gascon Saintongeois hounds with their mournful eyes and extraordinary noses — are released. And then you wait, listening, watching the pale light grow between the pine trees.</p>`,
    image: '/images/hero-hunting.jpg',
    date: '2025-09-20',
    category: 'Hunting',
    marcelTip: 'Never wear blue while boar hunting. They cannot see red, but blue stands out to them in the forest. Trust the old hunters on this one.',
    marcelType: 'hunter',
  },
  {
    slug: 'les-baux-de-provence',
    title: 'Les Baux: The Eagle\'s Nest of Provence',
    excerpt:
      'Perched on white cliffs above the Alpilles, Les Baux-de-Provence is one of the most remarkable villages in France.',
    content: `<p>Les Baux-de-Provence is not a village you stumble upon. It is a village you approach with intention, following the narrow road that winds up through the limestone outcrops until suddenly the medieval citadel appears above you, almost impossible, clinging to the cliff edge as if the builders were defying gravity itself.</p>
<p>The village is classified among the Plus Beaux Villages de France — the most beautiful villages in France — and rightly so. Every stone here has a story. The lords of Les Baux were powerful and sometimes terrifying figures in medieval Provence, claiming descent from the Magi of the Nativity and using a star as their heraldic symbol.</p>
<h2>The Old Town</h2>
<p>Today the village is wonderfully preserved. The honey-coloured limestone buildings glow in the afternoon sun. Boutiques sell lavender sachets and olive oil. Restaurants serve tapenade and daube. But walk to the edge of the village, away from the main street, and you can find quieter corners where the history is still palpable.</p>`,
    image: '/images/hero-lesbaux.jpg',
    date: '2025-08-12',
    category: 'Provence',
    marcelTip: 'Visit Les Baux on a Tuesday morning in summer. The coach parties haven\'t arrived yet and you can actually hear the wind in the ruins.',
    marcelType: 'rose',
  },
  {
    slug: 'olive-harvest',
    title: 'The Olive Harvest: An Ancient Ritual',
    excerpt:
      'Every November, the ancient olive harvest connects us to thousands of years of Mediterranean civilisation.',
    content: `<p>November in Provence means one thing above all others: the olive harvest. For three or four weeks, depending on the weather and the variety, the nets come out, the families gather, and the ancient rhythm asserts itself.</p>
<p>Our olives are the Aglandau variety — the classic Alpilles olive, prized for its oil with that characteristic peppery finish. The trees are old, some of them dating back a century or more. They don't produce every year with the same generosity. A good year can yield fifty kilos of olives from a single tree. A bad year, after late frost or summer drought, gives you almost nothing.</p>
<h2>The Mill</h2>
<p>Within 24 hours of picking, the olives go to the moulin — the mill. Time is everything with olive oil. Oxidation begins the moment the olive is separated from the tree, and every hour matters. The cooperative mill at Fontvieille opens in October and runs continuously until January, processing olives for farmers across the region.</p>`,
    image: '/images/hero-olives.jpg',
    date: '2025-11-08',
    category: 'Provence',
    marcelTip: 'The oil you press on the first day of harvest is the freshest, greenest, most peppery oil you will ever taste. Do not cook with it — pour it straight on bread.',
    marcelType: 'gardener',
  },
];

export const recipes: Recipe[] = [
  {
    slug: 'sanglier-en-daube',
    title: 'Sanglier en Daube',
    excerpt: 'The great slow-cooked wild boar stew of Provence — rich, dark, and deeply satisfying.',
    image: '/images/recipe-sanglier.jpg',
    date: '2025-10-15',
    category: 'wild-game',
    servings: 6,
    prepTime: '30 min',
    cookTime: '3–4 hours',
    difficulty: 'Medium',
    ingredients: [
      '1.5 kg wild boar shoulder, cut into large chunks',
      '1 bottle of red wine (a sturdy Côtes du Rhône)',
      '200g lardons (smoked bacon pieces)',
      '3 carrots, roughly chopped',
      '2 onions, roughly chopped',
      '4 cloves of garlic',
      '2 sprigs of thyme',
      '2 bay leaves',
      '1 sprig of rosemary',
      'A handful of black olives',
      'Salt and pepper',
      'Olive oil',
      '2 tbsp tomato paste',
      '500ml beef stock',
    ],
    instructions: [
      'The day before: place the boar pieces in a large bowl with the wine, carrots, onions, garlic, thyme, bay leaves, and rosemary. Cover and marinate in the refrigerator for at least 12 hours.',
      'Remove the boar from the marinade. Pat dry with kitchen paper. Reserve the marinade and vegetables.',
      'Heat olive oil in a large, heavy casserole over high heat. Brown the boar pieces in batches — do not crowd the pan. This step is essential. Take your time.',
      'Remove the browned meat. Add the lardons and cook until crisp.',
      'Add the vegetables from the marinade and cook for 5 minutes until softened.',
      'Return the meat to the pot. Add the tomato paste and stir to coat everything.',
      'Pour in the reserved marinade and the stock. Bring to a gentle boil.',
      'Cover and cook on the lowest possible heat for 3 hours, or until the meat falls apart when pressed with a spoon.',
      'Add the black olives for the final 30 minutes.',
      'Adjust seasoning. Serve with tagliatelle or crusty bread and the rest of the bottle.',
    ],
    marcelTip: 'Brown the meat properly. If it does not smell amazing yet, you are doing it wrong. Patience here means everything later.',
    marcelType: 'cooking',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    slug: 'wild-boar-potjiekos',
    title: 'Wild Boar Potjiekos',
    excerpt: 'A Provençal take on the South African potjie — slow-cooked sanglier over open coals.',
    image: '/images/recipe-potjie.jpg',
    date: '2025-10-28',
    category: 'potjie',
    servings: 8,
    prepTime: '45 min',
    cookTime: '4 hours',
    difficulty: 'Medium',
    ingredients: [
      '2 kg wild boar, bone-in pieces',
      'Olive oil',
      '3 onions, sliced',
      '6 cloves garlic',
      '500g small potatoes',
      '3 carrots, cut into chunks',
      '2 courgettes, cut into chunks',
      '400g tinned tomatoes',
      '1 cup red wine',
      '2 cups stock',
      'Herbes de Provence',
      'Salt, pepper',
      '2 bay leaves',
    ],
    instructions: [
      'Light your fire and allow it to burn down to grey coals. You want steady, medium heat — not a blazing inferno.',
      'Heat olive oil in the potjie (cast iron pot). Brown the boar pieces in batches over the coals.',
      'Remove meat. Fry the onions and garlic until golden.',
      'Return meat to the pot. Add wine and let it reduce for 5 minutes.',
      'Add tomatoes, stock, herbs, salt and pepper.',
      'Layer potatoes and carrots on top of the meat. Do not stir — the potjie cooks in layers.',
      'Cover tightly and cook over the coals for 3 hours, adding a few coals when necessary to maintain steady heat.',
      'Add courgettes in the final 30 minutes.',
      'Taste and adjust seasoning. Serve directly from the pot.',
    ],
    marcelTip: 'Never lift the lid more than you need to. Every time you peek, you lose 15 minutes of cooking. Trust the process.',
    marcelType: 'cooking',
  },
  {
    slug: 'poulet-provencal',
    title: 'Poulet Rôti à la Provençale',
    excerpt: 'A classic roast chicken with all the herbs and flavours of the Provençal summer.',
    image: '/images/recipe-poulet.jpg',
    date: '2025-07-20',
    category: 'provencal',
    servings: 4,
    prepTime: '20 min',
    cookTime: '1h 20 min',
    difficulty: 'Easy',
    ingredients: [
      '1 whole free-range chicken (about 1.8 kg)',
      '1 lemon, halved',
      '4 cloves of garlic',
      '4 sprigs of thyme',
      '2 sprigs of rosemary',
      'Handful of black olives',
      '200g cherry tomatoes',
      '1 tbsp herbes de Provence',
      'Good olive oil',
      'Fleur de sel and black pepper',
    ],
    instructions: [
      'Preheat oven to 200°C.',
      'Rub the chicken inside and out with olive oil, salt, and herbes de Provence.',
      'Stuff the cavity with lemon halves, 2 garlic cloves, and a sprig each of thyme and rosemary.',
      'Place in a roasting dish. Scatter the tomatoes, olives, remaining garlic, and herbs around the chicken.',
      'Roast for 1 hour and 20 minutes, basting every 30 minutes with the pan juices.',
      'Rest for 15 minutes before carving. Serve with the pan juices poured over.',
    ],
    marcelTip: 'Buy the best chicken you can afford. A properly raised poulet fermier from the market will make this dish extraordinary. A supermarket bird will make it ordinary.',
    marcelType: 'cooking',
  },
  {
    slug: 'tapenade',
    title: 'Tapenade Maison',
    excerpt: 'The essential Provençal condiment — black olives, capers, and anchovies blended into something magnificent.',
    image: '/images/recipe-tapenade.jpg',
    date: '2025-06-10',
    category: 'provencal',
    servings: 8,
    prepTime: '15 min',
    cookTime: '0 min',
    difficulty: 'Easy',
    ingredients: [
      '200g good black olives, pitted (Nyons or Kalamata)',
      '2 tbsp capers, rinsed',
      '4 anchovy fillets',
      '1 clove of garlic',
      'Juice of half a lemon',
      '4–5 tbsp good olive oil',
      'Fresh thyme leaves',
      'Black pepper',
    ],
    instructions: [
      'Place olives, capers, anchovies, and garlic in a food processor.',
      'Pulse until roughly chopped — you want texture, not a smooth paste.',
      'Add lemon juice and olive oil and blend briefly.',
      'Season with pepper (it will not need salt — the anchovies and capers provide this).',
      'Transfer to a jar. Drizzle with a little extra oil on top.',
      'Refrigerate. It improves after a day. Serve on toast, with raw vegetables, or stirred through pasta.',
    ],
    marcelTip: 'Use good olives. The tapenade is only as good as its olives. Buy them from a market stall, not a tin.',
    marcelType: 'cooking',
  },
  {
    slug: 'daube-de-sanglier-provencale',
    title: 'Daube de Sanglier à la Provençale',
    excerpt: 'A classic Provençal wild boar daube — marinated for up to 48 hours, slow-cooked on the hearth, and even better the next day.',
    image: '/images/sanglier_daube.png',
    date: '2026-01-15',
    category: 'wild-game',
    servings: 8,
    prepTime: '45 min + 8–48 hours marinating',
    cookTime: '2–3 hours',
    difficulty: 'Medium',
    ingredients: [
      '2 kg wild boar meat (back strap, back leg, or shoulder), cubed into 3×3 cm pieces',
      '2 litres red wine',
      '3 carrots, roughly chopped',
      '2 onions, roughly chopped',
      '200g smoked or unsmoked bacon, cut into lardons',
      '1 bouquet garni (thyme, rosemary, bay leaf)',
      '5 cloves of garlic, or to taste',
      '2 ripe tomatoes (or canned in a pinch)',
      '200g black olives, preferably Greek style',
      'Olive oil',
      'Salt and pepper to taste',
      '4 salted anchovy fillets',
      'Cornstarch or flour, for coating',
      '100ml crème fraîche (optional, to finish)',
      'A knob of butter (to finish)',
    ],
    instructions: [
      'Start 8 to 48 hours ahead. Chop the onions and carrots, add to a pan with a little olive oil and brown lightly. Allow to cool, then transfer to a non-reactive container — enamelware, clay, or plastic. Do not use stainless steel, as the acid in the wine will react with it.',
      'Add the wine, boar meat, browned vegetables, bouquet garni, garlic, and a generous amount of salt and pepper. Cover and refrigerate for at least 8 hours. 24 hours gives a better result.',
      'When ready to cook, drain the meat and reserve all of the marinade liquid. Pat the meat completely dry with kitchen paper, then toss in cornstarch or flour — this will thicken the daube as it cooks.',
      'Heat olive oil in a cast iron pot over a high heat. Brown the meat in batches — do not crowd the pan or it will steam instead of sear. Set aside. Add the lardons and fry until almost crispy. Add the anchovy fillets and cook for 2 minutes, stirring — they will dissolve completely and add a deep richness you won\'t be able to identify but will absolutely taste.',
      'Pour a cup of the reserved marinade into the pot and scrape the bottom well to lift all the caramelised bits. Add the vegetables from the marinade, the tomatoes, the olives, and return the browned meat to the pot.',
      'Pour in enough of the remaining marinade to just cover everything. Bring to a gentle simmer, cover, and cook over the lowest possible heat for at least 2 hours. Check occasionally and add more liquid as needed. The meat should be completely fall-apart tender.',
      'The daube is good eaten immediately, but do yourself a favour — remove it from the heat when done, let it cool completely, and reheat it slowly the next day. Ideally on a hearth, but the oven works too. Stir in 100ml of crème fraîche and a knob of butter just before serving.',
      'Serve over pasta, mashed potatoes, lemon and rosemary rice, or baked potatoes. Always with a baguette and a good red wine.',
    ],
    marcelTip: 'The anchovy fillets are the secret. Do not skip them. They disappear entirely but leave behind a richness that makes people ask what your secret is. You don\'t have to tell them.',
    marcelType: 'cooking',
  },
  {
    slug: 'smoked-mackerel-pate',
    title: 'Smoked Mackerel Pâté',
    excerpt: 'A rich, smoky apéro spread that comes together in minutes — perfect with a chilled glass of rosé at sunset.',
    image: '/images/recipe-tapenade.jpg',
    date: '2026-02-10',
    category: 'apero',
    servings: 4,
    prepTime: '15 min + 30 min chilling',
    cookTime: '0 min',
    difficulty: 'Easy',
    ingredients: [
      '2 smoked mackerel fillets (about 250–300g), skin removed',
      '120g crème fraîche',
      '60g cream cheese',
      '1 tbsp Dijon mustard',
      'Zest of ½ lemon',
      '1 tbsp lemon juice',
      '1 small shallot, very finely chopped',
      '1 tbsp capers, chopped',
      '1 tbsp fresh parsley, chopped',
      '2 tbsp good olive oil',
      'Freshly ground black pepper',
      'Optional: pinch of smoked paprika or cayenne',
    ],
    instructions: [
      'Flake the smoked mackerel into a bowl, removing any bones.',
      'Add the crème fraîche, cream cheese, Dijon mustard, lemon zest, and lemon juice.',
      'Mix in the chopped shallot, capers, parsley, and olive oil. Season generously with black pepper. Add a pinch of smoked paprika or cayenne if using.',
      'For a rustic texture, mash everything together with a fork. For a smoother pâté, pulse briefly in a food processor.',
      'Taste and adjust — more lemon juice if it needs brightness, more pepper if it needs bite.',
      'Refrigerate for at least 30 minutes to let the flavours come together.',
      'To serve, spoon into a bowl and drizzle with a little olive oil. Serve with toasted baguette slices, crackers, radishes, cucumber slices, or pickled onions. Garnish with parsley, lemon zest, and cracked pepper.',
    ],
    marcelTip: 'The apéro is not just a drink — it is a moment. Make the pâté the day before, pour the rosé while it is still cold, and do not rush. The evening will take care of itself.',
    marcelType: 'cooking',
  },
  {
    slug: 'braai-lamb-chops-provencal',
    title: 'Braai Lamb Chops Provençal',
    excerpt: 'Lamb chops grilled over wood coals with herbes de Provence — the perfect summer braai.',
    image: '/images/recipe-lambchops.jpg',
    date: '2025-08-05',
    category: 'braai',
    servings: 4,
    prepTime: '10 min + 2 hours marinating',
    cookTime: '15 min',
    difficulty: 'Easy',
    ingredients: [
      '8 lamb chops',
      '4 tbsp olive oil',
      '2 tbsp herbes de Provence',
      '3 cloves garlic, crushed',
      'Juice of 1 lemon',
      'Fleur de sel',
      'Fresh rosemary for the coals',
    ],
    instructions: [
      'Mix olive oil, herbes de Provence, garlic, and lemon juice in a bowl.',
      'Coat the chops thoroughly. Marinate for at least 2 hours, ideally overnight.',
      'Light your fire. Wood coals are essential — charcoal is acceptable, gas is not.',
      'When the coals are grey and glowing, place the chops on the grill.',
      'Throw a sprig of rosemary directly onto the coals for fragrance.',
      'Cook for 4–5 minutes per side for medium. Rest for 5 minutes.',
      'Finish with a generous pinch of fleur de sel.',
    ],
    marcelTip: 'The chops should sizzle the moment they hit the grill. If they don\'t, your coals aren\'t hot enough. Wait. Patience makes better braai.',
    marcelType: 'cooking',
  },
];

export const videos: Video[] = [
  {
    id: 'year-in-provence',
    title: 'A Year in Provence',
    description: 'Listen to the spirit of the seasons through this original song — the almond blossom of February, the lavender of July, the harvest of autumn.',
    youtubeId: 'F-bIW2j-Ajc',
    date: '2025-04-29',
    category: 'Provence',
  },
  {
    id: 'wild-boar-hunt-var',
    title: 'Wild Boar Hunt in the Var',
    description: 'A full day out with the société de chasse — from the pre-dawn coffee to the evening hunt dinner. This is what hunting in rural France really looks like.',
    youtubeId: 'F-bIW2j-Ajc',
    date: '2025-10-05',
    category: 'Hunting',
  },
  {
    id: 'cooking-sanglier-fire',
    title: 'Cooking Sanglier Over Fire',
    description: 'After the hunt, the real work begins. A whole sanglier slow-cooked over wood coals — the most satisfying meal you can imagine.',
    youtubeId: 'F-bIW2j-Ajc',
    date: '2025-10-12',
    category: 'Cooking',
  },
  {
    id: 'alpilles-walk',
    title: 'Walking the Alpilles',
    description: 'A sunrise walk through the limestone ridges and olive groves of Les Alpilles — the wild heart of Provence.',
    youtubeId: 'F-bIW2j-Ajc',
    date: '2025-09-03',
    category: 'Provence',
  },
  {
    id: 'market-st-remy',
    title: 'Market Day in Saint-Rémy',
    description: 'Every Wednesday morning, Saint-Rémy-de-Provence hosts one of the finest markets in France. Come along for a wander.',
    youtubeId: 'F-bIW2j-Ajc',
    date: '2025-07-16',
    category: 'Provence',
  },
  {
    id: 'eygalieres',
    title: 'Eygalières',
    description: 'One of the most beautiful villages in the Alpilles — ancient stone lanes, a hilltop chapel, and the quiet rhythm of a village that time has treated gently.',
    youtubeId: 'NrPU7VQYjb0',
    date: '2026-03-05',
    category: 'Provence',
  },
  {
    id: 'les-alpilles-drive',
    title: 'The Most Beautiful Drive in Provence – Les Alpilles',
    description: 'A scenic drive through the heart of Les Alpilles, with original music composed for the journey — white limestone ridges, olive groves, and the villages that make this corner of Provence unforgettable.',
    youtubeId: 'JTVwEWiKz5g',
    date: '2026-03-05',
    category: 'Provence',
  },
];

// Helper functions
export function getFeaturedArticles(count = 3): Article[] {
  return articles.slice(0, count);
}

export function getLatestVideos(count = 3): Video[] {
  return videos.slice(0, count);
}

export function getFeaturedRecipes(count = 3): Recipe[] {
  return recipes.slice(0, count);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, count);
}
