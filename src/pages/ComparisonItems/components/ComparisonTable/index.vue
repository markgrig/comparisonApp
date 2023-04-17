<template>
  <div>
    <div class = "items-view-table table-row">
      <div class = "name-prop-box check-row">
        <div class = "table-text">
          <CheckBox
            :content = "contentComparsion"
            @checkout = "compareItems">
          </CheckBox>
        </div>
      </div>
      <div
        class = "table-el item-view img-mobile"
        v-for = "el, i in items"
        :key="i">
          <ItemsCard
            :index = "i"
            :name = "el.name"
            :url = "el.img"
            :id = "el.id">
          </ItemsCard>
      </div>
    </div>
    <table class = "properties-table">
      <div class= "table-row"
      v-for = "elCol, keyCol in rowsTitle"
          :key="keyCol">
          <div v-show = "isShowCol[keyCol]" class = "name-prop-box title-propetry" >
            <div class = "table-text">
              {{ elCol  }}
            </div>
          </div>

            <div
            class = "table-el el-b-mobile"
            v-for = "elRow, keyRow in items"
            v-show = "isShowCol[keyCol]"
              :key="keyRow">
                  <div class="table-text">
                    {{ getTableElement(elRow.main[keyCol], keyCol) }}
                  <IcoIsTrue
                    v-if = "isBoolean(elRow.main[keyCol])"
                      :isTrue = "isBoolean(elRow.main[keyCol])">
                  </IcoIsTrue>
                  </div>
            </div>
      </div>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ItemsCard from './ItemsCard/index.vue'
import CheckBox from '../CheckBox/index.vue'
import IcoIsTrue from '../IcoIsTrue/index.vue'
import { IItem, ITableProperty } from '@/index'

type tableElement = string | number | boolean

export default defineComponent({
  name: 'ItemsView',
  components: {
    ItemsCard,
    CheckBox,
    IcoIsTrue
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
    getTableElement (value:tableElement, key:string|number):tableElement {
      if (this.isBoolean(value)) {
        return ''
      }

      switch (key) {
        case 'display_size__inch':
          return `${value}`.replace('.', ',')
        case 'storage_capacity__gb':
          return `${value} Гб`
        case 'update_frequency':
          return `${value} Гц`
        default:
          return value
      }
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
