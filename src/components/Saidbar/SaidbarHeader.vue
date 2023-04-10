<template>
  <header class= "saidbar-header">

    <img class= "ico bars"
      src="@/assets/ico/solidBars.png"
      alt="no loaded solidBar.png"
      @click = "clickModelMenu()">

    <div :class = "BoxPannel.className" >
      <div
        class="left-pannel">

        <div
          v-for="el, i in pannelData?.leftPannel"
          :key="i">

          <div class="text">
            {{ styleText(el?.text, el) }}
          </div>
          <img class= "ico"
            v-if="el?.icoUrl"
            :src="el?.icoUrl"
            :alt="'no loaded ico ' + el?.icoUrl">

        </div>
      </div>

      <div
        class="right-pannel">

        <div
          v-for="el, i in pannelData?.rightPannel"
          :key="i">
          <div class="text">
            {{ styleText(el?.text, el)}}
          </div>
          <img class= "ico"
            v-if="el?.icoUrl"
            :src="el?.icoUrl"
            :alt="'no loaded ico ' + el?.icoUrl">
        </div>

      </div>

    </div>

  </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface PanelElement {
  text: string
  style?: {
    uppercase?: boolean
  }
  icoUrl?: string
}

interface Pannels {
  leftPannel: Array<PanelElement>
  rightPannel: Array<PanelElement>
}

interface mobileMenu {
  isOpen: boolean,
}

interface className {
  className: string
}

export default defineComponent({
  name: 'SaidbarHeader',
  props: {
    pannelData: {
      type: Object as PropType<Pannels>
    }
  },
  data () {
    return {
      mobileMenu: {
        isOpen: false
      } as mobileMenu
    }
  },
  computed: {
    BoxPannel ():className {
      const isOpen:boolean = this.mobileMenu.isOpen

      if (isOpen) {
        return { className: 'box-pannel --open-box' }
      }
      return { className: 'box-pannel --close-box' }
    }
  },
  methods: {
    clickModelMenu () {
      this.mobileMenu.isOpen = !this.mobileMenu.isOpen
    },
    styleText (text:string, el:PanelElement):string {
      if (el?.style?.uppercase) {
        return text.toUpperCase()
      }

      return text
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-pannel {

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;

  background: #FFFFFF;
  border-bottom: 1px solid #A6A5A9;
  aspect-ratio: 15/1;
  width: 100vw;

}

.left-pannel, .right-pannel {
  display: flex;
  font-size: 12px;
  line-height: 14px;
  font-weight: 900;

}

.left-pannel, .right-pannel>div {
  display: flex;
  margin:  0px 24px;
}

.left-pannel, .right-pannel>div:hover {
  cursor: pointer;
}

.box-pannel {
  padding: 3% 8%;
}

.text {
  padding: 0 10px;
}

.ico {
  width: 18px;
  aspect-ratio: 1/1;
  margin: auto 10px;
}

.left-pannel {
  color: #0D5ADC;
}
.right-pannel {
  color: #3B4157;
}

.uppercase {
  text-transform: uppercase;
}
.bars {
  display: none;
}

@media (max-width: 700px) {

  .bars {
    display: block;
    padding: 10px 20px;
  }

  .saidbar-header {
    box-sizing: border-box;
    position: relative;
    aspect-ratio: 8/1;
    background: #FFFFFF;
    border-bottom: 1px solid #A6A5A9;
    height: 40px;
    width: 100vw;
  }
  .box-pannel {
    opacity: 0.99;
    background: #fafafa;
    position: absolute;
    top: calc(100% + 1px);
    width: 80vw;
    padding: 30px 10px;
    border: none;
    box-shadow: 2px 2px 3px 1px #3b415750;
  }

  .box-pannel>div {
    margin: 8px 30px;
  }

  .box-pannel, .left-pannel, .right-pannel   {
    flex-direction: column;
    margin: 0;
  }

  .right-pannel>div, .left-pannel >div  {
    display: flex;
    margin: 5px 0;
  }

  .ico {
    margin: 0 10px;
  }

  .--open-box {
  transition: 0.1s;
  perspective: 100px;
  transform: translate(-85vw);
}

  .--close-box {
    transition: 0.2s;
    transform: translate(0vw);
  }
}
</style>
