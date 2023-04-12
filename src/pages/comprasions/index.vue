<template>
      <NumberComparsion
        :number = "numberComparsion"
        :nameItems = "query?.name"
        :placholderCounter = "placholderCounter">
      </NumberComparsion>
      <ItemsView
        :items = "gettedItems">
      </ItemsView>
      <div
        class = "loading-items"
        v-if = "isLoadingItems">
        Loading...
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import { IQuery, IItem } from '@/index'
import getItems from './helper/getItems'
import ItemsView from './components/ItemsView/index.vue'
import NumberComparsion from './components/NumberComparsion/index.vue'

export default defineComponent({
  name: 'ItemsPage',
  components: {
    ItemsView,
    NumberComparsion
  },
  props: {
    query: Object as PropType<IQuery>
  },
  data () {
    return {
      gettedItems: [] as Array<IItem>,
      numberComparsion: 6 as number,
      placholderCounter: 'Отобразить товары: ' as string
    }
  },
  computed: {
    numberItems ():number {
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
    if (this.query) {
      this.gettedItems = await getItems(this.query?.url) as Array<IItem>
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
