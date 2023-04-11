<template>

<table class = "items-table">
      <tr>
          <th
            class = "element-box"
            v-for = "el, i in itemsNew"
            :key="i">
              <ItemsCard
                v-if = "i<6"
                :name = "el.name"
                :url = "el.img">
              </ItemsCard>
          </th>
      </tr>

      <tr
      v-for = "elCol, keyCol in rowsTitle"
          :key="keyCol">
          <td
            class = "element-box"
            v-for = "elRow, keyRow in itemsNew"
              :key="keyRow">
                <div v-if = "keyRow<6">
                  {{ elRow.main[keyCol]}}
                </div>
          </td>
      </tr>

</table>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ItemsCard from './ItemsCard/index.vue'
import { IItem, ITableProperty } from '@/index'

export default defineComponent({
  name: 'ItemsView',
  components: {
    ItemsCard
  },
  props: {
    items: {
      type: Array as PropType<IItem[]>
    }
  },
  data () {
    return {
      rowsTitle: {
        general_year: 1,
        display_size__inch: 1,
        cpu_type: 1,
        cpu_number_of_cores: 1,
        storage_capacity__gb: 1,
        manufacturer: 1,
        country: 1,
        wireless_charging: 1,
        NFC: 1,
        update_frequency: 1,
        esim: 1
      } as ITableProperty
    }
  },
  computed: {
    itemsNew ():any {
      if (this.items) {
        return this.items.filter((el, i) => i < 6)
      }
      return []
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
