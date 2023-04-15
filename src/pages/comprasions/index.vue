<template>
      <NumberComparsion
        :number = "numberComparsion"
        :nameItems = "query?.name"
        :placholderCounter = "placholderCounter"
        @clickNumber = "changeNumber">
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

import { IQuery } from '@/index'
import { useStore } from '@/store/index'
import ItemsView from './components/ItemsView/index.vue'
import NumberComparsion from './components/NumberComparsion/index.vue'

export default defineComponent({
  name: 'ItemsPage',
  components: {
    ItemsView,
    NumberComparsion
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
      defultNumberComparsion: 3 as number,
      placholderCounter: 'Отобразить товары: ' as string
    }
  },
  computed: {
    gettedItems () {
      return this.store.getters.displayItems as Array<any>
    },
    numberComparsion ():number {
      const lenIds = this.store.state.comparison.displayItemsId.length
      if (!lenIds) {
        return this.defultNumberComparsion
      }
      return this.store.state.comparison.displayItemsId.length + 1
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
    if (this.query) {
      this.store.dispatch('downloadItems', this.query.url)
    }
  },
  methods: {
    changeNumber (num:number) {
      const numberItems = Number(this.numberItems)
      if (num > this.numberItems) {
        for (let i = num; i > numberItems; i--) {
          this.store.commit('addDisplayItem')
          console.log(i, this.numberItems)
        }
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
