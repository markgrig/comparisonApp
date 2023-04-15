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
            v-for="i in 6"
            :key = "i">
            <nobr v-if="i != 1" @click = "clickNumber($event)" :value = "i">
              {{ i }}
            </nobr>
          </nobr>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'NumberComparsion',
  props: {
    number: Number,
    nameItems: String,
    placholderCounter: String
  },
  setup () {
    const store = useStore()
    return {
      store
    }
  },
  methods: {
    clickNumber (event:Event) {
      const target = event.target as HTMLDataElement
      const number = Number(target.textContent)
      this.$emit('clickNumber', number)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
