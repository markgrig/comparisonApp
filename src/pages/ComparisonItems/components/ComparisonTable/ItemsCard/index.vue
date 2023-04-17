<template>
        <div class="box-img">
              <div class = "img-item-left-pannel">
                <DropDown
                  v-if = "!isLoading"
                  :index = "index"
                  :items = "searchingItems"
                  :directionDropDown = "directionDropDown"
                  :idOldItem = "id"
                  @setQuery = "setQuery">
                </DropDown>
              </div>
        </div>
        <img
            class="img-item"
            ref = "img-item"
            :src = "url" >
          <div
            class = "loader"
            v-if = "isLoading" >
          </div>
        <div class = "name-item">
          {{ name }}
        </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import DropDown from '@/pages/ComparisonItems/components/DropDown/index.vue'
import { useStore } from '@/store/index'
import { IItem } from '@/index'

export default defineComponent({
  name: 'ItemsCard',
  components: {
    DropDown
  },
  setup () {
    const store = useStore()
    return {
      store
    }
  },
  props: {
    name: {
      type: String as PropType<string>
    },
    url: {
      type: String as PropType<string>
    },
    id: {
      type: Number as PropType<number>
    },
    index: {
      type: Number as PropType<number>
    }
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    const img = this.$refs['img-item'] as HTMLInputElement
    img.addEventListener('load', () => {
      this.isLoading = false
    })
  },
  computed: {
    searchingItems ():IItem[] {
      return this.store.getters.filterItemsbyQuery
    },
    directionDropDown () {
      const numberItems = this.store.getters.displayItems.length
      if (this.index && this.index >= numberItems / 2) {
        return 'right'
      }
      return 'left'
    }
  },
  methods: {
    setQuery (query:string) {
      this.store.commit('setQuery', query)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
