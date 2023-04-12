<template>
  <div class="box-comparsion-checkbox">
    <input
      type="checkbox"
      class= "comparsion-checkbox"
      >
    <div class="content-checkbox">
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
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
