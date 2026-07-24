<script setup lang="ts">
const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden page">
    <!-- Mobile header -->
    <header
      class="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 md:hidden"
    >
      <img
        src="/logo/Logo.jpeg"
        alt="Logo"
        class="h-10 w-auto object-contain"
      >
      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </header>

    <!-- Mobile menu backdrop -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-black/40 md:hidden"
      aria-hidden="true"
      @click="closeMenu"
    />

    <!-- Sidebar -->
    <aside
      id="mobile-nav"
      class="sidebar fixed inset-y-0 left-0 z-50 flex h-full w-64 -translate-x-full flex-col overflow-hidden border-r border-gray-200 bg-gray-50 p-6 transition-transform duration-300 md:static md:z-auto md:translate-x-0 md:flex-shrink-0"
      :class="{ 'translate-x-0': isMenuOpen }"
    >
      <NuxtLink to="/"><img
        src="/logo/Logo.jpeg"
        alt="Logo"
        class="hidden h-[90px] w-full max-w-[300px] object-contain md:block"
      /></NuxtLink>
      <nav class="pt-4 md:pt-8">
        <ul>
          <li>
            <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio" @click="closeMenu">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="closeMenu">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" @click="closeMenu">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Content -->
    <main class="flex-1 h-full overflow-y-auto bg-gray-50 pt-14 md:pt-0">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.page {
  font-family: 'Cal Sans', sans-serif;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.75rem;
}

.sidebar a {
  text-decoration: none;
  color: #374151;
}

.sidebar a.router-link-active {
  font-weight: 600;
  color: #111827;
}
</style>
