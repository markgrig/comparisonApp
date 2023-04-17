<template>
        <div class="box-list">
          <img
            class="ico-change-item"
            @click="clickIco()"
            :src = "require('@/assets/ico/changer.png')"
          >
          <div class="img-boxs">
            <img
              class="img-items"
              ref = "img-items"
              :src = "url"
            >
            <div
              class = "loaders"
              v-if = "isLoading"
            >
            </div>
          </div>
          <div class = "name-items">
            {{ name }}
          </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ItemList',
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
  setup () {
    const store = useStore()
    return {
      store
    }
  },
  mounted () {
    const img = this.$refs['img-items'] as HTMLInputElement
    img.addEventListener('load', () => {
      this.isLoading = false
    })
  },
  methods: {
    clickIco () {
      this.store.commit('changeItemsByID', {
        oldId: this.index,
        newId: this.id
      })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
