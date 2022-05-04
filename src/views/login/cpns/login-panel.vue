<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><lock /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="inKeeppassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick()"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Lock, Iphone } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    Lock,
    Iphone,
    loginAccount,
    loginPhone
  },
  setup() {
    // 定义属性
    const inKeeppassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref('account')

    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(inKeeppassword.value)
      } else {
        console.log('点击了手机登录')
      }
    }

    return {
      inKeeppassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  margin-bottom: 180px;
  width: 320px;
  .title {
    text-align: center;
  }
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    line-height: 1.2;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
