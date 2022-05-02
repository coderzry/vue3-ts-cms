<template>
  <div>
    <el-form ref="ruleFormRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import type { FormInstance } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const ruleFormRef = ref<FormInstance>()

    const loginAction = (inKeeppassword: boolean) => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          // 1. 判断是否需要保存密码
          if (inKeeppassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 登录逻辑
          store.dispatch('login/accountLoginAction', { ...account })
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

    return {
      account,
      rules,
      ruleFormRef,
      loginAction
    }
  }
})
</script>
<style lang="less" scoped></style>
