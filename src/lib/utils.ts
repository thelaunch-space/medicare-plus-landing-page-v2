// File purpose: Utility helpers used across the app. Currently provides `cn` to merge class names conditionally.

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<string | number | null | undefined | Record<string, boolean>>): string {
  return twMerge(clsx(inputs));
}


