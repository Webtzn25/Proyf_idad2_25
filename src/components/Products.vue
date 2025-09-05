<template>
  <div>
    <h2>Productos</h2>
    <div v-for="p in products" :key="p.id">
      {{ p.name }} - ${{ p.price }}
      <button @click="cart.addToCart(p)">Agregar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const products = ref([])
const cart = useCartStore()

onMounted(async () => {
  const res = await fetch("http://127.0.0.1:8000/products")
  products.value = await res.json()
})
</script>
