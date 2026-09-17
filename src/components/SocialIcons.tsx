type IconProps = {
  className?: string
}

export function InstagramIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z" />
    </svg>
  )
}

export function TikTokIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M14.5 3c.4 2.6 1.9 4.2 4.5 4.5v2.3c-1.6.1-3-.4-4.5-1.4v6.7c0 3.6-2.9 6.4-6.6 6.4S1.3 18.7 1.3 15.1c0-3.5 2.8-6.3 6.4-6.4v2.4c-2.2.1-3.9 1.9-3.9 4 0 2.2 1.8 4 4 4s4-1.8 4-4V3h2.7Z" />
    </svg>
  )
}
