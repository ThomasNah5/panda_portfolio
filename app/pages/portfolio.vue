<script setup lang="ts">
import portfolioImages from '~/data/portfolio-images.json'

const images = portfolioImages

function imageSrc(filename: string) {
  return `/images/${encodeURIComponent(filename)}`
}

function imageDetailPath(filename: string) {
  return `/portfolio_piece?image=${encodeURIComponent(filename)}`
}
</script>

<template>
  <div class="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
    <!-- <header class="mb-8 text-center">
      <h1 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">
        Portfolio
      </h1>
      <p class="mt-2 text-neutral-400">
        A collection of my work
      </p>
    </header> -->

    <div
      v-if="images?.length"
      class="columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5"
    >
      <figure
        v-for="image in images"
        :key="image"
        class="group mb-4 break-inside-avoid overflow-hidden bg-neutral-900 shadow-lg transition hover:shadow-xl cursor-pointer"
        @click="navigateTo(imageDetailPath(image))"
      >
        <img
          :src="imageSrc(image)"
          :alt="image.replace(/\.[^.]+$/, '').replace(/[_-]/g, ' ')"
          class="w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        >
      </figure>
    </div>

    <p v-else class="text-center text-neutral-500">
      No images found.
    </p>
  </div>
</template>