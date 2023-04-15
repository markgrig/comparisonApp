<template>
        <div class = "slider"
            :data-uid = "uid"
            ref = "slider">
          <img
            class="img-slider"
            :data-uid = "uid"
            :src="require('@/assets/ico/slider.png')"
            alt="не загрузился slider.png"
            @click="clickSlider()">
          <div
            v-show="isShowDropdown"
              :data-uid = "uid"
              class = "dropdown">
              <input
                v-model="query"
                class="search-items"
                type="text"
                placeholder="Поиск">

            <div class="list-dropdown">
              <ElementDropdown
                v-for="el,i in searchindItems()"
                :key="i"
                :index = "index"
                :name="el.name"
                :url = "el.img"
                :id = "el.id">
            </ElementDropdown>
            </div>
          </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { useStore } from '@/store/index'
import ElementDropdown from './ElementDropdown/index.vue'
import { IItem } from '@/index'

export default defineComponent({
  name: 'DropDown',
  components: {
    ElementDropdown
  },
  setup () {
    const store = useStore()
    return {
      store
    }
  },
  mounted () {
    const bodyElement = document.querySelector('body') as HTMLBodyElement
    bodyElement.addEventListener('click', (event:Event) => {
      const target = event.target as Element
      if (target) {
        if (!target.closest(`.img-slider[data-uid=${this.uid}]`)) {
          if (!target.closest(`.dropdown[data-uid=${this.uid}]`)) {
            this.isShowDropdown = false
          }
        }
      }
    })
  },
  props: {
    items: {
      type: Array as PropType<IItem[]>
    },
    index: {
      type: Number as PropType<number>
    }
  },
  data () {
    return {
      isShowDropdown: false,
      query: '',
      slider: {} as Element,
      dropdown: {} as Node
    }
  },
  computed: {
    uid () {
      return '_' + `${Math.random()}`.slice(2)
    }
  },
  methods: {
    clickSlider () {
      this.isShowDropdown = !this.isShowDropdown
    },
    searchindItems ():PropType<IItem[]> {
      return this.store.getters.filterItemsbyQuery
    }
  },
  watch: {
    query (newValue) {
      this.store.commit('setQuery', newValue)
    }
  }
})

</script>

<style scoped>
@import url('./index.css')
</style>
