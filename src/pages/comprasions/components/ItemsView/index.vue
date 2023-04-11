<template>
    <div class = "items-box">
        <div class = "elements-box"
            v-for = "el, i in items"
            :key="i">
                <ItemsCard
                    :name = "el.name"
                    :url = "el.imgUrl">

                </ItemsCard>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ItemsCard from './ItemsCard/index.vue'
import { ICard } from './index'

export default defineComponent({
  name: 'ItemsView',
  components: {
    ItemsCard
  },
  props: {
    items: {
      type: Array as PropType<ICard[]>
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
