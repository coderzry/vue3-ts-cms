<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String,
      default: 'vue'
    }
  },
  setup(props) {
    props.name
  },
  components: {}
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
