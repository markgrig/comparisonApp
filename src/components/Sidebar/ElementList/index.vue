<template>
        <div
          class="element"
          v-for="el, i in elementData"
          :key="i">

          <div class="text">
            {{ styleText(el?.text, el) }}
          </div>
          <img class= "ico"
            v-if="el?.icoUrl"
            :src="el?.icoUrl"
            :alt="'no loaded ico ' + el?.icoUrl">

        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { element, arrayElement } from './index'

export default defineComponent({
  name: 'ElementList',
  props: {
    elementData: {
      type: Array as PropType<arrayElement>
    }
  },
  methods: {
    styleText (text:string, el:element):string {
      if (el?.style?.uppercase) {
        return text.toUpperCase()
      }

      return text
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
