// Bakes the rendered page into dist/index.html so crawlers that don't run
// JavaScript (most LLM bots) still see the content, and writes the
// machine-readable files generated from src/seo.ts.
import { readFile, readdir, writeFile } from 'node:fs/promises'

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

// Preload the Latin web fonts. Otherwise the browser only finds them after parsing the CSS, so the
// prerendered text paints in a fallback font first and visibly reflows (layout shift) when they arrive.
const fonts = (await readdir(new URL('assets/', dist))).filter(f => /-latin-\d+-normal-.+\.woff2$/.test(f))
const preloads = fonts
  .map(f => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const { html, styles } = render()
// Function replacers: a plain string would treat "$&" etc. in the content as special patterns.
const page = template
  .replace(
    HEAD,
    () => `${preloads}\n    ${styles}\n    <script type="application/ld+json">${personJsonLd()}</script>`,
  )
  .replace(ROOT, () => `<div id="root">${html}</div>`)

await Promise.all([
  writeFile(new URL('index.html', dist), page),
  writeFile(new URL('llms.txt', dist), llmsTxt()),
  writeFile(new URL('sitemap.xml', dist), sitemapXml()),
])
console.log('prerender: wrote index.html, llms.txt, sitemap.xml')
