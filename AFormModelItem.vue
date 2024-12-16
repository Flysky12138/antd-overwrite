<script>
import FormItem from 'ant-design-vue/es/form-model/FormItem'
import AsyncValidator from 'async-validator'

function noop() {}

export default {
  extends: FormItem,
  provide() {
    return {
      label: this.label
    }
  },
  methods: {
    validate: function validate(trigger) {
      const _this = this

      const callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop

      this.validateDisabled = false
      const rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        callback()
        return true
      }
      this.validateState = 'validating'
      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(function (rule) {
          delete rule.trigger
        })
      }
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)
      if (this.FormContext && this.FormContext.validateMessages) {
        validator.messages(this.FormContext.validateMessages)
      }
      const model = {}
      model[this.prop] = this.fieldValue
      validator.validate(model, { firstFields: true }, function (errors, invalidFields) {
        _this.validateState = errors ? 'error' : 'success'
        _this.validateMessage = errors
          ? errors[0].message.endsWith('is required')
            ? `请添加${_this.label}`
            : errors[0].message
          : ''
        callback(_this.validateMessage, invalidFields)
        _this.FormContext &&
          _this.FormContext.$emit &&
          _this.FormContext.$emit('validate', _this.prop, !errors, _this.validateMessage || null)
      })
    }
  }
}
</script>
