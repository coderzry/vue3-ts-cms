<template>
  <div class="page-search">
    <HyForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="DeleteFilled" @click="handleResetClick"
            >重置</el-button
          >
          <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
      </template>
    </HyForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
import { Search, DeleteFilled } from '@element-plus/icons-vue'
export default defineComponent({
  name: 'user',
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 优化一：formData中的属性动态决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const handleResetClick = () => {
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }

      formData.value = formOriginData
    }

    return {
      formData,
      Search,
      DeleteFilled,
      handleResetClick
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
