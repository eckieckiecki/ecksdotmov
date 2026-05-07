import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const targets = [
  'node_modules/styled-components/dist/styled-components.browser.esm.js',
  'node_modules/styled-components/dist/styled-components.esm.js',
  'node_modules/stylis/dist/stylis.mjs',
]

const trailerPattern = /\n?\/\/# sourceMappingURL=.*$/m

async function stripSourceMapTrailer(relativePath) {
  const filePath = resolve(process.cwd(), relativePath)

  try {
    const original = await readFile(filePath, 'utf8')
    if (!trailerPattern.test(original)) {
      return { relativePath, changed: false }
    }

    const updated = original.replace(trailerPattern, '')
    await writeFile(filePath, updated, 'utf8')
    return { relativePath, changed: true }
  } catch {
    return { relativePath, changed: false }
  }
}

const results = await Promise.all(targets.map(stripSourceMapTrailer))
const changed = results.filter((result) => result.changed)

if (changed.length > 0) {
  console.log(`Stripped sourcemap trailers from ${changed.length} files.`)
}
