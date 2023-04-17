<template>
  <div class="owerflow-checkbox">
    <input
      type="checkbox"
      class= "checkbox"
      v-model="checkout"
      >
    <div class="checkbox-content">
      {{ content }}
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComparsionItems',
  props: {
    content: String
  },
  data () {
    return {
      checkout: false
    }
  },
  watch: {
    checkout (newValue) {
      this.$emit('checkout', newValue)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
