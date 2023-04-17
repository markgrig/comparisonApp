<template>
        <div class = "activator-dr-down"
            :data-uid = "uid"
            ref = "activator-dr-down"
        >
          <div
            v-show="isShowDropdown"
            :data-uid = "uid"
            :class = "classDropDown">
            <input
              v-model="query"
              class="input-search"
              type="text"
              placeholder="Поиск"
          >

            <div class="list-dropdown">
              <ItemList
                v-for="el,i in items"
                :key="i"
                :index = "index"
                :name="el.name"
                :url = "el.img"
                :id = "el.id">
              </ItemList>
            </div>
          </div>

          <img
            class="img-activator"
            :data-uid = "uid"
            :src="require('@/assets/ico/slider.png')"
            alt="не загрузился slider.png"
            @click="clickSlider()"
          >
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ItemList from './ItemList/index.vue'
import { IItem } from '@/index'

export default defineComponent({
  name: 'DropDown',
  components: {
    ItemList
  },
  mounted () {
    const bodyElement = document.querySelector('body') as HTMLBodyElement
    bodyElement.addEventListener('click', (event:Event) => {
      const target = event.target as Element

      if (target) {
        if (!target.closest(`.img-activator[data-uid=${this.uid}]`)) {
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
    },
    directionDropDown: {
      type: String as PropType<string>
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
    },
    classDropDown () {
      switch (this.directionDropDown) {
        case 'right':
          return 'dropdown right-dr'
        case 'left':
          return 'dropdown left-dr'
        default:
          return 'dropdown left-dr'
      }
    }
  },
  methods: {
    clickSlider () {
      this.isShowDropdown = !this.isShowDropdown
    }
  },
  watch: {
    query (newValue) {
      this.$emit('setQuery', newValue.trim())
    }
  }
})

</script>

<style scoped>
@import url('./index.css')
</style>
