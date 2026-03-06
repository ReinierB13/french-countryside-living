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
    category: 'Potager',
    marcelTip: 'Plant your tomatoes after the Ice Saints — les Saints de Glace — in mid-May. The old farmers are right about this. Do not rush the tomatoes.',
    marcelType: 'gardener',
  },
  {
    slug: 'petanque',
    title: 'Pétanque: The Soul of the Village Square',
    excerpt: 'In the shade of the plane trees, on a dusty court, pétanque continues as it has for generations — unhurried, argumentative, and deeply French.',
    content: `<p>Every village in Provence has a terrain de pétanque. It is usually in the shade of a row of plane trees, on bare, packed earth, somewhere near the bar. On summer evenings, you will find men of all ages here — though increasingly women too — playing the game that has defined French rural leisure for more than a century.</p>
<p>Pétanque looks deceptively simple. Each player throws metal boules — heavy, satisfying spheres that clank together with a sound unlike any other — trying to land them as close as possible to the cochonnet, a small wooden jack. The team whose boules are closest when all have been thrown scores points. First to thirteen wins.</p>
<img src="/images/petanque-1.jpg" alt="Pétanque in Provence" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />
<h2>A Brief History</h2>
<p>The game was formalised in La Ciotat, near Marseille, in 1907. Legend has it that a player with rheumatism could no longer take the running steps that the earlier game required, so the rules were adapted to allow throwing from a stationary position — les pieds tanqués, feet planted. From that adaptation, the name pétanque was born.</p>
<p>But the roots go deeper. Boule games have been played across the Mediterranean since Greek and Roman times. The Provençal version simply refined and codified what rural communities had been doing for centuries — throwing things at other things, arguing about how close they were.</p>
<h2>The Ritual</h2>
<p>To watch a game of pétanque properly, you must understand that the game is as much about conversation as it is about boules. Every throw is debated. Every measurement is contested. The <em>baguette</em> — a small metal ruler used to settle disputes about distances — is produced with great ceremony and no small amount of theatre.</p>
<p>The best players have a repertoire of shots. The <em>pointer</em> rolls the boule gently towards the cochonnet. The <em>tirer</em> — or <em>shooter</em> — throws hard to knock an opponent's boule away. A perfectly executed shot that sends an opponent's boule flying while leaving your own in its place is called a <em>carreau</em>, and it is greeted with the kind of applause normally reserved for great sporting moments.</p>
<img src="/images/petanque-2.jpg" alt="Pétanque players in the village square" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />
<h2>Come and Play</h2>
<p>If you are in Provence and want to join a game, the etiquette is simple: watch for a few minutes, ask politely if you may join, and accept whatever side they put you on. Bring something to drink, because the game will last as long as the light holds. And do not argue too much about distances — that privilege is earned over years.</p>`,
    image: '/images/petanque-1.jpg',
    date: '2026-02-20',
    category: 'Traditions',
    marcelTip: 'If playing with a partner, discuss the shot beofore you throw. You don\'t want a "Oh la la" after a throw',
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
    marcelTip: 'Make 100% sure of your post with the chef de battuee before the hunt starts. The old hunters know the terrain and likeley exits.',
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
  {
    slug: 'spring-in-provence-luberon',
    title: 'Spring in Provence: Hope, Rosé, and an Unreasonable Amount of Weeding',
    excerpt:
      'The almond trees are blooming, the potager is waiting, and the weekend rain has clearly made plans. Life in Les Alpilles as spring finally arrives.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">Life in Les Alpilles</p>

<h2>The First Whisper of Spring</h2>
<p>It begins subtly. One morning in late February, you step outside and something is different — not warm exactly, but less aggressively cold. The sky is doing that particular Provençal thing where it's simultaneously blue and apologetic, as if winter itself is clearing its throat to say it might, possibly, be nearly done. You don't want to get your hopes up. Winter has done this before. It's basically a tease in velvet fog.</p>
<p>And then you see it: the almond trees are blooming.</p>
<p>Not all at once — they're too dignified for that. It starts with one or two shy blossoms on a single branch, like a diver testing the water with a toe. Then, over the course of a week or so, the whole tree explodes in delicate white and pink, and suddenly the landscape that has spent three months looking like a charcoal sketch is hosting a full-colour renaissance. The almond trees are Provence's opening act, and they never disappoint.</p>
<p>Then the green arrives. First in timid patches — a flush of new leaves here, a brave clump of grass there. Then it's everywhere, carpeting the garrigue, climbing the walls, filling in all the brown spaces winter left behind. The world, which has been very convincingly dead for several months, turns out to have been merely sleeping. Which is reassuring, really.</p>

<img src="/images/springtime1.jpg" alt="Spring panorama in Les Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Dream: L'Apéro on the Terrace</h2>
<p>This is the point at which your mind, drunk on blossom and optimism, begins to wander. You are standing in the garden, still wearing two jumpers, but mentally you are already at a different version of this exact spot — it is July, the cicadas are providing enthusiastic background noise, and you are installed on the terrace with a glass of cold rosé, sweat forming on the outside of the bottle, a small plate of cornichons glistening like jewels, and a few slices of saucisson fanned out with entirely unnecessary elegance.</p>
<p>This vision is so powerful, so vivid, so deeply motivating, that it will carry you through approximately four months of actual physical labour. Which brings us, somewhat abruptly, to the other side of spring in Provence.</p>

<img src="/images/springtime2.jpg" alt="The potager in early spring" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Reality: 600 Square Metres of Opinion</h2>
<p>The potager is waiting. It has been waiting all winter, quietly accumulating damage like an invoice you've been avoiding. Six hundred square metres of kitchen garden — which sounded romantic when you moved to Provence and sounds somewhat less romantic when you are facing it in early March with a rake and a bad back.</p>
<p>The soil needs turning. The beds need clearing. Whatever that thing was that didn't work last year — the courgettes that staged a worker's revolt, the tomatoes that got some unpronounceable blight, the salad that immediately bolted in protest — needs to be rethought. You have plans. Clever plans. Crop rotation. Better drainage. A new trellising system that you have drawn in a notebook and are quietly proud of. Whether any of this will survive contact with actual ground remains, as ever, to be seen.</p>
<p>The compost heap has strong feelings about the situation and is making them known.</p>

<h2>The Scheduling Problem (A Comedy)</h2>
<p>Here is where Provençal spring, lovely as it is, reveals a certain sadistic streak. The weather has apparently consulted your calendar.</p>
<p>During the week — when you are sitting at a desk, or on calls, or doing all the things that constitute modern working life — the sun pours down in a manner that is frankly provocative. The light is extraordinary. The temperature is ideal. The garden is simply begging to be tended. You can see it from the window. You make a note to yourself that this weekend, finally, you will get everything done.</p>
<p>The weekend arrives. So does the rain. Not polite, apologetic drizzle, but committed, load-bearing rain that has clearly made plans and intends to keep them. You stand at the window in your wellies, coffee in hand, staring at the sky with the expression of someone who has been personally wronged.</p>
<p>This is not a coincidence. This is just spring.</p>

<h2>And Then There Are the Parents</h2>
<p>April, naturally, is when the parents arrive. This is wonderful — genuinely wonderful — but it does introduce a small logistical wrinkle, which is that they will be sleeping in a room that currently has wallpaper that needs to come off and a wall that needs plastering. These are not decorative choices. These are facts about the room in its current condition.</p>
<p>So we add to the spring agenda: strip wallpaper, hire (or, more likely, become) a plasterer, paint, dry, furnish. Alongside the potager preparation, the composting, the bed rotations, and the ongoing negotiation with the courgettes. All of this while the sun shines mockingly Monday through Friday and the rain commits itself wholeheartedly to the weekends.</p>
<p>Time is, as they say, limited.</p>

<img src="/images/springtime3.jpg" alt="Spring in Provence" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>And Yet</h2>
<p>Here's the thing about spring in Provence: it is, despite all of the above, genuinely magnificent. The light at six in the evening when the clouds clear. The smell of the earth after a morning of rain. The first evening warm enough to eat outside — really outside, without regret — with a simple meal and the birds making an unreasonable amount of noise about it.</p>
<p>The almond trees don't know about the potager. The new green leaves don't care about the wallpaper. They're just doing what they do every year: waking up, stretching, getting on with it.</p>
<p>We could probably learn something from that.</p>
<p><em>Now if you'll excuse me, I have a wall to plaster.</em></p>
<p class="text-charcoal/50 text-sm mt-8">Provence, March 2026</p>`,
    image: '/images/springtime1.jpg',
    date: '2026-03-05',
    category: 'Potager',
    tags: ['Provence', 'Potager'],
    marcelTip: 'Do not turn the soil too early. Wait until it stops sticking to your boots. Cold, wet soil that gets compacted will take the whole season to recover.',
    marcelType: 'gardener',
  },
  {
    slug: 'jan-tamatie',
    title: 'Jan Tamatie Would Be Proud',
    excerpt:
      'On growing real tomatoes, honouring your grandfather, and the quiet tragedy of the supermarket tomato. Life at Die Plaas.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">Life at Die Plaas</p>

<h2>An Apology on Behalf of the Supermarket Tomato</h2>
<p>Let us begin with a moment of honesty. The tomato you buy in a plastic netting — straight from a greenhouse of either Spain or Morocco, perfectly round, uniformly red, and completely devoid of any opinion about being eaten — is not really a tomato. It is an excuse for a tomato. A tomato that has been optimised for travel, shelf-life, and visual consistency, and has sacrificed everything else at that particular altar. It doesn't smell of anything. It tastes of nothing much. Cut it open and it stares back at you with the blank expression of something that has given up.</p>
<p>We eat them, of course, because they're there. But we don't talk about them. Nobody has ever bitten into a supermarket tomato and been transported anywhere.</p>

<h2>Jan Tamatie</h2>
<p>My grandfather was a farmer in South Africa. He grew tomatoes and grapes, and he was apparently so well-known for the former that people called him Jan Tamatie — Jan Tomato. I didn't think about that name much when I was a child, standing on his farm eating tomatoes straight from the vine with a pinch of rock salt. It just seemed normal. Of course tomatoes tasted like that. What else would they taste like?</p>
<p>The answer, I discovered some decades later in a French supermarket, is: considerably less.</p>
<p>It was 2018. We were living in Provence, our neighbour had a corner of garden going spare, and I had two small raised beds — 1m x 1.2m each, not exactly Die Plaas — and a modest ambition. I wanted to show my children where food actually comes from. I planted some cherry tomatoes and a few beefsteaks, tended them with perhaps more enthusiasm than expertise, and waited.</p>
<p>The first ripe tomato of that summer, I picked early in the morning while it was still warm from the previous day's sun. I ate it standing in the garden, still in my pyjamas, with no salt, no ceremony, no audience.</p>
<p>I was immediately eight years old again, standing on my grandfather's farm.</p>
<p>That was it. That was the moment. Jan Tamatie had a lot to answer for.</p>

<h2>From Two Raised Beds to Die Plaas</h2>
<p>The two small beds became a 50m² potager. The potager eventually became something altogether more serious — a large kitchen garden that our family now calls Die Plaas. Our Farm. It is not a metaphor. It is, genuinely, our farm. Small by farming standards, enormous by the standards of what two people can reasonably maintain while also holding down jobs and raising children, but ours entirely.</p>
<p>The tomatoes are the heart of it. Every year, as the season turns, we make the trip together as a family to the pépinière — the local plant nursery — to choose the seedlings. Cherry tomatoes. Beefsteaks. Heirlooms in colours that range from deep crimson to a slightly alarming orange-yellow. We take the choosing seriously. We discuss the merits of various varieties with a solemnity that might seem disproportionate to people who have never grown their own food, and seems entirely proportionate to people who have.</p>
<p>Planting day is an occasion. Everyone has a role. Photos are taken. Plans are made. Standing there with your hands in the soil, looking at a row of small seedlings that will, in three months, be taller than you and producing more tomatoes than you know what to do with — it is quietly one of the better days of the year.</p>
<img src="/images/planting_day.png" alt="Planting day at Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Fish Trench (Which Sounds Worse Than It Is)</h2>
<p>I should mention the fish scraps.</p>
<p>Our local supermarket has a fishmonger who is very understanding about the needs of the committed kitchen gardener. Before planting season, I collect the fish scraps — heads, bones, the parts that would otherwise go to waste — and bury them in a deep trench beneath where the tomatoes will eventually go. It is an ancient technique. The nitrogen and phosphorus that break down from the fish feed the roots over the whole growing season in a slow, patient way that no bag of fertiliser can quite replicate.</p>
<p>The tomatoes, for their part, don't seem to mind where their nutrients come from. They just grow. Vigorously. Enthusiastically. Without the faintest concern for my wife's entirely reasonable position on how many plants is too many plants.</p>

<h2>The Annual Negotiation (24 Plants or Bust)</h2>
<p>My wife is a sensible person. She understands that tomato plants, left unchecked, have imperialist ambitions. She knows that 24 plants will already produce more tomatoes than any household can eat fresh, more than we can dehydrate, more than we can preserve in olive oil — and we do all three. She has done the maths.</p>
<p>I, meanwhile, have also done the maths, and arrived at a different answer. My maths involves the memory of a morning in 2018, a warm tomato, and a grandfather who farmed and sold them for a living. My maths says: more.</p>
<p>We compromise, as one does in a long marriage, on her number. And then I plant a few extra at the far end of the bed and hope she doesn't count.</p>
<p><em>(She counts.)</em></p>

<h2>Twice a Week, and Worth Every Minute</h2>
<p>The watering happens twice a week. It sounds simple, and it is — but there is something about the rhythm of it that becomes, over the course of a summer, almost meditative. You walk the rows. You check the plants. You pinch off the lateral shoots (or you mean to, and then you don't, and then you have a plant that is attempting to become a tree). You watch the green fruits slowly blush, first at the shoulders, then all the way through.</p>
<p>When the first tomatoes of summer are ready, we make salads that need nothing more than good olive oil, a scattering of fleur de sel, and a few torn basil leaves. Later in the season, when the abundance becomes genuinely overwhelming, we slice them and lay them in the dehydrator — and those dehydrated tomatoes, preserved in olive oil with a little thyme and garlic, will make January pasta considerably more bearable.</p>
<p>The children, who have grown up doing this, eat tomatoes from the vine without thinking anything special of it. Which is exactly right. This should be normal.</p>
<img src="/images/t1.jpg" alt="Tomatoes ripening on the vine at Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>What a Real Tomato Tastes Like</h2>
<p>It tastes like summer in Provence. It tastes like soil that was properly fed and plants that were properly tended. It tastes like the decision, six years ago, to put two small raised beds in a neighbour's garden and see what happened.</p>
<p>It tastes like standing on a farm in South Africa as a child, holding something warm from the vine.</p>
<p>The Spanish tomato, perfectly round and perfectly empty, will still be there in the supermarket. It will always be there. But once you've grown your own — once you've knelt in the dirt at planting day with your family around you, once you've smelled the particular green smell of tomato leaves on your hands, once you've eaten the first one still warm from the sun — you understand what all the fuss is about.</p>
<p>Jan Tamatie knew. He always knew.</p>
<img src="/images/t2.jpg" alt="Fresh tomatoes from Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p class="text-charcoal/50 text-sm mt-8">Provence, Spring 2026 · Die Plaas</p>`,
    image: '/images/hero-spring.jpg',
    date: '2026-03-05',
    category: 'Potager',
    tags: ['Provence', 'Potager'],
    marcelTip: 'Bury fish scraps deep under your tomato beds before planting. The old farmers knew this trick centuries before anyone invented fertiliser. The tomatoes know it too.',
    marcelType: 'gardener',
  },
  {
    slug: 'la-chasse-hunting-in-france',
    title: 'La Chasse: Hunting in France',
    excerpt:
      'In Provence, the hunt is a team sport, a tradition, and a way of life. A hunter of Les Alpilles on wild boar, the battue, and why none of it happens without trust.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">La Chasse · Les Alpilles</p>

<p class="font-body text-xl text-charcoal/80 italic leading-relaxed mb-8 border-l-4 border-amber pl-5">I grew up hunting. I am not going to apologise for it. Mankind grew stronger and smarter because we ate meat — and the hunt is as old as humanity itself.</p>

<p>My introduction to hunting came early, in South Africa, where the bush teaches you patience, respect for the animal, and a sharp awareness of everything around you. But hunting in France — and in Provence in particular — is something else entirely. It is, first and foremost, a <em>team sport</em>.</p>
<p>Forget the solitary figure in a tree stand. Here, the hunt is a collective act, woven into the social fabric of rural life, governed by strict rules, ancient customs, and a great deal of good-natured argument over coffee before dawn.</p>

<h2>The Animal: Wild Boar of Les Alpilles</h2>
<p>In Provence, our main quarry is the <em>sanglier</em> — the wild boar. Do not underestimate it. These are canny, intelligent animals, with an acute sense of smell that puts most hunting dogs to shame. They are also, when their numbers go unchecked, genuinely destructive. A surpopulation in any area can have devastating consequences for farmers and landowners: rooted-up vineyards, ravaged olive groves, ruined pasture.</p>
<p>The boar is not a passive participant in this arrangement. It learns, adapts, and frequently wins. We hunt in the vast, rocky garrigue of Les Alpilles — a landscape of limestone ridges, dense scrub oak, and deep valleys that is as much the boar's home as ours. The distances between hunters on their posts can stretch to 500 metres or more. Shots are not guaranteed. The animals escape, often. This is as it should be.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70">The boar never gets shot on the road. Oh no — it gets shot down in the valleys. The terrain is always against you.</blockquote>
<img src="/images/hunting1/h1.jpg" alt="Wild boar hunting in Les Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Structure of the Hunt</h2>
<p>Every hunt has its hierarchy and its roles, as fixed and functional as any well-run operation. At the top sits <strong>le chef de battue</strong> — the Hunt Boss — who knows the ground, reads the signs, and assigns positions before anyone sets foot in the field. His word is final.</p>
<p>The hunters divide into two groups. <strong>Postiers</strong> are the shooters: they walk to assigned positions — their posts — chosen by le chef de battue and wait in silence, reading the wind and the light. <strong>Piqueurs</strong>, the drivers, move through the hunting area with dogs, pushing boar from their daytime shelters and driving them toward the waiting postiers.</p>
<p>The whole area is well-signalled. Safety is non-negotiable — it is not a suggestion or an afterthought, but the first order of business at every briefing. We do everything in our power to run a safe hunt. This is not sport shooting in a gallery. It demands discipline, awareness, and trust between every person in the field.</p>
<img src="/images/hunting1/h2.jpg" alt="Hunters in the garrigue of Les Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>After the Shot: The Hard Work Begins</h2>
<p>When a boar is taken, the work is only half done. A mature sanglier is a heavy, solid animal, and it will never oblige you by dropping somewhere convenient. The terrain ensures that. You attach a rope to the animal's head and you drag — through the maquis, through the scrub, up the valley walls. In the old days, donkeys did this work. Now, we are the donkeys.</p>
<p>There is something honest about it. The effort of recovery is part of the contract: if you harvest an animal, you do not leave it where it fell.</p>

<h2>Back at the Club: Sharing the Harvest</h2>
<p>The hunting club is where the day ends and the real Provençal ritual begins. The boars are emptied and skinned with practiced hands, and then the meat is distributed — among the hunters, the landowners, friends, and neighbours. Nothing is wasted. Nothing is hoarded.</p>
<p>Wild boar meat is something to be proud of. It is dark, rich, and full of character — the taste of a free animal that ate acorns and roots in the garrigue. In Provençal kitchens it becomes civet, daube, terrines, and ragouts. It ends up in the slow-cooked, wine-braised dishes that belong to this landscape as much as lavender and thyme.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70">The meat is treasured. It passes through many hands before it reaches the table — and every one of those hands earned it.</blockquote>

<p class="text-charcoal/50 text-sm mt-8">Les Alpilles, Provence · La Chasse</p>`,
    image: '/images/hunting1/h1.jpg',
    date: '2026-03-05',
    category: 'Traditions',
    tags: ['Hunting', 'Traditions', 'Les Alpilles'],
    marcelTip: 'Never wear blue while boar hunting in the garrigue. The sanglier cannot see red, but blue stands out. Trust the old hunters — they did not survive this long by accident.',
    marcelType: 'hunter',
  },
  {
    slug: 'les-caisses-de-jean-jean',
    title: 'Les Caisses de Jean-Jean: A Village Forgotten by Time',
    excerpt:
      'A few kilometres from Mouriès, a trail leads into the Alpilles — and 2,700 years of silence, written in limestone.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">Les Alpilles · Mouriès · Provence</p>

<p class="font-body text-xl text-charcoal/80 italic leading-relaxed mb-10 border-l-4 border-amber pl-5">A few kilometres from Mouriès, a trail leads into the Alpilles. Follow it long enough, and the hills close in around you — the world narrows, the limestone rises, and the centuries begin to dissolve.</p>

<img src="/images/caisses_de_jean_jean/IMG_20250227_093558_fixed.jpg" alt="Les Caisses de Jean-Jean — the entrance valley" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Path In: Where the Trail Becomes a Portal</h2>
<p>The walk begins simply enough — a dusty track winding away from the golf course at Servanes, past rosemary and scrub oak, with the jagged ridgeline of the Alpilles rising ahead. The air carries the dry warmth of Provence: thyme crushed underfoot, the distant call of a blue rock thrush tucked into a crevice. There is nothing yet to suggest the extraordinary.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_093605_fixed.jpg" alt="The trail into Les Caisses" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_093640_fixed.jpg" alt="The narrowing entrance to the valley" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Then the valley begins to narrow. The limestone walls tighten on either side — pale, ancient, scored by millennia of wind and rain — until you feel the landscape leaning in. The entrance to Les Caisses de Jean-Jean is almost comically slender, a gap between cliffs that a determined man could defend with nothing more than courage and a good throwing arm. It is precisely for this reason that someone, long ago, decided this place was worth living in.</p>

<p>Step through, and the world opens again — but changed. You are now inside something. A great stone box. Two parallel limestone ridges run on either side like the walls of a cathedral, closing at the eastern end to form a natural acropolis. The French word <em>caisses</em> — crates, or boxes — captures it perfectly: you are standing at the bottom of a vessel carved by geology and occupied by history.</p>

<div class="grid grid-cols-3 gap-4 my-10 text-center">
  <div class="bg-parchment border border-amber/20 rounded-sm p-5">
    <p class="font-heading text-2xl font-bold text-terracotta mb-1">14 ha</p>
    <p class="font-body text-xs text-charcoal/60 uppercase tracking-widest">Ancient settlement</p>
  </div>
  <div class="bg-parchment border border-amber/20 rounded-sm p-5">
    <p class="font-heading text-2xl font-bold text-terracotta mb-1">700 BC</p>
    <p class="font-body text-xs text-charcoal/60 uppercase tracking-widest">Earliest occupation</p>
  </div>
  <div class="bg-parchment border border-amber/20 rounded-sm p-5">
    <p class="font-heading text-2xl font-bold text-terracotta mb-1">~1,000</p>
    <p class="font-body text-xs text-charcoal/60 uppercase tracking-widest">Inhabitants at peak</p>
  </div>
</div>

<img src="/images/caisses_de_jean_jean/IMG_20250227_094104_fixed.jpg" alt="Inside the oppidum" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Oppidum: How the Village Was Built</h2>
<p>Around the 7th century BC, in what archaeologists call the Iron Age, a Celtic people settled here and began building. What they created was an <em>oppidum</em> — a fortified hilltop village — one of the most intelligently designed in all of southern Gaul. They did not need to fight the landscape; they let the landscape fight for them.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_094305_fixed.jpg" alt="The limestone cliffs of Les Caisses" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_094311_fixed.jpg" alt="The ancient ramparts" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Nature had already provided two impregnable walls in the limestone cliffs to the north and south. The genius lay in what the settlers added at the western entrance — the only approach not sealed by rock. There, they raised not one rampart, but two, rebuilt and reinforced across centuries until the outermost wall grew to more than ten metres thick. Visitors walking the site today still encounter it as a looming earthen ridge that seems, improbably, to be a natural hill — until you realise it is entirely man-made, a colossus of stacked limestone, packed earth and compressed time.</p>

<p>Between the 4th and 3rd centuries BC, the builders did something remarkable: they dismantled an older sanctuary on the site and reused its carved votive steles as raw material for the rampart's core. These stones — engraved with the image of a horseman carrying a javelin, the symbol of a warrior conducted to the afterlife — were buried inside the very walls meant to protect the living. Sacred objects, repurposed as mortar. Whether this was an act of pragmatism or a deliberate consecration of the fortifications, we will never know.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70 text-lg">Walking the site today, one stands before what appears to be a natural hill rising between the cliffs — until the realisation dawns that it is entirely the work of human hands, a monument built generation by generation over six centuries.</blockquote>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_094317_fixed.jpg" alt="The man-made rampart ridge" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_094520_fixed.jpg" alt="The defensive ditches and approach" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>In front of the ramparts, the inhabitants dug four successive ditches alternating with earthen embankments, and lined the approach with a jagged palisade of projecting rocks. Any attacker who breached the first trench would face another, and another. The entrance itself was cunningly angled so that an approaching enemy could never charge in a straight line, always exposed to defenders on the walls above.</p>

<h2>Daily Life: A Thousand Lives, Lived in Stone</h2>
<p>At its height, roughly a thousand people called this stone valley home. Archaeological excavations between 1933 and 1942 by Fernand Benoit revealed the true scale of the settlement. The site covers roughly fourteen hectares and may have supported close to a thousand inhabitants at its peak.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_095231_fixed.jpg" alt="Terraced house foundations on the cliff face" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_095303_fixed.jpg" alt="Stone walls and settlement remains" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Archaeologists have uncovered houses arranged in terraces against the cliff faces, their walls bonded with earth and later, as Hellenistic influence filtered up from Massalia (Marseille), with dressed limestone cut in the manner of the Greeks. Ceramic shards tell of trade — wine amphorae from Italy, fine-ware cups from the Greek colonies of the coast. This was no isolated backwater but a community woven into the commerce of the ancient Mediterranean world.</p>

<p>At the foot of the southern cliff, an enormous millstone — over a metre across and weighing an estimated 1,600 kilograms — still sits unfinished in the living rock, abandoned mid-cut sometime in the 17th century. It is a haunting detail: the interrupted work of someone who laid down their tools one afternoon and never returned. Time has a way of doing this, collecting the paused gestures of the past and holding them perfectly still.</p>

<img src="/images/caisses_de_jean_jean/IMG_20250227_100809_fixed.jpg" alt="The unfinished millstone in the living rock" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p>The settlement endured for nearly a millennium — from the Iron Age through the full arc of Roman conquest and into the 3rd century AD, when the inhabitants gradually drifted down into the plain below to occupy the Roman villas spreading across the Crau. The hilltop was left to the wind, the wild lavender, and the slow patient work of the limestone.</p>

<h2>The Wonder: What Silence Does to the Imagination</h2>

<img src="/images/caisses_de_jean_jean/IMG_20250227_102105_fixed.jpg" alt="The silence of Les Caisses de Jean-Jean" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p>Standing inside the Caisses today, what strikes you most is not the archaeology — it is the silence. Not an empty silence, but a full one, weighted with presence. The cliffs hold the air still. The light falls at an angle that has not changed in three thousand years. And the mind, stripped of easy distraction by the simplicity of the landscape, begins quietly to people the place: a child running along the base of the rampart; smoke rising from a cooking fire; the sound of a hammer shaping stone; someone standing at the entrance to this narrow valley, looking west, watching.</p>

<p>The name of the site carries its own small history. It derives from a man called Jehan who once owned these lands, and his son — also Jehan — after him. In the local dialect, the "lands of Jehan, son of Jehan" became simply Jean-Jean, the name of a property becoming the name of a civilisation. There is something rather beautiful in that: an Iron Age oppidum remembered not by its ancient Gaulish name — possibly <em>Tericiae</em>, which once appeared on Roman road maps between Aix and the Rhône — but by the name of a medieval farmer who happened to graze his sheep here.</p>

<p>The Alpilles have always done this — absorbed history quietly, layer by layer, the way the limestone absorbs rain. A sanctuary becomes a rampart. A rampart becomes a hill. A hill becomes a walk one afternoon in the Provençal sun, with the scent of wild herbs rising around you, and the sudden, vertiginous sense that you are very small, and the world is very old, and some places hold their past more tenderly than others.</p>
<p>Les Caisses de Jean-Jean is one of those places.</p>

<div style="display:flex;gap:10px;margin:2.5rem 0 1rem;"><img src="/images/caisses_de_jean_jean/IMG_20250227_102256_fixed.jpg" alt="Light on the limestone" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_102302_fixed.jpg" alt="Looking out from the valley" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_103002_fixed.jpg" alt="Les Caisses de Jean-Jean, Les Alpilles" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /></div>

<p class="text-charcoal/40 text-xs mt-10 font-body uppercase tracking-widest">Les Alpilles · Bouches-du-Rhône · Provence · Classified Historic Monument 1937 · Parc Naturel Régional des Alpilles</p>`,
    image: '/images/caisses_de_jean_jean/IMG_20250227_093558_fixed.jpg',
    date: '2026-03-06',
    category: 'Provence',
    tags: ['Provence', 'Les Alpilles'],
    marcelTip: 'Go in the morning, before the heat. The light inside the valley is extraordinary at eight o\'clock, and you will almost certainly have the place to yourself.',
    marcelType: 'rose',
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
    story: `Winter in Provence means hunting season. From September through February, the garrigue falls silent in a particular way — not the silence of emptiness, but the silence of watchfulness. The hunters are out. The dogs are working. The sanglier — the wild boar — is the great quarry of the south, an animal that inspires equal parts respect and appetite.\n\nThe boar in Provence are not like the lean, fast animals of northern Europe. They are heavy, powerful creatures that root through the oak forests of the Var, fattening themselves on acorns and truffles and whatever else they can upend with their considerable snouts. The meat is darker than pork, more mineral, and it takes well to long, slow cooking with wine.\n\nThis is the simplest and most satisfying way to cook it: a proper daube. The word daube comes from the old Provençal daubière — the tall clay pot in which this dish was traditionally cooked, set directly into the embers of the hearth on a winter evening. The clay absorbed the heat slowly, the wine reduced, the herbs perfumed the whole house, and by midnight there was something extraordinary waiting on the fire. On a cold January day, there is nothing better.`,
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
    story: `Two traditions collide in this pot. The potjie is as South African as the braai — a cast iron pot, three legs, a fire built low and patient beneath it. It arrived at the Cape with Dutch settlers in the seventeenth century and has been feeding families over wood coals ever since. The tradition crossed the ocean. The pot ended up in Provence.\n\nAnd Provence, it turns out, has opinions about cast iron cooking over coals. They are broadly enthusiastic. The wild boar that hunters bring back from the Var in October is exactly the kind of meat that rewards long, slow, indirect heat — and the garrigue herbs, the local red wine, and the Provençal vegetables that go in alongside it are precisely what a potjie wants to become great.\n\nThis is a dish for a Sunday when you have nowhere urgent to be. Light the fire after breakfast. Eat in the late afternoon. Leave the lid on in between.`,
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
    story: `On Wednesday mornings in Saint-Rémy, the market takes over the old town. By eight o'clock the plane trees are hung with shade and the stalls are doing serious business — fromage de chèvre stacked in pyramids, slabs of tapenade glistening on boards, and at one particular corner, a farmer who sells nothing but chickens. His birds are raised in the open air on his farm outside of town, fed on grain, and they smell the way chicken is supposed to smell: of the farm, of fat, of something real.\n\nThis recipe is an argument for buying the best chicken you can find. There is no technique here that will save a mediocre bird. But take a good poulet fermier, rub it with olive oil and herbes de Provence, surround it with ripe tomatoes and a handful of olives from the market stall, and put it in a hot oven — and what comes out is one of the simplest, most deeply satisfying things you can cook in Provence.\n\nSummer is when this dish makes the most sense. The tomatoes are at their best in July and August. The herbs growing in pots on the terrace are at full intensity. The wine should be cold and the meal should be eaten outside.`,
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
    story: `The word tapenade comes from tapèno — the Provençal word for capers. But the olive is the soul of it. Without good olives, tapenade is just a paste. With them, it is something that has been made in the kitchens of this region for centuries, spread on bread, served with a glass of something cold, and eaten in the shade.\n\nEvery household in Provence has a version. Some are smooth, some are rough. Some add a dash of cognac. Some use green olives instead of black. The best ones come from people who have been making the same recipe since before they can remember, adjusting nothing because nothing needs adjusting.\n\nThis version is unapologetically simple. It wants good black olives — from the Nyons AOP if you can find them, with their mild, almost nutty flavour, or Greek Kalamata as an excellent alternative. The anchovy is not optional. It disappears completely but leaves a depth behind that you will notice if you leave it out.`,
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
    story: `This is the real daube — the version that takes two days and is worth every hour of them. In the old villages of Provence, the daube was not a weekday meal. It was a winter occasion. You made it when the hunting season had been good, when you had proper wine and time, and when the cold outside made the idea of something rich and dark and slow-cooked feel entirely necessary.\n\nThe word daube itself tells you something. It derives from the daubière — a tall, wide-bottomed clay pot with a tight-fitting lid, designed to sit in the embers of a hearth and barely simmer for hours. The clay absorbed and regulated heat in a way no metal pot could match. The result was meat that fell apart in threads, a sauce that had reduced to something glossy and profound, and a smell that filled the house from mid-afternoon until well after midnight.\n\nWild boar is the natural choice in the south. It has the strength of flavour and the texture to survive long cooking — in fact, it improves dramatically with time. The marinade is not optional. Give it a full 24 hours if you can. The red wine, the thyme, the rosemary — these are not flavourings added at the end. They become the dish.`,
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
    story: `The apéro in Provence is not a preliminary to the meal. It is a meal in its own right — or at least, it frequently becomes one. It begins around six in the evening, when the heat of the day has eased and someone produces a bottle of cold rosé. A bowl of olives appears. Then something to spread on bread. Then a few slices of saucisson. Before long it is nine o'clock and nobody is especially hungry for dinner.\n\nThe mackerel pâté earns its place at this table because it is serious. Smoked mackerel has a presence — oily, salty, deeply flavoured — that holds its own against a cold glass of wine in a way that more delicate spreads cannot. The crème fraîche softens it, the capers and shallots give it structure, and the lemon lifts everything.\n\nMake it the day before. It improves enormously overnight as the flavours settle and deepen. Serve it with toasted baguette, a few cornichons on the side, and no particular hurry to be anywhere.`,
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
    story: `The braai and the Provençal summer arrived at the same terrace by different routes. The braai is South African — a wood fire, a grill, and a philosophy about the right way to cook meat outdoors that involves patience, a cold drink, and the very firm view that gas does not count. The herbes de Provence are local: thyme, rosemary, savory, oregano growing wild in the garrigue, cut and dried and blended with the kind of confidence that only centuries of repetition produce.\n\nLamb is the natural meeting point. Provence has always eaten lamb — the flocks that graze on the high pastures of the Luberon and the Alpilles produce meat that is perfumed by the wild herbs underfoot. Marinated in olive oil and the herbs of the hillside, grilled over wood coals with a branch of rosemary thrown directly onto the embers for fragrance, these chops are as Provençal as anything that came out of a kitchen.\n\nThe only rule is wood coals. No exceptions.`,
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
