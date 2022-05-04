<template>
  <div>
    <el-form ref="ruleFormRef">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input type="password" v-model="phone.code" />
          <el-button type="primary" class="get-btn">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    return {
      phone
    }
  }
})
</script>
<style lang="less" scoped>
.get-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
