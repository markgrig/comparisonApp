<template>
  <div>
    <table class = "items-table">
      <tr>
          <th class = "title-box">
            <ComparsionItems
              :content = "contentComparsion"
              @checkout = "compareItems">
            </ComparsionItems>
          </th>
          <th
            class = "element-box"
            v-for = "el, i in items"
            :key="i">
              <ItemsCard
                :index = "i"
                :name = "el.name"
                :url = "el.img"
                :id = "el.id">
              </ItemsCard>
          </th>
      </tr>
    </table>
    <table class = "prop-table">
      <tr
      v-for = "elCol, keyCol in rowsTitle"
          :key="keyCol">
          <td v-show = "isShowCol[keyCol]" class = "title-box title-propetry" > {{ elCol  }} </td>

            <td
            class = "element-box"
            v-for = "elRow, keyRow in items"
            v-show = "isShowCol[keyCol]"
              :key="keyRow">
                <div>

                  {{ getTableElement(elRow.main[keyCol]) }}
                  <IconBoleanCheck
                    v-if = "isBoolean(elRow.main[keyCol])"
                      :isTrue = "elRow.main[keyCol]">
                  </IconBoleanCheck>
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
import IconBoleanCheck from '../IconBoleanCheck/index.vue'
import { IItem, ITableProperty } from '@/index'

type tableElement = string | number | boolean

export default defineComponent({
  name: 'ItemsView',
  components: {
    ItemsCard,
    ComparsionItems,
    IconBoleanCheck
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
      contentComparsion: 'Показать различия' as string,
      isCompariosItems: false,
      test: {}
    }
  },
  computed: {
    isShowCol () {
      if (this.isCompariosItems && this.items) {
        return this.getComporiosObj(this.items)
      }

      const obj = {} as {
        [word: string]: boolean
      }

      Object.keys(this.rowsTitle).forEach((el) => {
        obj[el] = true
      })
      return obj
    }
  },
  methods: {
    compareItems (isComparios:boolean) {
      console.log(123)

      this.isCompariosItems = isComparios
    },
    getComporiosObj (items:IItem[]):any {
      const comparios = {} as {
        [word: string]: [string | number | boolean] | []
      }

      const comporiosObj = {} as {
        [word: string]: boolean
      }

      items.forEach((item, i) => {
        const keys = Object.keys(item.main)
        keys.forEach((key) => {
          if (!comparios[key]) comparios[key] = []
          comparios[key][i] = item.main[key]
        })
      })

      const keys = Object.keys(comparios)
      const isDifferenceArray = keys.forEach((key) => {
        const firstElement = comparios[key][0]
        const isDifferences = comparios[key].some((element) => {
          return element !== firstElement
        })
        comporiosObj[key] = isDifferences
      })

      console.log(keys, isDifferenceArray)
      return comporiosObj
    },
    getTableElement (value:tableElement):tableElement {
      if (this.isBoolean(value)) {
        return ''
      }
      return value
    },
    isBoolean (value:tableElement):boolean {
      if (typeof value === 'boolean') {
        return true
      }
      return false
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css')
</style>
