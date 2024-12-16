<script>
import { Input } from 'ant-design-vue'

export default {
  extends: Input,
  inject: ['label'],
  props: {
    placeholder: {
      type: String,
      default() {
        return `请输入${this.label}`
      }
    }
  }
}
</script>
