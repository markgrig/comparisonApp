<template>
        <div class="box-img">
          <img
            class="img-item"
            ref = "img-item"
            :src = "url" >
              <div class = "img-item-left-pannel">
                <DropDown
                  v-if = "!isLoading"
                  :index = "index"
                  :items = "items"
                  :idOldItem = "id">
                </DropDown>
              </div>
          <div
            class = "loader"
            v-if = "isLoading" >
          </div>
        </div>
        <div class = "name-item">
          {{ name }} {{ index }}
        </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import DropDown from '@/pages/comprasions/components/DropDown/index.vue'

export default defineComponent({
  name: 'ItemsCard',
  components: {
    DropDown
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
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
