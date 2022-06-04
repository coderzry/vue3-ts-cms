<template>
  <div class="page-content">
    <HyTable :listDate="userList" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary ">新建用户</el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="btns-class">
          <el-button size="small" type="text">删除</el-button>
          <el-button size="small" type="text">编辑</el-button>
        </div>
      </template>
    </HyTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import HyTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    HyTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 1,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    return {
      userList
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
