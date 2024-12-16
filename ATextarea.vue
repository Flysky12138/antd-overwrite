<script>
import TextArea from 'ant-design-vue/es/input/TextArea'

export default {
  extends: TextArea,
  inject: ['label'],
  props: {
    placeholder: {
      type: String,
      default() {
        return `请输入${this.label}`
      }
    },
    autoSize: {
      type: [Boolean, Object],
      default: () => ({
        minRows: 3
      })
    }
  }
}
</script>
