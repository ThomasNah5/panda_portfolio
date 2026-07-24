import tailwindcss from '@tailwindcss/vite'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

async function generateImagesManifest() {
  const imagesDir = join(process.cwd(), 'public', 'images')
  const outDir = join(process.cwd(), 'app', 'data')
  const files = (await readdir(imagesDir))
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .sort()

  await mkdir(outDir, { recursive: true })
  await writeFile(
    join(outDir, 'portfolio-images.json'),
    `${JSON.stringify(files, null, 2)}\n`,
  )
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/image', '@nuxt/fonts'],

  hooks: {
    'build:before': generateImagesManifest,
    ready: async (nuxt) => {
      if (nuxt.options.dev) {
        await generateImagesManifest()
      }
    },
  },
})
