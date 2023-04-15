<template>
  <div class="box-comparsion-checkbox">
    <input
      type="checkbox"
      class= "comparsion-checkbox"
      v-model="checkout"
      >
    <div class="content-checkbox">
      {{ content }}
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
type ObjectData = {
  id: number,
  name: string,
  [word: string]: string | number | boolean
}

export default defineComponent({
  name: 'ComparsionItems',
  props: {
    content: String
  },
  data () {
    return {
      comparsion: this.content,
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
