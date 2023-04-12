<template>
  <div class = "box-topic">
    <div class="topic">
       {{ nameItems }}
  </div>
  <div class = "box-number-comparsion">
      <div
        class= "placholder-counter">
        {{ placholderCounter }}
          <nobr
            class= "placholder-counter counter-i"
            v-for="i in number"
            :key = "i">
            <nobr v-if="i != 1">
              {{ i }}
            </nobr>
          </nobr>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberComparsion',
  props: {
    number: Number,
    nameItems: String,
    placholderCounter: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
