<template>
        <div class="box-img">
          <img
            class="img-item"
            ref = "img-item"
            :src = "url" >
          <div
            class = "loader"
            v-if = "isLoading" >
          </div>
        </div>
        <div class = "name-item">
          {{ name }}
        </div>
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
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    const img = this.$refs['img-item'] as HTMLInputElement
    img.addEventListener('load', () => {
      this.isLoading = false
    })
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
