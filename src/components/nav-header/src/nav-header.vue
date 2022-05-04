<template>
  <div class="nav-header">
    <div @click="handleFoldClick">
      <el-icon>
        <arrow-right-bold v-if="isFold" />
        <arrow-left-bold v-else />
      </el-icon>
    </div>
    <div class="content">
      <div>面包屑</div>
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo
  },
  setup(prop, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
