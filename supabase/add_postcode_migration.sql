-- ============================================================
-- Migration: add postcode column to markets table
-- Run this in the Supabase SQL editor (one-off, table already exists)
-- ============================================================

ALTER TABLE markets ADD COLUMN IF NOT EXISTS postcode text;

-- ============================================================
-- BOUCHES-DU-RHÔNE
-- ============================================================
UPDATE markets SET postcode = '13100' WHERE village = 'Aix-en-Provence';
UPDATE markets SET postcode = '13200' WHERE village = 'Arles';
UPDATE markets SET postcode = '13210' WHERE village = 'Saint-Rémy-de-Provence';
UPDATE markets SET postcode = '13520' WHERE village = 'Maussane-les-Alpilles';
UPDATE markets SET postcode = '13300' WHERE village = 'Salon-de-Provence';
UPDATE markets SET postcode = '13160' WHERE village = 'Châteaurenard';
UPDATE markets SET postcode = '13150' WHERE village = 'Tarascon';
UPDATE markets SET postcode = '13400' WHERE village = 'Aubagne';
UPDATE markets SET postcode = '13260' WHERE village = 'Cassis';
UPDATE markets SET postcode = '13500' WHERE village = 'Martigues';
UPDATE markets SET postcode = '13990' WHERE village = 'Fontvieille';
UPDATE markets SET postcode = '13800' WHERE village = 'Istres';
UPDATE markets SET postcode = '13810' WHERE village = 'Eygalières';

-- ============================================================
-- VAUCLUSE
-- ============================================================
UPDATE markets SET postcode = '84400' WHERE village = 'Apt';
UPDATE markets SET postcode = '84800' WHERE village = 'L''Isle-sur-la-Sorgue';
UPDATE markets SET postcode = '84110' WHERE village = 'Vaison-la-Romaine';
UPDATE markets SET postcode = '84000' WHERE village = 'Avignon';
UPDATE markets SET postcode = '84200' WHERE village = 'Carpentras';
UPDATE markets SET postcode = '84300' WHERE village = 'Cavaillon';
UPDATE markets SET postcode = '84100' WHERE village = 'Orange';
UPDATE markets SET postcode = '84220' WHERE village = 'Gordes';
UPDATE markets SET postcode = '84160' WHERE village = 'Lourmarin';
UPDATE markets SET postcode = '84480' WHERE village = 'Bonnieux';
UPDATE markets SET postcode = '84220' WHERE village = 'Roussillon';
UPDATE markets SET postcode = '84390' WHERE village = 'Sault';
UPDATE markets SET postcode = '84210' WHERE village = 'Pernes-les-Fontaines';
UPDATE markets SET postcode = '84120' WHERE village = 'Pertuis';
UPDATE markets SET postcode = '84160' WHERE village = 'Cucuron';
UPDATE markets SET postcode = '84410' WHERE village = 'Bédoin';
UPDATE markets SET postcode = '84380' WHERE village = 'Mazan';
UPDATE markets SET postcode = '84560' WHERE village = 'Ménerbes';

-- ============================================================
-- VAR
-- ============================================================
UPDATE markets SET postcode = '83110' WHERE village = 'Sanary-sur-Mer';
UPDATE markets SET postcode = '83400' WHERE village = 'Hyères';
UPDATE markets SET postcode = '83000' WHERE village = 'Toulon';
UPDATE markets SET postcode = '83990' WHERE village = 'Saint-Tropez';
UPDATE markets SET postcode = '83300' WHERE village = 'Draguignan';
UPDATE markets SET postcode = '83630' WHERE village = 'Aups';
UPDATE markets SET postcode = '83570' WHERE village = 'Cotignac';
UPDATE markets SET postcode = '83610' WHERE village = 'Collobrières';
UPDATE markets SET postcode = '83150' WHERE village = 'Bandol';
UPDATE markets SET postcode = '83230' WHERE village = 'Bormes-les-Mimosas';
UPDATE markets SET postcode = '83510' WHERE village = 'Lorgues';
UPDATE markets SET postcode = '83980' WHERE village = 'Le Lavandou';
UPDATE markets SET postcode = '83350' WHERE village = 'Ramatuelle';
UPDATE markets SET postcode = '83440' WHERE village = 'Fayence';
UPDATE markets SET postcode = '83550' WHERE village = 'Vidauban';
UPDATE markets SET postcode = '83680' WHERE village = 'La Garde-Freinet';
UPDATE markets SET postcode = '83310' WHERE village = 'Grimaud';
UPDATE markets SET postcode = '83600' WHERE village = 'Fréjus';

-- ============================================================
-- ALPES-DE-HAUTE-PROVENCE
-- ============================================================
UPDATE markets SET postcode = '04300' WHERE village = 'Forcalquier';
UPDATE markets SET postcode = '04100' WHERE village = 'Manosque';
UPDATE markets SET postcode = '04000' WHERE village = 'Digne-les-Bains';
UPDATE markets SET postcode = '04200' WHERE village = 'Sisteron';
UPDATE markets SET postcode = '04400' WHERE village = 'Barcelonnette';
UPDATE markets SET postcode = '04500' WHERE village = 'Riez';
UPDATE markets SET postcode = '04360' WHERE village = 'Moustiers-Sainte-Marie';
UPDATE markets SET postcode = '04120' WHERE village = 'Castellane';
UPDATE markets SET postcode = '04150' WHERE village = 'Banon';
UPDATE markets SET postcode = '04210' WHERE village = 'Valensole';
UPDATE markets SET postcode = '04150' WHERE village = 'Simiane-la-Rotonde';
UPDATE markets SET postcode = '04220' WHERE village = 'Sainte-Tulle';

-- ============================================================
-- DRÔME PROVENÇALE
-- ============================================================
UPDATE markets SET postcode = '26110' WHERE village = 'Nyons';
