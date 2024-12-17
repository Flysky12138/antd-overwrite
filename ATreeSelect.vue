<script>
import { TreeSelect } from 'ant-design-vue'

export default {
  extends: TreeSelect,
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
