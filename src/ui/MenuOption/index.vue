<template>
        <div
          class="menu-options"
          v-for="el, i in options"
          :key="i"
        >
          <div class="options-text">
            {{ styleText(el.text, el) }}
          </div>
          <img class= "options-ico"
            v-if="el?.icoUrl"
            :src="el?.icoUrl"
            :alt="'no loaded ico ' + el?.icoUrl">
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { menuOption } from './index'

export default defineComponent({
  name: 'MenuOption',
  props: {
    options: {
      type: Array as PropType<menuOption[]>
    }
  },
  methods: {
    styleText (text:string, el:menuOption):string {
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
