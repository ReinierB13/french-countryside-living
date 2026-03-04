import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware Link, redirect, usePathname, useRouter
// With localePrefix: 'as-needed', English links have no /en prefix.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
