import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeDescription(text: string) {
  return text.replace(/[^소개]*/s, '').replace('소개 ', '');
}
