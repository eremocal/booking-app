import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSearchParams(data: {
  location: string;
  fromDate: string;
  toDate: string;
  adults: number;
  children: number;
}): URLSearchParams {
  return new URLSearchParams({
    location: data.location,
    fromDate: data.fromDate,
    toDate: data.toDate,
    adults: data.adults.toString(),
    children: data.children.toString(),
  });
}

export function formatGuestCount(adults: number, children: number): string {
  const adultText = adults === 1 ? 'adult' : 'adults';
  const childText = children === 1 ? 'child' : 'children';

  if (children === 0) {
    return `${adults} ${adultText}`;
  }

  return `${adults} ${adultText}, ${children} ${childText}`;
}
