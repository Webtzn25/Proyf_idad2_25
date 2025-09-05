<template>
    <div>
    <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">My store of pretty things</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Carrito</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   <!-- CONTENIDO FULL WIDTH -->
    <main class="w-100">
      <router-view />
    </main>
  </div>
</template>

<style>
main {
  min-height: 100vh;   /* 👈 ocupa toda la altura disponible */
  width: 100%;         /* 👈 ocupa todo el ancho */
  margin: 0;
  padding: 0;
}
</style>
