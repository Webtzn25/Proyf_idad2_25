<template>
  <div>
    <h2>🛒 Carrito</h2>
    <ul>
      <li v-for="item in cart.items" :key="item.id">
        {{ item.name }} - Cantidad: {{ item.quantity }}
        <button @click="cart.removeFromCart(item.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
