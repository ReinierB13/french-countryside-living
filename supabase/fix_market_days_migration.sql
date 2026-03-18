-- ============================================================
-- Migration: correct market days for 5 villages
-- Source: curiousprovence.com/a-list-of-market-days-in-provence/
-- Run this in the Supabase SQL editor
-- ============================================================

UPDATE markets SET day_of_week = 'Thursday' WHERE village = 'Maussane-les-Alpilles';
UPDATE markets SET day_of_week = 'Sunday'   WHERE village = 'Châteaurenard';
UPDATE markets SET day_of_week = 'Monday',  notes = 'Charming small market near Alphonse Daudet''s windmill. Summer season only. Local olives, honey, and lavender products. Also runs Friday.' WHERE village = 'Fontvieille';
UPDATE markets SET day_of_week = 'Friday'   WHERE village = 'Eygalières';
UPDATE markets SET day_of_week = 'Saturday', notes = 'Market under the famous citadel. Sisteron lamb (Agneau de Sisteron AOC) is world-class. Saturday is the main market day. Worth a stop on any journey north-south through Provence.' WHERE village = 'Sisteron';
