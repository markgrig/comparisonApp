<template>
  <div class="chip-group-box">
    <div class="chip-group-topic ">
       {{
        topic
      }}
  </div>
  <div class="box-chip">
      <div
        class="chip-group-placegolder">
          <div
            class="chip"
            v-for="i in number"
            :key="i">
              <div
                v-if="i === 1">
                {{
                  chipsPlaceholder
                }}
              </div>
              <div
                v-if="i !== 1"
                @click = "clickNumber($event)"
                 :value = "i">
                {{
                  i
                }}
              </div>
          </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'ChipGroup',
  props: {
    number: Number,
    topic: String,
    chipsPlaceholder: String
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
