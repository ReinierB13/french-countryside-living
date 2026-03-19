-- ============================================================
-- Provençal Markets: table + seed data
-- Run this in the Supabase SQL editor
-- Column order for INSERTs:
--   name, village, department, lat, lng, day_of_week,
--   market_type, seasonality, season_months, postcode, mairie_url, notes
-- ============================================================

CREATE TABLE IF NOT EXISTS markets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  village text NOT NULL,
  department text NOT NULL,
  lat numeric NOT NULL,
  lng numeric NOT NULL,
  day_of_week text NOT NULL,
  market_type text[] NOT NULL,
  seasonality text NOT NULL CHECK (seasonality IN ('year_round', 'summer', 'seasonal')),
  season_months int[],
  postcode text,
  mairie_url text,
  mairie_phone text,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE markets ADD COLUMN IF NOT EXISTS postcode text;

-- Enable RLS and allow public reads
ALTER TABLE markets ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read access" ON markets;
CREATE POLICY "Public read access" ON markets FOR SELECT USING (true);

-- Clear existing seed data before re-seeding
TRUNCATE TABLE markets;

-- ============================================================
-- BOUCHES-DU-RHÔNE
-- ============================================================
INSERT INTO markets (name, village, department, lat, lng, day_of_week, market_type, seasonality, season_months, postcode, mairie_url, notes) VALUES
('Marché d''Aix-en-Provence', 'Aix-en-Provence', 'Bouches-du-Rhône', 43.5297, 5.4474, 'Tuesday', ARRAY['food','mixed'], 'year_round', NULL, '13100', 'https://www.mairie-aixenprovence.fr', 'Three main markets in the old town: Place Richelme (food), Place des Prêcheurs, and Cours Mirabeau. Tuesday is the main mid-week market.'),
('Marché d''Aix-en-Provence', 'Aix-en-Provence', 'Bouches-du-Rhône', 43.5297, 5.4474, 'Thursday', ARRAY['food','mixed'], 'year_round', NULL, '13100', 'https://www.mairie-aixenprovence.fr', 'Thursday market on Place des Prêcheurs. Flowers, local produce, and artisan goods.'),
('Grand Marché d''Aix-en-Provence', 'Aix-en-Provence', 'Bouches-du-Rhône', 43.5300, 5.4480, 'Saturday', ARRAY['food','mixed','brocante'], 'year_round', NULL, '13100', 'https://www.mairie-aixenprovence.fr', 'The big Saturday market. Covers the old town from Place Richelme to the cours. One of the finest in southern France.'),
('Marché d''Arles', 'Arles', 'Bouches-du-Rhône', 43.6769, 4.6279, 'Saturday', ARRAY['food','mixed'], 'year_round', NULL, '13200', 'https://www.arles.fr', 'One of the largest markets in Provence. Boulevard des Lices fills with 300+ stalls from dawn. Arrive before 9am for the best of the produce.'),
('Marché de Saint-Rémy-de-Provence', 'Saint-Rémy-de-Provence', 'Bouches-du-Rhône', 43.7881, 4.8309, 'Wednesday', ARRAY['food','mixed'], 'year_round', NULL, '13210', 'https://www.mairie-saintremydeprovence.fr', 'The famous Wednesday market at the foot of the Alpilles. Brilliant local produce, honey, and olive oil from the surrounding farms.'),
('Marché de Maussane-les-Alpilles', 'Maussane-les-Alpilles', 'Bouches-du-Rhône', 43.7167, 4.8000, 'Thursday', ARRAY['food'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '13520', 'https://www.maussane.com', 'Small village market at the heart of the Alpilles olive country. Local oil, tapenades, and seasonal produce.'),
('Marché de Salon-de-Provence', 'Salon-de-Provence', 'Bouches-du-Rhône', 43.6406, 5.0961, 'Wednesday', ARRAY['food','mixed'], 'year_round', NULL, '13300', 'https://www.salondeprovence.fr', 'Busy Wednesday market in the old town. Good selection of local cheese, charcuterie, and Provençal spices.'),
('Marché de Châteaurenard', 'Châteaurenard', 'Bouches-du-Rhône', 43.8820, 4.8506, 'Sunday', ARRAY['food'], 'year_round', NULL, '13160', 'https://www.chateaurenard.fr', 'One of the most important wholesale fruit and vegetable markets in France, with a lively retail market alongside.'),
('Marché de Tarascon', 'Tarascon', 'Bouches-du-Rhône', 43.8059, 4.6601, 'Tuesday', ARRAY['food'], 'year_round', NULL, '13150', 'https://www.tarascon.fr', 'Traditional Tuesday morning market in the shadow of the famous château. Local market gardeners bring excellent produce.'),
('Marché d''Aubagne', 'Aubagne', 'Bouches-du-Rhône', 43.2970, 5.5720, 'Thursday', ARRAY['food','crafts'], 'year_round', NULL, '13400', 'https://www.aubagne.fr', 'Aubagne is the capital of Provençal santons (ceramic figurines). The Thursday market mixes food stalls with local artisan work.'),
('Marché de Cassis', 'Cassis', 'Bouches-du-Rhône', 43.2140, 5.5376, 'Wednesday', ARRAY['food'], 'year_round', NULL, '13260', 'https://www.cassis.fr', 'Small but atmospheric market by the port. Fresh fish from local boats, local AOC wine, and seasonal produce.'),
('Marché de Martigues', 'Martigues', 'Bouches-du-Rhône', 43.4056, 5.0533, 'Thursday', ARRAY['food'], 'year_round', NULL, '13500', 'https://www.ville-martigues.fr', 'The Venice of Provence has a lively Thursday market. Particularly good for fish from the Étang de Berre.'),
('Marché de Fontvieille', 'Fontvieille', 'Bouches-du-Rhône', 43.7269, 4.7116, 'Monday', ARRAY['food'], 'seasonal', ARRAY[4,5,6,7,8,9], '13990', 'https://www.fontvieille.fr', 'Charming small market near Alphonse Daudet''s windmill. Summer season only. Local olives, honey, and lavender products. Also runs Friday.'),
('Marché d''Istres', 'Istres', 'Bouches-du-Rhône', 43.5136, 4.9884, 'Saturday', ARRAY['food','mixed'], 'year_round', NULL, '13800', 'https://www.istres.fr', 'Large Saturday market with good local produce. Also runs on Tuesday mornings.'),
('Marché d''Eygalières', 'Eygalières', 'Bouches-du-Rhône', 43.7667, 4.9440, 'Friday', ARRAY['food','crafts'], 'seasonal', ARRAY[5,6,7,8,9,10], '13810', 'https://www.eygalieres.fr', 'Tiny and beautiful market in one of the Alpilles'' most charming villages. Local producers only. Summer season.');

-- ============================================================
-- VAUCLUSE
-- ============================================================
INSERT INTO markets (name, village, department, lat, lng, day_of_week, market_type, seasonality, season_months, postcode, mairie_url, notes) VALUES
('Grand Marché d''Apt', 'Apt', 'Vaucluse', 43.8758, 5.3961, 'Saturday', ARRAY['food','brocante','mixed'], 'year_round', NULL, '84400', 'https://www.apt.fr', 'One of the great markets of Provence. The whole town comes alive on Saturday morning. Exceptional candied fruits, lavender honey, and Lubéron produce. Gets busy after 9am.'),
('Marché de L''Isle-sur-la-Sorgue (Sunday)', 'L''Isle-sur-la-Sorgue', 'Vaucluse', 43.9191, 5.0503, 'Sunday', ARRAY['brocante','food','mixed'], 'year_round', NULL, '84800', 'https://www.islesurlasorge.fr', 'The Sunday brocante market is internationally famous. Antique dealers line the riverbanks. Arrive early; the serious collectors are there by 7am. Food market runs alongside.'),
('Marché de L''Isle-sur-la-Sorgue (Thursday)', 'L''Isle-sur-la-Sorgue', 'Vaucluse', 43.9191, 5.0503, 'Thursday', ARRAY['food','mixed'], 'year_round', NULL, '84800', 'https://www.islesurlasorge.fr', 'The Thursday food market is less crowded than Sunday but excellent. Good for Sorgue valley produce and local cheese.'),
('Marché de Vaison-la-Romaine', 'Vaison-la-Romaine', 'Vaucluse', 44.2431, 5.0739, 'Tuesday', ARRAY['food','mixed'], 'year_round', NULL, '84110', 'https://www.vaison-la-romaine.com', 'A superb Tuesday market that fills the lower town. One of the best in the Ventoux region. Excellent local wine, truffles in season, and mountain cheeses.'),
('Marché d''Avignon', 'Avignon', 'Vaucluse', 43.9493, 4.8055, 'Saturday', ARRAY['food','mixed'], 'year_round', NULL, '84000', 'https://www.avignon.fr', 'Several markets across Avignon; the main one is Les Halles indoor market (daily) and the Saturday market on Place des Carmes.'),
('Marché de Carpentras', 'Carpentras', 'Vaucluse', 44.0556, 5.0481, 'Friday', ARRAY['food','mixed'], 'year_round', NULL, '84200', 'https://www.carpentras.fr', 'The famous Friday market, known throughout Provence. Exceptional in truffle season (November-March) when dealers set up along the Allée des Platanes. Berlingots sweet shops nearby.'),
('Marché de Cavaillon', 'Cavaillon', 'Vaucluse', 43.8344, 5.0392, 'Monday', ARRAY['food'], 'year_round', NULL, '84300', 'https://www.cavaillon.fr', 'Cavaillon is the melon capital of France. The Monday market is a feast of local produce - melons, asparagus, strawberries according to season.'),
('Marché d''Orange', 'Orange', 'Vaucluse', 44.1365, 4.8094, 'Thursday', ARRAY['food','mixed'], 'year_round', NULL, '84100', 'https://www.ville-orange.fr', 'Large Thursday market near the ancient Roman theatre. Good coverage of Rhône Valley produce alongside craft stalls.'),
('Marché de Gordes', 'Gordes', 'Vaucluse', 43.9120, 5.1993, 'Tuesday', ARRAY['food','crafts'], 'seasonal', ARRAY[5,6,7,8,9,10], '84220', 'https://www.gordes-village.com', 'Small but scenic market at the top of the most photographed village in France. Summer season only. Come for the views as much as the produce.'),
('Marché de Lourmarin', 'Lourmarin', 'Vaucluse', 43.7650, 5.3571, 'Friday', ARRAY['food','crafts'], 'year_round', NULL, '84160', 'https://www.lourmarin.fr', 'The Friday market in this beautiful Lubéron village is among the best in the region. Local producers, good cheese, and artisan stalls. Albert Camus is buried in the village churchyard.'),
('Marché de Bonnieux', 'Bonnieux', 'Vaucluse', 43.8190, 5.3120, 'Friday', ARRAY['food'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '84480', 'https://www.bonnieux.fr', 'Lovely Friday market in a hilltop village with sweeping Lubéron views. Local producers bring excellent seasonal produce.'),
('Marché de Roussillon', 'Roussillon', 'Vaucluse', 43.8961, 5.2890, 'Thursday', ARRAY['food','crafts'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '84220', 'https://www.roussillon-provence.fr', 'Market in the ochre village. The vivid red and orange buildings make this one of the most atmospheric market settings in Provence.'),
('Marché de Sault', 'Sault', 'Vaucluse', 44.0965, 5.4100, 'Wednesday', ARRAY['food','mixed'], 'year_round', NULL, '84390', 'https://www.sault-en-provence.fr', 'High-altitude market on the lavender plateau beneath Mont Ventoux. Lavender honey, essential oils, and mountain produce year-round.'),
('Marché de Pernes-les-Fontaines', 'Pernes-les-Fontaines', 'Vaucluse', 43.9955, 5.0598, 'Saturday', ARRAY['food'], 'year_round', NULL, '84210', 'https://www.pernes-les-fontaines.fr', 'Charming market in the City of a Hundred Fountains. Good local producers and a relaxed, non-touristy atmosphere.'),
('Marché de Pertuis', 'Pertuis', 'Vaucluse', 43.6944, 5.5011, 'Friday', ARRAY['food'], 'year_round', NULL, '84120', 'https://www.ville-pertuis.fr', 'Southern Lubéron market town. The Friday market has a strong local following. Good for Lubéron AOC wines and regional produce.'),
('Marché de Cucuron', 'Cucuron', 'Vaucluse', 43.7733, 5.4322, 'Tuesday', ARRAY['food'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '84160', 'https://www.cucuron.fr', 'Market around the famous grand bassin - a medieval pond in the village centre. Idyllic setting. Local producers, and the village has an excellent restaurant.'),
('Marché de Bédoin', 'Bédoin', 'Vaucluse', 44.1237, 5.1808, 'Monday', ARRAY['food'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '84410', 'https://www.bedoin.org', 'At the foot of Mont Ventoux. Monday market attracts local smallholders. Good starting point before a Ventoux climb.'),
('Marché de Mazan', 'Mazan', 'Vaucluse', 44.0572, 5.1194, 'Sunday', ARRAY['food','mixed'], 'year_round', NULL, '84380', 'https://www.mazan.fr', 'Sunday morning market in a quiet village near Carpentras. Strong local character. Good for Comtat Venaissin produce.'),
('Marché de Ménerbes', 'Ménerbes', 'Vaucluse', 43.8273, 5.2107, 'Friday', ARRAY['food','crafts'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '84560', 'https://www.menerbes.fr', 'Small market in the village made famous by Peter Mayle. Summer season. Local artisan stalls alongside food producers.');

-- ============================================================
-- VAR
-- ============================================================
INSERT INTO markets (name, village, department, lat, lng, day_of_week, market_type, seasonality, season_months, postcode, mairie_url, notes) VALUES
('Marché de Sanary-sur-Mer', 'Sanary-sur-Mer', 'Var', 43.1183, 5.8011, 'Wednesday', ARRAY['food','mixed'], 'year_round', NULL, '83110', 'https://www.sanary-sur-mer.com', 'One of the most beautiful port markets in Provence. The Wednesday market fills the harbour front and surrounding streets. Excellent fish, local rosé wine, and Provençal produce.'),
('Marché d''Hyères', 'Hyères', 'Var', 43.1199, 6.1282, 'Saturday', ARRAY['food','mixed'], 'year_round', NULL, '83400', 'https://www.mairie-hyeres.com', 'Busy Saturday market in the old hilltop town. Also runs Tuesday and Thursday. Good variety of local Var produce.'),
('Marché de Toulon', 'Toulon', 'Var', 43.1242, 5.9280, 'Saturday', ARRAY['food','mixed'], 'year_round', NULL, '83000', 'https://www.toulon.fr', 'The main Saturday market and the indoor Halles market (open daily except Monday). Exceptional fish stalls given the port location.'),
('Marché de Saint-Tropez', 'Saint-Tropez', 'Var', 43.2677, 6.6400, 'Tuesday', ARRAY['food','crafts'], 'year_round', NULL, '83990', 'https://www.saint-tropez.fr', 'The famous Saint-Tropez market on Place des Lices. Tuesdays and Saturdays. Beloved by locals and celebrities alike. One of the finest in the Var.'),
('Marché de Saint-Tropez', 'Saint-Tropez', 'Var', 43.2680, 6.6403, 'Saturday', ARRAY['food','crafts','mixed'], 'year_round', NULL, '83990', 'https://www.saint-tropez.fr', 'The larger Saturday market on Place des Lices. Get there early. The boules players arrive after the market and reclaim the square.'),
('Marché de Draguignan', 'Draguignan', 'Var', 43.5381, 6.4650, 'Wednesday', ARRAY['food','mixed'], 'year_round', NULL, '83300', 'https://www.ville-draguignan.fr', 'Good mid-week market in the regional capital of the Var. Local farms bring excellent produce. Also runs Saturday.'),
('Marché d''Aups', 'Aups', 'Var', 43.6274, 6.2283, 'Wednesday', ARRAY['food','brocante'], 'year_round', NULL, '83630', 'https://www.aups.fr', 'Aups is the truffle capital of the Var. The Wednesday market (and Saturday) is excellent year-round, exceptional in winter during truffle season (November-March).'),
('Marché de Cotignac', 'Cotignac', 'Var', 43.5549, 6.1680, 'Tuesday', ARRAY['food'], 'year_round', NULL, '83570', 'https://www.cotignac.fr', 'A village straight from a Pagnol novel. The Tuesday market under the plane trees is beautifully traditional. Also runs Friday. Good local wine and honey.'),
('Marché de Collobrières', 'Collobrières', 'Var', 43.2521, 6.3133, 'Thursday', ARRAY['food'], 'year_round', NULL, '83610', 'https://www.collobrieres.fr', 'The chestnut capital of Provence. The Thursday market is particularly good in autumn (October-November) for fresh and prepared chestnuts. Cork production in this area too.'),
('Marché de Bandol', 'Bandol', 'Var', 43.1355, 5.7530, 'Tuesday', ARRAY['food','mixed'], 'year_round', NULL, '83150', 'https://www.bandol.fr', 'Tuesday market by the port. Bandol AOC wines are one of the great discoveries. Good fish stalls given the fishing port next door.'),
('Marché de Bormes-les-Mimosas', 'Bormes-les-Mimosas', 'Var', 43.1490, 6.3398, 'Wednesday', ARRAY['food','crafts'], 'seasonal', ARRAY[5,6,7,8,9,10], '83230', 'https://www.bormeslesmimosas.com', 'Market in one of the most flower-filled villages in France. Spring and summer. Artisan stalls complement the produce.'),
('Marché de Lorgues', 'Lorgues', 'Var', 43.4925, 6.3648, 'Tuesday', ARRAY['food','brocante'], 'year_round', NULL, '83510', 'https://www.lorgues.fr', 'Lorgues has one of the finest Tuesday markets in the interior Var. Good antique stalls alongside excellent local produce. Great restaurant scene in the evening.'),
('Marché du Lavandou', 'Le Lavandou', 'Var', 43.1383, 6.3683, 'Thursday', ARRAY['food','crafts'], 'seasonal', ARRAY[5,6,7,8,9,10], '83980', 'https://www.lelavandou.eu', 'Beach town market in summer. Thursday morning. Local produce and crafts. Gateway to the Îles d''Hyères.'),
('Marché de Ramatuelle', 'Ramatuelle', 'Var', 43.2128, 6.6243, 'Thursday', ARRAY['food'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '83350', 'https://www.ramatuelle.fr', 'Thursday market in this hilltop village near Saint-Tropez. Far less crowded than the Tropez market but with excellent local quality.'),
('Marché de Ramatuelle', 'Ramatuelle', 'Var', 43.2130, 6.6245, 'Sunday', ARRAY['food','crafts'], 'seasonal', ARRAY[6,7,8,9], '83350', 'https://www.ramatuelle.fr', 'Sunday summer market in Ramatuelle. Artisan and food mix. Popular with the Saint-Tropez crowd looking for something more authentic.'),
('Marché de Fayence', 'Fayence', 'Var', 43.6281, 6.6863, 'Saturday', ARRAY['food','brocante'], 'year_round', NULL, '83440', 'https://www.fayence.fr', 'Good Saturday market in the hilltop village above Fréjus. Brocante alongside food. Saturday market in a beautiful perched village setting.'),
('Marché de Vidauban', 'Vidauban', 'Var', 43.4165, 6.4395, 'Sunday', ARRAY['food','brocante'], 'year_round', NULL, '83550', 'https://www.vidauban.fr', 'Sunday morning market in the Argens valley. Good brocante mixed with local produce. Wine country - excellent local Côtes de Provence.'),
('Marché de La Garde-Freinet', 'La Garde-Freinet', 'Var', 43.3204, 6.4740, 'Thursday', ARRAY['food','crafts'], 'seasonal', ARRAY[5,6,7,8,9,10], '83680', 'https://www.lagarde-freinet-mairie.fr', 'Village in the Massif des Maures. Thursday market in summer. Cork oak forests surround the village. Cork products, chestnut goods, and local produce.'),
('Marché de Grimaud', 'Grimaud', 'Var', 43.2782, 6.5178, 'Thursday', ARRAY['food','mixed'], 'seasonal', ARRAY[5,6,7,8,9,10], '83310', 'https://www.grimaud.fr', 'Atmospheric summer market in a medieval village above the Gulf of Saint-Tropez. Local produce and crafts.'),
('Marché de Fréjus', 'Fréjus', 'Var', 43.4330, 6.7370, 'Wednesday', ARRAY['food','mixed'], 'year_round', NULL, '83600', 'https://www.frejus.fr', 'Large market in the Roman city. Wednesday and Saturday. Good for Estérel hinterland produce and local wine.'),
('Marché de Giens', 'Giens', 'Var', 43.0333, 6.1500, 'Tuesday', ARRAY['food','mixed'], 'year_round', NULL, '83400', 'https://www.ot-lelavandou.fr/agenda-fetes-animations-lelavandou/le-marche-de-giens/', 'Charming Provençal market on the Giens peninsula, part of the Hyères commune. Local produce and regional specialities.');

-- ============================================================
-- ALPES-DE-HAUTE-PROVENCE
-- ============================================================
INSERT INTO markets (name, village, department, lat, lng, day_of_week, market_type, seasonality, season_months, postcode, mairie_url, notes) VALUES
('Marché de Forcalquier', 'Forcalquier', 'Alpes-de-Haute-Provence', 43.9596, 5.7798, 'Monday', ARRAY['food','mixed'], 'year_round', NULL, '04300', 'https://www.forcalquier.com', 'One of the great markets of Haute-Provence. The Monday market fills the whole old town. Exceptional lavender honey, mountain herbs, goat cheese, and the Distilleries et Domaines de Provence liqueurs are based here.'),
('Marché de Manosque', 'Manosque', 'Alpes-de-Haute-Provence', 43.8295, 5.7875, 'Saturday', ARRAY['food','mixed'], 'year_round', NULL, '04100', 'https://www.manosque.fr', 'Large Saturday market in the main town of the Lubéron. Also Wednesday. Good all-round market with local Haute-Provence produce.'),
('Marché de Digne-les-Bains', 'Digne-les-Bains', 'Alpes-de-Haute-Provence', 44.0920, 6.2363, 'Wednesday', ARRAY['food','mixed'], 'year_round', NULL, '04000', 'https://www.dignelesbains.fr', 'The lavender capital of the world has a reliable Wednesday market. Saturday also. Gateway to the Route Napoléon. Mountain produce and lavender products.'),
('Marché de Sisteron', 'Sisteron', 'Alpes-de-Haute-Provence', 44.2006, 5.9419, 'Saturday', ARRAY['food'], 'year_round', NULL, '04200', 'https://www.sisteron.fr', 'Market under the famous citadel. Sisteron lamb (Agneau de Sisteron AOC) is world-class. Saturday is the main market day. Worth a stop on any journey north-south through Provence.'),
('Marché de Barcelonnette', 'Barcelonnette', 'Alpes-de-Haute-Provence', 44.3843, 6.6524, 'Wednesday', ARRAY['food','crafts'], 'seasonal', ARRAY[6,7,8,9], '04400', 'https://www.barcelonnette.net', 'High-altitude mountain market in the Ubaye valley. Summer only. Mountain produce, honey, and crafts. Skiing town in winter.'),
('Marché de Riez', 'Riez', 'Alpes-de-Haute-Provence', 43.8180, 6.0909, 'Wednesday', ARRAY['food','crafts'], 'year_round', NULL, '04500', 'https://www.riez.fr', 'Ancient market town on the plateau de Valensole. Wednesday and Saturday. Heart of lavender and almond country. Good pottery and local crafts.'),
('Marché de Moustiers-Sainte-Marie', 'Moustiers-Sainte-Marie', 'Alpes-de-Haute-Provence', 43.8450, 6.2210, 'Friday', ARRAY['food','crafts'], 'seasonal', ARRAY[4,5,6,7,8,9,10], '04360', 'https://www.moustiers.fr', 'Market in the most spectacular village in Haute-Provence, perched at the entrance to the Gorges du Verdon. Famous for faïence pottery. Friday market seasonal.'),
('Marché de Castellane', 'Castellane', 'Alpes-de-Haute-Provence', 43.8462, 6.5108, 'Wednesday', ARRAY['food'], 'year_round', NULL, '04120', 'https://www.castellane.org', 'Market town at the gateway to the Gorges du Verdon. Wednesday and Saturday. Mountain produce and local honey.'),
('Marché de Banon', 'Banon', 'Alpes-de-Haute-Provence', 44.0343, 5.6276, 'Tuesday', ARRAY['food','mixed'], 'year_round', NULL, '04150', 'https://www.banon.fr', 'Banon is famous throughout France for its AOC chèvre cheese, wrapped in chestnut leaves. The Tuesday market celebrates local produce from the Albion plateau.'),
('Marché de Valensole', 'Valensole', 'Alpes-de-Haute-Provence', 43.8341, 5.9883, 'Friday', ARRAY['food','mixed'], 'year_round', NULL, '04210', 'https://www.valensole.fr', 'Friday market on the great lavender plain. Lavender honey in every variety, lavender essential oils, almonds, and local farm produce. The plateau is spectacular in July.'),
('Marché de Simiane-la-Rotonde', 'Simiane-la-Rotonde', 'Alpes-de-Haute-Provence', 43.9892, 5.5655, 'Friday', ARRAY['crafts','food'], 'seasonal', ARRAY[5,6,7,8,9,10], '04150', 'https://www.simiane-la-rotonde.fr', 'One of the most beautiful villages in France, with a remarkable 12th-century rotunda. Summer Friday market with local artisans and producers.'),
('Marché de Sainte-Tulle', 'Sainte-Tulle', 'Alpes-de-Haute-Provence', 43.7889, 5.7771, 'Thursday', ARRAY['food'], 'year_round', NULL, '04220', 'https://www.mairie-sainte-tulle.fr', 'Small but reliable local market on the banks of the Durance. Good for local Haute-Provence produce at reasonable prices.'),
-- ============================================================
-- DRÔME PROVENÇALE
-- ============================================================
('Marché de Nyons', 'Nyons', 'Drôme Provençale', 44.3580, 5.1418, 'Thursday', ARRAY['food','mixed','brocante'], 'year_round', NULL, '26110', 'https://www.nyons.com', 'The great Thursday market of Nyons, capital of the olive oil country. Place du Docteur Bourdongle fills with olive oil producers, tapenade makers, and food stalls. The Nyons olive (Tanche variety) has AOC status. One of the finest markets in the region.');
