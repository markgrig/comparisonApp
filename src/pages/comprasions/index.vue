<template>
        <ItemsView
          :items = "gettedItems">

        </ItemsView>
        <div v-if = "isLoadingItems">
          Loading...
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import { IItems } from '@/index'
import getItems from './helper/getItems'
import ItemsView from './components/ItemsView/index.vue'

export default defineComponent({
  name: 'ItemsPage',
  components: {
    ItemsView
  },
  props: {
    queryObj: Object as PropType<IItems>
  },
  data () {
    return {
      gettedItems: [] as Array<object>
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
    if (this.queryObj) {
      this.gettedItems = await getItems(this.queryObj?.url)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
