import type { Article, Recipe, Video } from '@/types';

export const articles: Article[] = [
  {
    slug: 'alpilles',
    title: 'The Beauty of Les Alpilles',
    excerpt:
      'The rugged charm of the Alpilles mountains, the olive groves, and the hidden villages that make Provence so magical.',
    content: `<p>Welcome to the countryside. In this first article, I'll take you through the rugged charm of the Alpilles mountains, the olive groves, and the hidden villages that make Provence so magical.</p>
<p>The Alpilles are a small limestone range that rise from the Crau plain like the spine of some ancient beast. They are not tall mountains - the highest point barely reaches 498 metres - but their presence is enormous. The white rock glares in the summer heat, and in winter they take on a pewter colour that makes the whole landscape look like an old engraving.</p>
<h2>The Olive Groves</h2>
<p>What makes the Alpilles special is not the rock but what grows around it. Ancient olive trees, twisted by centuries of mistral wind, cling to the hillsides. Some of these trees are over a thousand years old. They were here before the Crusaders passed through, before the Popes fled to Avignon, before everything we call history in this region.</p>
<p>In autumn, the olives ripen from green to black, and the harvest begins. Families come together to beat the branches with long poles, catching the fruit in nets spread below. The oil pressed from Alpilles olives has a distinctive peppery bite that catches the back of the throat - the hallmark of great Provençal olive oil.</p>
<h2>The Hidden Villages</h2>
<p>Les Baux-de-Provence clings to the cliffs of the Alpilles like an eagle's nest. In the Middle Ages it was a powerful lordship, home to troubadours and poets. Now it is a village of honey-coloured stone and breathtaking views. Come in September, before the crowds thin out completely, and you can still feel the weight of history in the narrow streets.</p>`,
    image: '/images/hero-alpilles.jpg',
    date: '2026-03-10',
    category: 'Provence',
    marcelTip: 'The best time to visit Les Alpilles is early morning, before the heat and the tourists arrive. Bring good shoes and a flask of something cold.',
    marcelType: 'default',
    fr: {
      title: 'La Beauté des Alpilles',
      excerpt: 'Le charme âpre des Alpilles, les oliveraies et les villages cachés qui font de la Provence un lieu si envoûtant.',
      content: `<p>Bienvenue à la campagne. Dans cet premier article, je vous emmène à travers le charme âpre des Alpilles, les oliveraies et les villages cachés qui font de la Provence un lieu si envoûtant.</p>
<p>Les Alpilles sont un petit massif calcaire qui surgit de la plaine de la Crau comme la colonne vertébrale d'une bête antique. Ce ne sont pas de hautes montagnes — le point culminant dépasse à peine les 498 mètres — mais leur présence est considérable. La roche blanche flamboie sous la chaleur estivale, et en hiver elle prend une teinte gris étain qui donne à tout le paysage l'apparence d'une vieille gravure.</p>
<h2>Les Oliveraies</h2>
<p>Ce qui rend les Alpilles singulières, ce n'est pas la roche, mais ce qui pousse à son pied. Des oliviers centenaires, tordus par des siècles de mistral, s'agrippent aux flancs des collines. Certains de ces arbres ont plus de mille ans. Ils étaient là avant que les Croisés ne passent, avant que les Papes ne fuient vers Avignon, avant tout ce que nous appelons l'histoire dans cette région.</p>
<p>En automne, les olives mûrissent du vert au noir, et la cueillette commence. Les familles se réunissent pour battre les branches avec de longues perches, récoltant les fruits dans des filets tendus en dessous. L'huile pressée des olives des Alpilles possède une note poivrée caractéristique qui saisit le fond de la gorge — la marque des grandes huiles d'olive provençales.</p>
<h2>Les Villages Cachés</h2>
<p>Les Baux-de-Provence s'accroche aux falaises des Alpilles comme un nid d'aigle. Au Moyen Âge, c'était une seigneurie puissante, foyer de troubadours et de poètes. C'est aujourd'hui un village de pierre couleur miel aux vues à couper le souffle. Venez en septembre, avant que les foules ne se dissipent tout à fait, et vous sentirez encore le poids de l'histoire dans les ruelles étroites.</p>`,
      marcelTip: `Le meilleur moment pour visiter les Alpilles, c'est tôt le matin, avant la chaleur et les touristes. Prenez de bonnes chaussures et une gourde bien fraîche.`,
    },
  },
  {
    slug: 'petanque',
    title: 'Pétanque: The Soul of the Village Square',
    excerpt: 'In the shade of the plane trees, on a dusty court, pétanque continues as it has for generations - unhurried, argumentative, and deeply French.',
    content: `<p>Every village in Provence has a terrain de pétanque. It is usually in the shade of a row of plane trees, on bare, packed earth, somewhere near the bar. On summer evenings, you will find men of all ages here - though increasingly women too - playing the game that has defined French rural leisure for more than a century.</p>
<p>Pétanque looks deceptively simple. Each player throws metal boules - heavy, satisfying spheres that clank together with a sound unlike any other - trying to land them as close as possible to the cochonnet, a small wooden jack. The team whose boules are closest when all have been thrown scores points. First to thirteen wins.</p>
<img src="/images/petanque-1.jpg" alt="Pétanque in Provence" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />
<h2>A Brief History</h2>
<p>The game was formalised in La Ciotat, near Marseille, in 1907. Legend has it that a player with rheumatism could no longer take the running steps that the earlier game required, so the rules were adapted to allow throwing from a stationary position - les pieds tanqués, feet planted. From that adaptation, the name pétanque was born.</p>
<p>But the roots go deeper. Boule games have been played across the Mediterranean since Greek and Roman times. The Provençal version simply refined and codified what rural communities had been doing for centuries - throwing things at other things, arguing about how close they were.</p>
<h2>The Ritual</h2>
<p>To watch a game of pétanque properly, you must understand that the game is as much about conversation as it is about boules. Every throw is debated. Every measurement is contested. The <em>baguette</em> - a small metal ruler used to settle disputes about distances - is produced with great ceremony and no small amount of theatre.</p>
<p>The best players have a repertoire of shots. The <em>pointer</em> rolls the boule gently towards the cochonnet. The <em>tirer</em> - or <em>shooter</em> - throws hard to knock an opponent's boule away. A perfectly executed shot that sends an opponent's boule flying while leaving your own in its place is called a <em>carreau</em>, and it is greeted with the kind of applause normally reserved for great sporting moments.</p>
<img src="/images/petanque-2.jpg" alt="Pétanque players in the village square" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />
<h2>Come and Play</h2>
<p>If you are in Provence and want to join a game, the etiquette is simple: watch for a few minutes, ask politely if you may join, and accept whatever side they put you on. Bring something to drink, because the game will last as long as the light holds. And do not argue too much about distances - that privilege is earned over years.</p>`,
    image: '/images/petanque-1.jpg',
    date: '2026-03-10',
    category: 'Traditions',
    marcelTip: 'If playing with a partner, discuss the shot beofore you throw. You don\'t want a "Oh la la" after a throw',
    marcelType: 'petanque',
    fr: {
      title: 'La Pétanque : l\'âme de la place du village',
      excerpt: `À l'ombre des platanes, sur un terrain poussiéreux, la pétanque se joue comme elle s'est toujours jouée — sans hâte, dans la dispute, et profondément française.`,
      content: `<p>Chaque village de Provence possède son terrain de pétanque. Il se trouve généralement à l'ombre d'une rangée de platanes, sur une terre nue et tassée, quelque part près du bar. Les soirs d'été, on y trouve des hommes de tous âges — et de plus en plus de femmes aussi — qui pratiquent ce jeu qui définit les loisirs ruraux français depuis plus d'un siècle.</p>
<p>La pétanque paraît d'une simplicité trompeuse. Chaque joueur lance des boules en métal — de lourdes sphères satisfaisantes qui s'entrechoquent avec un son unique au monde — en essayant de les poser aussi près que possible du cochonnet, un petit bouchon en bois. L'équipe dont les boules sont les plus proches lorsque toutes ont été lancées marque des points. Le premier à treize gagne.</p>
<img src="/images/petanque-1.jpg" alt="Pétanque en Provence" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />
<h2>Un peu d'histoire</h2>
<p>Le jeu a été codifié à La Ciotat, près de Marseille, en 1907. La légende veut qu'un joueur souffrant de rhumatismes ne pouvait plus effectuer les pas de course que l'ancien jeu exigeait, si bien que les règles furent adaptées pour permettre le lancer depuis une position fixe — les pieds tanqués. De cette adaptation naquit le nom pétanque.</p>
<p>Mais les racines sont plus profondes. Des jeux de boules se pratiquent sur tout le pourtour méditerranéen depuis l'Antiquité grecque et romaine. La version provençale a simplement affiné et codifié ce que les communautés rurales faisaient depuis des siècles — lancer des objets vers d'autres objets, puis se disputer pour savoir lequel est le plus proche.</p>
<h2>Le Rituel</h2>
<p>Pour bien regarder une partie de pétanque, il faut comprendre que le jeu est autant affaire de conversation que de boules. Chaque lancer est débattu. Chaque mesure est contestée. La <em>baguette</em> — une petite règle métallique pour trancher les litiges de distance — est sortie avec beaucoup de cérémonie et un brin de théâtre.</p>
<p>Les meilleurs joueurs disposent d'un répertoire de coups. Le <em>pointeur</em> fait rouler doucement la boule vers le cochonnet. Le <em>tireur</em> lance fort pour déloger la boule adverse. Un lancer parfaitement exécuté qui expédie la boule de l'adversaire loin de sa position tout en laissant la sienne à sa place s'appelle un <em>carreau</em>, et il est salué par le genre d'applaudissements habituellement réservé aux grands moments sportifs.</p>
<img src="/images/petanque-2.jpg" alt="Joueurs de pétanque sur la place du village" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />
<h2>Venez jouer</h2>
<p>Si vous êtes en Provence et souhaitez rejoindre une partie, le protocole est simple : observez quelques minutes, demandez poliment si vous pouvez vous joindre à eux, et acceptez le camp qu'on vous attribue. Apportez quelque chose à boire, car la partie durera aussi longtemps que la lumière. Et ne contestez pas trop les distances — ce privilège se mérite au fil des années.</p>`,
      marcelTip: `Si vous jouez en équipe, discutez du tir avant de lancer. Un "Oh là là" après coup, ça ne sert à rien.`,
    },
  },
  {
    slug: 'les-baux-de-provence',
    title: 'Les Baux: The Eagle\'s Nest of Provence',
    excerpt:
      'Perched on white cliffs above the Alpilles, Les Baux-de-Provence is one of the most remarkable villages in France.',
    content: `<p>Les Baux-de-Provence is not a village you stumble upon. It is a village you approach with intention, following the narrow road that winds up through the limestone outcrops until suddenly the medieval citadel appears above you, almost impossible, clinging to the cliff edge as if the builders were defying gravity itself.</p>
<p>The village is classified among the Plus Beaux Villages de France - the most beautiful villages in France - and rightly so. Every stone here has a story. The lords of Les Baux were powerful and sometimes terrifying figures in medieval Provence, claiming descent from the Magi of the Nativity and using a star as their heraldic symbol.</p>
<h2>The Old Town</h2>
<p>Today the village is wonderfully preserved. The honey-coloured limestone buildings glow in the afternoon sun. Boutiques sell lavender sachets and olive oil. Restaurants serve tapenade and daube. But walk to the edge of the village, away from the main street, and you can find quieter corners where the history is still palpable.</p>`,
    image: '/images/les_baux.jpg',
    date: '2026-03-11',
    category: 'Provence',
    marcelTip: 'Visit Les Baux on a Tuesday morning in summer. The coach parties haven\'t arrived yet and you can actually hear the wind in the ruins.',
    marcelType: 'rose',
    fr: {
      title: `Les Baux : le nid d'aigle de Provence`,
      excerpt: `Perché sur des falaises blanches dominant les Alpilles, Les Baux-de-Provence est l'un des villages les plus remarquables de France.`,
      content: `<p>Les Baux-de-Provence ne se découvre pas par hasard. On l'aborde avec intention, en suivant la route étroite qui serpente entre les rochers calcaires jusqu'au moment où la citadelle médiévale surgit au-dessus de soi, presque invraisemblable, accrochée au bord de la falaise comme si les bâtisseurs avaient voulu défier la gravité elle-même.</p>
<p>Le village figure parmi les Plus Beaux Villages de France — et à juste titre. Chaque pierre ici a son histoire. Les seigneurs des Baux étaient des figures puissantes et parfois redoutables dans la Provence médiévale, se réclamant de la descendance des Rois Mages et arborant une étoile comme emblème héraldique.</p>
<h2>Le vieux village</h2>
<p>Aujourd'hui, le village est admirablement préservé. Les bâtisses en calcaire couleur miel brillent dans la lumière de l'après-midi. Les boutiques vendent des sachets de lavande et de l'huile d'olive. Les restaurants servent de la tapenade et de la daube. Mais éloignez-vous de la rue principale, allez vers les marges du village, et vous trouverez des recoins plus silencieux où l'histoire reste encore palpable.</p>`,
      marcelTip: `Visitez Les Baux un mardi matin en été. Les cars de touristes ne sont pas encore arrivés et vous pouvez réellement entendre le vent souffler dans les ruines.`,
    },
  },
  {
    slug: 'olive-harvest',
    title: 'The Olive Harvest: An Ancient Ritual',
    excerpt:
      'Every November, the ancient olive harvest connects us to thousands of years of Mediterranean civilisation.',
    content: `<p>November in Provence means one thing above all others: the olive harvest. For three or four weeks, depending on the weather and the variety, the nets come out, the families gather, and the ancient rhythm asserts itself.</p>
<p>Our olives are the Aglandau variety - the classic Alpilles olive, prized for its oil with that characteristic peppery finish. The trees are old, some of them dating back a century or more. They don't produce every year with the same generosity. A good year can yield fifty kilos of olives from a single tree. A bad year, after late frost or summer drought, gives you almost nothing.</p>
<h2>The Mill</h2>
<p>Within 24 hours of picking, the olives go to the moulin - the mill. Time is everything with olive oil. Oxidation begins the moment the olive is separated from the tree, and every hour matters. The cooperative mill at Fontvieille opens in October and runs continuously until January, processing olives for farmers across the region.</p>`,
    image: '/images/hero-olives.jpg',
    date: '2026-03-11',
    category: 'Provence',
    marcelTip: 'The oil you press on the first day of harvest is the freshest, greenest, most peppery oil you will ever taste. Do not cook with it - pour it straight on bread.',
    marcelType: 'gardener',
    fr: {
      title: `La récolte des olives : un rituel millénaire`,
      excerpt: `Chaque novembre, la cueillette ancestrale des olives nous relie à des millénaires de civilisation méditerranéenne.`,
      content: `<p>En Provence, novembre ne rime qu'avec une chose : la récolte des olives. Pendant trois ou quatre semaines, selon la météo et la variété, les filets sortent, les familles se rassemblent, et le rythme ancien reprend ses droits.</p>
<p>Nos oliviers sont de la variété Aglandau — l'olive classique des Alpilles, réputée pour son huile à la finale poivrée si caractéristique. Les arbres sont vieux, certains datant d'un siècle ou plus. Ils ne produisent pas avec la même générosité chaque année. Une bonne année peut donner cinquante kilos d'olives sur un seul arbre. Une mauvaise année, après une gelée tardive ou une sécheresse estivale, ne donne presque rien.</p>
<h2>Le moulin</h2>
<p>Dans les vingt-quatre heures suivant la cueillette, les olives partent au moulin. Le temps est tout avec l'huile d'olive. L'oxydation commence dès l'instant où l'olive est séparée de l'arbre, et chaque heure compte. Le moulin coopératif de Fontvieille ouvre en octobre et tourne sans relâche jusqu'en janvier, traitant les olives des agriculteurs de toute la région.</p>`,
      marcelTip: `L'huile que vous pressez le premier jour de la récolte est la plus fraîche, la plus verte, la plus poivrée que vous goûterez jamais. Ne la faites pas cuire — versez-la directement sur du pain.`,
    },
  },
  {
    slug: 'spring-in-provence-luberon',
    title: 'Spring in Provence: Hope, Rosé, and an Unreasonable Amount of Weeding',
    excerpt:
      'The almond trees are blooming, the potager is waiting, and the weekend rain has clearly made plans. Life in Les Alpilles as spring finally arrives.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">Life in Les Alpilles</p>

<h2>The First Whisper of Spring</h2>
<p>It begins subtly. One morning in late February, you step outside and something is different - not warm exactly, but less aggressively cold. The sky is doing that particular Provençal thing where it's simultaneously blue and apologetic, as if winter itself is clearing its throat to say it might, possibly, be nearly done. You don't want to get your hopes up. Winter has done this before. It's basically a tease in velvet fog.</p>
<p>And then you see it: the almond trees are blooming.</p>
<p>Not all at once - they're too dignified for that. It starts with one or two shy blossoms on a single branch, like a diver testing the water with a toe. Then, over the course of a week or so, the whole tree explodes in delicate white and pink, and suddenly the landscape that has spent three months looking like a charcoal sketch is hosting a full-colour renaissance. The almond trees are Provence's opening act, and they never disappoint.</p>
<p>Then the green arrives. First in timid patches - a flush of new leaves here, a brave clump of grass there. Then it's everywhere, carpeting the garrigue, climbing the walls, filling in all the brown spaces winter left behind. The world, which has been very convincingly dead for several months, turns out to have been merely sleeping. Which is reassuring, really.</p>

<img src="/images/springtime1.jpg" alt="Spring panorama in Les Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Dream: L'Apéro on the Terrace</h2>
<p>This is the point at which your mind, drunk on blossom and optimism, begins to wander. You are standing in the garden, still wearing two jumpers, but mentally you are already at a different version of this exact spot - it is July, the cicadas are providing enthusiastic background noise, and you are installed on the terrace with a glass of cold rosé, sweat forming on the outside of the bottle, a small plate of cornichons glistening like jewels, and a few slices of saucisson fanned out with entirely unnecessary elegance.</p>
<p>This vision is so powerful, so vivid, so deeply motivating, that it will carry you through approximately four months of actual physical labour. Which brings us, somewhat abruptly, to the other side of spring in Provence.</p>

<img src="/images/springtime2.jpg" alt="The potager in early spring" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Reality: 600 Square Metres of Opinion</h2>
<p>The potager is waiting. It has been waiting all winter, quietly accumulating damage like an invoice you've been avoiding. Six hundred square metres of kitchen garden - which sounded romantic when you moved to Provence and sounds somewhat less romantic when you are facing it in early March with a rake and a bad back.</p>
<p>The soil needs turning. The beds need clearing. Whatever that thing was that didn't work last year - the courgettes that staged a worker's revolt, the tomatoes that got some unpronounceable blight, the salad that immediately bolted in protest - needs to be rethought. You have plans. Clever plans. Crop rotation. Better drainage. A new trellising system that you have drawn in a notebook and are quietly proud of. Whether any of this will survive contact with actual ground remains, as ever, to be seen.</p>
<p>The compost heap has strong feelings about the situation and is making them known.</p>

<h2>The Scheduling Problem (A Comedy)</h2>
<p>Here is where Provençal spring, lovely as it is, reveals a certain sadistic streak. The weather has apparently consulted your calendar.</p>
<p>During the week - when you are sitting at a desk, or on calls, or doing all the things that constitute modern working life - the sun pours down in a manner that is frankly provocative. The light is extraordinary. The temperature is ideal. The garden is simply begging to be tended. You can see it from the window. You make a note to yourself that this weekend, finally, you will get everything done.</p>
<p>The weekend arrives. So does the rain. Not polite, apologetic drizzle, but committed, load-bearing rain that has clearly made plans and intends to keep them. You stand at the window in your wellies, coffee in hand, staring at the sky with the expression of someone who has been personally wronged.</p>
<p>This is not a coincidence. This is just spring.</p>

<h2>And Then There Are the Parents</h2>
<p>April, naturally, is when the parents arrive. This is wonderful - genuinely wonderful - but it does introduce a small logistical wrinkle, which is that they will be sleeping in a room that currently has wallpaper that needs to come off and a wall that needs plastering. These are not decorative choices. These are facts about the room in its current condition.</p>
<p>So we add to the spring agenda: strip wallpaper, hire (or, more likely, become) a plasterer, paint, dry, furnish. Alongside the potager preparation, the composting, the bed rotations, and the ongoing negotiation with the courgettes. All of this while the sun shines mockingly Monday through Friday and the rain commits itself wholeheartedly to the weekends.</p>
<p>Time is, as they say, limited.</p>

<img src="/images/springtime3.jpg" alt="Spring in Provence" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>And Yet</h2>
<p>Here's the thing about spring in Provence: it is, despite all of the above, genuinely magnificent. The light at six in the evening when the clouds clear. The smell of the earth after a morning of rain. The first evening warm enough to eat outside - really outside, without regret - with a simple meal and the birds making an unreasonable amount of noise about it.</p>
<p>The almond trees don't know about the potager. The new green leaves don't care about the wallpaper. They're just doing what they do every year: waking up, stretching, getting on with it.</p>
<p>We could probably learn something from that.</p>
<p><em>Now if you'll excuse me, I have a wall to plaster.</em></p>
<p class="text-charcoal/50 text-sm mt-8">Provence, March 2026</p>`,
    image: '/images/springtime1.jpg',
    date: '2026-03-12',
    category: 'Potager',
    tags: ['Provence', 'Potager'],
    marcelTip: 'Do not turn the soil too early. Wait until it stops sticking to your boots. Cold, wet soil that gets compacted will take the whole season to recover.',
    marcelType: 'gardener',
    fr: {
      title: `Le printemps en Provence : espoir, rosé et une quantité déraisonnable de désherbage`,
      excerpt: `Les amandiers sont en fleurs, le potager attend, et la pluie du week-end a visiblement d'autres projets. La vie aux Alpilles quand le printemps arrive enfin.`,
      content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">La vie aux Alpilles</p>

<h2>Les premiers souffles du printemps</h2>
<p>Ça commence discrètement. Un matin de fin février, vous sortez dehors et quelque chose a changé — pas chaud à proprement parler, mais moins agressivement froid. Le ciel fait cette chose toute provençale où il est à la fois bleu et comme contrit, comme si l'hiver lui-même se raclait la gorge pour signaler qu'il pourrait, peut-être, être presque terminé. On ne veut pas se faire d'illusions. L'hiver a déjà fait ça. C'est un séducteur en brume de velours.</p>
<p>Et puis vous le voyez : les amandiers sont en fleurs.</p>
<p>Pas tous en même temps — ils ont trop de dignité pour ça. Ça commence par une ou deux timides fleurs sur une seule branche, comme un plongeur qui teste l'eau du bout du pied. Puis, en l'espace d'une semaine environ, tout l'arbre éclate en blanc et rose délicat, et soudain le paysage qui avait passé trois mois à ressembler à un dessin au fusain accueille une renaissance en couleur. Les amandiers sont l'acte d'ouverture de la Provence, et ils ne déçoivent jamais.</p>
<p>Ensuite vient le vert. D'abord en petites taches timides — un frémissement de feuilles nouvelles ici, une touffe d'herbe courageuse là. Puis il est partout, tapissant la garrigue, escaladant les murs, comblant tous les espaces bruns que l'hiver a laissés derrière lui. Le monde, qui avait de façon très convaincante semblé mort pendant plusieurs mois, s'avère avoir simplement dormi. Ce qui est, en vérité, rassurant.</p>

<img src="/images/springtime1.jpg" alt="Panorama printanier aux Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>Le rêve : l'apéro sur la terrasse</h2>
<p>C'est à ce stade que l'esprit, enivré de fleurs et d'optimisme, commence à vagabonder. Vous êtes dans le jardin, encore en deux pulls, mais mentalement vous êtes déjà dans une version différente de ce même endroit — c'est juillet, les cigales assurent un fond sonore enthousiaste, et vous êtes installé sur la terrasse avec un verre de rosé bien frais, la condensation perlant sur la bouteille, une petite assiette de cornichons brillants comme des joyaux, et quelques tranches de saucisson dressées avec une élégance tout à fait superflue.</p>
<p>Cette vision est si puissante, si vivace, si profondément motivante qu'elle vous portera à travers environ quatre mois de labeur physique. Ce qui nous amène, assez abruptement, à l'autre face du printemps en Provence.</p>

<img src="/images/springtime2.jpg" alt="Le potager au début du printemps" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>La réalité : six cents mètres carrés de caractère</h2>
<p>Le potager attend. Il a attendu tout l'hiver, accumulant silencieusement les dégâts comme une facture qu'on évite d'ouvrir. Six cents mètres carrés de jardin potager — ce qui sonnait romanesque quand on s'est installé en Provence et sonne nettement moins romanesque quand on lui fait face début mars avec un râteau et un dos fragile.</p>
<p>La terre doit être retournée. Les planches doivent être nettoyées. Tout ce qui n'a pas marché l'année dernière — les courgettes qui ont fait une grève générale, les tomates victimes d'un mildiou imprononçable, la salade qui a monté en graine par protestation — doit être repensé. On a des plans. Des plans intelligents. Rotation des cultures. Meilleur drainage. Un nouveau système de palissage dessiné dans un carnet et dont on est secrètement fier. Si tout cela survivra au contact du sol réel, c'est, comme toujours, une autre histoire.</p>
<p>Le tas de compost a des opinions bien arrêtées sur la situation et les fait savoir.</p>

<h2>Le problème d'agenda (une comédie)</h2>
<p>C'est là que le printemps provençal, charmant qu'il soit, révèle une certaine veine sadique. La météo a visiblement consulté votre agenda.</p>
<p>En semaine — quand vous êtes derrière un bureau, en réunion, en train de faire tout ce qui constitue la vie professionnelle moderne — le soleil déverse sa lumière de façon franchement provocatrice. La lumière est extraordinaire. La température est idéale. Le jardin ne demande qu'à être soigné. Vous le voyez depuis la fenêtre. Vous vous faites une note mentale : ce week-end, enfin, vous ferez tout ce qu'il faut faire.</p>
<p>Le week-end arrive. La pluie aussi. Pas une bruine polie et désolée, mais une pluie engagée, portante, qui a clairement des projets et entend les honorer. Vous vous tenez à la fenêtre en bottes, café à la main, regardant le ciel avec l'expression de quelqu'un qui vient d'être personnellement trahi.</p>
<p>Ce n'est pas une coïncidence. C'est simplement le printemps.</p>

<h2>Et puis il y a les parents</h2>
<p>Avril, naturellement, est le mois où arrivent les parents. Ce qui est merveilleux — vraiment merveilleux — mais introduit un léger problème logistique : ils vont dormir dans une chambre dont le papier peint doit encore être arraché et le mur replâtré. Ce ne sont pas des choix décoratifs. Ce sont des faits sur l'état actuel de la pièce.</p>
<p>On ajoute donc à l'agenda printanier : décoller le papier peint, trouver (ou devenir) un plâtrier, peindre, laisser sécher, meubler. Le tout en parallèle de la préparation du potager, du compostage, de la rotation des planches, et de la négociation permanente avec les courgettes. Pendant que le soleil brille de façon moqueuse du lundi au vendredi et que la pluie se consacre avec enthousiasme aux week-ends.</p>
<p>Le temps est, comme on dit, compté.</p>

<img src="/images/springtime3.jpg" alt="Le printemps en Provence" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>Et pourtant</h2>
<p>Voilà ce qu'il en est du printemps en Provence : il est, malgré tout ce qui précède, véritablement magnifique. La lumière à six heures du soir quand les nuages se dispersent. L'odeur de la terre après une matinée de pluie. Le premier soir assez doux pour manger dehors — vraiment dehors, sans regret — avec un repas simple et les oiseaux qui font un vacarme absolument déraisonnable.</p>
<p>Les amandiers ne savent rien du potager. Les nouvelles feuilles se moquent du papier peint. Ils font simplement ce qu'ils font chaque année : se réveiller, s'étirer, continuer.</p>
<p>On pourrait sans doute en tirer une leçon.</p>
<p><em>Si vous voulez bien m'excuser, j'ai un mur à plâtrer.</em></p>
<p class="text-charcoal/50 text-sm mt-8">Provence, mars 2026</p>`,
      marcelTip: `Ne retournez pas la terre trop tôt. Attendez qu'elle cesse de coller à vos bottes. Une terre froide et compactée mettra toute la saison à se remettre.`,
    },
  },
  {
    slug: 'jan-tamatie',
    title: 'Jan Tamatie Would Be Proud',
    excerpt:
      'On growing real tomatoes, honouring your grandfather, and the quiet tragedy of the supermarket tomato. Life at Die Plaas.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">Life at Die Plaas</p>

<h2>An Apology on Behalf of the Supermarket Tomato</h2>
<p>Let us begin with a moment of honesty. The tomato you buy in a plastic netting - straight from a greenhouse of either Spain or Morocco, perfectly round, uniformly red, and completely devoid of any opinion about being eaten - is not really a tomato. It is an excuse for a tomato. A tomato that has been optimised for travel, shelf-life, and visual consistency, and has sacrificed everything else at that particular altar. It doesn't smell of anything. It tastes of nothing much. Cut it open and it stares back at you with the blank expression of something that has given up.</p>
<p>We eat them, of course, because they're there. But we don't talk about them. Nobody has ever bitten into a supermarket tomato and been transported anywhere.</p>

<h2>Jan Tamatie</h2>
<p>My grandfather was a farmer in South Africa. He grew tomatoes and grapes, and he was apparently so well-known for the former that people called him Jan Tamatie - Jan Tomato. I didn't think about that name much when I was a child, standing on his farm eating tomatoes straight from the vine with a pinch of rock salt. It just seemed normal. Of course tomatoes tasted like that. What else would they taste like?</p>
<p>The answer, I discovered some decades later in a French supermarket, is: considerably less.</p>
<p>It was 2018. We were living in Provence, our neighbour had a corner of garden going spare, and I had two small raised beds - 1m x 1.2m each, not exactly Die Plaas - and a modest ambition. I wanted to show my children where food actually comes from. I planted some cherry tomatoes and a few beefsteaks, tended them with perhaps more enthusiasm than expertise, and waited.</p>
<p>The first ripe tomato of that summer, I picked early in the morning while it was still warm from the previous day's sun. I ate it standing in the garden, still in my pyjamas, with no salt, no ceremony, no audience.</p>
<p>I was immediately eight years old again, standing on my grandfather's farm.</p>
<p>That was it. That was the moment. Jan Tamatie had a lot to answer for.</p>

<h2>From Two Raised Beds to Die Plaas</h2>
<p>The two small beds became a 50m² potager. The potager eventually became something altogether more serious - a large kitchen garden that our family now calls Die Plaas. Our Farm. It is not a metaphor. It is, genuinely, our farm. Small by farming standards, enormous by the standards of what two people can reasonably maintain while also holding down jobs and raising children, but ours entirely.</p>
<p>The tomatoes are the heart of it. Every year, as the season turns, we make the trip together as a family to the pépinière - the local plant nursery - to choose the seedlings. Cherry tomatoes. Beefsteaks. Heirlooms in colours that range from deep crimson to a slightly alarming orange-yellow. We take the choosing seriously. We discuss the merits of various varieties with a solemnity that might seem disproportionate to people who have never grown their own food, and seems entirely proportionate to people who have.</p>
<p>Planting day is an occasion. Everyone has a role. Photos are taken. Plans are made. Standing there with your hands in the soil, looking at a row of small seedlings that will, in three months, be taller than you and producing more tomatoes than you know what to do with - it is quietly one of the better days of the year.</p>
<img src="/images/planting_day.png" alt="Planting day at Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Fish Trench (Which Sounds Worse Than It Is)</h2>
<p>I should mention the fish scraps.</p>
<p>Our local supermarket has a fishmonger who is very understanding about the needs of the committed kitchen gardener. Before planting season, I collect the fish scraps - heads, bones, the parts that would otherwise go to waste - and bury them in a deep trench beneath where the tomatoes will eventually go. It is an ancient technique. The nitrogen and phosphorus that break down from the fish feed the roots over the whole growing season in a slow, patient way that no bag of fertiliser can quite replicate.</p>
<p>The tomatoes, for their part, don't seem to mind where their nutrients come from. They just grow. Vigorously. Enthusiastically. Without the faintest concern for my wife's entirely reasonable position on how many plants is too many plants.</p>

<h2>The Annual Negotiation (24 Plants or Bust)</h2>
<p>My wife is a sensible person. She understands that tomato plants, left unchecked, have imperialist ambitions. She knows that 24 plants will already produce more tomatoes than any household can eat fresh, more than we can dehydrate, more than we can preserve in olive oil - and we do all three. She has done the maths.</p>
<p>I, meanwhile, have also done the maths, and arrived at a different answer. My maths involves the memory of a morning in 2018, a warm tomato, and a grandfather who farmed and sold them for a living. My maths says: more.</p>
<p>We compromise, as one does in a long marriage, on her number. And then I plant a few extra at the far end of the bed and hope she doesn't count.</p>
<p><em>(She counts.)</em></p>

<h2>Twice a Week, and Worth Every Minute</h2>
<p>The watering happens twice a week. It sounds simple, and it is - but there is something about the rhythm of it that becomes, over the course of a summer, almost meditative. You walk the rows. You check the plants. You pinch off the lateral shoots (or you mean to, and then you don't, and then you have a plant that is attempting to become a tree). You watch the green fruits slowly blush, first at the shoulders, then all the way through.</p>
<p>When the first tomatoes of summer are ready, we make salads that need nothing more than good olive oil, a scattering of fleur de sel, and a few torn basil leaves. Later in the season, when the abundance becomes genuinely overwhelming, we slice them and lay them in the dehydrator - and those dehydrated tomatoes, preserved in olive oil with a little thyme and garlic, will make January pasta considerably more bearable.</p>
<p>The children, who have grown up doing this, eat tomatoes from the vine without thinking anything special of it. Which is exactly right. This should be normal.</p>
<img src="/images/t1.jpg" alt="Tomatoes ripening on the vine at Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>What a Real Tomato Tastes Like</h2>
<p>It tastes like summer in Provence. It tastes like soil that was properly fed and plants that were properly tended. It tastes like the decision, six years ago, to put two small raised beds in a neighbour's garden and see what happened.</p>
<p>It tastes like standing on a farm in South Africa as a child, holding something warm from the vine.</p>
<p>The Spanish tomato, perfectly round and perfectly empty, will still be there in the supermarket. It will always be there. But once you've grown your own - once you've knelt in the dirt at planting day with your family around you, once you've smelled the particular green smell of tomato leaves on your hands, once you've eaten the first one still warm from the sun - you understand what all the fuss is about.</p>
<p>Jan Tamatie knew. He always knew.</p>
<img src="/images/t2.jpg" alt="Fresh tomatoes from Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p class="text-charcoal/50 text-sm mt-8">Provence, Spring 2026 · Die Plaas</p>`,
    image: '/images/t2.jpg',
    date: '2026-03-13',
    category: 'Potager',
    tags: ['Provence', 'Potager'],
    marcelTip: 'Bury fish scraps deep under your tomato beds before planting. The old farmers knew this trick centuries before anyone invented fertiliser. The tomatoes know it too.',
    marcelType: 'gardener',
    fr: {
      title: `Jan Tamatie serait fier`,
      excerpt: `Sur l'art de cultiver de vraies tomates, d'honorer son grand-père, et la tragédie silencieuse de la tomate de supermarché. La vie à Die Plaas.`,
      content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">La vie à Die Plaas</p>

<h2>Plaidoyer coupable au nom de la tomate de supermarché</h2>
<p>Commençons par un aveu. La tomate que vous achetez sous filet plastique — sortie d'une serre espagnole ou marocaine, parfaitement ronde, uniformément rouge, et totalement dépourvue du moindre avis sur le fait d'être mangée — n'est pas vraiment une tomate. C'est une excuse de tomate. Une tomate optimisée pour le transport, la conservation et la régularité visuelle, qui a tout sacrifié sur cet autel-là. Elle ne sent rien. Elle ne goûte presque rien. Coupez-la en deux et elle vous regarde avec l'expression vide de quelque chose qui a renoncé.</p>
<p>On les mange, bien sûr, parce qu'elles sont là. Mais on n'en parle pas. Personne n'a jamais mordu dans une tomate de supermarché et s'est retrouvé transporté ailleurs.</p>

<h2>Jan Tamatie</h2>
<p>Mon grand-père était fermier en Afrique du Sud. Il cultivait des tomates et des raisins, et il était paraît-il si connu pour les premières que les gens l'appelaient Jan Tamatie — Jan Tomate. Je n'y prêtais pas attention quand j'étais enfant, debout sur sa ferme à manger des tomates directement sur le plant avec une pincée de gros sel. C'était normal. Bien sûr que les tomates avaient ce goût-là. Quel autre goût auraient-elles eu ?</p>
<p>La réponse, je l'ai découverte quelques décennies plus tard dans un supermarché français : considérablement moins.</p>
<p>C'était en 2018. Nous vivions en Provence, notre voisin avait un coin de jardin disponible, et j'avais deux petites buttes — 1 m x 1,2 m chacune, rien à voir avec Die Plaas — et une ambition modeste. Je voulais montrer à mes enfants d'où vient vraiment la nourriture. J'ai planté des tomates cerises et quelques cœurs de bœuf, je les ai soignées avec peut-être plus d'enthousiasme que de savoir-faire, et j'ai attendu.</p>
<p>La première tomate mûre de cet été-là, je l'ai cueillie tôt le matin pendant qu'elle était encore tiède du soleil de la veille. Je l'ai mangée debout dans le jardin, encore en pyjama, sans sel, sans cérémonie, sans témoin.</p>
<p>J'avais immédiatement huit ans, debout sur la ferme de mon grand-père.</p>
<p>Voilà. C'était ça, le moment. Jan Tamatie avait beaucoup à répondre.</p>

<h2>Des deux petites buttes à Die Plaas</h2>
<p>Les deux petites buttes sont devenues un potager de 50 m². Le potager est devenu quelque chose de nettement plus sérieux — un grand jardin potager que notre famille appelle désormais Die Plaas. Notre Ferme. Ce n'est pas une métaphore. C'est, réellement, notre ferme. Petite à l'échelle agricole, considérable à l'échelle de ce que deux personnes peuvent raisonnablement entretenir tout en travaillant et en élevant des enfants, mais entièrement nôtre.</p>
<p>Les tomates en sont le cœur. Chaque année, lorsque la saison tourne, nous faisons ensemble, en famille, le voyage à la pépinière locale pour choisir les plants. Tomates cerises. Cœurs de bœuf. Des variétés anciennes aux couleurs allant du cramoisi profond à un jaune-orangé légèrement alarmant. Nous prenons ce choix au sérieux. Nous débattons des mérites de chaque variété avec une solennité qui peut sembler disproportionnée à ceux qui n'ont jamais fait pousser leurs propres légumes, et qui semble tout à fait proportionnée à ceux qui l'ont fait.</p>
<p>Le jour de la plantation est un événement. Chacun a son rôle. On prend des photos. On fait des plans. Se tenir là, les mains dans la terre, regarder un rang de petits plants qui seront, dans trois mois, plus grands que soi et produiront plus de tomates qu'on ne sait qu'en faire — c'est, silencieusement, l'un des meilleurs jours de l'année.</p>
<img src="/images/planting_day.png" alt="Le jour de la plantation à Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>La tranchée aux poissons (qui sonne pire que ce n'est)</h2>
<p>Je dois mentionner les déchets de poisson.</p>
<p>Notre supermarché local a un poissonnier très compréhensif quant aux besoins du jardinier potager sérieux. Avant la saison de plantation, je collecte les chutes de poisson — têtes, arêtes, les parties qui iraient autrement à la poubelle — et les enterre dans une tranchée profonde à l'emplacement prévu des tomates. C'est une technique ancestrale. L'azote et le phosphore issus de la décomposition du poisson nourrissent les racines tout au long de la saison de croissance, lentement et patiemment, d'une façon qu'aucun sac d'engrais ne peut tout à fait reproduire.</p>
<p>Les tomates, de leur côté, ne semblent pas se soucier de la provenance de leurs nutriments. Elles poussent. Vigoureusement. Avec enthousiasme. Sans la moindre considération pour la position tout à fait raisonnable de mon épouse sur le nombre de plants qui constitue un excès.</p>

<h2>La négociation annuelle (24 plants ou rien)</h2>
<p>Mon épouse est une personne sensée. Elle sait que les plants de tomates, laissés sans contrôle, ont des ambitions impérialistes. Elle sait que 24 plants produiront déjà plus de tomates qu'un foyer ne peut en manger frais, plus qu'on ne peut en déshydrater, plus qu'on ne peut en conserver dans l'huile d'olive — et on fait les trois. Elle a fait le calcul.</p>
<p>Moi aussi j'ai fait le calcul, et je suis arrivé à une réponse différente. Mon calcul intègre le souvenir d'un matin de 2018, une tomate encore tiède, et un grand-père qui en cultivait et en vendait pour vivre. Mon calcul dit : davantage.</p>
<p>Nous nous accordons, comme il se doit dans un long mariage, sur son chiffre. Puis je plante quelques plants supplémentaires au bout du rang en espérant qu'elle ne compte pas.</p>
<p><em>(Elle compte.)</em></p>

<h2>Deux fois par semaine, et chaque minute en vaut la peine</h2>
<p>L'arrosage se fait deux fois par semaine. Ça semble simple, et ça l'est — mais il y a quelque chose dans ce rythme qui devient, au fil d'un été, presque méditatif. On parcourt les rangs. On observe les plants. On pince les gourmands (ou on a l'intention de le faire, puis on ne le fait pas, et on se retrouve avec un plant qui cherche à devenir un arbre). On regarde les fruits verts rougir lentement, d'abord aux épaules, puis jusqu'au cœur.</p>
<p>Quand les premières tomates de l'été sont prêtes, on fait des salades qui n'ont besoin de rien d'autre qu'une bonne huile d'olive, quelques grains de fleur de sel et quelques feuilles de basilic froissées. Plus tard dans la saison, quand l'abondance devient véritablement écrasante, on les tranche et on les étale dans le déshydrateur — et ces tomates séchées, conservées dans l'huile d'olive avec un peu de thym et d'ail, rendront les pâtes de janvier nettement plus supportables.</p>
<p>Les enfants, qui ont grandi avec ça, mangent des tomates sur le plant sans trouver ça extraordinaire. Ce qui est exactement juste. Ça devrait être normal.</p>
<img src="/images/t1.jpg" alt="Tomates qui mûrissent sur le plant à Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>Ce que goûte une vraie tomate</h2>
<p>Elle goûte l'été en Provence. Elle goûte une terre correctement nourrie et des plants correctement soignés. Elle goûte la décision, il y a six ans, de poser deux petites buttes dans le jardin d'un voisin et de voir ce qu'il se passerait.</p>
<p>Elle goûte debout sur une ferme en Afrique du Sud, enfant, tenant quelque chose de chaud cueilli sur le plant.</p>
<p>La tomate espagnole, parfaitement ronde et parfaitement vide, sera toujours là dans les supermarchés. Elle y sera toujours. Mais une fois qu'on a cultivé les siennes — une fois qu'on s'est agenouillé dans la terre le jour de la plantation avec sa famille autour de soi, une fois qu'on a senti l'odeur verte caractéristique des feuilles de tomate sur ses mains, une fois qu'on en a mangé une encore tiède du soleil — on comprend de quoi il s'agit vraiment.</p>
<p>Jan Tamatie le savait. Il l'a toujours su.</p>
<img src="/images/t2.jpg" alt="Tomates fraîches de Die Plaas" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p class="text-charcoal/50 text-sm mt-8">Provence, printemps 2026 · Die Plaas</p>`,
      marcelTip: `Enterrez des déchets de poisson profondément sous vos buttes de tomates avant la plantation. Les vieux paysans connaissaient cette astuce des siècles avant qu'on invente les engrais. Les tomates, elles, l'ont toujours su.`,
    },
  },
  {
    slug: 'la-chasse-hunting-in-france',
    title: 'La Chasse: Hunting in France',
    excerpt:
      'In Provence, the hunt is a team sport, a tradition, and a way of life. A hunter of Les Alpilles on wild boar, the battue, and why none of it happens without trust.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">La Chasse · Les Alpilles</p>

<p class="font-body text-xl text-charcoal/80 italic leading-relaxed mb-8 border-l-4 border-amber pl-5">I grew up hunting. I am not going to apologise for it. Mankind grew stronger and smarter because we ate meat - and the hunt is as old as humanity itself.</p>

<p>My introduction to hunting came early, in South Africa, where the bush teaches you patience, respect for the animal, and a sharp awareness of everything around you. But hunting in France - and in Provence in particular - is something else entirely. It is, first and foremost, a <em>team sport</em>.</p>
<p>Forget the solitary figure in a tree stand or hunter stalking in the bush. Here, the hunt is a collective act, woven into the social fabric of rural life, governed by strict rules, ancient customs, and a great deal of good-natured argument over coffee before dawn.</p>

<h2>The Animal: Wild Boar of Les Alpilles</h2>
<p>In Provence, our main quarry is the <em>sanglier</em> - the wild boar. Do not underestimate it. These are canny, intelligent animals, with an acute sense of smell that puts most hunting dogs to shame. They are also, when their numbers go unchecked, genuinely destructive. A surpopulation in any area can have devastating consequences for farmers and landowners: rooted-up vineyards, ravaged olive groves, ruined pasture.</p>
<p>The boar is not a passive participant in this arrangement. It learns, adapts, and frequently wins. We hunt in the vast, rocky garrigue of Les Alpilles - a landscape of limestone ridges, dense scrub oak, and deep valleys that is as much the boar's home as ours. The distances between hunters on their posts can stretch to 500 metres or more. Shots are not guaranteed. The animals escape, often. This is as it should be.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70">The boar never gets shot on the road. Oh no - it gets shot down in the valleys. The terrain is always against you.</blockquote>
<img src="/images/hunting1/h1.jpg" alt="Wild boar hunting in Les Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Structure of the Hunt</h2>
<p>Every hunt has its hierarchy and its roles, as fixed and functional as any well-run operation. At the top sits <strong>le chef de battue</strong> - the Hunt Boss - who knows the ground, reads the signs, and assigns positions before anyone sets foot in the field. His word is final.</p>
<p>The hunters divide into two groups. <strong>Postiers</strong> are the shooters: they walk to assigned positions - their posts - chosen by le chef de battue and wait in silence, reading the wind and the light. <strong>Piqueurs</strong>, the drivers, move through the hunting area with dogs, pushing boar from their daytime shelters and driving them toward the waiting postiers.</p>
<p>The whole area is well-signalled. Safety is non-negotiable - it is not a suggestion or an afterthought, but the first order of business at every briefing. We do everything in our power to run a safe hunt. This is not sport shooting in a gallery. It demands discipline, awareness, and trust between every person in the field.</p>
<img src="/images/hunting1/h2.jpg" alt="Hunters in the garrigue of Les Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>After the Shot: The Hard Work Begins</h2>
<p>When a boar is taken, the work is only half done. A mature sanglier is a heavy, solid animal, and it will never oblige you by dropping somewhere convenient. The terrain ensures that. You attach a rope to the animal's head and you drag - through the maquis, through the scrub, up the valley walls. In the old days, donkeys did this work. Now, we are the donkeys.</p>
<p>There is something honest about it. The effort of recovery is part of the contract: if you harvest an animal, you do not leave it where it fell.</p>

<h2>Back at the Club: Sharing the Harvest</h2>
<p>The hunting club is where the day ends and the real Provençal ritual begins. The boars are emptied and skinned with practiced hands, and then the meat is distributed - among the hunters, the landowners, friends, and neighbours. Nothing is wasted. Nothing is hoarded.</p>
<p>Wild boar meat is something to be proud of. It is dark, rich, and full of character - the taste of a free animal that ate acorns and roots in the garrigue. In Provençal kitchens it becomes civet, daube, terrines, and ragouts. It ends up in the slow-cooked, wine-braised dishes that belong to this landscape as much as lavender and thyme.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70">The meat is treasured. It passes through many hands before it reaches the table - and every one of those hands earned it.</blockquote>

<p class="text-charcoal/50 text-sm mt-8">Les Alpilles, Provence · La Chasse</p>`,
    image: '/images/hunting1/h1.jpg',
    date: '2026-03-13',
    category: 'Traditions',
    tags: ['Hunting', 'Traditions', 'Les Alpilles'],
    marcelTip: 'Never wear blue while boar hunting in the garrigue. The sanglier cannot see red, but blue stands out. Trust the old hunters - they did not survive this long by accident.',
    marcelType: 'hunter',
    fr: {
      title: `La Chasse : chasser en France`,
      excerpt: `En Provence, la chasse est un sport d'équipe, une tradition et un art de vivre. Un chasseur des Alpilles parle du sanglier, de la battue, et de pourquoi rien de tout cela n'est possible sans la confiance.`,
      content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">La Chasse · Les Alpilles</p>

<p class="font-body text-xl text-charcoal/80 italic leading-relaxed mb-8 border-l-4 border-amber pl-5">J'ai grandi à la chasse. Je ne m'en excuserai pas. L'humanité s'est développée et affûtée parce qu'elle mangeait de la viande — et la chasse est aussi vieille que l'humanité elle-même.</p>

<p>Mon initiation à la chasse est venue tôt, en Afrique du Sud, où la brousse vous apprend la patience, le respect de l'animal, et une conscience aiguë de tout ce qui vous entoure. Mais chasser en France — et en Provence en particulier — est une tout autre chose. C'est avant tout un <em>sport d'équipe</em>.</p>
<p>Oubliez le chasseur solitaire dans son mirador. Ici, la chasse est un acte collectif, tissé dans le tissu social de la vie rurale, régi par des règles strictes, des coutumes ancestrales, et de nombreux débats bienveillants autour d'un café avant l'aube.</p>

<h2>L'animal : le sanglier des Alpilles</h2>
<p>En Provence, notre gibier principal est le <em>sanglier</em>. Ne le sous-estimez pas. Ce sont des animaux rusés et intelligents, dotés d'un odorat qui ferait honte à la plupart des chiens de chasse. Ils sont aussi, quand leur population n'est pas contrôlée, véritablement destructeurs. Une surpopulation dans une zone peut avoir des conséquences dévastatrices pour les agriculteurs et les propriétaires : vignobles retournés, oliveraies ravagées, pâturages ruinés.</p>
<p>Le sanglier n'est pas un participant passif de cet arrangement. Il apprend, s'adapte, et gagne souvent. On chasse dans la vaste garrigue rocailleuse des Alpilles — un paysage de crêtes calcaires, de chênes kermès épais et de vallons profonds qui est autant chez lui que chez nous. Les distances entre chasseurs à leurs postes peuvent atteindre 500 mètres ou plus. Les tirs ne sont pas garantis. Les animaux s'échappent, souvent. C'est ainsi qu'il doit en être.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70">Le sanglier ne se fait jamais tirer sur la route. Oh non — il se fait tirer dans les fonds de vallée. Le terrain est toujours contre vous.</blockquote>
<img src="/images/hunting1/h1.jpg" alt="La chasse au sanglier dans les Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>L'organisation de la battue</h2>
<p>Chaque chasse a sa hiérarchie et ses rôles, aussi fixes et fonctionnels que toute opération bien rodée. Au sommet se trouve <strong>le chef de battue</strong> — celui qui connaît le terrain, lit les indices, et assigne les positions avant que quiconque pose un pied dans la nature. Sa parole est définitive.</p>
<p>Les chasseurs se divisent en deux groupes. Les <strong>postiers</strong> sont les tireurs : ils rejoignent à pied leurs postes assignés — choisis par le chef de battue — et attendent en silence, lisant le vent et la lumière. Les <strong>piqueurs</strong>, les traqueurs, parcourent le territoire avec des chiens, débusquant les sangliers de leurs gîtes diurnes et les poussant vers les postiers en attente.</p>
<p>Toute la zone est bien balisée. La sécurité est non négociable — ce n'est pas une suggestion ni une réflexion après coup, mais le premier point à l'ordre du jour à chaque briefing. Nous mettons tout en œuvre pour que la chasse soit sûre. Ce n'est pas du tir sportif en galerie. Cela exige discipline, vigilance et confiance entre chaque personne sur le terrain.</p>
<img src="/images/hunting1/h2.jpg" alt="Chasseurs dans la garrigue des Alpilles" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>Après le tir : le vrai travail commence</h2>
<p>Quand un sanglier est abattu, le travail n'est qu'à moitié fait. Un sanglier adulte est un animal lourd et compact, et il n'aura jamais la courtoisie de tomber dans un endroit commode. Le terrain y veille. On attache une corde à la tête de l'animal et on tire — à travers le maquis, à travers les broussailles, en remontant les pentes des vallons. Autrefois, les ânes faisaient ce travail. Maintenant, c'est nous les ânes.</p>
<p>Il y a quelque chose d'honnête là-dedans. L'effort de la récupération fait partie du contrat : si vous prélevez un animal, vous ne le laissez pas là où il est tombé.</p>

<h2>Au club : partager la récolte</h2>
<p>Le club de chasse est l'endroit où la journée se termine et où commence le vrai rituel provençal. Les sangliers sont vidés et dépouillés par des mains expertes, puis la viande est distribuée — entre les chasseurs, les propriétaires terriens, les amis et les voisins. Rien n'est gaspillé. Rien n'est accaparé.</p>
<p>La viande de sanglier est une fierté. Elle est sombre, riche et pleine de caractère — le goût d'un animal libre qui a mangé des glands et des racines dans la garrigue. Dans les cuisines provençales, elle devient civet, daube, terrines et ragouts. Elle finit dans ces plats mijotés au vin et longuement cuits qui appartiennent à ce paysage tout autant que la lavande et le thym.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70">La viande est précieuse. Elle passe par bien des mains avant d'arriver à la table — et chacune de ces mains l'a méritée.</blockquote>

<p class="text-charcoal/50 text-sm mt-8">Les Alpilles, Provence · La Chasse</p>`,
      marcelTip: `Ne portez jamais de bleu pour chasser le sanglier dans la garrigue. Le sanglier ne voit pas le rouge, mais le bleu ressort. Faites confiance aux vieux chasseurs — ils n'ont pas survécu aussi longtemps par hasard.`,
    },
  },
  {
    slug: 'les-caisses-de-jean-jean',
    title: 'Les Caisses de Jean-Jean: A Village Forgotten by Time',
    excerpt:
      'A few kilometres from Mouriès, a trail leads into the Alpilles - and 2,700 years of silence, written in limestone.',
    content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">Les Alpilles · Mouriès · Provence</p>

<p class="font-body text-xl text-charcoal/80 italic leading-relaxed mb-10 border-l-4 border-amber pl-5">A few kilometres from Mouriès, a trail leads into the Alpilles. Follow it long enough, and the hills close in around you - the world narrows, the limestone rises, and the centuries begin to dissolve.</p>

<img src="/images/caisses_de_jean_jean/IMG_20250227_093558_fixed.jpg" alt="Les Caisses de Jean-Jean - the entrance valley" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>The Path In: Where the Trail Becomes a Portal</h2>
<p>The walk begins simply enough - a dusty track winding away from the golf course at Servanes, past rosemary and scrub oak, with the jagged ridgeline of the Alpilles rising ahead. The air carries the dry warmth of Provence: thyme crushed underfoot, the distant call of a blue rock thrush tucked into a crevice. There is nothing yet to suggest the extraordinary.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_093605_fixed.jpg" alt="The trail into Les Caisses" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_093640_fixed.jpg" alt="The narrowing entrance to the valley" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Then the valley begins to narrow. The limestone walls tighten on either side - pale, ancient, scored by millennia of wind and rain - until you feel the landscape leaning in. The entrance to Les Caisses de Jean-Jean is almost comically slender, a gap between cliffs that a determined man could defend with nothing more than courage and a good throwing arm. It is precisely for this reason that someone, long ago, decided this place was worth living in.</p>

<p>Step through, and the world opens again - but changed. You are now inside something. A great stone box. Two parallel limestone ridges run on either side like the walls of a cathedral, closing at the eastern end to form a natural acropolis. The French word <em>caisses</em> - crates, or boxes - captures it perfectly: you are standing at the bottom of a vessel carved by geology and occupied by history.</p>

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
<p>Around the 7th century BC, in what archaeologists call the Iron Age, a Celtic people settled here and began building. What they created was an <em>oppidum</em> - a fortified hilltop village - one of the most intelligently designed in all of southern Gaul. They did not need to fight the landscape; they let the landscape fight for them.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_094305_fixed.jpg" alt="The limestone cliffs of Les Caisses" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_094311_fixed.jpg" alt="The ancient ramparts" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Nature had already provided two impregnable walls in the limestone cliffs to the north and south. The genius lay in what the settlers added at the western entrance - the only approach not sealed by rock. There, they raised not one rampart, but two, rebuilt and reinforced across centuries until the outermost wall grew to more than ten metres thick. Visitors walking the site today still encounter it as a looming earthen ridge that seems, improbably, to be a natural hill - until you realise it is entirely man-made, a colossus of stacked limestone, packed earth and compressed time.</p>

<p>Between the 4th and 3rd centuries BC, the builders did something remarkable: they dismantled an older sanctuary on the site and reused its carved votive steles as raw material for the rampart's core. These stones - engraved with the image of a horseman carrying a javelin, the symbol of a warrior conducted to the afterlife - were buried inside the very walls meant to protect the living. Sacred objects, repurposed as mortar. Whether this was an act of pragmatism or a deliberate consecration of the fortifications, we will never know.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70 text-lg">Walking the site today, one stands before what appears to be a natural hill rising between the cliffs - until the realisation dawns that it is entirely the work of human hands, a monument built generation by generation over six centuries.</blockquote>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_094317_fixed.jpg" alt="The man-made rampart ridge" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_094520_fixed.jpg" alt="The defensive ditches and approach" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>In front of the ramparts, the inhabitants dug four successive ditches alternating with earthen embankments, and lined the approach with a jagged palisade of projecting rocks. Any attacker who breached the first trench would face another, and another. The entrance itself was cunningly angled so that an approaching enemy could never charge in a straight line, always exposed to defenders on the walls above.</p>

<h2>Daily Life: A Thousand Lives, Lived in Stone</h2>
<p>At its height, roughly a thousand people called this stone valley home. Archaeological excavations between 1933 and 1942 by Fernand Benoit revealed the true scale of the settlement. The site covers roughly fourteen hectares and may have supported close to a thousand inhabitants at its peak.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_095231_fixed.jpg" alt="Terraced house foundations on the cliff face" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_095303_fixed.jpg" alt="Stone walls and settlement remains" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Archaeologists have uncovered houses arranged in terraces against the cliff faces, their walls bonded with earth and later, as Hellenistic influence filtered up from Massalia (Marseille), with dressed limestone cut in the manner of the Greeks. Ceramic shards tell of trade - wine amphorae from Italy, fine-ware cups from the Greek colonies of the coast. This was no isolated backwater but a community woven into the commerce of the ancient Mediterranean world.</p>

<p>At the foot of the southern cliff, an enormous millstone - over a metre across and weighing an estimated 1,600 kilograms - still sits unfinished in the living rock, abandoned mid-cut sometime in the 17th century. It is a haunting detail: the interrupted work of someone who laid down their tools one afternoon and never returned. Time has a way of doing this, collecting the paused gestures of the past and holding them perfectly still.</p>

<img src="/images/caisses_de_jean_jean/IMG_20250227_100809_fixed.jpg" alt="The unfinished millstone in the living rock" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p>The settlement endured for nearly a millennium - from the Iron Age through the full arc of Roman conquest and into the 3rd century AD, when the inhabitants gradually drifted down into the plain below to occupy the Roman villas spreading across the Crau. The hilltop was left to the wind, the wild lavender, and the slow patient work of the limestone.</p>

<h2>The Wonder: What Silence Does to the Imagination</h2>

<img src="/images/caisses_de_jean_jean/IMG_20250227_102105_fixed.jpg" alt="The silence of Les Caisses de Jean-Jean" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p>Standing inside the Caisses today, what strikes you most is not the archaeology - it is the silence. Not an empty silence, but a full one, weighted with presence. The cliffs hold the air still. The light falls at an angle that has not changed in three thousand years. And the mind, stripped of easy distraction by the simplicity of the landscape, begins quietly to people the place: a child running along the base of the rampart; smoke rising from a cooking fire; the sound of a hammer shaping stone; someone standing at the entrance to this narrow valley, looking west, watching.</p>

<p>The name of the site carries its own small history. It derives from a man called Jehan who once owned these lands, and his son - also Jehan - after him. In the local dialect, the "lands of Jehan, son of Jehan" became simply Jean-Jean, the name of a property becoming the name of a civilisation. There is something rather beautiful in that: an Iron Age oppidum remembered not by its ancient Gaulish name - possibly <em>Tericiae</em>, which once appeared on Roman road maps between Aix and the Rhône - but by the name of a medieval farmer who happened to graze his sheep here.</p>

<p>The Alpilles have always done this - absorbed history quietly, layer by layer, the way the limestone absorbs rain. A sanctuary becomes a rampart. A rampart becomes a hill. A hill becomes a walk one afternoon in the Provençal sun, with the scent of wild herbs rising around you, and the sudden, vertiginous sense that you are very small, and the world is very old, and some places hold their past more tenderly than others.</p>
<p>Les Caisses de Jean-Jean is one of those places.</p>

<div style="display:flex;gap:10px;margin:2.5rem 0 1rem;"><img src="/images/caisses_de_jean_jean/IMG_20250227_102256_fixed.jpg" alt="Light on the limestone" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_102302_fixed.jpg" alt="Looking out from the valley" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_103002_fixed.jpg" alt="Les Caisses de Jean-Jean, Les Alpilles" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /></div>

<p class="text-charcoal/40 text-xs mt-10 font-body uppercase tracking-widest">Les Alpilles · Bouches-du-Rhône · Provence · Classified Historic Monument 1937 · Parc Naturel Régional des Alpilles</p>`,
    image: '/images/caisses_de_jean_jean/IMG_20250227_093558_fixed.jpg',
    date: '2026-03-14',
    category: 'Provence',
    tags: ['Provence', 'Les Alpilles'],
    marcelTip: 'Go in the morning, before the heat. The light inside the valley is extraordinary at eight o\'clock, and you will almost certainly have the place to yourself.',
    marcelType: 'rose',
    fr: {
      title: `Les Caisses de Jean-Jean : un village oublié du temps`,
      excerpt: `À quelques kilomètres de Mouriès, un sentier s'enfonce dans les Alpilles — et dans 2 700 ans de silence, gravés dans le calcaire.`,
      content: `<p class="text-olive text-xs font-heading uppercase tracking-widest mb-6">Les Alpilles · Mouriès · Provence</p>

<p class="font-body text-xl text-charcoal/80 italic leading-relaxed mb-10 border-l-4 border-amber pl-5">À quelques kilomètres de Mouriès, un sentier s'enfonce dans les Alpilles. Suivez-le assez longtemps, et les collines se referment autour de vous — le monde se rétrécit, le calcaire s'élève, et les siècles commencent à se dissoudre.</p>

<img src="/images/caisses_de_jean_jean/IMG_20250227_093558_fixed.jpg" alt="Les Caisses de Jean-Jean - la vallée d'entrée" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>L'entrée : là où le sentier devient un portail</h2>
<p>La marche commence simplement — une piste poussiéreuse qui s'éloigne du golf de Servanes, longe le romarin et le chêne kermès, avec la crête dentelée des Alpilles qui se dresse devant. L'air porte la chaleur sèche de la Provence : thym écrasé sous les pieds, appel lointain d'un monticole bleu niché dans une fissure. Rien encore ne laisse présager l'extraordinaire.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_093605_fixed.jpg" alt="Le sentier vers les Caisses" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_093640_fixed.jpg" alt="L'entrée qui se resserre vers la vallée" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Puis la vallée commence à se rétrécir. Les parois calcaires se resserrent de part et d'autre — pâles, antiques, striées par des millénaires de vent et de pluie — jusqu'à ce que le paysage lui-même semble se pencher sur vous. L'entrée des Caisses de Jean-Jean est presque comiquement étroite, un passage entre les falaises qu'un homme déterminé pourrait défendre avec rien d'autre que du courage et un bon bras. C'est précisément pour cette raison que quelqu'un, il y a longtemps, décida que cet endroit méritait qu'on y vive.</p>

<p>Franchissez ce passage, et le monde s'ouvre à nouveau — mais transformé. Vous êtes maintenant à l'intérieur de quelque chose. Une grande boîte de pierre. Deux crêtes calcaires parallèles s'élèvent de part et d'autre comme les murs d'une cathédrale, se rejoignant à l'est pour former une acropole naturelle. Le mot français <em>caisses</em> — caisses, boîtes — le dit parfaitement : vous êtes au fond d'un récipient sculpté par la géologie et habité par l'histoire.</p>

<div class="grid grid-cols-3 gap-4 my-10 text-center">
  <div class="bg-parchment border border-amber/20 rounded-sm p-5">
    <p class="font-heading text-2xl font-bold text-terracotta mb-1">14 ha</p>
    <p class="font-body text-xs text-charcoal/60 uppercase tracking-widest">Site antique</p>
  </div>
  <div class="bg-parchment border border-amber/20 rounded-sm p-5">
    <p class="font-heading text-2xl font-bold text-terracotta mb-1">700 av. J.-C.</p>
    <p class="font-body text-xs text-charcoal/60 uppercase tracking-widest">Première occupation</p>
  </div>
  <div class="bg-parchment border border-amber/20 rounded-sm p-5">
    <p class="font-heading text-2xl font-bold text-terracotta mb-1">~1 000</p>
    <p class="font-body text-xs text-charcoal/60 uppercase tracking-widest">Habitants au sommet</p>
  </div>
</div>

<img src="/images/caisses_de_jean_jean/IMG_20250227_094104_fixed.jpg" alt="À l'intérieur de l'oppidum" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<h2>L'oppidum : comment le village fut bâti</h2>
<p>Vers le VIIe siècle avant notre ère, à l'âge du Fer, un peuple celte s'installa ici et commença à construire. Ce qu'il créa était un <em>oppidum</em> — un village fortifié de hauteur — l'un des plus intelligemment conçus du sud de la Gaule entière. Ils n'eurent pas à combattre le paysage ; ils le laissèrent combattre pour eux.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_094305_fixed.jpg" alt="Les falaises calcaires des Caisses" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_094311_fixed.jpg" alt="Les remparts antiques" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>La nature avait déjà fourni deux murs imprenables dans les falaises calcaires au nord et au sud. Le génie résidait dans ce que les habitants ajoutèrent à l'entrée ouest — le seul accès non scellé par le roc. Là, ils élevèrent non pas un rempart, mais deux, reconstruits et renforcés au fil des siècles jusqu'à ce que la muraille extérieure atteigne plus de dix mètres d'épaisseur. Les visiteurs qui parcourent le site aujourd'hui rencontrent encore cette masse comme une crête de terre imposante qui semble, étrangement, être une colline naturelle — jusqu'au moment où l'on comprend qu'elle est entièrement d'origine humaine, un colosse de calcaire empilé, de terre compactée et de temps accumulé.</p>

<p>Entre le IVe et le IIIe siècle avant notre ère, les bâtisseurs firent quelque chose de remarquable : ils démantelèrent un sanctuaire plus ancien sur le site et réutilisèrent ses stèles votives gravées comme matériau brut pour le cœur du rempart. Ces pierres — ornées de l'image d'un cavalier portant un javelot, symbole d'un guerrier conduit vers l'au-delà — furent enfouies dans les murs mêmes censés protéger les vivants. Des objets sacrés, reconvertis en mortier. Que ce fût un acte de pragmatisme ou une consécration délibérée des fortifications, nous ne le saurons jamais.</p>

<blockquote class="border-l-4 border-terracotta pl-6 my-8 italic font-body text-charcoal/70 text-lg">En parcourant le site aujourd'hui, on se retrouve face à ce qui ressemble à une colline naturelle s'élevant entre les falaises — jusqu'au moment où l'on réalise qu'elle est entièrement l'œuvre de mains humaines, un monument édifié génération après génération pendant six siècles.</blockquote>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_094317_fixed.jpg" alt="La crête du rempart artificiel" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_094520_fixed.jpg" alt="Les fossés défensifs et l'approche" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Devant les remparts, les habitants creusèrent quatre fossés successifs alternant avec des talus de terre, et jalonnèrent l'approche d'une palissade hérissée de rochers saillants. Tout assaillant qui aurait franchi le premier fossé en aurait trouvé un autre, puis encore un autre. L'entrée elle-même était astucieusement orientée de sorte qu'un ennemi ne pouvait jamais charger en ligne droite, toujours exposé aux défenseurs sur les murs au-dessus.</p>

<h2>La vie quotidienne : mille vies, vécues dans la pierre</h2>
<p>À son apogée, environ un millier de personnes appelaient ce vallon de pierre leur foyer. Les fouilles archéologiques menées entre 1933 et 1942 par Fernand Benoit ont révélé la véritable ampleur de la cité. Le site couvre environ quatorze hectares et aurait pu accueillir près d'un millier d'habitants à son apogée.</p>

<div style="display:flex;gap:10px;margin:1.5rem 0;"><img src="/images/caisses_de_jean_jean/IMG_20250227_095231_fixed.jpg" alt="Fondations de maisons en terrasse contre la falaise" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_095303_fixed.jpg" alt="Murs en pierre et vestiges de l'habitat" style="flex:1;min-width:0;height:250px;object-fit:cover;border-radius:2px;" /></div>

<p>Les archéologues ont mis au jour des maisons disposées en terrasses contre les parois rocheuses, leurs murs liés à la terre puis, à mesure que l'influence hellénistique remontait depuis Massalia (Marseille), en calcaire taillé à la manière des Grecs. Des tessons de céramique témoignent du commerce — amphores de vin venues d'Italie, coupes de qualité des colonies grecques du littoral. Ce n'était pas un hameau isolé mais une communauté inscrite dans le commerce de la Méditerranée antique.</p>

<p>Au pied de la falaise sud, une immense meule — plus d'un mètre de diamètre et pesant quelque 1 600 kilogrammes — demeure inachevée dans la roche vive, abandonnée en cours de taille au XVIIe siècle. C'est un détail saisissant : le travail interrompu de quelqu'un qui a posé ses outils un après-midi et n'est jamais revenu. Le temps a cette façon de collectionner les gestes suspendus du passé et de les tenir parfaitement immobiles.</p>

<img src="/images/caisses_de_jean_jean/IMG_20250227_100809_fixed.jpg" alt="La meule inachevée dans la roche vive" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p>L'établissement perdura près d'un millénaire — de l'âge du Fer jusqu'à l'arc complet de la conquête romaine et jusqu'au IIIe siècle après J.-C., quand les habitants glissèrent progressivement vers la plaine pour occuper les villae romaines qui se déployaient sur la Crau. La hauteur fut abandonnée au vent, à la lavande sauvage, et au travail lent et patient du calcaire.</p>

<h2>L'émerveillement : ce que le silence fait à l'imagination</h2>

<img src="/images/caisses_de_jean_jean/IMG_20250227_102105_fixed.jpg" alt="Le silence des Caisses de Jean-Jean" style="width:100%;height:310px;object-fit:cover;border-radius:2px;margin:1.5rem 0;" />

<p>Debout dans les Caisses aujourd'hui, ce qui frappe le plus n'est pas l'archéologie — c'est le silence. Non pas un silence vide, mais un silence plein, lesté de présence. Les falaises maintiennent l'air immobile. La lumière tombe à un angle qui n'a pas changé en trois mille ans. Et l'esprit, dépouillé de toute distraction facile par la simplicité du paysage, commence tranquillement à peupler les lieux : un enfant courant le long du pied du rempart ; de la fumée s'élevant d'un feu de cuisson ; le bruit d'un marteau façonnant la pierre ; quelqu'un debout à l'entrée de ce vallon étroit, regardant vers l'ouest, observant.</p>

<p>Le nom du site porte sa propre petite histoire. Il vient d'un certain Jehan qui posséda ces terres un jour, et de son fils — également Jehan — après lui. Dans le dialecte local, les « terres de Jehan, fils de Jehan » devinrent simplement Jean-Jean, le nom d'une propriété devenant le nom d'une civilisation. Il y a quelque chose d'assez beau dans cela : un oppidum de l'âge du Fer rappelé non par son ancien nom gaulois — peut-être <em>Tericiae</em>, qui apparaissait jadis sur les cartes romaines entre Aix et le Rhône — mais par le nom d'un paysan médiéval qui venait y faire paître ses moutons.</p>

<p>Les Alpilles ont toujours fait cela — absorbé l'histoire silencieusement, couche après couche, comme le calcaire absorbe la pluie. Un sanctuaire devient un rempart. Un rempart devient une colline. Une colline devient une promenade un après-midi au soleil provençal, avec le parfum des herbes sauvages qui monte autour de vous, et ce sentiment soudain et vertigineux d'être très petit, le monde très vieux, et certains endroits tenant leur passé plus tendrement que d'autres.</p>
<p>Les Caisses de Jean-Jean sont l'un de ces endroits.</p>

<div style="display:flex;gap:10px;margin:2.5rem 0 1rem;"><img src="/images/caisses_de_jean_jean/IMG_20250227_102256_fixed.jpg" alt="La lumière sur le calcaire" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_102302_fixed.jpg" alt="La vue depuis la vallée" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /><img src="/images/caisses_de_jean_jean/IMG_20250227_103002_fixed.jpg" alt="Les Caisses de Jean-Jean, Les Alpilles" style="flex:1;min-width:0;height:200px;object-fit:cover;border-radius:2px;" /></div>

<p class="text-charcoal/40 text-xs mt-10 font-body uppercase tracking-widest">Les Alpilles · Bouches-du-Rhône · Provence · Monument Historique Classé 1937 · Parc Naturel Régional des Alpilles</p>`,
      marcelTip: `Allez-y le matin, avant la chaleur. La lumière à l'intérieur du vallon est extraordinaire à huit heures, et vous aurez presque certainement l'endroit pour vous seul.`,
    },
  },
  {
    slug: 'good-samaritan-pepper-spray',
    title: 'A dog fight, pepper spray and OH MY!',
    excerpt: 'A quiet afternoon drive home through the Alpilles turns into a dog fight, a pepper spray incident, and one of the most painful lessons in the chemistry of capsaicin.',
    content: `<p>There is a road between our old village and Saint-Andiol that most people ignore in favour of the main route. We always take it. The road via Le Destet winds through olive groves and vineyards, and comes out beside the small parking spot where people leave their cars to walk up to Les Caisses de Jean-Jean. It is one of those roads that reminds you why you live here.</p>
<p>We had spent the afternoon at our old potager outside Mausanne - pulling weeds, watering, making plans for the season ahead. The kind of afternoon that leaves you with dirty fingernails and a good feeling in your chest. We had a beer at the potager when the work was done. One beer. I want to be clear about that, because what happened next is the kind of story that sounds better if the man at the centre of it was sober, which he was.</p>
<h2>A Rottweiler, a Malinois, and a Saturday Afternoon</h2>
<p>We came around the bend and I saw them before I understood what I was seeing.</p>
<p>Two people - a man and a woman - rolling in the dust at the side of the road with a large black shape and a Belgian Malinois thrashing between them. My first thought, I will admit, was <em>sanglier</em> - wild boar. You spend enough time hunting wild boar in these hills and your brain starts to see them everywhere. But no. It was a Rottweiler - a big one, maybe fifty kilograms of pure bad intention - and it and the Malinois were doing their absolute level best to kill each other. These were not a couple - just two people who had made the unfortunate decision to walk their dogs off-leash on the same stretch of road at the same time.</p>
<p>I stopped the car. The kids were in the back. My wife said “be careful.” I told her I couldn't just drive past - there is too much of the Samaritan in me for that. But it was more than instinct. The woman was in real danger. She was trying to drag her Malinois away from the Rottweiler, and the Rottweiler's teeth were flashing centimetres from her face.</p>
<p>I grabbed the pepper spray from the door pocket - I had been keeping it there as insurance against a neighbour's dog, a large animal that barked ferociously and liked to throw itself at the low fence between our houses whenever the kids were in the garden. I had never needed to use it.</p>
<p>The man was perhaps sixty-five kilograms if he was soaking wet, wrestling with an animal that was almost his weight and entirely committed to the fight. The woman was smaller still. They were losing.</p>
<p>“Can I help? I have pepper spray - shall I use it?”</p>
<p>“Yes,” they said. “Do it.”</p>
<h2>The Great Pepper Spray Experiment</h2>
<p>I gave both dogs a light spray. A cautious, introductory sort of spray. The kind of spray that says “perhaps reconsider your life choices.”</p>
<p>Nothing. The dogs fought harder.</p>
<p>The man yelled at me. “In the eyes. Spray it in the eyes.”</p>
<p>I gave the Rottweiler a proper squirt. A long one. Direct.</p>
<p>The dogs fought harder still.</p>
<p>I gave the Malinois the same treatment. I held the nozzle and let it go.</p>
<p>The fight intensified. Somewhere in the academic literature on capsaicin and canine behaviour, I suspect there is a footnote that reads: “in some cases, pepper spray may increase aggression in the short term.” I was discovering this footnote in real time, on a Provençal back road, with blood on the tarmac.</p>
<p>Then the Rottweiler had a moment of doubt. The Malinois, displaying either tremendous courage or a complete absence of self-preservation instinct, came back for more. For one brief second, the dogs separated.</p>
<p>I reached for the Malinois's collar.</p>
<p>The Rottweiler bit my hand.</p>
<p>Not a graze - the thumb was properly punctured - but it bit the hand that was holding the pepper spray canister, and pierced the canister, and the entire remaining contents emptied themselves directly down the Rottweiler's throat and across my entire hand.</p>
<p>The fight was over.</p>
<h2>Aftermath</h2>
<p>The Rottweiler stood very still, breathing foam. The Malinois looked confused. The man and the woman, without a word of discussion, picked up both dogs and threw them into the canal.</p>
<p>I walked back to the car to wash the blood off my thumb and reassure my children that Papa was fine and that this sort of thing happens sometimes on country roads. My wife looked at my hand. She did not say anything. She has seen worse - fifteen years with an ex-rugby player will do that to a woman.</p>
<p>I went back to check on them. They were managing. The woman thanked me warmly. The man was somewhat preoccupied with his dog, which I understood. We said goodnight and drove on.</p>
<h2>The Part I Did Not Anticipate</h2>
<p>A few kilometres down the road, I needed what the French politely call <em>une pause pipi</em>. I pulled over, stepped out, and took care of business. I zipped up, got back in the car, and continued driving.</p>
<p>Within minutes, there was a sensation.</p>
<p>Then the sensation became a feeling.</p>
<p>Then the feeling became a fire.</p>
<p>My wife, when I explained what was happening, laughed until she could not breathe. My elder daughter, once she understood, nearly required medical attention herself. The youngest was mercifully too young to comprehend the precise geography of the situation. I drove the remaining kilometres home in a silence that was not, technically, silent at all.</p>
<p>At home, I headed straight for the shower. Logical. Responsible. The thing to do. Our bathroom is on the third floor - a reasonable distance from the front door under normal circumstances. I stepped in, reached for the water, and did what anyone does at the end of a long day: cupped my hands and washed my face first.</p>
<p>What followed is difficult to describe with appropriate dignity. I will say only that I came very close to removing the bathroom door from its hinges from the inside, and that my family - who could hear everything from two floors below - did not come to assist. They were laughing too hard.</p>
<p>The shower did, eventually, help. The eyes took longer.</p>
<h2>What I Learned</h2>
<p>Pepper spray works. Enthusiastically, indiscriminately, and with a half-life on human skin that no one warns you about at the point of sale. The Rottweiler, for what it's worth, survived and was presumably fine after a thorough rinse in a Provençal canal. My thumb healed in a few days. My dignity took somewhat longer.</p>
<p>Some lessons you only need to learn once.</p>
<p>The road via Le Destet remains, despite everything, one of the finest afternoon drives in the Alpilles. We still take it every time.</p>`,
    image: '/images/caisses.png',
    date: '2026-03-15',
    category: 'Provence',
    tags: ['Provence', 'Les Alpilles', 'Life in France'],
    marcelTip: "Walk softly and carry a big stick.",
    marcelType: 'hunter',
    fr: {
      title: `Une bagarre de chiens, du gaz poivre et OH MON DIEU !`,
      excerpt: `Un trajet tranquille à travers les Alpilles se transforme en bagarre de chiens, incident au gaz poivre, et l'une des leçons les plus douloureuses sur la chimie de la capsaïcine.`,
      content: `<p>Il existe une route entre notre ancien village et Saint-Andiol que la plupart des gens ignorent au profit de la nationale. Nous la prenons toujours. La route par Le Destet serpente entre oliveraies et vignobles, et débouche près du petit parking où les gens laissent leurs voitures pour monter aux Caisses de Jean-Jean. C'est une de ces routes qui vous rappellent pourquoi vous habitez ici.</p>
<p>Nous avions passé l'après-midi à notre ancien potager en dehors de Mausanne — à désherber, arroser, faire des plans pour la saison à venir. Le genre d'après-midi qui vous laisse les ongles sales et la poitrine légère. On avait bu une bière au potager une fois le travail terminé. Une seule bière. Je tiens à le préciser, parce que ce qui suivit est le genre d'histoire qui porte mieux si le protagoniste était sobre. Ce qu'il était.</p>
<h2>Un Rottweiler, un Malinois et un samedi après-midi</h2>
<p>On a pris le virage et je les ai vus avant de comprendre ce que je regardais.</p>
<p>Deux personnes — un homme et une femme — roulaient dans la poussière au bord de la route avec une grande masse noire et un Berger Malinois qui se débattaient entre eux. Ma première pensée, je l'avoue, fut <em>sanglier</em> — wild boar. On passe assez de temps à chasser le sanglier dans ces collines et le cerveau commence à en voir partout. Mais non. C'était un Rottweiler — un gros, peut-être cinquante kilos de mauvaises intentions pures — et lui et le Malinois faisaient tout leur possible pour s'entre-tuer. Ce n'était pas un couple — juste deux personnes qui avaient eu le malheur de promener leurs chiens sans laisse sur le même tronçon de chemin au même moment.</p>
<p>J'ai arrêté la voiture. Les enfants étaient à l'arrière. Mon épouse a dit « fais attention. » Je lui ai dit que je ne pouvais pas simplement passer — il y a trop de bon Samaritain en moi pour ça. Mais c'était plus que l'instinct. La femme était en danger réel. Elle essayait de tirer son Malinois loin du Rottweiler, et les dents du Rottweiler flamboyaient à quelques centimètres de son visage.</p>
<p>J'ai attrapé le gaz poivre dans la poche de portière — je l'avais là en guise d'assurance contre le chien d'un voisin, un grand animal qui aboyait férocement et aimait se jeter contre la clôture basse entre nos maisons chaque fois que les enfants étaient dans le jardin. Je n'en avais jamais eu besoin.</p>
<p>L'homme pesait peut-être soixante-cinq kilos tout mouillé, et luttait contre un animal qui faisait presque son poids et était entièrement absorbé par le combat. La femme était encore plus petite. Ils étaient en train de perdre.</p>
<p>« Je peux vous aider ? J'ai du gaz poivre — je l'utilise ? »</p>
<p>« Oui, » ont-ils dit. « Allez-y. »</p>
<h2>La grande expérience au gaz poivre</h2>
<p>J'ai donné aux deux chiens une légère pulvérisation. Une sorte de pulvérisation prudente et introductive. Le genre qui dit « peut-être reconsidérez vos choix de vie. »</p>
<p>Rien. Les chiens se battaient de plus belle.</p>
<p>L'homme m'a crié dessus. « Dans les yeux. Pulvérisez dans les yeux. »</p>
<p>J'ai donné au Rottweiler une vraie giclée. Longue. Directe.</p>
<p>Les chiens se battaient encore plus fort.</p>
<p>J'ai infligé le même traitement au Malinois. J'ai tenu la buse et j'ai laissé partir.</p>
<p>Le combat s'est intensifié. Quelque part dans la littérature académique sur la capsaïcine et le comportement canin, je suppose qu'il existe une note de bas de page qui dit : « dans certains cas, le gaz poivre peut augmenter l'agressivité à court terme. » Je découvrais cette note de bas de page en temps réel, sur une route de campagne provençale, avec du sang sur le bitume.</p>
<p>Puis le Rottweiler eut un moment de doute. Le Malinois, faisant preuve soit d'un courage considérable soit d'une absence totale d'instinct de survie, est revenu à la charge. Pendant une fraction de seconde, les chiens se sont séparés.</p>
<p>J'ai tendu la main vers le collier du Malinois.</p>
<p>Le Rottweiler m'a mordu la main.</p>
<p>Pas une égratignure — le pouce a été proprement transpercé — mais il a mordu la main qui tenait la bombe de gaz poivre, a perforé la bombe, et l'intégralité du contenu restant s'est déversée directement dans la gorge du Rottweiler et sur toute ma main.</p>
<p>Le combat était terminé.</p>
<h2>L'après</h2>
<p>Le Rottweiler s'est immobilisé, respirant de l'écume. Le Malinois avait l'air perdu. L'homme et la femme, sans un mot, ont ramassé les deux chiens et les ont jetés dans le canal.</p>
<p>Je suis retourné à la voiture pour laver le sang de mon pouce et rassurer mes enfants que Papa allait bien et que ce genre de chose arrive parfois sur les routes de campagne. Mon épouse a regardé ma main. Elle n'a rien dit. Elle a vu pire — quinze ans avec un ancien joueur de rugby, ça forme une femme.</p>
<p>Je suis retourné vérifier qu'ils allaient bien. Ils s'en sortaient. La femme m'a chaleureusement remercié. L'homme était quelque peu préoccupé par son chien, ce que je comprenais. Nous avons dit bonsoir et nous avons continué.</p>
<h2>Ce que je n'avais pas anticipé</h2>
<p>Quelques kilomètres plus loin, j'avais besoin de ce que les Français appellent poliment <em>une pause pipi</em>. Je me suis arrêté, je suis sorti, j'ai fait ce qu'il y avait à faire. J'ai remonté la fermeture éclair, je suis remonté en voiture, et j'ai continué à rouler.</p>
<p>En quelques minutes, il y avait une sensation.</p>
<p>Puis la sensation est devenue un sentiment.</p>
<p>Puis le sentiment est devenu un incendie.</p>
<p>Mon épouse, quand je lui ai expliqué ce qui se passait, a ri jusqu'à ne plus pouvoir respirer. Ma fille aînée, une fois qu'elle a compris, a failli nécessiter des soins médicaux elle-même. La plus jeune était, heureusement, trop jeune pour saisir la géographie précise de la situation. J'ai conduit les kilomètres restants dans un silence qui n'était, techniquement parlant, pas silencieux du tout.</p>
<p>À la maison, je me suis dirigé directement vers la douche. Logique. Responsable. La bonne chose à faire. Notre salle de bain est au troisième étage — distance raisonnable depuis la porte d'entrée en temps normal. Je suis entré, j'ai tendu la main vers l'eau, et j'ai fait ce que tout le monde fait après une longue journée : je me suis d'abord lavé le visage avec les mains en coupe.</p>
<p>Ce qui suivit est difficile à décrire avec la dignité qui convient. Je dirai seulement que je suis passé très près d'arracher la porte de la salle de bain de ses gonds de l'intérieur, et que ma famille — qui entendait tout depuis deux étages plus bas — n'est pas venue aider. Ils riaient trop fort.</p>
<p>La douche a finalement aidé. Les yeux ont pris plus de temps.</p>
<h2>Ce que j'ai appris</h2>
<p>Le gaz poivre fonctionne. Avec enthousiasme, sans discrimination, et avec une demi-vie sur la peau humaine dont personne ne vous avertit au moment de l'achat. Le Rottweiler, pour ce que ça vaut, a survécu et se portait sans doute bien après un bon rinçage dans un canal provençal. Mon pouce a guéri en quelques jours. Ma dignité a mis nettement plus longtemps.</p>
<p>Certaines leçons n'ont besoin d'être apprises qu'une seule fois.</p>
<p>La route par Le Destet reste, malgré tout, l'une des plus belles promenades en voiture des Alpilles. Nous la prenons toujours.</p>`,
      marcelTip: `Marchez doucement et portez un grand bâton.`,
    },
  },
];

export const recipes: Recipe[] = [
  {
    slug: 'sanglier-bolognese',
    title: 'Sanglier Bolognese',
    excerpt: 'A long, slow Bolognese made with minced wild boar - red wine, anchovies, tomatoes, and two hours on the stove.',
    image: '/images/ecipe-bolognese.jpg',
    date: '2026-03-10',
    category: 'wild-game',
    servings: 6,
    prepTime: '20 min',
    cookTime: '2 hours',
    difficulty: 'Medium',
    ingredients: [
      '1 kg wild boar shoulder, minced or finely chopped',
      '3 tbsp olive oil',
      '2 onions, finely diced',
      '2 carrots, finely diced',
      '3 celery stalks, finely diced',
      '4 garlic cloves, finely chopped (divided)',
      '4 anchovy fillets (or 1 tbsp anchovy paste)',
      '2 tbsp tomato paste',
      '250ml red wine',
      '400ml crushed tomatoes or passata',
      '500ml beef or game stock',
      '2 bay leaves',
      '4 fresh thyme sprigs',
      '1 fresh rosemary sprig',
      '100ml crème fraîche or double cream',
      '30g unsalted butter',
    ],
    instructions: [
      'Brown the boar in olive oil in a large heavy pot over high heat, working in small batches - do not crowd the pot or you will steam the meat instead of searing it. Season each batch with salt as you go. Remove each batch and set aside.',
      'Reduce heat to medium. In the same pot, cook the onions, carrots, and celery until softened and beginning to colour, about 10 minutes. Add the anchovy fillets and tomato paste and stir in - the anchovies will dissolve and add depth rather than fishiness. Add half the garlic and fry for 1 minute.',
      'Return all the browned meat to the pot. Deglaze with the red wine, scraping up any fond from the bottom. Add the crushed tomatoes, enough stock to just cover, and the remaining garlic. Tuck in the bay leaves, thyme, and rosemary.',
      'Bring to a gentle simmer, then reduce heat to low. Cook uncovered or partially covered for 1.5 to 2 hours, stirring occasionally and topping up with stock as needed. The sauce should be rich and thick, not soupy. Remove the bay leaves, thyme, and rosemary before finishing.',
      'Taste and correct seasoning. Stir in the crème fraîche and cook for a further 5 minutes. Remove from heat and stir in the butter until melted and glossy. Serve over pasta, spooned onto soft polenta, or alongside thick-cut rustic bread.',
    ],
    story: `When I hunt in Les Alpilles we share the meat after the hunts. Sometimes we shoot an older boar - and they can have quite a strong odour and very little fat. Not really something you want to throw on the braai.\n\nWhat I do is mince the boar and use it for Bolognese. The meat is perfect for it and the spices, tomato, and long cooking make the strong odour go away.\n\nI bought a professional mincer for myself because I do run quite a few kilos of meat through it every hunting season, but I also have a small one from Lidl that works well for smaller batches.`,
    notes: [
      'On the meat: Shoulder is ideal - it has enough connective tissue to break down beautifully over the long cook. Older boar, despite its reputation, is actually well-suited to this preparation. The bold aromatics, wine, and slow heat tame the gaminess entirely.',
      'On mincing: A coarse mince gives more texture than a fine one. If you\'re hand-chopping, aim for rough 5mm pieces - some variation in size adds character.',
      'On the anchovies: Don\'t skip them. They\'re not there to make it taste of fish; they dissolve completely and add the kind of savoury depth that makes people ask what your secret is.',
      'Food safety: Wild boar can carry trichinella. Always cook minced boar to a core temperature of 71 °C (160 °F) minimum. With a braise of this length, that\'s easily achieved - but it\'s worth knowing.',
    ],
    marcelTip: 'Do not skip the anchovies. They dissolve completely and add the kind of savoury depth that makes people ask what your secret is.',
    marcelType: 'cooking',
    fr: {
      title: `Bolognese de sanglier`,
      excerpt: `Un bolognese long et lent à base de sanglier haché — vin rouge, anchois, tomates, et deux heures sur le feu.`,
      story: `Quand je chasse dans les Alpilles, nous partageons la viande après les battues. Il nous arrive de tirer un sanglier vieux — et ils peuvent avoir une odeur assez forte et très peu de gras. Pas vraiment ce qu'on veut mettre sur le braai.\n\nCe que je fais, c'est hacher le sanglier et l'utiliser pour un bolognese. La viande est parfaite pour ça, et les épices, la tomate et la longue cuisson font disparaître l'odeur forte.\n\nJ'ai investi dans un hachoir professionnel parce que je fais passer pas mal de kilos de viande dedans chaque saison de chasse, mais j'ai aussi un petit modèle Lidl qui convient très bien pour les petites quantités.`,
      ingredients: [
        `1 kg d'épaule de sanglier, hachée ou finement émincée`,
        `3 c. à soupe d'huile d'olive`,
        `2 oignons, finement émincés`,
        `2 carottes, finement émincées`,
        `3 branches de céleri, finement émincées`,
        `4 gousses d'ail, finement hachées (divisées)`,
        `4 filets d'anchois (ou 1 c. à soupe de pâte d'anchois)`,
        `2 c. à soupe de concentré de tomates`,
        `250 ml de vin rouge`,
        `400 ml de tomates concassées ou de passata`,
        `500 ml de bouillon de bœuf ou de gibier`,
        `2 feuilles de laurier`,
        `4 brins de thym frais`,
        `1 brin de romarin frais`,
        `100 ml de crème fraîche ou de crème double`,
        `30 g de beurre doux`,
      ],
      instructions: [
        `Faire dorer le sanglier dans l'huile d'olive dans une grande cocotte à feu vif, par petites quantités — ne pas surcharger la cocotte ou la viande va cuire à la vapeur plutôt que saisir. Saler chaque fournée au fur et à mesure. Réserver chaque fournée.`,
        `Baisser le feu à moyen. Dans la même cocotte, faire revenir les oignons, les carottes et le céleri jusqu'à ce qu'ils ramollissent et commencent à colorer, environ 10 minutes. Ajouter les filets d'anchois et le concentré de tomates et bien mélanger — les anchois vont se dissoudre et apporter de la profondeur plutôt qu'un goût de poisson. Ajouter la moitié de l'ail et faire revenir 1 minute.`,
        `Remettre toute la viande dorée dans la cocotte. Déglacer avec le vin rouge en grattant bien les sucs au fond. Ajouter les tomates concassées, assez de bouillon pour just couvrir, et le reste de l'ail. Glisser les feuilles de laurier, le thym et le romarin.`,
        `Porter à frémissement doux, puis baisser le feu au minimum. Cuire à découvert ou partiellement couvert pendant 1h30 à 2 heures, en remuant de temps en temps et en ajoutant du bouillon si nécessaire. La sauce doit être riche et épaisse, pas liquide. Retirer les feuilles de laurier, le thym et le romarin avant de terminer.`,
        `Goûter et rectifier l'assaisonnement. Incorporer la crème fraîche et cuire encore 5 minutes. Retirer du feu et incorporer le beurre en remuant jusqu'à ce qu'il soit fondu et brillant. Servir sur des pâtes, versé sur une polenta crémeuse, ou à côté de pain rustique tranché épais.`,
      ],
      notes: [
        `Sur la viande : l'épaule est idéale — elle possède assez de tissu conjonctif pour se détendre magnifiquement durant la longue cuisson. Le sanglier vieux, malgré sa réputation, se prête particulièrement bien à cette préparation. Les aromates puissants, le vin et la chaleur lente domestiquent le gibier entièrement.`,
        `Sur le hachage : un hachage grossier donne plus de texture qu'un hachage fin. Si vous émincez à la main, visez des morceaux d'environ 5 mm irréguliers — la variation de taille ajoute du caractère.`,
        `Sur les anchois : ne les sautez pas. Ils ne sont pas là pour faire poisson ; ils se dissolvent complètement et apportent la profondeur savoureuse qui fait demander aux gens quel est votre secret.`,
        `Sécurité alimentaire : le sanglier peut être porteur de trichine. Faites toujours cuire le sanglier haché à une température à cœur d'au moins 71 °C. Avec une braise aussi longue, c'est largement atteint — mais c'est utile de le savoir.`,
      ],
      marcelTip: `Ne sautez pas les anchois. Ils se dissolvent entièrement et apportent cette profondeur savoureuse qui fait demander aux gens quel est votre secret.`,
    },
  },
  {
    slug: 'poulet-provencal',
    title: 'Poulet Rôti à la Provençale',
    excerpt: 'A classic roast chicken with all the herbs and flavours of the Provençal summer.',
    image: '/images/chicken.png',
    date: '2026-03-11',
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
    story: `On Wednesday mornings in Saint-Rémy, the market takes over the old town. By eight o'clock the plane trees are hung with shade and the stalls are doing serious business - fromage de chèvre stacked in pyramids, slabs of tapenade glistening on boards, and at one particular corner, a farmer who sells nothing but chickens. His birds are raised in the open air on his farm outside of town, fed on grain, and they smell the way chicken is supposed to smell: of the farm, of fat, of something real.\n\nThis recipe is an argument for buying the best chicken you can find. There is no technique here that will save a mediocre bird. But take a good poulet fermier, rub it with olive oil and herbes de Provence, surround it with ripe tomatoes and a handful of olives from the market stall, and put it in a hot oven - and what comes out is one of the simplest, most deeply satisfying things you can cook in Provence.\n\nSummer is when this dish makes the most sense. The tomatoes are at their best in July and August. The herbs growing in pots on the terrace are at full intensity. The wine should be cold and the meal should be eaten outside.`,
    marcelTip: 'Buy the best chicken you can afford. A properly raised poulet fermier from the market will make this dish extraordinary. A supermarket bird will make it ordinary.',
    marcelType: 'cooking',
    fr: {
      title: `Poulet Rôti à la Provençale`,
      excerpt: `Un poulet rôti classique avec toutes les herbes et saveurs de l'été provençal.`,
      story: `Le mercredi matin à Saint-Rémy, le marché envahit la vieille ville. Dès huit heures, les platanes dispensent leur ombre et les étals travaillent sérieusement — fromages de chèvre empilés en pyramides, plaques de tapenade brillantes sur des planches, et à un coin précis, un agriculteur qui ne vend rien d'autre que des poulets. Ses volailles sont élevées en plein air à la ferme, nourries au grain, et elles sentent comme un poulet devrait sentir : la ferme, le gras, quelque chose de vrai.\n\nCette recette est un plaidoyer pour acheter le meilleur poulet que vous puissiez trouver. Aucune technique ne sauvera une volaille médiocre. Mais prenez un bon poulet fermier, frottez-le d'huile d'olive et d'herbes de Provence, entourez-le de tomates mûres et d'une poignée d'olives du marché, mettez-le dans un four chaud — et ce qui en sort est l'une des choses les plus simples et les plus profondément satisfaisantes que l'on puisse cuisiner en Provence.\n\nL'été est le moment où ce plat a le plus de sens. Les tomates sont à leur meilleur en juillet et août. Les herbes qui poussent en pots sur la terrasse sont à pleine intensité. Le vin doit être frais et le repas doit se manger dehors.`,
      ingredients: [
        `1 poulet fermier entier (environ 1,8 kg)`,
        `1 citron, coupé en deux`,
        `4 gousses d'ail`,
        `4 brins de thym`,
        `2 brins de romarin`,
        `Une poignée d'olives noires`,
        `200 g de tomates cerises`,
        `1 c. à soupe d'herbes de Provence`,
        `Bonne huile d'olive`,
        `Fleur de sel et poivre noir`,
      ],
      instructions: [
        `Préchauffer le four à 200 °C.`,
        `Frotter le poulet à l'intérieur et à l'extérieur avec l'huile d'olive, le sel et les herbes de Provence.`,
        `Farcir la cavité avec les demi-citrons, 2 gousses d'ail, et un brin de thym et de romarin chacun.`,
        `Placer dans un plat à rôtir. Disposer les tomates, les olives, l'ail restant et les herbes autour du poulet.`,
        `Rôtir pendant 1 heure 20, en arrosant toutes les 30 minutes avec le jus de cuisson.`,
        `Laisser reposer 15 minutes avant de découper. Servir nappé du jus de cuisson.`,
      ],
      marcelTip: `Achetez le meilleur poulet que vous puissiez vous permettre. Un vrai poulet fermier du marché rendra ce plat extraordinaire. Une volaille de supermarché le rendra ordinaire.`,
    },
  },
  {
    slug: 'tapenade',
    title: 'Tapenade Maison',
    excerpt: 'The essential Provençal condiment - black olives, capers, and anchovies blended into something magnificent.',
    image: '/images/recipe-tapenade.jpg',
    date: '2026-03-12',
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
      'Pulse until roughly chopped - you want texture, not a smooth paste.',
      'Add lemon juice and olive oil and blend briefly.',
      'Season with pepper (it will not need salt - the anchovies and capers provide this).',
      'Transfer to a jar. Drizzle with a little extra oil on top.',
      'Refrigerate. It improves after a day. Serve on toast, with raw vegetables, or stirred through pasta.',
    ],
    story: `The word tapenade comes from tapèno - the Provençal word for capers. But the olive is the soul of it. Without good olives, tapenade is just a paste. With them, it is something that has been made in the kitchens of this region for centuries, spread on bread, served with a glass of something cold, and eaten in the shade.\n\nEvery household in Provence has a version. Some are smooth, some are rough. Some add a dash of cognac. Some use green olives instead of black. The best ones come from people who have been making the same recipe since before they can remember, adjusting nothing because nothing needs adjusting.\n\nThis version is unapologetically simple. It wants good black olives - from the Nyons AOP if you can find them, with their mild, almost nutty flavour, or Greek Kalamata as an excellent alternative. The anchovy is not optional. It disappears completely but leaves a depth behind that you will notice if you leave it out.`,
    marcelTip: 'Use good olives. The tapenade is only as good as its olives. Buy them from a market stall, not a tin.',
    marcelType: 'cooking',
    fr: {
      title: `Tapenade Maison`,
      excerpt: `Le condiment provençal essentiel — olives noires, câpres et anchois mixés en quelque chose de magnifique.`,
      story: `Le mot tapenade vient de tapèno — le mot provençal pour câpre. Mais l'olive en est l'âme. Sans bonnes olives, la tapenade n'est qu'une pâte. Avec elles, c'est quelque chose qui se prépare dans les cuisines de cette région depuis des siècles, étalé sur du pain, servi avec un verre de quelque chose de frais, mangé à l'ombre.\n\nChaque foyer de Provence en a sa version. Certaines sont lisses, d'autres rustiques. Certains ajoutent un trait de cognac. D'autres utilisent des olives vertes plutôt que noires. Les meilleures viennent de gens qui font la même recette depuis aussi loin qu'ils s'en souviennent, n'y changeant rien parce que rien n'a besoin de l'être.\n\nCette version est sans ambiguïté simple. Elle demande de bonnes olives noires — de Nyons AOP si vous en trouvez, avec leur saveur douce et presque noisettée, ou des Kalamata grecques en excellente alternative. L'anchois n'est pas facultatif. Il disparaît complètement mais laisse derrière lui une profondeur que vous remarquerez si vous l'omettez.`,
      ingredients: [
        `200 g de bonnes olives noires dénoyautées (Nyons ou Kalamata)`,
        `2 c. à soupe de câpres, rincées`,
        `4 filets d'anchois`,
        `1 gousse d'ail`,
        `Jus d'un demi-citron`,
        `4–5 c. à soupe de bonne huile d'olive`,
        `Feuilles de thym frais`,
        `Poivre noir`,
      ],
      instructions: [
        `Mettre les olives, les câpres, les anchois et l'ail dans un mixeur.`,
        `Mixer par impulsions jusqu'à obtenir une texture grossière — on veut du relief, pas une purée lisse.`,
        `Ajouter le jus de citron et l'huile d'olive et mixer brièvement.`,
        `Assaisonner de poivre (le sel ne sera pas nécessaire — les anchois et les câpres le fournissent).`,
        `Transvaser dans un bocal. Verser un filet d'huile supplémentaire sur le dessus.`,
        `Réfrigérer. La tapenade s'améliore après une journée. Servir sur des toasts, avec des crudités, ou mélangée à des pâtes.`,
      ],
      marcelTip: `Utilisez de bonnes olives. La tapenade n'est bonne qu'à hauteur de ses olives. Achetez-les à un étal de marché, pas en boîte.`,
    },
  },
  {
    slug: 'daube-de-sanglier-provencale',
    title: 'Daube de Sanglier à la Provençale',
    excerpt: 'A classic Provençal wild boar daube - marinated for up to 48 hours, slow-cooked on the hearth, and even better the next day.',
    image: '/images/sanglier_daube.png',
    date: '2026-03-13',
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
      'Start 8 to 48 hours ahead. Chop the onions and carrots, add to a pan with a little olive oil and brown lightly. Allow to cool, then transfer to a non-reactive container - enamelware, clay, or plastic. Do not use stainless steel, as the acid in the wine will react with it.',
      'Add the wine, boar meat, browned vegetables, bouquet garni, garlic, and a generous amount of salt and pepper. Cover and refrigerate for at least 8 hours. 24 hours gives a better result.',
      'When ready to cook, drain the meat and reserve all of the marinade liquid. Pat the meat completely dry with kitchen paper, then toss in cornstarch or flour - this will thicken the daube as it cooks.',
      'Heat olive oil in a cast iron pot over a high heat. Brown the meat in batches - do not crowd the pan or it will steam instead of sear. Set aside. Add the lardons and fry until almost crispy. Add the anchovy fillets and cook for 2 minutes, stirring - they will dissolve completely and add a deep richness you won\'t be able to identify but will absolutely taste.',
      'Pour a cup of the reserved marinade into the pot and scrape the bottom well to lift all the caramelised bits. Add the vegetables from the marinade, the tomatoes, the olives, and return the browned meat to the pot.',
      'Pour in enough of the remaining marinade to just cover everything. Bring to a gentle simmer, cover, and cook over the lowest possible heat for at least 2 hours. Check occasionally and add more liquid as needed. The meat should be completely fall-apart tender.',
      'The daube is good eaten immediately, but do yourself a favour - remove it from the heat when done, let it cool completely, and reheat it slowly the next day. Ideally on a hearth, but the oven works too. Stir in 100ml of crème fraîche and a knob of butter just before serving.',
      'Serve over pasta, mashed potatoes, lemon and rosemary rice, or baked potatoes. Always with a baguette and a good red wine.',
    ],
    story: `This is the real daube - the version that takes two days and is worth every hour of them. In the old villages of Provence, the daube was not a weekday meal. It was a winter occasion. You made it when the hunting season had been good, when you had proper wine and time, and when the cold outside made the idea of something rich and dark and slow-cooked feel entirely necessary.\n\nThe word daube itself tells you something. It derives from the daubière - a tall, wide-bottomed clay pot with a tight-fitting lid, designed to sit in the embers of a hearth and barely simmer for hours. The clay absorbed and regulated heat in a way no metal pot could match. The result was meat that fell apart in threads, a sauce that had reduced to something glossy and profound, and a smell that filled the house from mid-afternoon until well after midnight.\n\nWild boar is the natural choice in the south. It has the strength of flavour and the texture to survive long cooking - in fact, it improves dramatically with time. The marinade is not optional. Give it a full 24 hours if you can. The red wine, the thyme, the rosemary - these are not flavourings added at the end. They become the dish.`,
    marcelTip: 'The anchovy fillets are the secret. Do not skip them. They disappear entirely but leave behind a richness that makes people ask what your secret is. You don\'t have to tell them.',
    marcelType: 'cooking',
    toolIds: ['potjie-pot'],
    fr: {
      title: `Daube de Sanglier à la Provençale`,
      excerpt: `Une daube provençale classique de sanglier — marinée jusqu'à 48 heures, mijotée doucement au coin du feu, et encore meilleure le lendemain.`,
      story: `Voilà la vraie daube — la version qui prend deux jours et mérite chaque heure. Dans les vieux villages de Provence, la daube n'était pas un plat de semaine. C'était une occasion d'hiver. On la préparait quand la saison de chasse avait été bonne, quand on avait du vrai vin et du temps, et que le froid dehors rendait l'idée de quelque chose de riche, sombre et longuement mijoté parfaitement nécessaire.\n\nLe mot daube lui-même vous dit quelque chose. Il vient de la daubière — une grande marmite en terre cuite à fond large et couvercle bien ajusté, conçue pour reposer dans les braises d'un âtre et frémir à peine pendant des heures. L'argile absorbait et régulait la chaleur d'une façon qu'aucune cocotte en métal ne peut égaler. Le résultat : une viande qui se défaisait en fils, une sauce réduite à quelque chose de brillant et profond, une odeur qui remplissait la maison depuis le milieu de l'après-midi jusqu'après minuit.\n\nLe sanglier est le choix naturel dans le Midi. Il a la puissance de saveur et la texture pour survivre à la longue cuisson — en réalité, il s'améliore considérablement avec le temps. La marinade n'est pas facultative. Donnez-lui 24 heures complètes si vous le pouvez. Le vin rouge, le thym, le romarin — ce ne sont pas des arômes ajoutés à la fin. Ils deviennent le plat.`,
      ingredients: [
        `2 kg de sanglier (filet, gigot ou épaule), coupé en morceaux de 3 × 3 cm`,
        `2 litres de vin rouge`,
        `3 carottes, grossièrement coupées`,
        `2 oignons, grossièrement coupés`,
        `200 g de poitrine fumée ou non fumée, coupée en lardons`,
        `1 bouquet garni (thym, romarin, laurier)`,
        `5 gousses d'ail, ou selon le goût`,
        `2 tomates mûres (ou en conserve à défaut)`,
        `200 g d'olives noires, de préférence à la grecque`,
        `Huile d'olive`,
        `Sel et poivre selon le goût`,
        `4 filets d'anchois salés`,
        `Maïzena ou farine, pour enrober`,
        `100 ml de crème fraîche (facultatif, pour finir)`,
        `Une noix de beurre (pour finir)`,
      ],
      instructions: [
        `Commencer 8 à 48 heures à l'avance. Émincer les oignons et les carottes, les mettre dans une poêle avec un peu d'huile d'olive et faire revenir légèrement. Laisser refroidir, puis transférer dans un récipient non réactif — émail, terre cuite ou plastique. Ne pas utiliser l'inox, car l'acide du vin réagirait avec lui.`,
        `Ajouter le vin, la viande de sanglier, les légumes dorés, le bouquet garni, l'ail, et une bonne quantité de sel et de poivre. Couvrir et réfrigérer pendant au moins 8 heures. 24 heures donne un meilleur résultat.`,
        `Au moment de cuisiner, égoutter la viande et réserver tout le liquide de marinade. Sécher la viande complètement avec du papier absorbant, puis l'enrober de Maïzena ou de farine — cela épaissira la daube à la cuisson.`,
        `Chauffer l'huile d'olive dans une cocotte en fonte à feu vif. Faire dorer la viande par fournées — ne pas surcharger la cocotte ou elle cuira à la vapeur plutôt que saisir. Réserver. Faire revenir les lardons jusqu'à ce qu'ils soient presque croustillants. Ajouter les filets d'anchois et cuire 2 minutes en remuant — ils se dissolvent complètement et apportent une profondeur savoureuse qu'on ne pourra pas identifier mais qu'on sentira absolument.`,
        `Verser une tasse du liquide de marinade réservé dans la cocotte et gratter bien le fond pour lever tous les sucs caramélisés. Ajouter les légumes de la marinade, les tomates, les olives, et remettre la viande dorée dans la cocotte.`,
        `Verser assez de marinade restante pour tout recouvrir juste. Porter à frémissement doux, couvrir et cuire à feu le plus bas possible pendant au moins 2 heures. Vérifier de temps en temps et ajouter du liquide si nécessaire. La viande doit être complètement fondante.`,
        `La daube est bonne servie immédiatement, mais faites-vous une faveur — retirez-la du feu une fois cuite, laissez-la refroidir complètement, et réchauffez-la lentement le lendemain. Idéalement sur un feu de cheminée, mais le four convient aussi. Incorporer 100 ml de crème fraîche et une noix de beurre juste avant de servir.`,
        `Servir sur des pâtes, une purée de pommes de terre, un riz au citron et au romarin, ou des pommes de terre au four. Toujours avec une baguette et un bon vin rouge.`,
      ],
      notes: [
        `Sur la marinade : ne lésinez pas sur le temps. Une nuit complète transforme la viande. 48 heures la rend sublime. Le vin fait le travail — laissez-le faire.`,
        `Sur la cocotte : une cocotte en fonte ou en terre cuite est idéale. La régulation thermique lente est ce qui distingue une vraie daube d'un simple ragoût.`,
        `Sur les anchois : ils sont le secret. Ne les sautez pas. Ils disparaissent entièrement mais laissent derrière eux une richesse qui fait demander aux gens quel est votre secret. Vous n'êtes pas obligé de leur dire.`,
        `Le lendemain : la daube est invariablement meilleure réchauffée. Les saveurs se fondent, la sauce s'intensifie. Si vous pouvez résister à l'envie de la manger le soir même, vous serez récompensé.`,
      ],
      marcelTip: `Les filets d'anchois sont le secret. Ne les sautez pas. Ils disparaissent entièrement mais laissent derrière eux une richesse qui fait demander aux gens quel est votre secret. Vous n'êtes pas obligé de leur dire.`,
    },
  },
  {
    slug: 'smoked-mackerel-pate',
    title: 'Smoked Mackerel Pâté',
    excerpt: 'A rich, smoky apéro spread that comes together in minutes - perfect with a chilled glass of rosé at sunset.',
    image: '/images/recipe-tapenade.jpg',
    date: '2026-03-14',
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
      'Taste and adjust - more lemon juice if it needs brightness, more pepper if it needs bite.',
      'Refrigerate for at least 30 minutes to let the flavours come together.',
      'To serve, spoon into a bowl and drizzle with a little olive oil. Serve with toasted baguette slices, crackers, radishes, cucumber slices, or pickled onions. Garnish with parsley, lemon zest, and cracked pepper.',
    ],
    story: `The apéro in Provence is not a preliminary to the meal. It is a meal in its own right - or at least, it frequently becomes one. It begins around six in the evening, when the heat of the day has eased and someone produces a bottle of cold rosé. A bowl of olives appears. Then something to spread on bread. Then a few slices of saucisson. Before long it is nine o'clock and nobody is especially hungry for dinner.\n\nThe mackerel pâté earns its place at this table because it is serious. Smoked mackerel has a presence - oily, salty, deeply flavoured - that holds its own against a cold glass of wine in a way that more delicate spreads cannot. The crème fraîche softens it, the capers and shallots give it structure, and the lemon lifts everything.\n\nMake it the day before. It improves enormously overnight as the flavours settle and deepen. Serve it with toasted baguette, a few cornichons on the side, and no particular hurry to be anywhere.`,
    marcelTip: 'The apéro is not just a drink - it is a moment. Make the pâté the day before, pour the rosé while it is still cold, and do not rush. The evening will take care of itself.',
    marcelType: 'cooking',
    fr: {
      title: `Pâté de Maquereau Fumé`,
      excerpt: `Une tartinade d'apéro riche et fumée qui se prépare en quelques minutes — parfaite avec un verre de rosé bien frais au coucher du soleil.`,
      story: `L'apéro en Provence n'est pas un préambule au repas. C'est un repas à part entière — ou du moins, il le devient souvent. Il commence vers six heures du soir, quand la chaleur du jour s'est apaisée et que quelqu'un sort une bouteille de rosé bien frais. Un bol d'olives apparaît. Puis quelque chose à étaler sur du pain. Puis quelques tranches de saucisson. Avant longtemps il est neuf heures et personne n'a vraiment faim pour le dîner.\n\nLe pâté de maquereau gagne sa place à cette table parce qu'il est sérieux. Le maquereau fumé a une présence — huileux, salé, au goût prononcé — qui tient tête à un verre de vin froid d'une façon que des tartinades plus délicates ne peuvent pas. La crème fraîche l'adoucit, les câpres et l'échalote lui donnent de la structure, et le citron soulève l'ensemble.\n\nPréparez-le la veille. Il s'améliore énormément en une nuit, les saveurs se fondant et s'approfondissant. Servez-le avec des tranches de baguette grillées, quelques cornichons à côté, et sans aucune envie particulière d'être ailleurs.`,
      ingredients: [
        `2 filets de maquereau fumé (environ 250–300 g), peau retirée`,
        `120 g de crème fraîche`,
        `60 g de fromage frais (type Philadelphia)`,
        `1 c. à soupe de moutarde de Dijon`,
        `Zeste d'un demi-citron`,
        `1 c. à soupe de jus de citron`,
        `1 petite échalote, finement émincée`,
        `1 c. à soupe de câpres, hachées`,
        `1 c. à soupe de persil frais, haché`,
        `2 c. à soupe de bonne huile d'olive`,
        `Poivre noir fraîchement moulu`,
        `Facultatif : une pincée de paprika fumé ou de cayenne`,
      ],
      instructions: [
        `Émietter le maquereau fumé dans un saladier en retirant les arêtes éventuelles.`,
        `Ajouter la crème fraîche, le fromage frais, la moutarde de Dijon, le zeste et le jus de citron.`,
        `Incorporer l'échalote émincée, les câpres, le persil et l'huile d'olive. Assaisonner généreusement de poivre noir. Ajouter une pincée de paprika fumé ou de cayenne si désiré.`,
        `Pour une texture rustique, écraser le tout à la fourchette. Pour un pâté plus lisse, mixer brièvement au robot.`,
        `Goûter et ajuster — plus de jus de citron si le pâté a besoin de vivacité, plus de poivre s'il a besoin de punch.`,
        `Réfrigérer au moins 30 minutes pour laisser les saveurs se marier.`,
        `Pour servir, verser dans un bol et arroser d'un filet d'huile d'olive. Servir avec des tranches de baguette grillées, des crackers, des radis, des rondelles de concombre ou des oignons marinés. Garnir de persil, de zeste de citron et de poivre concassé.`,
      ],
      marcelTip: `L'apéro n'est pas seulement une boisson — c'est un instant. Faites le pâté la veille, versez le rosé pendant qu'il est encore frais, et ne vous pressez pas. La soirée se chargera du reste.`,
    },
  },
  {
    slug: 'braai-lamb-chops-provencal',
    title: 'Braai Lamb Chops Provençal',
    excerpt: 'Lamb chops grilled over wood coals with herbes de Provence - the perfect summer braai.',
    image: '/images/recipe-lambchops.jpg',
    date: '2026-03-15',
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
      'Light your fire. Wood coals are essential - charcoal is acceptable, gas is not.',
      'When the coals are grey and glowing, place the chops on the grill.',
      'Throw a sprig of rosemary directly onto the coals for fragrance.',
      'Cook for 4–5 minutes per side for medium. Rest for 5 minutes.',
      'Finish with a generous pinch of fleur de sel.',
    ],
    story: `The braai and the Provençal summer arrived at the same terrace by different routes. The braai is South African - a wood fire, a grill, and a philosophy about the right way to cook meat outdoors that involves patience, a cold drink, and the very firm view that gas does not count. The herbes de Provence are local: thyme, rosemary, savory, oregano growing wild in the garrigue, cut and dried and blended with the kind of confidence that only centuries of repetition produce.\n\nLamb is the natural meeting point. Provence has always eaten lamb - the flocks that graze on the high pastures of the Luberon and the Alpilles produce meat that is perfumed by the wild herbs underfoot. Marinated in olive oil and the herbs of the hillside, grilled over wood coals with a branch of rosemary thrown directly onto the embers for fragrance, these chops are as Provençal as anything that came out of a kitchen.\n\nThe only rule is wood coals. No exceptions.`,
    marcelTip: 'The chops should sizzle the moment they hit the grill. If they don\'t, your coals aren\'t hot enough. Wait. Patience makes better braai.',
    marcelType: 'cooking',
    fr: {
      title: `Côtelettes d'Agneau au Braai à la Provençale`,
      excerpt: `Des côtelettes d'agneau grillées sur braise de bois avec des herbes de Provence — le braai d'été parfait.`,
      story: `Le braai et l'été provençal se sont retrouvés sur la même terrasse par des chemins différents. Le braai est sud-africain — un feu de bois, un gril, et une philosophie sur la bonne manière de cuire la viande en plein air qui implique la patience, une boisson fraîche, et la conviction très ferme que le gaz ne compte pas. Les herbes de Provence sont locales : thym, romarin, sarriette, origan qui pousse sauvage dans la garrigue, coupé, séché et mélangé avec la confiance que seuls plusieurs siècles de répétition produisent.\n\nL'agneau est le point de rencontre naturel. La Provence a toujours mangé l'agneau — les troupeaux qui paissent sur les hauts pâturages du Luberon et des Alpilles produisent une viande parfumée par les herbes sauvages sous leurs sabots. Marinées dans l'huile d'olive et les herbes de la garrigue, grillées sur braise de bois avec une branche de romarin jetée directement sur les braises pour le parfum, ces côtelettes sont aussi provençales que ce qui sort d'une cuisine.\n\nLa seule règle : braise de bois. Sans exception.`,
      ingredients: [
        `8 côtelettes d'agneau`,
        `4 c. à soupe d'huile d'olive`,
        `2 c. à soupe d'herbes de Provence`,
        `3 gousses d'ail, écrasées`,
        `Jus d'un citron`,
        `Fleur de sel`,
        `Romarin frais pour les braises`,
      ],
      instructions: [
        `Mélanger l'huile d'olive, les herbes de Provence, l'ail et le jus de citron dans un bol.`,
        `Enrober les côtelettes généreusement. Laisser mariner au moins 2 heures, idéalement toute la nuit.`,
        `Allumer le feu. La braise de bois est indispensable — le charbon de bois est acceptable, le gaz ne l'est pas.`,
        `Quand les braises sont grises et incandescentes, disposer les côtelettes sur le gril.`,
        `Jeter un brin de romarin directement sur les braises pour le parfum.`,
        `Cuire 4–5 minutes de chaque côté pour une cuisson rosée. Laisser reposer 5 minutes.`,
        `Terminer par une généreuse pincée de fleur de sel.`,
      ],
      marcelTip: `Les côtelettes doivent grésiller dès qu'elles touchent le gril. Si ce n'est pas le cas, vos braises ne sont pas assez chaudes. Attendez. La patience fait les meilleurs braais.`,
    },
  },
  {
    slug: 'creamy-veal-tail-potjie',
    title: 'Creamy Veal Tail & Mushroom Potjie',
    excerpt: 'How we won the 2024 Annual PotjieKos Competition in the south of France - a veal tail potjie that sits between a French blanquette de veau and a South African fireside classic.',
    image: '/images/p4.PNG',
    images: ['/images/p1.jpg', '/images/p2.jpg', '/images/p3.jpg'],
    date: '2026-03-18',
    category: 'braai',
    servings: 16,
    prepTime: '30 min',
    cookTime: '2h 30 min',
    difficulty: 'Advanced',
    ingredients: [
      '4 kg veal tail, rinsed and patted dry',
      'Salt and white pepper',
      'Olive oil for browning',
      '600g smoked lardons',
      '250g celery, chopped',
      '200g carrots, chopped',
      '12 onions',
      'Nutmeg (noix de muscade), freshly grated',
      '600ml white wine',
      '1.5 litres chicken stock',
      '8 anchovy fillets',
      '14 cloves garlic, crushed (divided - half now, half later)',
      '4 kaffir lime leaves',
      { text: '300ml demi-glace (homemade with dried porcini)', recipeSlug: 'homemade-demi-glace' },
      '1.5 kg grenaille potatoes, skin on',
      '24 shallots',
      '2 corn cobs, cut in rounds',
      '2 lemons, zest removed in long strips (about 9 strips)',
      '750ml creme fraiche',
      '800g mushrooms',
      'Herb butter, to taste',
      'Nuoc Mam (Vietnamese fish sauce), to taste',
      'White pepper, to taste',
    ],
    instructions: [
      'Rinse the veal tail and pat dry with paper towels. Season with salt and white pepper. Brown lightly in olive oil in the potjie over hot coals, working in batches - do not crowd the pot. Remove and set aside.',
      'Add the smoked lardons to the pot. Add the celery, carrots, and onions. Grate nutmeg generously over everything. Cook in olive oil until softened, about 30 minutes.',
      'Return the veal tail to the pot. Add the white wine, chicken stock, anchovy fillets, half the crushed garlic, and the kaffir lime leaves. Stir, cover, and simmer for 45 minutes.',
      'Add the demi-glace. Stir well and simmer for 15 minutes.',
      'Add the grenaille potatoes, skin on. Simmer for 15 minutes.',
      'Add the shallots and the corn rounds. Simmer for 10 minutes.',
      'Add the lemon zest strips. Simmer for 5 minutes, then remove and discard the strips.',
      'Add the creme fraiche, remaining garlic, and mushrooms. Remove and discard the kaffir lime leaves. Stir in herb butter and Nuoc Mam to taste. Season with white pepper. Simmer for a final 15 minutes.',
      'Serve over samp with gremolata. Finish with freshly shaved dry biltong at the table.',
    ],
    story: `Every year, somewhere in Roquebrune-sur-Argens, a small and improbable thing happens. South Africans, French people with some connection to South Africa, and a handful of curious locals gather around cast iron pots, light fires, and proceed to argue - politely, mostly - about who makes the best potjie. The competition has been going since 2005. By now it has the weight of tradition behind it.\n\nWe competed for the first time the year before. We came back in 2024 with something we had been working on - a Creamy Veal Tail and Mushroom Potjie - and this time we won it.\n\nWhat we were after was something that sat between two traditions. On one side, the blanquette de veau - that quietly magnificent French braise of veal in a cream sauce, white and delicate and deeply comforting. On the other, a potjie: layered, unhurried, built over a fire in a cast iron pot that rewards patience and punishes impatience in equal measure. The result is not quite either one. It is something that could only have come from a South African cooking over a fire in Provence.\n\nMy wife, who is South African with German roots and therefore constitutionally opposed to approximation, documented every step the first time we made it. Quantities, timings, sequence - all of it written down with the same seriousness a surveyor brings to a boundary dispute. I cooked. She recorded. This is what makes us work.\n\nWe set up in Roquebrune-sur-Argens on the morning of the competition with a Number 4 potjie on a drum braai I had cut and welded myself, and enough charcoal and vine stumps sourced from Chateauneuf-du-Pape to heat a small house. Alongside the potjie, a second fire for the samp - because a potjie like this needs something underneath it that can hold the weight of the sauce.\n\nThe judges came around mid-afternoon. Ours won.\n\nTo serve: cook samp (dried stamped maize, soaked overnight) low and slow for 1.5-2 hours until tender. Make a gremolata from lemon zest, flat-leaf parsley, garlic, and a generous pour of good Provencal olive oil. Spoon the samp into bowls, add the gremolata, ladle the potjie over the top, and finish with freshly shaved dry biltong at the table.`,
    notes: [
      'Use veal tail, not beef oxtail. The flavour is more delicate and it carries the cream better. Veal tail from l\'Aveyron is ideal.',
      'The porcini - cepes in France - go into the demi-glace, not the potjie directly. This puts their flavour into the structural base of the sauce. Dried cepes are available in any good French supermarket.',
      'The anchovies and Nuoc Mam are not fish flavours - they are depth. They dissolve into the braise and do their work quietly. Do not leave them out.',
      'Kaffir lime leaves must come out before the cream goes in. The lemon zest strips also go in late and come out again - just a quiet citrus lift. Do not skip this step and do not leave them too long.',
      'Grenaille potatoes go in skin on - small, waxy, and they hold their shape. Add them at the specified time and they will be ready when everything else is.',
      'The herb butter is not optional - stir it in at the end and let it melt through the sauce. Fat carries flavour, and good butter at the finish makes everything taste more of itself.',
      'Manage your fire. Low and slow. The 2h30 is a ceiling, not a target.',
      'The biltong finish is a flavour moment, not a garnish. Use very dry biltong and a fine zester, grated at the table. It melts into the sauce and leaves people wondering what they just tasted.',
    ],
    marcelTip: 'The problem with most potjie cooks is that they stop trusting themselves halfway through and start second-guessing the pot. The pot knows. You just have to listen to it.',
    marcelType: 'cooking',
    toolIds: ['potjie-pot'],
    relatedRecipes: ['homemade-demi-glace'],
  },
  {
    slug: 'homemade-demi-glace',
    title: 'Homemade Demi-Glace',
    excerpt: 'The long cook that makes everything else worth it - a deeply reduced veal stock that sets solid when cold and transforms any sauce, braise, or potjie.',
    image: '/images/dc1.png',
    images: ['/images/dc1.png', '/images/dc2.png'],
    date: '2026-03-18',
    category: 'provencal',
    servings: 22,
    prepTime: '1 hour',
    cookTime: '8 hours',
    difficulty: 'Medium',
    ingredients: [
      '4 kg veal tail',
      'Cold water to cover',
      '1 generous handful dried porcini mushrooms',
      '1 splash Nuoc Mam (Vietnamese fish sauce)',
      '1 large handful fresh thyme, wild if possible',
      '1 large handful fresh rosemary, wild if possible',
    ],
    instructions: [
      'Place the veal tail in a single layer in a roasting tray. Roast at 220°C until well browned on all sides, turning once - approximately 45-60 minutes total. Remove from the oven and transfer the browned tail to a large cast iron pot.',
      'Cover the veal tail with cold water. Bring to a boil over high heat. Skim all foam and impurities from the surface - continue skimming every few minutes until the liquid runs clear, approximately 30 minutes.',
      'While the stock simmers and skims, rehydrate the dried porcini in a bowl of lukewarm water. Stir them well to loosen any grit. Leave for 20-30 minutes until fully softened.',
      'Lift the porcini from the soaking liquid and set aside. Pour the soaking liquid slowly through a coffee filter or fine cloth to catch any sand - dried mushrooms often carry grit and an unfiltered liquid will ruin the texture of the finished demi-glace. Add the filtered soaking liquid to the pot, then add the porcini themselves.',
      'Add the Nuoc Mam, thyme, and rosemary. Do not add salt.',
      'Transfer the pot with lid on to a 110°C oven. Cook for 7 hours. Check the liquid level periodically and top up with water as needed. You are extracting, not reducing.',
      'Remove the pot from the oven. Discard the bones, herbs, and solids. Strain the liquid through a fine sieve - do not press the solids.',
      'Return the strained liquid to the hob over medium heat. Reduce until the demi-glace coats the back of a spoon and has a syrupy, glossy consistency. It should be deeply savoury and leave a coating on the palate.',
      'Pour into ice cube trays and cool to room temperature. Freeze until solid, then transfer the cubes to a freezer bag. Label and date. Use directly from frozen.',
    ],
    story: `Most ingredients I track down myself. The kaffir lime leaves I grow in a pot outside. Wild thyme and rosemary I pick from the hillsides of Les Alpilles. But the veal tail is different. For that, I have Nou-Nours.\n\nNou-Nours is a rugby friend who works at the Intermarche in Saint-Remy-de-Provence. He orders the veal tail specially for me, in quantities large enough to justify the effort of what comes next - because a demi-glace cooked from two kilos of tail is the same amount of work as one cooked from eight, and it keeps in the freezer for months. When Nou-Nours calls to say the order is in, I clear the calendar.\n\nThe quantities below are built around 4 kilos of veal tail - enough to fill a serious cast iron pot and produce a meaningful yield of cubes to store. Scale it down if you must, but you will regret it in February when you are reaching into the freezer for a cube to finish a sauce and finding empty bags.\n\nWhat most cooks mean when they say demi-glace today is a deeply reduced veal stock: collagen-rich, glossy, intensely flavoured, gelatinous when cold. No roux. No espagnole. Just good bones, aromatics, time, and heat. The gelatin that comes from slowly breaking down the collagen in veal tail is what makes the result set solid when chilled - which is how you know you have done it correctly.\n\nI do not add salt to this recipe. A demi-glace is a building block, not a finished sauce. What I add instead is a measure of Nuoc Mam - Vietnamese fish sauce. Not enough to taste, not enough to identify. Just enough to add the kind of depth that salt alone does not provide. The demi-glace does not taste of fish. It tastes more intensely of itself.`,
    notes: [
      'Do not add salt at any stage. The demi-glace will be reduced further and used as a building block - seasoning now makes it impossible to control later.',
      'Always filter the porcini soaking liquid through a coffee filter before adding it to the pot. Dried mushrooms frequently carry fine sand that settles at the bottom of the soaking bowl - pour slowly and stop before you reach the last few drops.',
      'The fish sauce does not make this taste of fish. It adds umami depth that disappears into the finished sauce. Do not skip it.',
      'Wild thyme and rosemary from the garrigue will always outperform cultivated herbs. If picking your own, take generously.',
      'Skimming thoroughly in the first 30 minutes is the difference between a clear demi-glace and a murky one. Take the time.',
      '110°C in the oven is intentionally low. You want the collagen to break down slowly and completely, not boil the life out of the liquid.',
      'Do not press the solids when straining - it clouds the stock and undoes the work of skimming.',
      'The cubes freeze solid and go directly from the freezer into a hot pan. One or two cubes will transform a pan sauce. Three or four will carry a braise. Make 4 kilos at a time.',
    ],
    marcelTip: 'A demi-glace cooked from two kilos of tail is the same amount of work as one cooked from eight. Make 4 kilos. You will thank yourself in February.',
    marcelType: 'cooking',
  },
  {
    slug: 'homemade-cultured-butter',
    title: 'Homemade Cultured Butter',
    excerpt: 'From La Tapy\'s creme fraiche to the table in under twenty minutes - three butters from one session: natural, salted, and herb.',
    image: '/images/butter.png',
    date: '2026-03-19',
    category: 'provencal',
    servings: 8,
    prepTime: '10 min',
    cookTime: '15 min',
    difficulty: 'Easy',
    ingredients: [
      '2 litres full-fat creme fraiche (minimum - scale up as needed)',
      'Ice-cold water and ice cubes, for washing',
      'Fleur de sel, for the salted batch',
      '2 cloves garlic, finely minced, for the herb butter',
      '1 tbsp flat-leaf parsley, finely chopped, for the herb butter',
      '1 tbsp fresh thyme, finely chopped, for the herb butter',
      '1 tbsp fresh rosemary, finely chopped, for the herb butter',
    ],
    instructions: [
      'Pour cold creme fraiche into a stand mixer bowl. Attach the balloon whisk. Start on medium speed until the cream thickens and stiffens, then increase to high. Continue until the cream separates into butter solids and buttermilk - roughly 8-12 minutes. Reserve the buttermilk; it is excellent in bread or pancakes.',
      'Transfer the butter solids to a bowl of ice-cold water. Work repeatedly with a potato masher, driving out the remaining whey. Pour off the cloudy water, add fresh ice water, and repeat until the water runs completely clear. Do not skip this step.',
      'Divide into three portions. Natural: press into shape and wrap in greaseproof paper. Salted: fold in fleur de sel, press and wrap. Herb butter: fold in the garlic and finely chopped parsley, thyme, and rosemary, then press and wrap.',
      'Line ramekins with greaseproof paper, fill with butter, and wrap tightly. Vacuum-pack and freeze any portions not for immediate use.',
    ],
    story: `There is a milk farm at the edge of Saint Andiol called La Tapy. The farmer there runs around seventy dairy cows. We buy our milk from him rather than from the supermarket - partly because it is the right thing to do when you live somewhere, and partly because the milk is genuinely better. Richer, more flavourful, the kind of milk that reminds you what milk is supposed to taste like.\n\nIt reminds me of growing up. We had a small farm in South Africa - about twenty cows in the milkery. The milk came straight from the animal and had a layer of cream on top that was, frankly, ridiculous. The stuff you buy in boxes is a pale and homogenised approximation. Once you have lived near a working dairy, it is difficult to pretend otherwise.\n\nIn spring especially, when the new grass comes through and the cows are out on fresh pasture, the cream from La Tapy is extraordinary. That is when I make butter.\n\nA few years ago I tried making cultured butter the old-fashioned way: creme fraiche in a glass bottle, shaking it until your arms gave out. I shook the bottle for longer than I care to admit and never got past the thick-cream stage. The solution was a stand mixer. What had been a twenty-minute failure in a bottle became a ten-minute job with a balloon whisk. The cream goes in cold, the whisk runs, and somewhere around the eight-minute mark something shifts and suddenly there is butter and buttermilk in the bowl.\n\nWhen I make a batch I make enough to justify the effort. I use at least two litres - my record is five - and I divide it into three: natural (unsalted, for tasting and pastry), salted (fleur de sel folded in, for everyday use), and herb butter with garlic, parsley, thyme, and rosemary. The herb butter on braai potbread is a thing unto itself.`,
    notes: [
      'Use full-fat creme fraiche. Low-fat versions do not have enough butterfat to churn properly.',
      'Start the mixer on medium speed until the cream thickens, then increase to high. Going straight to high with liquid cream creates splatter.',
      'Cold cream churns better. If your creme fraiche is near room temperature, chill the bowl and cream in the freezer for 10 minutes before starting.',
      'The buttermilk left in the bowl is genuine cultured buttermilk. Keep it. Use it to bake rusks (recipe coming soon), or use it to marinate chicken before making fried chicken - it tenderises the meat and keeps it moist throughout the cook.',
      'Wash until the water is completely clear. The keeping quality of the butter depends on it.',
      'Spring butter - made when cows are on new pasture - is noticeably richer and more yellow. If you can make it in spring, do.',
      'For the herb butter, chop the herbs fine and mince the garlic almost to a paste. Coarse pieces do not distribute evenly.',
      'Fleur de sel is the right salt. Coarse sea salt gives uneven pockets; fine table salt is too sharp. Fleur de sel is worth finding - it is available online and in most good food shops, and Maldon flaky sea salt is a reasonable substitute if you cannot.',
      'Refrigerated and salted: keeps up to 3 weeks. Vacuum-packed and frozen: up to 6 months.',
    ],
    marcelTip: 'If the water is still cloudy, keep going. Buttermilk left in the butter is what makes it go off. Wash it properly and it keeps for three weeks in the fridge without complaint.',
    marcelType: 'cooking',
  },
  {
    slug: 'monkey-gland-sauce',
    title: 'South African Monkey Gland Sauce',
    excerpt: 'Despite the name, no monkeys were harmed. This iconic South African steakhouse sauce handles high heat without burning - perfect on steak, ribs, or anything off the braai.',
    image: '/images/monkey.png',
    date: '2026-03-17',
    category: 'braai',
    servings: 8,
    prepTime: '10 min',
    cookTime: '25 min',
    difficulty: 'Easy',
    ingredients: [
      '1 large onion, finely chopped',
      'Olive oil for frying',
      '¾ cup apricot jam',
      '1 cup tomato ketchup',
      '¼ cup strong mustard',
      '¼ cup Worcestershire sauce',
      '3 tablespoons soy sauce',
      '1 tin chopped tomatoes',
      '¾ cup brown grape vinegar, plus a splash more to taste',
      '2-3 cloves garlic, crushed',
      '1-2 teaspoons chilli sauce or 1 fresh chilli, finely chopped (optional but recommended)',
      'Salt and black pepper to taste',
    ],
    instructions: [
      'Fry the onion in olive oil over medium heat until soft and translucent.',
      'Add the apricot jam, ketchup, mustard, Worcestershire sauce, soy sauce, chopped tomatoes, and ¾ cup of the vinegar. Stir well.',
      'Bring to a gentle simmer and let the flavours come together for 15-20 minutes, stirring occasionally.',
      'Add the crushed garlic and chilli if using. Continue simmering for another 5 minutes.',
      'Taste and adjust - add the remaining vinegar if it needs more bite, and season with salt and black pepper.',
    ],
    story: `Despite the name, no monkeys were harmed. This iconic South African steakhouse sauce is believed to have been invented by a French chef working in South Africa — which gives it a certain legitimacy in your kitchen. Use it on steak, hamburgers, ribs, or anything coming off the braai. It contains less sugar than most commercial BBQ sauces, meaning it handles high heat without burning.\n\nTraditionally, Mrs Ball's Chutney is used in place of — or alongside — the apricot jam, and if you can get your hands on a bottle, use it. This version is built for those of us living outside South Africa who can't just grab one off the shelf. The apricot jam gets you very close to that same sweet, fruity depth.`,
    marcelTip: 'Despite the strange name, Monkey Gland Sauce contains almost no monkeys.',
    marcelType: 'cooking',
    fr: {
      title: `Sauce Monkey Gland Sud-Africaine`,
      excerpt: `Malgré le nom, aucun singe n'a été blessé. Cette sauce de steakhouse sud-africaine iconique supporte la haute chaleur sans brûler — parfaite sur un steak, des côtes, ou tout ce qui sort du braai.`,
      story: `Malgré le nom, aucun singe n'a été blessé. Cette sauce de steakhouse sud-africaine iconique aurait été inventée par un chef français travaillant en Afrique du Sud — ce qui lui confère une certaine légitimité dans votre cuisine. Utilisez-la sur un steak, des hamburgers, des côtes, ou tout ce qui sort du braai. Elle contient moins de sucre que la plupart des sauces barbecue du commerce, ce qui signifie qu'elle supporte la haute chaleur sans brûler.\n\nTraditionnellement, le chutney Mrs Ball's est utilisé à la place — ou en plus — de la confiture d'abricots, et si vous pouvez vous en procurer une bouteille, utilisez-la. Cette version est conçue pour ceux d'entre nous qui vivent hors d'Afrique du Sud et ne peuvent pas simplement en attraper une en rayon. La confiture d'abricots s'en approche beaucoup, avec cette même profondeur sucrée et fruitée.`,
      ingredients: [
        `1 grand oignon, finement émincé`,
        `Huile d'olive pour la cuisson`,
        `¾ tasse de confiture d'abricots`,
        `1 tasse de ketchup`,
        `¼ tasse de moutarde forte`,
        `¼ tasse de sauce Worcestershire`,
        `3 c. à soupe de sauce soja`,
        `1 boîte de tomates concassées`,
        `¾ tasse de vinaigre de raisin brun, plus un trait selon le goût`,
        `2–3 gousses d'ail, écrasées`,
        `1–2 c. à café de sauce chili ou 1 piment frais, finement émincé (facultatif mais recommandé)`,
        `Sel et poivre noir selon le goût`,
      ],
      instructions: [
        `Faire revenir l'oignon dans l'huile d'olive à feu moyen jusqu'à ce qu'il soit tendre et translucide.`,
        `Ajouter la confiture d'abricots, le ketchup, la moutarde, la sauce Worcestershire, la sauce soja, les tomates concassées et ¾ tasse de vinaigre. Bien mélanger.`,
        `Porter à frémissement doux et laisser les saveurs se marier pendant 15–20 minutes, en remuant de temps en temps.`,
        `Ajouter l'ail écrasé et le piment si utilisé. Continuer à mijoter encore 5 minutes.`,
        `Goûter et ajuster — ajouter le vinaigre restant si la sauce a besoin de plus de mordant, et assaisonner de sel et de poivre noir.`,
      ],
      marcelTip: `Malgré le nom étrange, la Monkey Gland Sauce ne contient presque pas de singes.`,
    },
  },
  {
    slug: 'sardine-dip',
    title: 'French Sardine Apéro Dip (10-Minute Recipe)',
    excerpt: 'A fifteen-minute apéro dip built on tinned sardines, shallots, and a squeeze of lemon. The one that is always first to go.',
    image: '/images/sardine.png',
    date: '2026-04-28',
    category: 'apero',
    servings: 6,
    prepTime: '15 min',
    cookTime: '0 min',
    difficulty: 'Easy',
    ingredients: [
      '2 cans sardines in oil, drained',
      '2 shallots (or 1 small white onion), very finely chopped',
      '2 tablespoons mayonnaise',
      '1 lemon or lime, zest of half',
      '1 lemon or lime, juice of half',
      '1 pinch smoked paprika',
      '1 pinch cayenne pepper (or a few dashes of Tabasco)',
      'Salt and white pepper',
    ],
    instructions: [
      'Chop the shallots as finely as you can. You want them to disappear into the dip, not announce themselves in every bite.',
      'Drain the sardines thoroughly and tip into a bowl. Mash with a fork, but stop short of a paste. The fish should still have some texture and presence. It should look like sardine, not baby food.',
      'Add the shallots to the sardines. Add the mayonnaise and mix through. The dip should be thick at this point, which is correct. Add the zest of half a lemon or lime, then the smoked paprika and cayenne (or Tabasco). Season with salt and white pepper. Mix well. In summer, when fresh dill is easy to find, add a small handful finely chopped. It turns this into a different dip, lighter and more herbal, and it is worth doing.',
      'Squeeze in the juice of half a lemon or lime a little at a time, mixing as you go, until the dip loosens just enough to spread easily on a cracker without sliding off. Taste and adjust: more cayenne if you want heat, more lemon if it needs brightness.',
    ],
    story: `This recipe belongs to my wife. She has been making it since before we were married, which is over twenty years ago now, and it has been on the table at every apéro we have hosted since. It is not a recipe we decided to feature. It is simply what we make.\n\nWe keep four cans of sardines in the cupboard at all times. Not because we planned to, but because we learned the hard way what happens when friends arrive unexpectedly on a warm evening and you have nothing ready. Now we are never without them.\n\nIf the sardines are there and the shallots are there, we are fifteen minutes from an apéro. The rest fills itself in. If the butcher across the road is still open, you go. If he is not, his vending machine is - dried sausage, always stocked, available at any hour, a bloody marvel. A packet of biscuits from the pantry. A bottle of rosé from the fridge if there is one, otherwise quickly pop one from the wine rack into an ice bucket.\n\nThe dip takes ten minutes. We are outside before the bottle has had time to sweat. That is what this recipe is. Not a project. An answer.`,
    notes: [
      'Granulated garlic works well if you want an extra layer of flavour.',
      'Serve at room temperature on crackers or sliced baguette.',
      'It is the first thing to go at any apéro, which is either a compliment to the recipe or an indictment of how hungry people arrive.',
    ],
    marcelTip: 'Keep four cans in the cupboard at all times. You will thank yourself on the evening when unexpected guests appear and the sun is still warm.',
    marcelType: 'cooking',
    fr: {
      title: 'Dip de Sardines',
      excerpt: 'Un dip apéro en quinze minutes, à base de sardines en boîte, d\'échalotes et d\'un filet de citron. Celui qui disparaît toujours en premier.',
      story: `Cette recette appartient à ma femme. Elle la fait depuis avant notre mariage, ce qui représente plus de vingt ans maintenant, et elle est sur la table à chaque apéro que nous avons organisé depuis. Ce n'est pas une recette que nous avons décidé de mettre en avant. C'est simplement ce que nous faisons.\n\nNous gardons quatre boîtes de sardines dans le placard en permanence. Non pas parce que nous l'avons planifié, mais parce que nous avons appris à la dure ce qui se passe quand des amis arrivent à l'improviste un soir de chaleur et que vous n'avez rien de prêt. Maintenant, nous n'en manquons jamais.\n\nSi les sardines sont là et les échalotes sont là, nous sommes à quinze minutes d'un apéro. Le reste se remplit tout seul. Si le boucher d'en face est encore ouvert, vous y allez. S'il ne l'est pas, son distributeur automatique l'est, lui, saucisson sec toujours approvisionné, disponible à toute heure, une sacrée merveille. Un paquet de biscuits du garde-manger. Une bouteille de rosé du frigo s'il y en a une, sinon vite une du casier à vin dans un seau à glace.\n\nLe dip prend dix minutes. Nous sommes dehors avant que la bouteille ait eu le temps de transpirer. C'est ça, cette recette. Pas un projet. Une réponse.`,
      ingredients: [
        '2 boîtes de sardines à l\'huile, égouttées',
        '2 échalotes (ou 1 petit oignon blanc), finement hachées',
        '2 cuillères à soupe de mayonnaise',
        '1 citron ou citron vert, zeste de la moitié',
        '1 citron ou citron vert, jus de la moitié',
        '1 pincée de paprika fumé',
        '1 pincée de cayenne (ou quelques traits de Tabasco)',
        'Sel et poivre blanc',
      ],
      instructions: [
        'Hacher les échalotes le plus finement possible. Vous voulez qu\'elles disparaissent dans le dip, pas qu\'elles s\'annoncent à chaque bouchée.',
        'Égoutter soigneusement les sardines et les verser dans un bol. Écraser à la fourchette, mais sans aller jusqu\'à la purée. Le poisson doit encore avoir de la texture et de la présence. Ça doit ressembler à de la sardine, pas à de la nourriture pour bébé.',
        'Ajouter les échalotes aux sardines. Ajouter la mayonnaise et mélanger. Le dip doit être épais à ce stade, c\'est normal. Ajouter le zeste de la moitié d\'un citron ou citron vert, puis le paprika fumé et le cayenne (ou le Tabasco). Assaisonner avec du sel et du poivre blanc. Bien mélanger. En été, quand l\'aneth frais est facile à trouver, ajouter une petite poignée finement ciselée. Ça donne un dip différent, plus léger et plus herbacé, et ça vaut le coup.',
        'Presser le jus de la moitié d\'un citron ou citron vert peu à peu, en mélangeant au fur et à mesure, jusqu\'à ce que le dip se détende juste assez pour s\'étaler facilement sur un cracker sans glisser. Goûter et ajuster : plus de cayenne pour la chaleur, plus de citron si ça manque de vivacité.',
      ],
      notes: [
        'L\'ail en poudre fonctionne bien pour une couche de saveur supplémentaire.',
        'Servir à température ambiante sur des crackers ou des tranches de baguette.',
        'C\'est le premier à disparaître à chaque apéro, ce qui est soit un compliment pour la recette, soit une mise en cause de l\'état de faim dans lequel les gens arrivent.',
      ],
      marcelTip: 'Gardez quatre boîtes dans le placard en permanence. Vous vous féliciterez le soir où des invités imprévus arrivent et que le soleil est encore chaud.',
    },
  },
];

export const videos: Video[] = [
  {
    id: 'van-gogh-land',
    title: 'The Land That Inspired Van Gogh',
    description: 'The light, the landscapes, and the wild beauty of Provence that drove Vincent van Gogh to paint some of the greatest works in history.',
    youtubeId: 'bmg7c9Al6pk',
    date: '2026-03-10',
    category: 'Provence',
    image: '/images/starry-night.jpg',
  },
  {
    id: 'year-in-provence',
    title: 'A Year in Provence',
    description: 'Listen to the spirit of the seasons through this original song - the almond blossom of February, the lavender of July, the harvest of autumn.',
    youtubeId: 'F-bIW2j-Ajc',
    date: '2026-03-11',
    category: 'Provence',
  },
  {
    id: 'eygalieres',
    title: 'Eygalières',
    description: 'One of the most beautiful villages in the Alpilles - ancient stone lanes, a hilltop chapel, and the quiet rhythm of a village that time has treated gently.',
    youtubeId: 'NrPU7VQYjb0',
    date: '2026-03-12',
    category: 'Provence',
  },
  {
    id: 'les-alpilles-drive',
    title: 'The Most Beautiful Drive in Provence – Les Alpilles',
    description: 'A scenic drive through the heart of Les Alpilles, with original music composed for the journey - white limestone ridges, olive groves, and the villages that make this corner of Provence unforgettable.',
    youtubeId: 'JTVwEWiKz5g',
    date: '2026-03-13',
    category: 'Provence',
  },
  {
    id: 'video-LrrtOP9kUf0',
    title: '',
    description: '',
    youtubeId: 'LrrtOP9kUf0',
    date: '2026-03-16',
    category: 'Provence',
  },
];



// Sort all collections newest first
articles.sort((a, b) => b.date.localeCompare(a.date));
recipes.sort((a, b) => b.date.localeCompare(a.date));
videos.sort((a, b) => b.date.localeCompare(a.date));

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

export function getArticleBySlug(slug: string, locale?: string): Article | undefined {
  const article = articles.find((a) => a.slug === slug);
  if (!article || locale !== 'fr' || !article.fr) return article;
  return { ...article, ...article.fr };
}

export function getRecipeBySlug(slug: string, locale?: string): Recipe | undefined {
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe || locale !== 'fr' || !recipe.fr) return recipe;
  return { ...recipe, ...recipe.fr };
}

export function getArticles(locale?: string): Article[] {
  if (locale !== 'fr') return articles;
  return articles.map((a) => (a.fr ? { ...a, ...a.fr } : a));
}

export function getRecipes(locale?: string): Recipe[] {
  if (locale !== 'fr') return recipes;
  return recipes.map((r) => (r.fr ? { ...r, ...r.fr } : r));
}

export function getRelatedArticles(currentSlug: string, count = 3, locale?: string): Article[] {
  return getArticles(locale).filter((a) => a.slug !== currentSlug).slice(0, count);
}
