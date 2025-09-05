import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const exists = this.items.find(p => p.id === product.id)
      if (!exists) {
        this.items.push({ ...product, quantity: 1 })
      } else {
        exists.quantity++
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(p => p.id !== productId)
    },
    clearCart() {
      this.items = []
    }
  }
})
