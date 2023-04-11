<template>
        <img class="img-item">
        <div class = "name-item"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ItemsCard',
  props: {
    name: {
      type: String as PropType<string>
    },
    url: {
      type: String as PropType<string>
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
