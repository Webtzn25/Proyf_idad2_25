

<template>
  <div>
    <!-- HERO con Carousel -->
    <section class="bg-dark text-white text-center">
      <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://via.placeholder.com/1200x400?text=Cartera+de+Lujo" class="d-block w-100" alt="Cartera">
            <div class="carousel-caption d-none d-md-block">
              <h1 class="fw-bold">Accesorios que brillan ✨</h1>
              <p>Descubre nuestras carteras exclusivas</p>
              <a href="#contact-form" class="btn btn-primary btn-lg">Quiero más info</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/1200x400?text=Collares+Elegantes" class="d-block w-100" alt="Collar">
            <div class="carousel-caption d-none d-md-block">
              <h1 class="fw-bold">Estilo único 💎</h1>
              <p>Collares que realzan tu personalidad</p>
              <a href="#contact-form" class="btn btn-success btn-lg">Regístrate ahora</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/1200x400?text=Pulseras+Modernas" class="d-block w-100" alt="Pulsera">
            <div class="carousel-caption d-none d-md-block">
              <h1 class="fw-bold">Un detalle que enamora ❤️</h1>
              <p>Pulseras modernas para toda ocasión</p>
              <a href="#contact-form" class="btn btn-warning btn-lg">Quiero recibir ofertas</a>
            </div>
          </div>
        </div>

        <!-- Controles -->
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>

    <!-- BENEFICIOS -->
    <section class="py-5 bg-light">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-4">
            <i class="bi bi-gem display-4 text-primary"></i>
            <h4 class="mt-3">Diseños Exclusivos</h4>
            <p>Accesorios únicos pensados para ti.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-truck display-4 text-success"></i>
            <h4 class="mt-3">Envíos Rápidos</h4>
            <p>Llegamos a tu casa sin complicaciones.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-heart-fill display-4 text-danger"></i>
            <h4 class="mt-3">Clientes Felices</h4>
            <p>Más de 100 clientes satisfechos con nuestros productos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FORMULARIO DE CONTACTO -->
    <section class="py-5" id="contact-form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card shadow p-4">
              <h2 class="h4 text-center mb-4">Déjanos tus datos 📩</h2>
              <form @submit.prevent="sendContact">
                <div class="mb-3">
                  <input v-model="contact.name" type="text" class="form-control" placeholder="Nombre">
                </div>
                <div class="mb-3">
                  <input v-model="contact.email" type="email" class="form-control" placeholder="Correo">
                </div>
                <div class="mb-3">
                  <input v-model="contact.phone" type="tel" class="form-control" placeholder="Teléfono">
                </div>
                <button type="submit" class="btn btn-primary w-100">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-dark text-white text-center py-3">
      <p class="mb-0">&copy; 2025 MyStore by GiovanniTzn. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const contact = reactive({
  name: '',
  email: '',
  phone: ''
})

const sendContact = async () => {
  const res = await fetch("http://127.0.0.1:8000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact)
  })
  if (res.ok) {
    alert("✅ Datos enviados con éxito!")
    contact.name = contact.email = contact.phone = ''
  } else {
    alert("❌ Error al enviar datos")
  }
}
</script>
