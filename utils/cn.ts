import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

// merges tailwind classes without conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
