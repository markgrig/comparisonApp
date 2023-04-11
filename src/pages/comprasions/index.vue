<template>
        <div> Hello! {{ gettedItems }}</div>
        <div v-if = "isLoadingItems">
          Loading...
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { IItems } from '@/index'
import getItems from './helper/getItems'
export default defineComponent({
  name: 'ItemsPage',
  props: {
    items: Object as PropType<IItems>
  },
  data () {
    return {
      gettedItems: {} as object
    }
  },
  computed: {
    numberItems () {
      return Object.keys(this.gettedItems).length
    },
    isLoadingItems () {
      if (this.numberItems === 0) {
        return true
      }
      return false
    }
  },
  async mounted () {
    if (this.items) {
      this.gettedItems = await getItems(this.items?.url)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
