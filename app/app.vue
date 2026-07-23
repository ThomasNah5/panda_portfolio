<!-- <template>
  <div class="page flex h-screen w-full overflow-hidden">
    <aside class="sidebar ">
      <img src="/logo/Logo.jpeg" alt="Logo" style="width: 300px; height: 90px; object-fit: contain;">
      <nav class="pt-8">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template> -->

<template>
  <!-- h-screen locks the wrapper to the viewport height -->
  <div class="flex h-screen w-full overflow-hidden page">
    
    <!-- Sidebar: Fixed width, height fills screen, scrolling disabled -->
    <aside class="sidebar w-64 h-full overflow-hidden bg-white border-r border-gray-200 flex-shrink-0">
      <img src="/logo/Logo.jpeg" alt="Logo" style="width: 300px; height: 90px; object-fit: contain;">
      <nav class="pt-8">
        <ul class="">
          <li>
            <NuxtLink to="/" class="">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio" class="">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Content: Fills remaining space, enables independent vertical scrolling -->
    <main class="flex-1 h-full overflow-y-auto bg-gray-50">
      <NuxtPage />
    </main>

  </div>
</template>


<style scoped>



.page {
  display: flex;
  min-height: 100vh;
  font-family: 'Cal Sans', sans-serif;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
  padding: 1.5rem;
  border-right: 1px solid #e5e7eb;
  background: #f9fafb;
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

.content {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
}
</style>
