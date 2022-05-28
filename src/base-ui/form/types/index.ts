type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select类型
  options?: any[]
  // 针对datepicker类型
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
