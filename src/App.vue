<template>
  <SideBar
    :menu = "menu">
  </SideBar>
  <ComprasionItems
    :query = items[0]>
  </ComprasionItems>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './components/Sidebar/index.vue'
import ComprasionItems from './pages/ComparisonItems/index.vue'
import { IQuery } from './index'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    ComprasionItems
  },
  data () {
    return {
      menu: {
        left: [
          { text: 'Каталог' }
        ],
        right: [
          {
            text: 'Сравнение',
            style: {
              uppercase: true
            }
          },
          {
            text: 'Личный кабинет',
            icoUrl: require('@/assets/ico/profile.jpg')
          }
        ]
      },
      items: [
        {
          name: 'Смартфоны',
          url: 'https://markgrig.github.io/comparisonApp/db/smartphones.json'
        },
        {
          name: 'Смартфоны',
          url: 'https://dummyjson.com/products'
        },
        {
          name: 'Смартфоны',
          url: 'https://api.device-specs.io/api/smartphones',
          headers: {
            Authorization: 'bearer XXX',
            'Content-Type': 'application/json'
          }
        }
      ] as Array<IQuery>
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=Roboto&display=swap');;
#app {
  font-family: 'Roboto';
  font-weight: 500;
  font-style: normal;
}

html,body {
  margin: 0;
  padding: 0;
}
</style>
