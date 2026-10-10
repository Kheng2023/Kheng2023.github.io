// Bakes the rendered page into dist/index.html so crawlers that don't run
// JavaScript (most LLM bots) still see the content, and writes the
// machine-readable files generated from src/seo.ts.
import { readFile, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const { render, personJsonLd, llmsTxt, sitemapXml } = await import(
  new URL('../dist-ssr/entry-server.js', import.meta.url).href
)

const ROOT = '<div id="root"></div>'
const HEAD = '<!--app-head-->'

const template = await readFile(new URL('index.html', dist), 'utf8')
// Fail the build loudly rather than silently shipping an empty page.
for (const marker of [ROOT, HEAD]) {
  if (!template.includes(marker)) throw new Error(`prerender: "${marker}" not found in dist/index.html`)
}

const { html, styles } = render()
// Function replacers: a plain string would treat "$&" etc. in the content as special patterns.
const page = template
  .replace(HEAD, () => `${styles}\n    <script type="application/ld+json">${personJsonLd()}</script>`)
  .replace(ROOT, () => `<div id="root">${html}</div>`)

await Promise.all([
  writeFile(new URL('index.html', dist), page),
  writeFile(new URL('llms.txt', dist), llmsTxt()),
  writeFile(new URL('sitemap.xml', dist), sitemapXml()),
])
console.log('prerender: wrote index.html, llms.txt, sitemap.xml')
