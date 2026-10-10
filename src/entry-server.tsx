// Build-time entry: renders the app to static HTML (see scripts/prerender.mjs).
import { renderToString } from 'react-dom/server'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import App from './App'

export { personJsonLd, llmsTxt, sitemapXml } from './seo'

export function render() {
  // Key 'css' matches MUI's default client cache, so the browser reuses these styles on hydration.
  const cache = createCache({ key: 'css' })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

  const html = renderToString(
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>,
  )
  const styles = constructStyleTagsFromChunks(extractCriticalToChunks(html))
  return { html, styles }
}
