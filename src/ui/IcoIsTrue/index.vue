<template>
  <img
    class="ico-check"
    :src = "url" >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IcoIsTrue',
  props: {
    isTrue: Boolean
  },
  computed: {
    url () {
      if (this.isTrue) {
        return require('@/assets/ico/greenCheckMark.png')
      }

      return require('@/assets/ico/Redcross.png')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
