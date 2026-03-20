-- ============================================================
-- Migration: add confirmed column to markets
-- Run this in the Supabase SQL editor
-- ============================================================

-- Add confirmed flag (defaults false for new submissions)
ALTER TABLE markets ADD COLUMN IF NOT EXISTS confirmed boolean NOT NULL DEFAULT false;

-- All existing curated markets are confirmed
UPDATE markets SET confirmed = true;
