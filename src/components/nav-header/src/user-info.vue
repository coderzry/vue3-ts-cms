<template>
  <div class="user-info">
    <el-dropdown>
      <div class="el-dropdown-link">
        <span>{{ name }}</span>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><circle-close-filled /></el-icon>退出登录
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><user-filled /></el-icon>用户信息
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><monitor /></el-icon>系统管理
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name
    }
  }
})
</script>
<style lang="less" scoped>
.user-info {
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      padding-right: 16px;
    }
  }
}
</style>
