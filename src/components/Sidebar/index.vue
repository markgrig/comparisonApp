<template>
  <header class= "sidebar-menu">
    <img class= "sidebar-ico --bar-hide"
      src="@/assets/ico/solidBars.png"
      alt="no loaded solidBar.png"
      @click = "clickMobileMenu ()"
    >

    <div :class = "menuBox" >
      <div class="left-menu">
        <MenuOption
          :options ="menu?.left">
        </MenuOption>
      </div>
      <div class="right-menu">
        <MenuOption
          :options ="menu?.right">
        </MenuOption>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import MenuOption from '@/ui/MenuOption/index.vue'
import { IMenu } from './index'

export default defineComponent({
  name: 'SideBar',
  components: {
    MenuOption
  },
  props: {
    menu: {
      type: Object as PropType<IMenu>
    }
  },
  data () {
    return {
      isOpenMobileMenu: false as boolean
    }
  },
  computed: {
    menuBox ():string {
      const isOpen:boolean = this.isOpenMobileMenu

      if (isOpen) {
        return 'menu-box --open-mb-menu'
      }
      return 'menu-box --close-mb-menu'
    }
  },
  methods: {
    clickMobileMenu () {
      this.isOpenMobileMenu = !this.isOpenMobileMenu
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./index.css');
</style>
