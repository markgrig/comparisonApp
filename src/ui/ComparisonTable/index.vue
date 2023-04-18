<template>
  <div>
    <!--View image and name -->
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
        :key="i"
      >
        <ItemsCard
          :index = "i"
          :name = "el.name"
          :url = "el.img"
          :id = "el.id">
        </ItemsCard>
      </div>
    </div>

    <!--Table of Properties-->
    <table class = "properties-table">
      <div class= "table-row"
          v-for = "nameProperty, keyProperty in rowsTitle"
          :key="keyProperty"
      >
        <div
          v-show = "isValidKey[keyProperty]"
          class = "name-prop-box title-propetry"
          >
          <div class = "table-text">
            {{ nameProperty  }}
          </div>
        </div>

        <div
          class = "table-el el-b-mobile"
          v-for = "el, i in items"
          v-show = "isValidKey[keyProperty]"
          :key="i"
        >
          <div class="table-text">
            {{ getTableElement(el.main[keyProperty], keyProperty) }}
            <IcoIsTrue
              v-if = "isBoolean(el.main[keyProperty])"
              :isTrue = "el.main[keyProperty] as boolean">
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
import ItemsCard from '@/ui/ItemsCard/index.vue'
import CheckBox from '@/ui/CheckBox/index.vue'
import IcoIsTrue from '@/ui/IcoIsTrue/index.vue'
import { IItem, ITableProperty } from '@/index'
import type { booleanDictionary, dictionary } from '@/index'

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
        country: 'Страна-производитель',
        storage_capacity__gb: 'Объем памяти',
        update_frequency: 'Частота обновления экрана',
        NFC: 'NFC',
        esim: 'Поддержка eSIM',
        wireless_charging: 'Поддержка беспроводной зарядки',
        price: 'Цена',
        cpu_number_of_cores: 'Количество процессоров'
      } as ITableProperty,
      contentComparsion: 'Показать различия' as string,
      isCompariosItems: false,
      test: {}
    }
  },
  computed: {
    isValidKey () {
      if (this.isCompariosItems && this.items) {
        return this.isDifferencesForKey(this.items)
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
      this.isCompariosItems = isComparios
    },
    isDifferencesForKey (items:IItem[]):booleanDictionary {
      const dictForComparios:dictionary = {}
      const isDifferencesForKey:booleanDictionary = {}

      items.forEach((item, i) => {
        const keys = Object.keys(item.main)

        keys.forEach((key) => {
          if (!dictForComparios[key]) dictForComparios[key] = []
          dictForComparios[key][i] = item.main[key]
        })
      })

      const keys = Object.keys(dictForComparios)
      keys.forEach((key) => {
        const firstElement = dictForComparios[key][0]
        const isDifferences = dictForComparios[key].some((element) => {
          return element !== firstElement
        })
        isDifferencesForKey[key] = isDifferences
      })

      return isDifferencesForKey
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
        case 'price':
          return `${value} р`
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
