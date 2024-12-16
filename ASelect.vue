<script>
import { Select } from 'ant-design-vue'

export default {
  extends: Select,
  inject: ['label'],
  props: {
    placeholder: {
      type: String,
      default() {
        return `请选择${this.label}`
      }
    }
  }
}
</script>
