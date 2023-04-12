<template>
  <div class = "body-comprasion">
    <table class = "items-table">
      <tr>
          <th class = "title-box">
            <ComparsionItems
              :content = "contentComparsion">
            </ComparsionItems>
          </th>
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
          <td class = "title-box title-propetry" > {{ elCol  }} </td>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ItemsCard from './ItemsCard/index.vue'
import ComparsionItems from '../ComparsionItems/index.vue'
import { IItem, ITableProperty } from '@/index'

export default defineComponent({
  name: 'ItemsView',
  components: {
    ItemsCard,
    ComparsionItems
  },
  props: {
    items: {
      type: Array as PropType<IItem[]>
    }
  },
  data () {
    return {
      rowsTitle: {
        manufacturer: 'Производитель',
        general_year: 'Год релиза',
        display_size__inch: 'Диагональ экрана (дюйм)',
        cpu_type: 'Тип CPU',
        cpu_number_of_cores: 'Количество процессоров',
        storage_capacity__gb: 'Объем памяти',
        country: 'Страна-производитель',
        wireless_charging: 'Поддержка беспроводной зарядки',
        NFC: 'NFC',
        update_frequency: 'Частота обновления экрана',
        esim: 'Поддержка eSIM'
      } as ITableProperty,
      contentComparsion: 'Показать различия' as string
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
