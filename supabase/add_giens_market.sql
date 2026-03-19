-- ============================================================
-- Migration: add Giens market
-- ============================================================

INSERT INTO markets (name, village, department, lat, lng, day_of_week, market_type, seasonality, season_months, postcode, mairie_url, notes)
VALUES (
  'Marché de Giens',
  'Giens',
  'Var',
  43.0333,
  6.1500,
  'Tuesday',
  ARRAY['food','mixed'],
  'year_round',
  NULL,
  '83400',
  'https://www.ot-lelavandou.fr/agenda-fetes-animations-lelavandou/le-marche-de-giens/',
  'Charming Provençal market on the Giens peninsula, part of the Hyères commune. Local produce and regional specialities.'
);
