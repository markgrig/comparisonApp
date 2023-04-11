<template>
  <SideBar
    :pannelData = "pannelData">
  </SideBar>
  <Comprasion
    :query = items[0]>
  </Comprasion>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './components/Sidebar/index.vue'
import Comprasion from './pages/comprasions/index.vue'
import { IQuery } from './index'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Comprasion
  },
  data () {
    return {
      pannelData: {
        leftPannel: [
          { text: 'Каталог' }
        ],
        rightPannel: [
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
          name: 'smartphone',
          url: 'https://markgrig.github.io/comparisonApp/db/smartphones.json'
        },
        {
          name: 'smartphone',
          url: 'https://dummyjson.com/products'
        },
        {
          name: 'smartphone',
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

#app {
  font-family: 'Roboto';
  font-weight: 500;
  font-style: italic;
}

html,body {
  margin: 0;
  padding: 0;
}
</style>
