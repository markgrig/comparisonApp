<template>
  <SideBar
    :pannelData = "pannelData">
  </SideBar>
  <Comprasion
    :items = items[1]>
  </Comprasion>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './components/Sidebar/index.vue'
import Comprasion from './pages/comprasions/index.vue'
import { IItems } from './index'

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
          url: 'https://dummyjson.com/products'
        },
        {
          name: 'smartphone',
          url: 'https://markgrig.github.io/comparisonApp/db/smartphons.json'
        },
        {
          name: 'smartphone',
          url: 'https://api.device-specs.io/api/smartphones',
          headers: {
            Authorization: 'bearer e3e0e8261fb7660404b8819fea1bd63875bd1d6b9b9aa45439cb948999e4a425938d7d252b16647c15eb4beb581d22404c972d3f59f727b773a89bb990a9155f1ab4d552a91d5aa7c654a73da66f1e70c51c028986cd48ddad87e319a856905842cf3ed3fbcab040bb2f4ea9b411b89968ed5a0d2d0909c7a6bddc69e287dbac',
            'Content-Type': 'application/json'
          }
        }
      ] as Array<IItems>
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
