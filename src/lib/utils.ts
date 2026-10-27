import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// The design system adds custom font-size tokens (text-caption, text-title,
// text-display, text-mega...). tailwind-merge only recognises the default
// t-shirt sizes, so without this it classified them as text colors and
// dropped them whenever a real color was passed in the same class list.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["caption", "body", "title", "headline", "display", "mega"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
