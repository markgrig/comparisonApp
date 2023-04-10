<template>
  <SaidbarHeader
    :pannelData = "pannelData">
  </SaidbarHeader>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SaidbarHeader from './components/Saidbar/SaidbarHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    SaidbarHeader
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
      }
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
