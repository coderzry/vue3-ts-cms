import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    // 格式化时间
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
