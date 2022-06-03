<template>
  <div class="nav-header">
    <div @click="handleFoldClick">
      <el-icon>
        <arrow-right-bold v-if="isFold" />
        <arrow-left-bold v-else />
      </el-icon>
    </div>
    <div class="content">
      <nav-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import NavBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumb } from '@/utils/map-menus'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo,
    NavBreadcrumb
  },
  setup(prop, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // 面包屑数据：[{ name: '', path: '' }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = useRoute().path
      return pathMapBreadcrumb(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
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
