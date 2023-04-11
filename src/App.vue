<template>
  <SaidbarHeader
    :pannelData = "pannelData">
  </SaidbarHeader>
  <ItemsPage
    :items = items[0]>
  </ItemsPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SaidbarHeader from './components/Saidbar/SaidbarHeader.vue'
import ItemsPage from './pages/comprasions/ItemsPage.vue'
import { IItems } from './type'

export default defineComponent({
  name: 'App',
  components: {
    SaidbarHeader,
    ItemsPage
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
