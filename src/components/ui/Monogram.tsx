import { Box } from '@mui/material'

// Brand accent from the logo; used only for the monogram dot
const BRAND_TEAL = '#0D9488'

// "YK." monogram, traced from the logo file. The letters take the surrounding text colour
// (currentColor). Decorative: the link or heading that wraps it carries the accessible name.
export default function Monogram({ height = 28 }: { height?: number }) {
  return (
    <Box
      component="svg"
      viewBox="48 60 250 116"
      aria-hidden="true"
      focusable="false"
      sx={{ display: 'block', height, width: 'auto', flexShrink: 0 }}
    >
      <path d="M48 60H74L102 108L130 60H156L116 124V176H88V124L48 60Z" fill="currentColor" />
      <path d="M166 60H194V108L228 60H262L214 120L266 176H230L194 132V176H166V60Z" fill="currentColor" />
      <circle cx="284" cy="162" r="14" fill={BRAND_TEAL} />
    </Box>
  )
}
