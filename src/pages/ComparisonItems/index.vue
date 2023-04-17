<template>
      <ChipGroup
        :number = "maxNumberСomparison"
        :topic = "query?.name"
        :chipsPlaceholder = "chipsPlaceholder"
        @clickNumber = "changeNumberСomparison">
      </ChipGroup>
      <ComparisonTable
        :items = "gettedItems">
      </ComparisonTable>
      <div
        class = "loading-items"
        v-if = "isLoadingItems">
        Loading...
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ComparisonTable from './components/ComparisonTable/index.vue'
import ChipGroup from './components/ChipGroup/index.vue'
import { useStore } from '@/store/index'

import { IQuery } from '@/index'

export default defineComponent({
  name: 'ItemsPage',
  components: {
    ComparisonTable,
    ChipGroup
  },
  setup () {
    const store = useStore()
    return {
      store
    }
  },
  props: {
    query: Object as PropType<IQuery>
  },
  data () {
    return {
      defultNumberСomparison: 3 as number,
      maxNumberСomparison: 6 as number,
      chipsPlaceholder: 'Отобразить товары: ' as string
    }
  },
  computed: {
    gettedItems () {
      return this.store.getters.displayItems as Array<any>
    },
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
    if (this.query) this.store.dispatch('downloadItems', this.query.url)
  },
  methods: {
    changeNumberСomparison (num:number) {
      const numberItems = this.numberItems

      if (num > this.numberItems) {
        for (let i = num; i > numberItems; i--) this.store.commit('addDisplayItem')
      }
      if (num < this.numberItems) {
        for (let i = num; i < numberItems; i++) this.store.commit('deleteDisplayItem')
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
