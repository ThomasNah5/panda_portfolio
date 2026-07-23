import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

export default defineEventHandler(async () => {
  const imagesDir = join(process.cwd(), 'public', 'images')
  const files = await readdir(imagesDir)

  return files
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .sort()
})