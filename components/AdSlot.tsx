'use client';
import Script from 'next/script';

/** Adsterra publisher placement. Set each variable to the exact HTTPS script URL supplied by Adsterra. */
export default function AdSlot({placement='inline'}:{placement?:'top'|'inline'|'bottom'}) {
  const src = placement === 'top'
    ? process.env.NEXT_PUBLIC_ADSTERRA_TOP_SCRIPT_URL
    : placement === 'bottom'
      ? process.env.NEXT_PUBLIC_ADSTERRA_BOTTOM_SCRIPT_URL
      : process.env.NEXT_PUBLIC_ADSTERRA_INLINE_SCRIPT_URL;
  if (!src) return null;
  let valid = false;
  try { valid = new URL(src).protocol === 'https:'; } catch { valid = false; }
  if (!valid) return null;
  return <aside className={`ad-slot ad-slot-${placement}`} aria-label="Publicidade">
    <span className="ad-label">PUBLICIDADE</span>
    <Script src={src} strategy="lazyOnload" data-cfasync="false" />
  </aside>;
}
