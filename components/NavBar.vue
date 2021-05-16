<template>
  <nav class="nav-bar d-flex">
    <span class="nav-bar__logo pointer">
      <NuxtLink to="/">
        <span class="color-primary fw-600">UDIT</span> SEN
      </NuxtLink>
    </span>
    <ul class="nav-bar__links d-flex">
      <li><NuxtLink class="home-link" to="/"> Home</NuxtLink></li>
      <li><NuxtLink to="/about"> About</NuxtLink></li>
      <li><NuxtLink to="/projects"> Projects</NuxtLink></li>
      <li><NuxtLink to="/contact"> Contact</NuxtLink></li>
    </ul>
  </nav>
</template>
