import AFormModelItem from './AFormModelItem.vue'
import AInput from './AInput.vue'
import ASelect from './ASelect.vue'
import ATextarea from './ATextarea.vue'
import ATreeSelect from './ATreeSelect.vue'

/** 组件覆盖 */
export const AntdOverwrite = {
  install(Vue) {
    Vue.component('AFormModelItem', AFormModelItem)
    Vue.component('AInput', AInput)
    Vue.component('ASelect', ASelect)
    Vue.component('ATextarea', ATextarea)
    Vue.component('ATreeSelect', ATreeSelect)
  }
}

/** 注入默认值 */
export const AntdOverwriteProvide = {
  label: undefined
}
