export const rules = {
  name: [
    { required: true, message: '用户名是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '长度在 5 到 10 个字符',
      trigger: 'blur'
    }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
