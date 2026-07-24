<script setup lang="ts">
const route = useRoute()
const image = route.query.image as string

const imageName = image?.replace(/\.[^.]+$/, '').replace(/[_-]/g, ' ') || 'Portfolio Piece'
</script>

<template>
  <div class="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <button
        @click="navigateTo('/portfolio')"
        class="mb-6 text-sm text-neutral-500 hover:text-black transition"
      >
        ← Back
      </button>
      
      <div v-if="image" class="bg-neutral-900 shadow-xl overflow-hidden">
        <NuxtImg
          :src="`/images/${image}`"
          :alt="imageName"
          class="w-full object-cover"
          format="webp"
          densities="1x 2x"
        />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-white capitalize">
            {{ imageName }}
          </h2>
        </div>
      </div>
      
      <p v-else class="text-center text-neutral-500">
        No image selected.
      </p>
    </div>
  </div>
</template>
  