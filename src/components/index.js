import Vue from 'vue'
import TopBar from './TopBar/TopBar.vue'
const Components = {
  TopBar
}
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})
export default Components
