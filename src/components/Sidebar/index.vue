<template>
  <header class= "saidbar-header">

    <img class= "ico bars"
      src="@/assets/ico/solidBars.png"
      alt="no loaded solidBar.png"
      @click = "clickModelMenu()">

    <div :class = "BoxPannel" >

      <div class="left-pannel">
        <ElementList
          :elementData ="pannelData?.leftPannel">
        </ElementList>
      </div>

      <div class="right-pannel">
        <ElementList
          :elementData ="pannelData?.rightPannel">
        </ElementList>
      </div>

    </div>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import ElementList from './ElementList/index.vue'
import type { className } from './index'
import { IPannels, IMobileMenu } from './index'

export default defineComponent({
  name: 'SaidbarHeader',
  components: {
    ElementList
  },
  props: {
    pannelData: {
      type: Object as PropType<IPannels>
    }
  },
  data () {
    return {
      mobileMenu: {
        isOpen: false
      } as IMobileMenu
    }
  },
  computed: {
    BoxPannel ():className {
      const isOpen:boolean = this.mobileMenu.isOpen

      if (isOpen) {
        return 'box-pannel --open-box'
      }
      return 'box-pannel --close-box'
    }
  },
  methods: {
    clickModelMenu () {
      this.mobileMenu.isOpen = !this.mobileMenu.isOpen
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css');
</style>
